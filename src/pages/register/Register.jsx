import CardWrapper from "@/components/auth/card-wrapper";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { registerSchema } from "../../../schema/index.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
	let navigate = useNavigate();
	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			name: "",
			password: "",
			confirmPassword: "",
		},
	});
	const onSubmit = async (data) => {
		let res = await axios.post("http://localhost:3000/users", data);
		let userString = JSON.stringify(res.data);
		localStorage.setItem("user", userString);
		if (res.status === 201) {
			navigate("/");
		}
	};
	return (
		<div className="flex justify-center items-center min-h-screen">
			<CardWrapper
				label="Create an account"
				title="Register"
				backButtonHref="login"
				backButtonLabel="Already have an account? Login here"
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
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="text"
												placeholder="Enter your Name"
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
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirm Password</FormLabel>
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
								{form.isSubmitting ? "Loading..." : "Register"}
							</Button>
						</div>
					</form>
				</Form>
			</CardWrapper>
		</div>
	);
}
