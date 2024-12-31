import SkeletonCard from "./SkeletonCard";

export default function Loading() {
	return (
		<main className="grid  md:grid-cols-2 lg:md:grid-cols-3  gap-8 py-10  mx-11 md:mx-11 lg:mx-32 -mt-20">
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<SkeletonCard key={i} />
			))}
		</main>
	);
}
