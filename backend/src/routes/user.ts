import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from "@punyakrit/medium-common";

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>()

userRouter.post('/signup', async (c) => {

    const body = await c.req.json()
    const { success } = signupInput.safeParse(body)

    if(!success){
      return c.json({
        message: "Input are not correct"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const usernameTaken = await prisma.user.findFirst({
        where:{
          username: body.username
        }
      })
      if(usernameTaken){
        return c.text("Username is already taken")
      }
      const user = await prisma.user.create({
        data: {
          name: body.name,
          username: body.username,
          password: body.password
  
        }
      })
  
      const token = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
  
      return c.text(token)
  
  
    } catch (e) {
      return c.text("Server crashed")
    }
  
  })
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json()
  
    const { success } = signinInput.safeParse(body)

    if(!success){
      return c.json({
        message: "Input are not correct"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password
        },
      })
  
      if (!user) {
        return c.text("Invalid inputs")
      }
  
      const token = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
  
      return c.text(token)
  
  
    } catch (e) {
      return c.text("Server crashed")
    }
  
  })