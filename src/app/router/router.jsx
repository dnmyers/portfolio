// src/app/router/router.jsx
import { createBrowserRouter } from "react-router-dom";

import App from "@app/App.jsx";
import ErrorPage from "@components/ErrorPage";

import { routes } from "@app/router/routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: routes,
    },
]);