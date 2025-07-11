import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createProduct = asyncHandler(async (req, res) => {
    const {
        name, category, packaging, unit,
        country, region,
        price, inventoryLevel, unitsSold, demandForecast
    } = req.body;

    if (
        [name, category, packaging, unit, country, region, price]
            .some(field => field?.toString().trim() === "")
    ) {
        throw new ApiError(400, "All required fields must be provided.");
    }

    const product = await Product.create({
        name,
        category,
        packaging,
        unit,
        country,
        region,
        price,
        inventoryLevel,
        unitsSold,
        demandForecast
    });

    return res.status(201).json(
        new ApiResponse(201, product, "Product created successfully.")
    );
});

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(
        new ApiResponse(200, products, "Fetched all products.")
    );
});

const getProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product fetched successfully.")
    );
});

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const product = await Product.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });

    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product updated successfully.")
    );
});

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product deleted successfully.")
    );
});

export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}