import axios from "axios";
import { useEffect, useState } from "react";

export default function useReceipe() {
	let [recipes, setRecipes] = useState([]);
	let fetchRecipes = async () => {
		try {
			const res = await axios.get("http://localhost:3000/recipes");
			// delay response
			await new Promise((resolve) => setTimeout(resolve, 3000));
			setRecipes(res.data);
		} catch (error) {
			console.error("Error fetching recipes:", error);
		}
	};
	useEffect(() => {
		fetchRecipes();
	}, [recipes]);
	return { recipes, fetchRecipes };
}
