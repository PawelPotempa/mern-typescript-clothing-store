import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../models/User";

// Declare global namespace
declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.token as string;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, `${process.env.JWT_SEC}`, (err, user: any) => {
      if (err) res.status(401).json("Invalid token!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
