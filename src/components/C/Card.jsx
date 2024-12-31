import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { EditIcon, TrashIcon } from "lucide-react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

export default function card({ recipe }) {
	let deleteRecipe = async (id) => {
		console.log("deleted", id);
		let res = await axios.delete(`http://localhost:3000/recipes/${id}`);
		console.log(res.status);
		// delay response because of json server
		if (res.status === 200)
			setTimeout(() => {
				toast({
					variant: "destructive",
					title: "Recipe Deleted Successfully",
					description: "Your recipe has been deleted successfully.",
				});
			}, 4000);
	};
	return (
		<Card
			key={recipe.id}
			className="max-w-[350px] flex flex-col justify-between"
		>
			{recipe.vegan && (
				<Badge variant="secondary" className="w-fit rounded-md">
					Vegan!
				</Badge>
			)}
			<CardHeader className="flex-row gap-4 items-center">
				<Avatar>
					<AvatarImage src={`${recipe.image}`} alt="@shadcn" />
					<AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
				</Avatar>
				<div>
					<CardTitle>{recipe.title}</CardTitle>
					<CardDescription>
						{recipe.time} mins to cook.
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<p>{recipe.description}</p>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="ghost">View Recipe</Button>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="outline" size="icon">
								<Link to={`/edit/${recipe.id}`}>
									<EditIcon />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Edit Recipe</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								onClick={() => deleteRecipe(recipe.id)}
								variant="ghost"
								className="text-red-500 hover:text-red-800"
							>
								<TrashIcon />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Delete Recipe</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</CardFooter>
		</Card>
	);
}
