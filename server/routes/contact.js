import express from "express";
import {
  getAllContacts,
  createContact,
  markAsRead,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getAllContacts);
router.post("/", createContact);
router.patch("/:id/read", markAsRead);
router.delete("/:id", deleteContact);

export default router;
