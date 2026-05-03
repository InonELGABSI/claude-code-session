# Phase 2: MCP Connectors

MCP (Model Context Protocol) lets Claude connect to external tools — Jira, GitHub, Drive. Once set up, Claude can read tickets, comment on PRs, and access your files directly.

## Setup method

Ask: **"Are you using Claude Desktop or the CLI (`claude` in terminal)?"**

- **Claude Desktop**: Settings → Integrations → Add MCP Server
- **CLI**: `claude mcp add`

Run `/mcp` at any point to see what's connected.

---

## Atlassian (Jira + Confluence)

Search "Atlassian Rovo" in the Claude Directory, or check if already active with `/mcp`.

Get an API token: https://id.atlassian.com/manage-profile/security/api-tokens

---

## GitHub

```bash
claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=<your_token> -- npx -y @modelcontextprotocol/server-github
```

Get a token: GitHub → Settings → Developer settings → Personal access tokens
Scopes needed: `repo`, `read:org`, `read:user`

---

## Google Drive

```bash
claude mcp add gdrive -- npx -y @modelcontextprotocol/server-gdrive
```

Needs Google OAuth — follow the browser flow when prompted.
Setup guide: https://console.cloud.google.com → enable Drive API → create OAuth credentials (Desktop app)

---

Skipping a connector is fine — they can be added any time.
