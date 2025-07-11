import { ApiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const healthcheck = asyncHandler(async (_, res) => {
    res.status(200).json(new ApiResponse(200, {}, "Healthcheck passed"))
})

export {
    healthcheck
}