import dotenv from "dotenv"
dotenv.config({ path: './.env' })
import { app } from "./app.js"
import connectDB from "./db/index.js"



connectDB()
    .then(() => {
        app.on("error", () => {
            console.log("❌ APP ERROR: ", err)
            throw err
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`✅  Server is running at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("❌ MONGO DB connection failed !! ", err)
    })

