import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfileMenubar() {
	let userString = localStorage.getItem("user");
	let user = JSON.parse(userString);
	let [openProfile, setOpenProfile] = useState(false);
	let navigate = useNavigate();
	//  handle link clicks
	const handleLinkClick = (path) => {
		setOpenProfile(false); // Close the profile box when  link is clicked
		navigate(path);
	};
	return (
		<Menubar
			open={openProfile}
			onOpenChange={setOpenProfile}
			className=" bg-transparent border-none "
		>
			<MenubarMenu>
				<MenubarTrigger className="h-2">
					<Avatar className="cursor-pointer">
						<AvatarImage src="https://github.com/shadcn.png" />
					</Avatar>
				</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<p className="font-semibold">{user.name}</p>{" "}
						<MenubarShortcut>⌘</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						<p className="text-muted-foreground">{user.email}</p>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarSeparator />
					<MenubarItem onSelect={() => handleLinkClick("/login")}>
						Login
					</MenubarItem>
					<MenubarItem onSelect={() => handleLinkClick("/register")}>
						Register
					</MenubarItem>
					<MenubarItem>Sign Out</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
