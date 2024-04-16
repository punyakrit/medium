import z from 'zod'

export const signupInput = z.object({
    name: z.string(),
    username: z.string(),
    password: z.string().min(6)
})
export type SignUpInput = z.infer<typeof signupInput>


export const signinInput = z.object({
    username: z.string(),
    password: z.string().min(6)
})
export type SignIpInput = z.infer<typeof signinInput>


export const blogInput = z.object({
    title: z.string(),
    content: z.string()
})
export type BlogInput = z.infer<typeof blogInput>


export const blogUpdate = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})
export type BlogUpdate = z.infer<typeof blogUpdate>