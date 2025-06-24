import { Router } from "express"
import db from "../lib/db.mjs"

const userRouter = Router()

// GET ALL
userRouter.get("/", async (req, res) => {
    try {
        const users = await db.user.findMany()

        res.send({
            message: "Successfully Get All Users",
            data: users
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})

// CREATE NEW
userRouter.post("/", async (req, res) => {
    try {
        const { id, name, password } = req.body

        const newUser = await db.user.create({
            data: {
                id,
                name,
                password
            }
        })

        res.send({
            message: "Successfully Create a User",
            data: newUser
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})

// DELETE
userRouter.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        const user = await db.user.update({
            data: body,
            where: { id: id }
        })

        res.send({
            message: "Successfully Update a User",
            data: user
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})

// DELETE
userRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params

        const user = await db.user.delete({
            where: { id: id }
        })

        res.send({
            message: "Successfully Delete a User",
            data: user
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})



export default userRouter
