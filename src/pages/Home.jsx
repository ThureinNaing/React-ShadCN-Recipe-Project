import Card from "../components/C/Card";
import Loading from "@/components/C/Loading";
import useRecipes from "../hooks/useRecipes";
import { useEffect } from "react";

function Home() {
	let { recipes, fetchRecipes } = useRecipes();
	useEffect(() => {
		fetchRecipes();
	}, [fetchRecipes]);
	return (
		<>
			{" "}
			<main className=" grid  md:grid-cols-2 lg:md:grid-cols-3  gap-8 py-10  mx-11 md:mx-11 lg:mx-32">
				{recipes.map((recipe) => (
					<Card key={recipe.id} recipe={recipe} />
				))}
			</main>
			{recipes.length === 0 && <Loading />}
		</>
	);
}

export default Home;
