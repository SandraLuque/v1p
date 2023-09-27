import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

import { MainLayout } from "../mainLayout/MainLayout";
import { Education } from "../pages/Education";
import { ProjectDetail } from "src/pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home page="home" /> },
      {
        path: "/projects/:id",
        element: <ProjectDetail page="projectDetail" />,
      },
      {
        path: "/education",
        element: <Education page="education" />,
      },
    ],
  },
]);
