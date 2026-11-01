const projectDemoDomain = import.meta.env.VITE_PROJECT_DEMO_DOMAIN?.trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/$/, "");

export const projectDemoUrl = (subdomain) => {
    if (!subdomain || !projectDemoDomain) return null;
    return `https://${subdomain}.${projectDemoDomain}/`;
};
