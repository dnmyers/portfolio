// src/app/router/routes.js
import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import ProjectsContainer from "@components/Projects/ProjectsContainer";

export const routes = [
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
];