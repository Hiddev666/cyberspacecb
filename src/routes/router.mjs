import { Router } from "express"
import userRouter from "./userRouter.mjs"
import messageRouter from "./messageRouter.mjs"

const router = Router()
router.use("/users", userRouter)
router.use("/messages", messageRouter)

export default router
