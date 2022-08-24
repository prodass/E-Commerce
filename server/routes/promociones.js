import express from "express";

import * as promocionesController from "../controllers/promociones.js";

const router = express.Router();

router.get("/", promocionesController.getInicio);



export default router;