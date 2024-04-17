import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogInput, blogUpdate } from "@punyakrit/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        "userId": string
    }
}>()

blogRouter.use('/*', async (c, next) => {
    const token = c.req.header("authorization") || ""
    const user = await verify(token, c.env.JWT_SECRET)

    if (user) {
        c.set("userId", user.id)
        c.text("Authorized")
        await next()
    } else {
        return c.json({
            message: "You are not logged in"
        })
    }
})

blogRouter.post('/create', async (c) => {
    const body = await c.req.json()
    const { success } = blogInput.safeParse(body)

    if(!success){
      return c.json({
        message: "Input are not correct"
      })
    }
    const userId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(userId),

            }
        })

        return c.json({
            blog
        })

    } catch (e) {
        console.log(e)
        return c.text("server crashed")
    }

})

blogRouter.put('/update', async (c) => {
    const body = await c.req.json()
    const { success } = blogUpdate.safeParse(body)

    if(!success){
      return c.json({
        message: "Input are not correct"
      })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,


            }
        })

        return c.json({
            blog
        })

    } catch (e) {
        console.log(e)
        return c.text("server crashed")
    }
})

blogRouter.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findMany({
            select:{
                title: true,
                content: true,
                id: true,
                author:{
                    select:{
                        username: true
                    }
                }
            }
        })

        return c.json({
            blog
        })
    } catch (e) {
        console.log(e)
        return c.text("server crashed")
    }
})

blogRouter.delete('/delete/:id', async (c) => {
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.delete({
            where: {
                id: Number(id)
            }
        })

        return c.json({
            blog
        })

    } catch (e) {
        console.log(e)
        return c.text("server crashed")
    }
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            select:{
                title: true,
                content: true,
                id: true,
                author:{
                    select:{
                        username: true
                    }
                }
            },
            where: {
                id: Number(id)
            }
        })

        return c.json({
            blog
        })

    } catch (e) {
        console.log(e)
        return c.text("server crashed")
    }
})

