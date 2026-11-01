// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Import application router
import { router } from "@app/router/router.jsx";

import "./index.css";

// // Optional session analytics. Uncomment and configure when the site is live
// // and LogRocket is intentionally enabled again.
// import LogRocket from "logrocket";
// import setupLogRocketReact from "logrocket-react";
// LogRocket.init("o7obyf/danielnmyerscom");
// setupLogRocketReact(LogRocket);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
);
