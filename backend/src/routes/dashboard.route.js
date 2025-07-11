import express from "express";
import {
    getDashboardMetrics,
    getWasteRiskAlerts,
    getCarbonBreakdown
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.route("/metrics").get(getDashboardMetrics);
router.route("/alerts").get(getWasteRiskAlerts);
router.route("/carbon-breakdown").get(getCarbonBreakdown);

export default router;
