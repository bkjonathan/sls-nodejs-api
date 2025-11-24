import { z } from "zod";

// Schema for creating a lead
export const createLeadSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format")
    .trim()
    .toLowerCase(),
  description: z
    .string()
    .trim()
    .max(500, "Description must be less than 500 characters")
    .optional(),
});
