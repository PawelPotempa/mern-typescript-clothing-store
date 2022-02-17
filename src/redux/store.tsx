import { configureStore } from "@reduxjs/toolkit";
import sidebarModal from "./sidebarModal";
import gender from "./gender";

export default configureStore({
  // Syntax note: sidebarModal is the same as: {sidebarModal: sidebarModal}
  reducer: { sidebarModal, gender },
});
