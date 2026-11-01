// src/config/site.js
// Builds project demo links from the optional domain configured in
// VITE_PROJECT_DEMO_DOMAIN (for example, "example.com").
const projectDemoDomain = import.meta.env.VITE_PROJECT_DEMO_DOMAIN?.trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/$/, "");

/**
 * Create a demo URL for a project's subdomain.
 * Set VITE_PROJECT_DEMO_DOMAIN in the environment; pass the project's
 * subdomain (for example, "weather") to get https://weather.example.com/.
 * Returns null when either value is missing so callers can show the demo
 * as unavailable.
 */
export const projectDemoUrl = (subdomain) => {
    if (!subdomain || !projectDemoDomain) return null;
    return `https://${subdomain}.${projectDemoDomain}/`;
};
