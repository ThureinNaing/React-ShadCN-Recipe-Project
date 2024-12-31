/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";
export default function CardWrapper({
	label,
	title,
	backButtonHref,
	backButtonLabel,
	children,
}) {
	return (
		<Card>
			<CardHeader>
				<AuthHeader label={label} title={title} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter className="flex justify-center ">
				<BackButton label={backButtonLabel} to={backButtonHref} />
			</CardFooter>
		</Card>
	);
}
