import { Router } from "express";
import {
  createBulkChapters,
  createChapter,
  deleteChapter,
  getOneChapter,
  listAllChapter,
  updateChapter,
} from "../controllers/chaptersController";
const router = Router();

router.post("/create", createChapter);
router.post("/bulk-create", createBulkChapters);
router.put("/update", updateChapter);
router.get("/list", listAllChapter);
router.get("/list/:chapterId", getOneChapter);
router.delete("/list/delete/:chapterId", deleteChapter);

export default router;
