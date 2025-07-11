import express from "express";
import {
    calculateCarbon,
    getCalculationHistory
} from "../controllers/carbonCalculator.controller.js";

const router = express.Router();

router.route("/").post(calculateCarbon);
router.route("/history").get(getCalculationHistory);

export default router;
