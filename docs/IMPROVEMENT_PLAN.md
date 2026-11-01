# Codebase review and improvement plan

Reviewed on 2026-10-29. The first pass was a static source review; implementation and verification notes are updated below.

## Findings

### Defects to fix first

1. The contact form called an undefined `setEmailTouched`, used a JavaScript regex literal as an HTML `pattern`, and redirected to the retired domain. These are fixed; labels reference their controls, phone is optional, submission status is announced accessibly, and development mode defaults to a no-send mock.
2. `index.html` referenced a missing `/vite.svg`. It now uses the portfolio favicon and includes a description.
3. LogRocket was loaded and initialized both inline in `index.html` and in `src/main.jsx`. The inline loader was removed and the optional module initialization is now commented out for possible future reactivation.
4. `public/images/` contains three `.html`-named files whose contents are SVG markup, plus a nested favicon/logo bundle. Verify whether these illustration assets are still used; the extension/content mismatch can cause incorrect MIME handling when served directly.

### Site quality and maintenance

- The README described the retired domain as current and demo URLs used its subdomains. README wording is updated; demo domains now come from `VITE_PROJECT_DEMO_DOMAIN` and are unavailable when that value is blank.
- The contact form now has inline success/error status and a local development mock. The selected phone country remains a cosmetic selector, so its interaction should be reviewed if phone input is retained.
- Several components have outdated copy (including experience duration and a 2023 copyright year), spelling/grammar issues, and commented-out implementations or large commented blocks.
- The dependency list includes both `emailjs` and `@emailjs/browser`, though the form imports the latter. LogRocket dependencies remain to make future reactivation straightforward.
- Check mobile navigation behavior, external-link accessibility, image alternative text, reduced-motion behavior, color contrast, and page metadata as part of the refresh.

## Proposed order

### Phase 1 — Reliability and cleanup (partially complete)

- Fixed the form runtime and validation issues, added accessible status, and defaulted development to mock mode.
- Replaced the missing Vite icon, added a description, and removed duplicate/active LogRocket setup while leaving reactivation notes in code.
- Remove unused dependencies and dead code only after confirming the intended integrations.
- Verify local routes and all external project/demo links; mark unavailable projects honestly or replace the links.

### Phase 2 — Content and accessibility refresh (remaining)

- Refresh the biography, experience details, project descriptions, current-year footer, and contact instructions with current facts from Daniel.
- Improve responsive navigation, semantic form labels, image alt text, keyboard focus, reduced-motion behavior, and metadata.
- Review privacy expectations for EmailJS and analytics; add provider-side protections or remove unnecessary data collection.

### Phase 3 — Self-hosting

- Public hosting is the target. A multi-stage Docker build, Nginx SPA fallback, dedicated Compose network, health check, and outbound Cloudflare Tunnel service have been added.
- Keep the portfolio isolated from Hermes and Agent Zero. Do not expose agent APIs or control ports as part of portfolio hosting.
- Remaining work is domain/host setup and deployment operations. See [SELF_HOSTING.md](SELF_HOSTING.md).

## Deployment status

Application fixes and container scaffolding are in place. No public DNS, Cloudflare tunnel, or host configuration has been changed.

## MSW recommendation

MSW is useful when the app has several HTTP APIs or realistic request flows to mock. This portfolio currently makes no general API calls; its only submit operation is the EmailJS SDK. A development-only mock branch avoids provider traffic and is simpler to maintain for this one form. Revisit MSW when additional API-backed features are introduced.
