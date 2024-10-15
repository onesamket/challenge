// import { z } from "zod";

// export const PasswordSchema = z
//   .object({
//     currentPassword: z.string().min(6),
//     password: z.string().min(6),
//     confirmPassword: z.string().min(6),
//   })
//   .refine(
//     (values) => {
//       return values.password === values.confirmPassword;
//     },
//     {
//       message: "Passwords must match!",
//       path: ["confirmPassword"],
//     }
//   );
