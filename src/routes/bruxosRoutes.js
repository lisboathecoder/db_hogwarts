import { Router } from "express";
import * as bruxosController from './../controllers/bruxosController.js';

const router = Router();

router.get("/", bruxosController.listAll);
router.get("/:id", bruxosController.listOne);

export default router;