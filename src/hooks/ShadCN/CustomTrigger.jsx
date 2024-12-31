import { useSidebar } from "@/components/ui/sidebar";

export function CustomTrigger() {
	const { toggleSidebar } = useSidebar();

	return <button onClick={toggleSidebar}>Toggle Sidebar</button>;
}
