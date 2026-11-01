import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ProjectsContainer from "./components/Projects/ProjectsContainer/ProjectsContainer.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Hero from "./components/Hero/Hero.jsx";

import "./index.css";

// // Optional session analytics. Uncomment and configure when the site is live
// // and LogRocket is intentionally enabled again.
// import LogRocket from "logrocket";
// import setupLogRocketReact from "logrocket-react";
// LogRocket.init("o7obyf/danielnmyerscom");
// setupLogRocketReact(LogRocket);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Hero />,
            },
            {
                path: "/projects",
                element: <ProjectsContainer />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
