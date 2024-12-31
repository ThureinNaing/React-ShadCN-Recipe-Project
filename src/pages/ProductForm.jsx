import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import useReceipe from "../hooks/useReceipe";

export default function ProductForm() {
	const { toast } = useToast();
	let navigate = useNavigate();
	let { id } = useParams();
	let [isEdit, setIsEdit] = useState(false);
	let { recipe } = useReceipe(id);
	let [form, setForm] = useState({
		title: "",
		image: "",
		time: "",
		description: "",
		vegan: false,
	});
	useEffect(() => {
		setIsEdit(!!id);
	}, [id]);

	useEffect(() => {
		if (recipe) {
			setForm({
				title: recipe.title,
				image: recipe.image,
				time: recipe.time,
				description: recipe.description,
				vegan: recipe.vegan,
			});
		}
	}, [recipe]);

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
			let method = isEdit ? "put" : "post";
			let url = isEdit
				? `http://localhost:3000/recipes/` + id
				: `http://localhost:3000/recipes`;
			let res = await axios[method](url, data);
			console.log(res.status);
			// delay response because of json server
			setTimeout(() => {
				if (res.status === 201 || res.status === 200) {
					toast({
						title: `Recipe ${
							isEdit ? "Updated" : "Created"
						} Successfully`,
						description: `Your recipe has been ${
							isEdit ? "updated" : "created"
						} successfully.`,
						variant: "default", // or "destructive" for error states
					});
					navigate("/");
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
				description: `Recipe ${isEdit ? "Update" : "Create"} Failed`,
				variant: "destructive",
			});
			console.log(err);
		}
	};
	return (
		<div className="flex   itcems-center justify-center mx-auto mt-10">
			<Card className="w-[600px] min-h-[600px] ">
				<CardHeader>
					<CardTitle>
						{isEdit ? "Edit Recipe" : "Create Recipe"}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 py-4 space-y-5">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="title" className="text-right">
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
							<Label htmlFor="image" className="text-right">
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
							<Label htmlFor="time" className="text-right">
								Cooking Time
							</Label>
							<Input
								value={form.time}
								onChange={(e) => {
									setForm({
										...form,
										time: e.target.value,
									});
								}}
								id="time"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
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
							<Label htmlFor="vegan" className="text-right">
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
									<RadioGroupItem value={true} id="vegan" />
									<Label htmlFor="vegan">Yes</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem
										value={false}
										id="not_vegan"
									/>
									<Label htmlFor="not_vegan">No</Label>
								</div>
							</RadioGroup>
						</div>
						<Button onClick={handleProductForm} type="submit">
							{isEdit ? "Update" : "Create"}
						</Button>
					</div>
				</CardContent>
				<CardFooter>
					Your Website. &copy; All rights reserved.
				</CardFooter>
			</Card>
		</div>
	);
}
