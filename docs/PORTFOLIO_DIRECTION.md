# Portfolio direction: show the engineering, not just the stack

## Recommended point of view

Shape the portfolio as an **engineering field guide**: each project is a short, evidence-backed case study. A recruiter can scan the outcome quickly; an engineer can open the deeper decisions, API shape, data model, tests, and tradeoffs.

This is more memorable than another generic hero plus technology-logo grid because it shows how you think. Keep the writing specific and honest. Do not invent metrics, production claims, or user counts; label tutorial and course projects clearly.

## What a project page should show

1. **The problem and constraints** — who needed what, the limits you worked under, and what success meant.
2. **Your contribution** — which parts you designed and built, separated from course scaffolding or team work.
3. **The system** — a small architecture diagram and the key request/data flow.
4. **A decision record** — one decision, alternatives considered, why you chose the approach, and what you would change now.
5. **Evidence** — a working demo, source, screenshots, tests, API docs, and measured results where they exist.
6. **A reflection** — the hardest bug, what you learned, and the next improvement.

## Visual and interaction ideas

- Replace the generic welcome copy with a concise engineering thesis grounded in your work, for example the kind of business problem you like solving and the systems you have experience maintaining.
- Use an editorial layout with project numbers, status labels, crisp diagrams, and a restrained cyan/blue highlight. Avoid turning every section into a terminal window or adding decorative motion that competes with the work.
- Add filters for **problem**, **stack**, and **project type**. A visitor can quickly find React work or .NET/SQL work without reading every card.
- Make one project interactive enough to demonstrate craft: a usable search/filter flow, realistic loading/empty/error states, and keyboard support. The demo itself should tell a story without needing a recruiter to create an account.
- Add a small “decision log” or “what I’d improve next” block to each case study. Those candid tradeoffs are more credible than a wall of skill badges.
- Keep live demo buttons as placeholders until each project has a reliable public deployment. A source link and a clearly labeled “Live demo coming soon” state are better than a stale URL.

## Full-stack project recommendation

Build a **career pipeline tracker** as a separate React + ASP.NET Core Web API + SQL Server project, then feature it as the flagship case study. It supports a real workflow while you are job hunting and gives the backend a clear job: preserve application history, follow-ups, notes, and reporting. It demonstrates .NET and SQL through real relationships and business rules instead of adding a database to serve static portfolio copy.

### MVP scope

- Track organizations and job applications through a configurable pipeline.
- Record stage changes with timestamps so the timeline is auditable rather than overwriting the current status.
- Set a next action and due date; show overdue and upcoming follow-ups.
- Filter and search by stage, organization, role, technology, and date.
- Show a small set of useful summaries, such as applications by stage and follow-ups due this week.
- Seed a public demo with fictional records. Keep your real job-search data in a separate private instance; never copy personal contacts or private notes into the public demo database.

### Example relational model

- `Organization` has many `Application` records.
- `Application` has many `StageEvent` records and `FollowUp` records.
- `ApplicationTag` links applications to reusable `Tag` records.
- `Contact` is optional and should only be in the private dataset unless there is a clear need for it in the fictional demo.

The model gives SQL Server meaningful work: foreign keys, uniqueness rules, query indexes, and reporting queries. Store a current stage on the application for fast list views, and keep the transition history as the source of the timeline.

### Portfolio-friendly architecture

Keep the existing portfolio static. Host the tracker as its own project/container and link to it from the portfolio. Its React UI calls a versioned ASP.NET API; EF Core maps DTOs to a SQL Server database that is only reachable on a private Docker network. The public demo API serves fictional read-only data. Put the real-data instance behind Tailscale plus authentication, or keep it entirely off the public tunnel.

This separation keeps the portfolio deployment simple and gives you a self-contained React/.NET/SQL case study. Do not expose SQL Server directly to the internet or rely on Tailscale alone as application authentication.

### What makes the implementation interview-worthy

- Define API contracts and validation before wiring the UI.
- Use request/response DTOs; keep EF entities out of HTTP responses.
- Model stage transitions as an explicit business operation, not an unrestricted status edit.
- Add pagination, server-side filtering, and deterministic sorting.
- Use database migrations and realistic seed data.
- Handle loading, empty, validation, conflict, and server-error states in React.
- Include integration tests against SQL Server-compatible behavior and tests for stage-transition rules.
- Document one tradeoff, such as why transition history is stored separately from the current status.

## Suggested alternatives

- **Project Casebook CMS:** directly manages project case studies, but a database can feel unnecessary until private editing and publishing workflows are real requirements.
- **Home Lab Service Catalog:** fits your self-hosting environment and can show health/status history, but keep private agent names, network details, and control URLs out of the public dataset.

The career pipeline tracker is my recommendation because it is useful to you now, demonstrates the target stack, and has a natural boundary between private records and public demo content.

## Delivery sequence

1. Refresh the existing site content and project cards; keep demo placeholders until each service is ready.
2. Write a one-page tracker requirements and data-model note before coding.
3. Build the API and database with seeded fictional data; prove the API and rules before polishing the UI.
4. Build the React workflow against the documented API contract.
5. Containerize the tracker separately; route only the demo UI/API publicly and keep the private instance on Tailscale.
6. Publish the case study with a diagram, screenshots, tests, and one decision record.
