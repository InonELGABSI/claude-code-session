---
name: review-pr-with-github-mcp
description: Reviews a pull request from a user-provided PR link using GitHub MCP data (files changed, diff, comments, checks) and Superpowers review workflow. Use when the user asks to review a PR, shares a GitHub PR URL, or asks to evaluate code review comments before merge. Also verifies linked Jira task readiness for the Integration column when a CSS ticket is referenced.
---

# Review PR With GitHub MCP

## Purpose

Run a high-signal PR review using MCP data only (not guesses), then apply Superpowers review discipline.

## Required Input

- PR URL (mandatory)

If missing, ask:
`Please share the PR link you want reviewed.`

## Workflow

Copy this checklist and execute in order:

```md
- [ ] 1) Collect PR context
- [ ] 2) Fetch full code changes
- [ ] 3) Fetch all review discussion
- [ ] 4) Inspect checks/status signals
- [ ] 5) Run Superpowers review pass
- [ ] 6) Return findings in severity order
- [ ] 7) Validate linked Jira ticket for Integration readiness
```

### 1) Collect PR context

- Parse owner/repo/PR number from the provided URL.
- Confirm target repo. Default expected repo for this project: `InonELGABSI/claude-code-session`.
- Read GitHub MCP tool descriptors first, then call the appropriate tools.

### 2) Fetch full code changes

- Fetch PR metadata (title, body, base/head, author, state).
- Fetch changed files list with patches/diff hunks.
- If file list is truncated, fetch per-file patch details as needed.
- Focus on behavior changes, regressions, security risks, and test gaps.

### 3) Fetch all review discussion

- Fetch inline review comments and top-level PR conversation comments.
- Separate:
  - unresolved reviewer concerns
  - already-addressed concerns
  - suggestions requiring verification in latest diff

### 4) Inspect checks/status signals

- Fetch CI/check run status and required checks summary.
- Note flaky/failed checks and whether failures are relevant to changed files.

### 5) Run Superpowers review pass

- Load and follow:
  - `superpowers/requesting-code-review/SKILL.md`
  - `superpowers/receiving-code-review/SKILL.md` (for handling reviewer feedback rigor)
- Keep feedback technical and verifiable.
- Push back when suggestions are incorrect for this codebase.

### 6) Return findings in severity order

Output format:

1. **Findings** (highest severity first)
   - `Critical`: must fix before merge
   - `Important`: should fix before merge
   - `Minor`: optional or follow-up
2. **Open questions / assumptions**
3. **Change summary**
4. **Test gaps / residual risk**

Rules:
- Cite concrete file paths and symbols.
- Prefer behavior and correctness over style nits.
- If no issues found, state that clearly and still list test gaps.

### 7) Validate linked Jira ticket for Integration readiness

When a Jira ticket key is present (for this project, usually `CSS-<n>`):

- Verify ticket status with Atlassian MCP.
- If review is clean and PR is linked but ticket is not in Integration-ready status, ask user whether to transition it.
- Jira board reference:
  - `https://inon11221.atlassian.net/jira/software/projects/CSS/boards/34?jql=assignee%20%3D%20712020%3A970f7104-e0de-46f9-af37-d31463241432`

## Guardrails

- Do not implement fixes until review scope is clear.
- Do not assume reviewer suggestions are correct without verification.
- Do not skip fetching comments; comment context often changes severity.
- Do not mark "ready to merge" when required checks are failing.

