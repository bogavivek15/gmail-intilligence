# AI-Powered Gmail Intelligence Platform

A production-minded MVP for syncing Gmail into Supabase PostgreSQL + pgvector and using Gemini/NVIDIA NIM for email intelligence.

## Implemented

- Google OAuth backend flow with state + PKCE verifier storage
- HTTP-only signed session cookie
- Supabase schema with normalized users, Gmail accounts, sync jobs, threads, messages, labels, summaries, categories, embeddings, chat, drafts, AI runs, and audit events
- Gmail API sync for latest messages with pagination, label sync, MIME parsing, upserts, retry handling, sync status, and per-message partial failure tracking
- Gemini summaries, compose drafts, reply drafts, embeddings, and final RAG answers
- NVIDIA NIM categorization with Gemini fallback
- pgvector `vector(768)` embeddings and user-filtered `match_email_embeddings` RPC
- Source-grounded chat with not-found behavior
- React + Vite frontend for login, dashboard, inbox, email detail, thread detail, chat, and compose
- Draft-first reply flow with explicit reviewed send action
- Basic backend unit tests for parser, chunking, JSON repair, and retry

## Not Implemented

- Gmail push notifications and full History API delta sync
- Background job queue
- Attachment intelligence
- Token encryption with KMS or Supabase Vault
- Full Supabase Auth/RLS policy model for direct frontend database access
- Advanced hybrid search/reranking
- Data export/delete workflows

## Tech Stack

- Frontend: React, Vite, React Router
- Backend: Node.js, Express
- Database: Supabase PostgreSQL, pgvector
- Gmail: Gmail API via Google OAuth 2.0
- AI: Google Gemini primary, NVIDIA NIM categorization/secondary

## Prerequisites

- Node.js 20.19+ or 22.12+
- Supabase project with SQL Editor access
- Google Cloud OAuth client
- Gemini API key
- NVIDIA NIM API key

## Environment

Copy `.env.example` to `.env` in the project root and fill all required values.

```bash
copy .env.example .env
```

Important:

- `SUPABASE_SERVICE_ROLE_KEY` is backend-only.
- `GOOGLE_CLIENT_SECRET` is backend-only.
- `JWT_SECRET` and `COOKIE_SECRET` must be at least 32 characters.
- `GEMINI_EMBEDDING_MODEL=gemini-embedding-001`
- `GEMINI_EMBEDDING_DIMENSION=768`

## Supabase Setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Confirm `pgcrypto` and `vector` extensions are enabled.

The MVP uses the backend service role key for database access and enforces user isolation in backend queries. RLS is enabled without broad frontend policies, so direct anon/authenticated table access remains closed.

## Google OAuth Setup

Create an OAuth web client in Google Cloud Console.

Required redirect URI for local development:

```text
http://localhost:3001/auth/google/callback
```

MVP scopes:

- `https://www.googleapis.com/auth/gmail.readonly`
- `https://www.googleapis.com/auth/gmail.send`
- `https://www.googleapis.com/auth/userinfo.email`
- `https://www.googleapis.com/auth/userinfo.profile`

For assessment/demo use, add your Gmail account as a Google OAuth test user.

OAuth troubleshooting:

- If the app returns to `/login` with an OAuth state error, start from the Connect Gmail button again. Do not refresh or reuse an old Google callback URL.
- If sync fails with missing Gmail scopes, reconnect Gmail and approve Gmail read/send permissions on the Google consent screen. If Google does not show those permissions again, remove the app from Google Account security settings and reconnect.
- `GOOGLE_REDIRECT_URI` must exactly match `${BACKEND_URL}/auth/google/callback` and the same URI must be registered in Google Cloud Console.
- Restart the backend after changing `.env`; OAuth state is created and consumed by the running backend process.

## Backend

```bash
cd backend
npm install
npm run dev
```

Health check:

```bash
Invoke-RestMethod http://localhost:3001/health
```

Run tests:

```bash
npm test
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Demo Flow

1. Start backend and frontend.
2. Open frontend and connect Gmail.
3. Click Sync Gmail on Dashboard.
4. Open Inbox and inspect synced messages.
5. Open an email and run summary/category actions.
6. Open a thread and generate a thread summary or reply draft.
7. Use Chat to ask questions over synced emails and inspect sources.
8. Use Compose to generate a reviewed draft.

## Security Notes

- OAuth tokens are stored in backend-only Supabase tables for the MVP.
- Tokens are not sent to the frontend.
- Secrets are ignored by `.gitignore`.
- Full email bodies are not intentionally logged.
- Every protected route derives `user_id` from the verified session, not from request body input.

Production should encrypt OAuth tokens using a managed key service or Supabase Vault, complete Google app verification, add CSRF hardening, implement full RLS policies, and provide data export/delete workflows.

## Known Limitations

- Sync is in-process and limited to the latest 50/100 messages.
- History API metadata is stored, but true delta sync is not implemented.
- AI calls happen inline during requests, so long syncs can be slow.
- Attachment content is not parsed.
- RAG retrieval is vector-only; no reranking or hybrid lexical search yet.
- Frontend is MVP-grade and optimized for evaluator clarity, not full product polish.
