import * as z from "zod";
export const registerSchema = z
	.object({
		email: z.string().email({
			message: "Please enter a valid email",
		}),
		name: z.string().min(1, {
			message: "Please enter your name",
		}),
		password: z.string().min(6, {
			message: "Password must be at least 6 characters",
		}),
		confirmPassword: z.string().min(6, {
			message: "Passowrd must be at least 6 characters",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"], // Highlight the field with the error
		message: "Passwords do not match",
	});

export const loginSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters",
	}),
});
