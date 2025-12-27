import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("Informe um E-mail válido"),
  password: z.string().min(8, "A senha é obrigatória"),
});

export type LoginFormSchema = z.infer<typeof loginSchema>