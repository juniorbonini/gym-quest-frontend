import z from "zod";

export const registerSchema = z.object({
    email: z.string().email('O E-mail é obrigatório'),
    name: z.string().min(10, 'O nome é obrigatório'),
    password: z.string().min(8, 'A senha é obrigatória'),
    confirmPassoword: z.string().includes('password').nonempty(),
    date: z.date(),
    gender: z.string(),
    age: z.number(),
    local: z.string()
})

export type RegisterFormSchema = z.infer<typeof registerSchema>