# Flosum Agent

The **Flosum Agent** provides a secure bridge between Flosum and Git providers, including **GitHub, GitLab, Azure DevOps, and BitBucket**. It fully supports both cloud-based and **On-Premise** editions.

## Prerequisites

Before setting up the agent, ensure your environment meets the following requirements:

- **Node.js:** version `22.x` (Installation via [nvm](https://github.com/nvm-sh/nvm) is required).
- **Git:** Ensure the Git shell is installed and accessible in your system path.

---

## Quick Start

### Standard Production Mode

Use this method for a straightforward execution in your current terminal session.

1. **Install dependencies:**

```bash
npm install --omit=dev
```

1. **Start the agent:**

```bash
npm start
```

### Enhanced Production Mode (via PM2)

For production environments, it is recommended to use **PM2** to ensure the agent runs in the background and restarts automatically if the system reboots.

1. **Install PM2 globally:**

```bash
npm install -g pm2
```

1. **Install dependencies:**

```bash
npm install --omit=dev
```

1. **Launch the agent:**

```bash
pm2 start npm --name "flosum-agent" -- run start
```

> **Note:** You can monitor the agent's status at any time by running `pm2 list` or view logs with `pm2 logs flosum-agent`.

## Environment Variables

```env
SALESFORCE_CLIENT_ID=
SALESFORCE_CLIENT_SECRET=
SALESFORCE_LOGIN_URL=
DATA_MASKING_BATCH_DEPLOY_PARALLEL_COUNT=
IGNORE_FLOSUM_GIT_NAMESPACE=
IGNORE_FLOSUM_NAMESPACE=
DEBUG=flosum-agent*
APP_DATA_PATH=/home/node
PROCESS_MAX_MEMORY_SIZE=
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_TRACK_OPENINGS=
SMTP_FROM=
SMTP_AUTH_TYPE=
SMTP_AUTH_USER=
SMTP_AUTH_PASSWORD=
HTTPS_PROXY=
NO_PROXY=
```
