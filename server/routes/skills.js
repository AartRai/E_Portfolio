import express from "express";
import {
  getAllSkills,
  getSkillsByCategory,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";

const router = express.Router();

router.get("/", getAllSkills);
router.get("/category/:category", getSkillsByCategory);
router.post("/", createSkill);
router.patch("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;
