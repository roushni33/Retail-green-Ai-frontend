import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { InventoryItem } from "../models/inventoryItem.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

export const getDashboardMetrics = asyncHandler(async (req, res) => {
    const totalProducts = await Product.countDocuments();
    const activeInventory = await InventoryItem.countDocuments({ status: "fresh" });
    const highWasteRisk = await InventoryItem.countDocuments({ wastePrediction: { $gte: 70 } });

    // Join product to calculate carbon footprint
    const inventory = await InventoryItem.find().populate("product");
    const totalCarbon = inventory.reduce((sum, item) => {
        const carbon = (item?.product?.carbonFootprint || 0) * item.quantity;
        return sum + carbon;
    }, 0);

    res.json(new ApiResponse(200, {
        totalProducts,
        activeInventory,
        highWasteRisk,
        totalCarbon: totalCarbon.toFixed(2)
    }));
});

export const getWasteRiskAlerts = asyncHandler(async (req, res) => {
    const alerts = await InventoryItem.find({
        wastePrediction: { $gte: 70 }
    }).populate("product");

    const formatted = alerts.map(item => ({
        productName: item.product?.name,
        store: item.store,
        expiryDate: item.expiryDate,
        quantity: item.quantity,
        wastePrediction: item.wastePrediction,
        recommendation: item.recommendation
    }));

    res.json(new ApiResponse(200, formatted));
});

export const getCarbonBreakdown = asyncHandler(async (req, res) => {
    const items = await InventoryItem.find().populate("product");

    const breakdown = {};

    for (const item of items) {
        const product = item.product?.name || "Unknown";
        const footprint = (item.product?.carbonFootprint || 0) * item.quantity;

        breakdown[product] = (breakdown[product] || 0) + footprint;
    }

    const labels = Object.keys(breakdown);
    const values = Object.values(breakdown).map(val => parseFloat(val.toFixed(2)));

    res.json(new ApiResponse(200, { labels, values }));
});
