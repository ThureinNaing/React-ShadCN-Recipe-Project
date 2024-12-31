/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Plus } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { set } from "zod";

export function ProductForm({ icon, TooltipHoverText }) {
	const { toast } = useToast();
	const [isOpen, setIsOpen] = useState(false);
	let [form, setForm] = useState({
		title: "",
		image: "",
		time: "",
		description: "",
		vegan: false,
	});

	let handleProductForm = async (e) => {
		e.preventDefault();
		let data = {
			id: Math.floor(Math.random() * 1000),
			title: form.title,
			image: form.image,
			time: form.time,
			description: form.description,
			vegan: form.vegan,
		};
		try {
			let res = await axios.post("http://localhost:3000/recipes", data);
			// delay response because of json server
			setTimeout(() => {
				if (res.status === 201) {
					toast({
						title: "Recipe Created Successfully",
						description:
							"Your recipe has been created successfully.",
						variant: "default", // or "destructive" for error states
					});
					setIsOpen(false);
				}
			}, 4000);

			setForm({
				title: "",
				image: "",
				time: "",
				description: "",
				vegan: false,
			});
		} catch (err) {
			toast({
				title: "Error",
				description: "Failed to create recipe. Please try again.",
				variant: "destructive",
			});
			console.log(err);
		}
	};

	return (
		<>
			<TooltipProvider>
				<Tooltip>
					<Dialog open={isOpen} onOpenChange={setIsOpen}>
						<TooltipTrigger asChild>
							<DialogTrigger asChild>
								<Button variant="outline" size="icon">
									{/* <Plus className="h-6 w-6  stroke-2" /> */}
									{icon}
								</Button>
							</DialogTrigger>
						</TooltipTrigger>
						<TooltipContent>
							<p>{TooltipHoverText}</p>
						</TooltipContent>

						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Create New Recipe</DialogTitle>
								<DialogDescription>
									Add a new recipe to your collection. Click
									create when you are done.
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label
										htmlFor="title"
										className="text-right"
									>
										Title
									</Label>
									<Input
										type="text"
										value={form.title}
										onChange={(e) => {
											setForm({
												...form,
												title: e.target.value,
											});
										}}
										id="title"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label
										htmlFor="image"
										className="text-right"
									>
										Image
									</Label>
									<Input
										value={form.image}
										onChange={(e) => {
											setForm({
												...form,
												image: e.target.value,
											});
										}}
										id="image"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label
										htmlFor="time"
										className="text-right"
									>
										Cooking Time
									</Label>
									<Input
										value={form.time}
										onChange={(e) => {
											set({
												...form,
												time: e.target.value,
											});
										}}
										id="time"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label
										htmlFor="description"
										className="text-right"
									>
										Description
									</Label>
									<Input
										value={form.description}
										onChange={(e) => {
											setForm({
												...form,
												description: e.target.value,
											});
										}}
										id="description"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label
										htmlFor="vegan"
										className="text-right"
									>
										Vegan?
									</Label>
									<RadioGroup
										value={form.vegan}
										onValueChange={(value) => {
											setForm({
												...form,
												vegan: value,
											});
										}}
										className="flex gap-4 col-span-3"
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value={true}
												id="vegan"
											/>
											<Label htmlFor="vegan">Yes</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value={false}
												id="not_vegan"
											/>
											<Label htmlFor="not_vegan">
												No
											</Label>
										</div>
									</RadioGroup>
								</div>
							</div>
							<DialogFooter>
								<Button
									onClick={handleProductForm}
									type="submit"
								>
									Create
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</Tooltip>
			</TooltipProvider>
		</>
	);
}
