import express from "express";

import * as promocionesController from "../controllers/promociones.js";

const router = express.Router();

router.get("/tipos", promocionesController.getTipos);
router.get("/condiciones", promocionesController.getCondiones);
router.get("/productos", promocionesController.getProductos);

export default router;