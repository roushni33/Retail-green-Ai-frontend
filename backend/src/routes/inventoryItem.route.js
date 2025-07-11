import express from "express";
import {
    upsertInventoryItem,
    getInventoryItems,
    deleteInventoryItem,
    updateWastePrediction,
    refreshExpiryStatus
} from "../controllers/inventoryItem.controller.js";

const router = express.Router();

router.route("/").get(getInventoryItems);
router.route("/").post(upsertInventoryItem);
router.route("/:id").delete(deleteInventoryItem);
router.route("/:id/predict").put(updateWastePrediction);
router.route("/refresh-status").post(refreshExpiryStatus);

export default router;
