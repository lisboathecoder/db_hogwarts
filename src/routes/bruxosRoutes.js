import { Router } from "express";
import * as bruxosController from './../controllers/bruxosController.js';

const router = Router();

router.get("/", bruxosController.listAll);
router.get("/:id", bruxosController.listOne);
router.post("/", bruxosController.create);
router.delete("/:id", bruxosController.deletar);
router.put("/:id", bruxosController.atualizar);

export default router;