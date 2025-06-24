import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/router.mjs"

dotenv.config()

const PORT = process.env.SERVER_PORT
const app = express()

// Middlewares
app.use(express.json())
app.use(router)
app.use(cors({ origin: "*" }))

app.get("/", (req, res) => {
    res.send({
        message: "CYBER SPACE CB OFFICIAL BACKEND SYSTEM."
    })
})

app.listen(PORT, () => {
    console.log("[SERVER] RUNNING ON PORT", PORT)
})
