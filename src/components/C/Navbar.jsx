import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import ProfileMenubar from "./ProfileMenubar";
import MobileNav from "./mobile-nav";
import { Button } from "../ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";

export default function Navbar() {
	return (
		<div className="w-full bg-secondary">
			<div className="flex justify-between items-center p-3 lg:max-w-4xl mx-auto ">
				<Link to="/">
					<img src="/public/vite.svg" alt="profile" />
				</Link>

				<nav className="hidden md:block ">
					<ul className="flex gap-4 ml-14">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="flex items-center gap-4">
					{/* profile */}
					<ProfileMenubar />
					{/* create recipe */}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="outline" size="icon">
									<Link to="/create">
										<Plus />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Add Recipe</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					{/* theme */}
					<div>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="outline" size="icon">
										<ModeToggle />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Change Theme</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<MobileNav />
				</div>
			</div>
		</div>
	);
}
