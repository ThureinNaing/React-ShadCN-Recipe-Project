import Navbar from "@/components/C/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<Navbar />
			<div className="max-w-6xl mx-auto p-3">
				<Outlet />
			</div>
			<Toaster />
		</>
	);
}
