# STAR PLATINUM

This repository consists of a full stack web application with a Next.js frontend and an ASP.NET backend web api that interacts with a postgreSQL database.

## Prerequisites

1. **.NET SDK** `8.x`
   - The backend API is .NET8
2. Docker

# Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. **Navigate to the project directory:**

   `cd repo-directory/frontend`

2. **Install dependencies using npm:**

   `npm install`

## App Configuration

The frontend app can be configured in any standard way an Node application can. Typically from the Azure Portal (Environment variables) or an `.env.local`.

# Backend

## Database setup

The application stack interacts with a PostgreSQL Server database, and uses code-first migrations for managing the database schema.

The repository contains a `docker-compose` for the database, so just run `docker-compose up -d` to start it running.

When setting up a new environment, or running a newer version of the codebase if there have been schema changes, you need to run migrations against your database server.

The easiest way is using the dotnet cli:

1. If you haven't already, install the local Entity Framework tooling

- Anywhere in the repo: `dotnet tool restore`

1. Navigate to the same directory as `Backend.csproj`
1. Run migrations:

- `dotnet ef database update -s Backend`
- The above runs against the default local server, using the connection string in `appsettings.Development.json`
- You can specify a connection string with the `--connection "<connection string>"` option

## App Configuration

The backend app can be configured in any standard way an ASP.NET Core application can. Typically from the Azure Portal (Environment variables) or an `appsettings.json`.

## Email Verification

Email verification code is being sent using SMTP server. This can be configured in the `appsettings.Development.json` by including the required values.

```bash
"EmailHost": "changeme",
"EmailUsername": "changeme",
"EmailPassword": "changeme",
```

## Running the repository

The setup of the repository is designed in a way that when the ASP.NET web server is initiated, it automatically starts the Next.js frontend SPA server.
