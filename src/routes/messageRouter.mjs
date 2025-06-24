import { Router } from "express"
import db from "../lib/db.mjs"

const messageRouter = Router()

// GET ALL
messageRouter.get("/", async (req, res) => {
    try {
        const messages = await db.message.findMany({
            select: {
                uuid: true,
                message: true,
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                created_at: true
            }
        })

        res.send({
            message: "Successfully Get All Messages",
            data: messages
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})

// CREATE NEW
messageRouter.post("/", async (req, res) => {
    try {
        const { message, user_id } = req.body

        const newMessage = await db.message.create({
            data: {
                message,
                user_id
            }
        })

        res.send({
            message: "Successfully Create a Message",
            data: newMessage
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})

// DELETE
messageRouter.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        const message = await db.message.update({
            data: body,
            where: { uuid: id }
        })

        res.send({
            message: "Successfully Update a Message",
            data: message
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})

// DELETE
messageRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params

        const message = await db.message.delete({
            where: { uuid: id }
        })

        res.send({
            message: "Successfully Delete a Message",
            data: message
        })
    } catch (error) {
        res.send({ error: error.message })
    }
})



export default messageRouter
