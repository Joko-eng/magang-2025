import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(2, "Nama minimal 2 karakter").max(50, "Nama maksimal 50 karakter").trim(),
    email: z.string().email("Email tidak valid").toLowerCase().trim(),
    password: z.string().min(8, "Password minimal 8 karakter").max(50, "Password maksimal 50 karakter").trim()
});

export const loginSchema = z.object({
    email: z.string().email("Email tidak valid").toLowerCase().trim(),
    password: z.string().min(8, "Password minimal 8 karakter").max(50, "Password maksimal 50 karakter").trim()
})

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;