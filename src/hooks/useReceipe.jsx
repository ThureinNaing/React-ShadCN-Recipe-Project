import axios from "axios";
import { useEffect, useState } from "react";

export default function useReceipe(id) {
	let [recipe, setRecipe] = useState(null);
	let fetchRecipe = async (id) => {
		try {
			const res = await axios.get(`http://localhost:3000/recipes/` + id);
			setRecipe(res.data);
		} catch (error) {
			console.error("Error fetching recipes:", error);
		}
	};
	useEffect(() => {
		fetchRecipe(id);
	}, [id]);
	return { recipe, setRecipe, fetchRecipe };
}
