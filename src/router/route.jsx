import Register from "@/pages/register/Register";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/login/Login";
import ProductForm from "@/pages/ProductForm";

export default function index() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/register",
					element: <Register />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/create",
					element: <ProductForm />,
				},
				{
					path: "/edit/:id",
					element: <ProductForm />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
