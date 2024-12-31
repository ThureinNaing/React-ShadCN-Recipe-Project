import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// use zod to check validation
const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export default function Register() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			email: "test@email.com",
		},
		resolver: zodResolver(schema),
	});
	let onSubmit = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 3000));
			console.log(data);
		} catch (error) {
			setError("root", { message: "This email is already registered" });
			console.log(error);
		}
	};
	return (
		<div className="flex justify-center items-center">
			<form
				onSubmit={handleSubmit(onSubmit)}
				action=""
				className="flex justify-center items-center gap-2 flex-col"
			>
				<input
					{...register("email")}
					type="text"
					placeholder="Enter email"
					className="text-blue-600"
				/>
				{errors.email && (
					<div className="text-red-600">{errors.email.message}</div>
				)}
				<input
					{...register("password")}
					type="text"
					placeholder="Enter password"
					className="text-blue-600"
				/>
				{errors.password && (
					<div className="text-red-600">
						{errors.password.message}
					</div>
				)}
				<Button disabled={isSubmitting}>
					{isSubmitting ? "Loading..." : "Register"}
				</Button>
				{errors.root && (
					<div className="text-red-600">{errors.root.message}</div>
				)}
			</form>
		</div>
	);
}
