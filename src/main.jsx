import "./index.css";
import ReactDOM from "react-dom/client";
import Router from "./router/route.jsx";
import { ThemeProvider } from "./components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<Router />
	</ThemeProvider>
);
