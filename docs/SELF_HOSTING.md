# Self-hosting this portfolio

The goal is a public portfolio for hiring managers and recruiters. Tailscale remains the private path for administration and agents. A Cloudflare Tunnel is a promising fit: `cloudflared` makes an outbound connection and maps a public hostname to the local web container, avoiding inbound router port forwarding. A public hostname still needs a domain managed in Cloudflare. See [Cloudflare Tunnel setup](https://developers.cloudflare.com/tunnel/get-started/).

## Machine names

Suggested names for discussion:

- **`nitro`** — Acer Nitro V 16S AI used to edit the site.
- **`tuf`** — always-on ASUS TUF Dash F15 running Windows 11, Ubuntu 26.04 in WSL2, Docker/Agent Zero, and Hermes Desktop on Windows.

These are documentation labels only; no hostnames or Tailscale device names have been changed.

## Deployment shape

The site builds to static files. The included multi-stage `Dockerfile` copies the production build into Nginx, and `nginx.conf` routes React Router paths back to `index.html`.

1. On `tuf`, use Docker Desktop's WSL2 integration or a supported Docker Engine in Ubuntu, but avoid running both engines at once. Docker documents WSL2 integration and Linux container workflows [here](https://docs.docker.com/desktop/features/wsl/).
2. Keep the portfolio and `cloudflared` on their dedicated Compose network. The web container is read-only except for temporary runtime directories, and Compose publishes no host ports.
3. Create a tunnel and configure its public hostname to route to `http://portfolio:80` on the Compose network. Save the tunnel token in `secrets/cloudflare_tunnel_token`; the Compose file mounts it as a read-only Docker secret, outside the image and Git history.
4. Do not connect this network to the agent containers or publish Hermes/Agent Zero APIs. Continue to administer both computers and private agents over Tailscale.
5. Once the token file and tunnel route are configured, start the stack with `docker compose --profile public up -d --build`. Check container health and tunnel status after host restarts.

The Windows WSL2 backend lets Docker Desktop provide Docker commands inside an integrated distribution. Its configuration should be checked on `tuf` before deciding whether to use Docker Desktop or an engine installed directly in Ubuntu. See the [Docker WSL2 documentation](https://docs.docker.com/desktop/features/wsl/).

## Remaining setup work

- Choose/register the new domain and add it to Cloudflare so the tunnel can serve a stable public URL.
- Confirm which Docker runtime is installed and configure startup/restart behavior that survives Windows/WSL restarts.
- Configure the Cloudflare public hostname to target the `portfolio` service.
- Decide whether demo projects will also be redeployed under subdomains. If so, set `VITE_PROJECT_DEMO_DOMAIN` in `.env` before building the image.
- Review EmailJS privacy and abuse protections before enabling public form delivery. Development mode defaults to a local mock response; it does not send email.

No DNS, tunnel, or host configuration has been applied. The Docker files prepare the application/container side, but publishing still requires the domain, Cloudflare tunnel credentials, and host-side setup.
