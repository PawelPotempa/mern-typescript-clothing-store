import express, { Request, Response } from "express";
import User from "../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { IUser } from "../models/User";

const router = express.Router();

//REGISTER
router.post("/register", async (req: Request, res: Response) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // Encrypt the password with AES block cipher.
    password: CryptoJS.AES.encrypt(
      req.body.password,
      `${process.env.SECRET_PASSPHRASE}`
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req: Request, res: Response) => {
  try {
    // Find the correct user. Use findOne since users are unique.
    const user = (await User.findOne({ username: req.body.username })) as IUser;

    // Respond with error if provided username doesn't exist in the DB.
    !user && res.status(401).json("Wrong username!");
    // Decrypt the password with AES block cipher
    const hashedPassword = CryptoJS.AES.decrypt(
      // The ! after user is a non-null assertion operator, required in order to prevent a TS2533 error.
      user.password,
      `${process.env.SECRET_PASSPHRASE}`
    );

    // Convert the hashedPassword toString in UTF8 format.
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // Respond with error if provided password doesn't match with the one in DB.
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password!");

    // JWT implementation.
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user!.isAdmin,
      },
      `${process.env.JWT_SEC}`,
      { expiresIn: "3d" }
    );

    // Destructure user, then pass everything but password.
    // Specify the _doc folder which stores all user data.
    const { password, ...others } = user._doc;

    // If all conditions are met, then respond.
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
export = router;
