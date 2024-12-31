import CardWrapper from "@/components/auth/card-wrapper";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "../../../schema/index.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
	let navigate = useNavigate();
	const form = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async () => {
		let res = await axios.get("http://localhost:3000/users");
		let user = res.data.find(
			(user) =>
				user.email === form.getValues("email") &&
				user.password === form.getValues("password")
		);

		if (user) {
			let userString = JSON.stringify(user);
			localStorage.setItem("user", userString);
			navigate("/");
		}
	};
	return (
		<div className="flex justify-center items-center min-h-screen">
			<CardWrapper
				label="Login to your account"
				title="Login"
				backButtonHref="register"
				backButtonLabel="Don't have an account? Register here"
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<div className="space-y-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="email"
												placeholder="Enter your Email"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="password"
												placeholder="**********"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								disabled={form.isSubmitting}
								className="w-full"
							>
								{form.isSubmitting ? "Loading..." : "Login"}
							</Button>
						</div>
					</form>
				</Form>
			</CardWrapper>
		</div>
	);
}
