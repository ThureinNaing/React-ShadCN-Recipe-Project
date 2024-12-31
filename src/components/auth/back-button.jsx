/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function BackButton({ label, to }) {
	return (
		<Button variant="link" className="text-sm" size="sm" asChild>
			<Link to={`/${to}`}>{label}</Link>
		</Button>
	);
}
