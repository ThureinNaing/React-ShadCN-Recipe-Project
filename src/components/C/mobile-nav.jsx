import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	ShoppingCart,
	Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { useState } from "react";
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from "../ui/card";

export default function MobileNav() {
	let [openSidebar, setOpenSidebar] = useState(false);
	// Function to handle link clicks
	const handleLinkClick = () => {
		setOpenSidebar(false); // Close the sidebar when  link is clicked
	};
	return (
		<Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="shrink-0 md:hidden"
				>
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<nav className="grid gap-2 text-lg font-medium">
					<Link
						href="#"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<Package2 className="h-6 w-6" />
						<span className="">Receipe App</span>
					</Link>
					<Link
						onClick={handleLinkClick}
						to={"/"}
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
					>
						<Home className="h-5 w-5" />
						Home
					</Link>
					<Link
						onClick={handleLinkClick}
						href="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
					>
						<ShoppingCart className="h-5 w-5" />
						Orders
						<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
							6
						</Badge>
					</Link>
					<Link
						onClick={handleLinkClick}
						href="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
					>
						<Package className="h-5 w-5" />
						Products
					</Link>
					<Link
						onClick={handleLinkClick}
						href="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
					>
						<Users className="h-5 w-5" />
						Contact
					</Link>
					<Link
						onClick={handleLinkClick}
						href="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
					>
						<LineChart className="h-5 w-5" />
						About
					</Link>
				</nav>
				{/* <div className="mt-auto">
					<Card>
						<CardHeader>
							<CardTitle>Upgrade to Pro</CardTitle>
							<CardDescription>
								Unlock all features and get unlimited access to
								our support team.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button size="sm" className="w-full">
								Upgrade
							</Button>
						</CardContent>
					</Card>
				</div> */}
			</SheetContent>
		</Sheet>
	);
}
