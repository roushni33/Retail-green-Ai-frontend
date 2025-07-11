import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiError.js";

let calculationHistory = []; // In-memory (use Mongo for production)

export const calculateCarbon = asyncHandler(async (req, res) => {
    const {
        weight,
        materialType,
        transportDistance,
        transportMethod,
        packagingWeight
    } = req.body;

    const materialEmission = {
        glass: 0.9,
        plastic: 1.2,
        metal: 1.5,
        carton: 0.7
    };

    const transportEmission = {
        truck: 0.05,
        ship: 0.02,
        plane: 0.3
    };

    const packagingEmission = 2.0; // per kg

    const material = (materialEmission[materialType] || 0.8) * weight;
    const transport = (transportEmission[transportMethod] || 0.05) * transportDistance;
    const packaging = packagingEmission * packagingWeight;

    const total = material + transport + packaging;

    const result = {
        totalCarbon: parseFloat(total.toFixed(2)),
        breakdown: {
            material: parseFloat(material.toFixed(2)),
            transport: parseFloat(transport.toFixed(2)),
            packaging: parseFloat(packaging.toFixed(2))
        }
    };

    calculationHistory.push({ date: new Date(), ...result });

    res.json(new ApiResponse(200, result));
});

export const getCalculationHistory = asyncHandler(async (req, res) => {
    res.json(new ApiResponse(200, calculationHistory));
});
