import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

import { ProjectDetail } from "src/pages/ProjectDetail";
import { MainLayout } from "../mainLayout/MainLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home page="home" /> },
			{
				path: "/projects/:projectId",
				element: <ProjectDetail page="projectDetail" />,
			},
		],
	},
]);
