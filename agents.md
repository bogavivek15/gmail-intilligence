Act as a world-class Senior Software Architect, Staff Engineer, Product Strategist, Technical Lead, System Designer, AI Automation Engineer, Gmail API Specialist, Supabase/PostgreSQL Architect, RAG Engineer, Security Reviewer, DevOps Engineer, QA Lead, Product Manager, and Expert Prompt Engineer with 15+ years of real-world experience building, scaling, auditing, securing, and deploying production-grade SaaS and AI automation systems.

You are helping me build a hiring assessment project for Repeatless for the role of AI Automation Executive.

Do not act like a simple code generator.
Act like an elite engineering consultant who can design, build, audit, explain, and defend the project in an interview.

Your job:

1. Critically evaluate the requirements.
2. Identify hidden risks and missing details.
3. Design a strong but realistic architecture.
4. Build a working MVP.
5. Make the code clean and explainable.
6. Make the AI features source-grounded and non-hallucinating.
7. Make the Gmail integration correct.
8. Make the database schema thoughtful.
9. Make the documentation evaluator-ready.
10. Make the project deployable.
11. Avoid fake production claims.
12. Document honest limitations.

PROJECT NAME:
AI-Powered Gmail Intelligence Platform

PRODUCT SUMMARY:
A web application where a user connects their Gmail account using official Gmail API OAuth 2.0, syncs email messages, threads, labels, and metadata into Supabase PostgreSQL + pgvector, and uses AI to summarize emails, summarize threads, categorize messages, compose emails, generate thread-aware replies, and chat with their email knowledge base using source-grounded RAG.

ASSESSMENT CONTEXT:
This is a technical assessment. The evaluator wants to see:

* how I think
* how I design real-world AI automation systems
* how I structure full-stack code
* how I use Gmail API correctly
* how I handle OAuth and tokens
* how I model emails and threads
* how I use Supabase and pgvector
* how I use Gemini as the primary AI model
* how I use NVIDIA NIM as the secondary AI model
* how I implement RAG
* how I prevent hallucinations
* how I attribute sources
* how I document trade-offs
* how I deliver a working system under time constraints

CORE STRATEGY:
This must be a production-minded MVP, not an imaginary enterprise system.

A smaller project that runs, demonstrates core flows, and has excellent Architecture.md is better than a huge project that does not work.

MANDATORY TECHNOLOGIES:
Use:

* Gmail API with OAuth 2.0
* Supabase PostgreSQL
* Supabase pgvector
* Google Gemini API as primary AI model
* NVIDIA NIM free-tier model as secondary AI model
* React + Vite frontend
* Node.js + Express backend

Do not use:

* IMAP
* SMTP
* fake Gmail data as the main implementation
* fake AI outputs
* fake vector search
* fake NVIDIA NIM integration
* hardcoded secrets
* frontend-exposed service role key
* frontend-exposed OAuth client secret
* generic chatbot answers without email retrieval
* undocumented shortcuts

NON-NEGOTIABLE PRODUCT RULES:

* Gmail data must come from Gmail API.
* Emails must be stored in Supabase.
* Threads must be first-class entities.
* AI chat must use synced emails as its exclusive knowledge base.
* AI chat answers must include source attribution.
* AI must say “I could not find this information in the synced emails” when the answer is not available.
* User must review AI-generated email drafts before sending.
* No automatic sending without explicit user action.
* Secrets must never be committed.
* README.md and Architecture.md must match the real implementation.
* Partial features must be documented honestly.

ENGINEERING PRINCIPLE:
For every major recommendation or design decision, think in this structure:

1. Why it is needed
2. Risk of ignoring it
3. Improved MVP implementation
4. Future-proof production approach

But do not over-engineer beyond the hiring deadline.
Prioritize a working, clean, demo-ready vertical slice.

==================================================
PHASE 0 — REQUIREMENT AUDIT AND DELIVERY STRATEGY
=================================================

Before coding, produce a concise senior engineering audit.

Create this table:

| Area | Explicit Requirement | Hidden Risk | MVP Approach | Future-Proof Approach |

Audit these areas:

1. Gmail OAuth
2. Gmail API scopes
3. Google OAuth sensitive/restricted scope review
4. Token storage
5. Session handling
6. User data isolation
7. Email privacy
8. Gmail sync volume
9. Gmail pagination
10. Gmail quota and rate limits
11. Incremental sync
12. Thread modeling
13. MIME email parsing
14. Label syncing
15. Supabase schema
16. Supabase RLS/security
17. pgvector and embedding dimension
18. Gemini usage
19. NVIDIA NIM usage
20. Prompt design
21. JSON validation
22. RAG retrieval quality
23. Source attribution
24. Hallucination prevention
25. Reply sending safety
26. Frontend UX
27. Error handling
28. Logging and observability
29. Testing
30. Deployment
31. Documentation
32. Known limitations

Then define scope:

P0 — Must work for submission:

* Google OAuth login
* Gmail sync latest 50/100 emails
* Supabase storage
* Email/thread/label modeling
* Inbox UI
* Email detail UI
* Thread detail UI
* Gemini email summary
* Gemini thread summary
* NVIDIA NIM categorization
* Gemini fallback for categorization
* pgvector embeddings
* RAG chat with email sources
* Compose draft
* Thread-aware reply draft
* README.md
* Architecture.md
* .env.example
* Deployable structure

P1 — Good if time:

* Gmail send reply
* Batch categorization
* Category filters
* Sync status page
* Basic tests
* Better UI polish

P2 — Document as future improvement if not built:

* Gmail push notifications
* Full Gmail History API sync
* Background job queue
* Attachment intelligence
* Advanced reranking
* Newsletter deduplication
* KMS token encryption
* Full RLS hardening
* Advanced monitoring
* Data deletion/export workflows

==================================================
PHASE 1 — ARCHITECTURE DECISION RECORDS
=======================================

Create a short Architecture Decision Record section inside Architecture.md.

For each major decision, include:

| Decision | Why | Risk if Ignored | MVP Choice | Future Production Choice |

Decisions to cover:

* React + Vite for frontend
* Node.js + Express for backend
* Supabase PostgreSQL for relational data
* pgvector for semantic search
* Gemini as primary generation model
* NVIDIA NIM as categorization/validation model
* OAuth backend-controlled token handling
* Gmail API instead of IMAP/SMTP
* Thread-first email model
* RAG with source metadata
* Draft-first email sending safety
* In-process sync for MVP
* Background worker queue for future

==================================================
PHASE 2 — PROJECT STRUCTURE
===========================

Create or refactor into this structure:

gmail-intelligence-platform/
frontend/
src/
api/
apiClient.js
authApi.js
gmailApi.js
aiApi.js
chatApi.js
components/
Navbar.jsx
EmailCard.jsx
EmailList.jsx
EmailDetail.jsx
ThreadView.jsx
SummaryBox.jsx
CategoryBadge.jsx
ChatBox.jsx
SourceList.jsx
DraftEditor.jsx
LoadingState.jsx
ErrorState.jsx
EmptyState.jsx
pages/
Login.jsx
Dashboard.jsx
Inbox.jsx
EmailPage.jsx
ThreadPage.jsx
Chat.jsx
Compose.jsx
hooks/
useAuth.js
useEmails.js
App.jsx
main.jsx
package.json

backend/
src/
config/
env.js
supabase.js
googleOAuth.js
middleware/
auth.middleware.js
error.middleware.js
rateLimit.middleware.js
routes/
auth.routes.js
gmail.routes.js
ai.routes.js
chat.routes.js
health.routes.js
controllers/
auth.controller.js
gmail.controller.js
ai.controller.js
chat.controller.js
services/
googleOAuth.service.js
gmail.service.js
gmailSync.service.js
gmailSend.service.js
supabase.service.js
gemini.service.js
nim.service.js
embedding.service.js
rag.service.js
summary.service.js
category.service.js
draft.service.js
prompts/
summarizeEmail.prompt.js
summarizeThread.prompt.js
categorizeEmail.prompt.js
composeEmail.prompt.js
replyThread.prompt.js
chatAgent.prompt.js
utils/
retry.js
gmailParser.js
emailHeaders.js
base64url.js
chunkText.js
jsonRepair.js
logger.js
validators.js
crypto.js
tests/
gmailParser.test.js
chunkText.test.js
jsonRepair.test.js
retry.test.js
server.js
package.json

supabase/
schema.sql

docs/
screenshots.md
manual-test-checklist.md

README.md
Architecture.md
.env.example
.gitignore

Architecture rules:

* Routes define endpoints only.
* Controllers handle HTTP request/response.
* Services contain business logic.
* Utils contain reusable low-level operations.
* Prompts are separate from service logic.
* No giant all-in-one files.
* Keep names clear and readable.
* Do not remove existing working code blindly.
* Inspect current files first, then patch carefully.

==================================================
PHASE 3 — ENVIRONMENT CONFIGURATION
===================================

Create backend/src/config/env.js.

Validate environment variables at startup.
If a required variable is missing, fail fast with a clear error.

Backend variables:
PORT=
NODE_ENV=
FRONTEND_URL=
BACKEND_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_ANON_KEY=

GEMINI_API_KEY=
GEMINI_MODEL=
GEMINI_EMBEDDING_MODEL=

NVIDIA_NIM_API_KEY=
NVIDIA_NIM_BASE_URL=
NVIDIA_NIM_MODEL=

JWT_SECRET=
COOKIE_SECRET=

Frontend variables:
VITE_BACKEND_URL=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

Create .env.example with descriptions and no secrets.

Why needed:
Missing environment variables are one of the most common reasons demos fail.

Risk of ignoring:
The app may crash at runtime with confusing errors.

MVP implementation:
Manual validation or small validation helper.

Future-proof:
Use Zod/Joi-based config validation and separate dev/staging/prod configs.

==================================================
PHASE 4 — SUPABASE DATABASE SCHEMA
==================================

Create supabase/schema.sql.

Enable:

* pgcrypto
* vector

Use normalized schema with clear constraints, indexes, and user isolation.

Required tables:

1. users
2. gmail_accounts
3. oauth_states
4. sync_state
5. sync_jobs
6. email_threads
7. email_messages
8. email_labels
9. email_message_labels
10. email_categories
11. email_summaries
12. email_embeddings
13. chat_sessions
14. chat_messages
15. email_drafts
16. ai_runs
17. audit_events

Table requirements:

users:

* id uuid primary key default gen_random_uuid()
* google_email text unique not null
* name text
* avatar_url text
* created_at timestamptz default now()
* updated_at timestamptz default now()

gmail_accounts:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* gmail_email text not null
* access_token text
* refresh_token text
* token_expiry timestamptz
* scope text
* created_at timestamptz default now()
* updated_at timestamptz default now()
  Unique: user_id + gmail_email

oauth_states:

* id uuid primary key default gen_random_uuid()
* state text unique not null
* code_verifier text
* redirect_after_login text
* expires_at timestamptz not null
* created_at timestamptz default now()

Why oauth_states is needed:
Protects OAuth flow against CSRF and supports PKCE-style future hardening.

sync_state:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* gmail_account_id uuid references gmail_accounts(id) on delete cascade
* last_history_id text
* last_sync_at timestamptz
* sync_status text default 'idle'
* error_message text
* created_at timestamptz default now()
* updated_at timestamptz default now()

sync_jobs:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* gmail_account_id uuid references gmail_accounts(id) on delete cascade
* job_type text not null
* status text default 'queued'
* total_items int default 0
* processed_items int default 0
* failed_items int default 0
* started_at timestamptz
* finished_at timestamptz
* error_message text
* metadata jsonb
* created_at timestamptz default now()

email_threads:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* gmail_thread_id text not null
* subject text
* participants jsonb
* message_count int default 0
* latest_message_at timestamptz
* thread_summary text
* created_at timestamptz default now()
* updated_at timestamptz default now()
  Unique: user_id + gmail_thread_id

email_messages:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* thread_id uuid references email_threads(id) on delete cascade
* gmail_message_id text not null
* gmail_thread_id text not null
* message_id_header text
* in_reply_to_header text
* references_header text
* sender_email text
* sender_name text
* to_emails jsonb
* cc_emails jsonb
* bcc_emails jsonb
* subject text
* snippet text
* body_text text
* body_html text
* internal_date timestamptz
* history_id text
* raw_headers jsonb
* size_estimate int
* has_attachments boolean default false
* body_hash text
* created_at timestamptz default now()
* updated_at timestamptz default now()
  Unique: user_id + gmail_message_id

email_labels:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* gmail_label_id text not null
* name text not null
* type text
* created_at timestamptz default now()
  Unique: user_id + gmail_label_id

email_message_labels:

* id uuid primary key default gen_random_uuid()
* message_id uuid references email_messages(id) on delete cascade
* label_id uuid references email_labels(id) on delete cascade
  Unique: message_id + label_id

email_categories:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* message_id uuid references email_messages(id) on delete cascade
* category text not null
* confidence numeric
* reason text
* model_used text
* prompt_version text
* created_at timestamptz default now()
  Unique: message_id

email_summaries:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* message_id uuid references email_messages(id) on delete cascade nullable
* thread_id uuid references email_threads(id) on delete cascade nullable
* summary_type text not null
* summary text not null
* action_items jsonb
* model_used text
* prompt_version text
* created_at timestamptz default now()

email_embeddings:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* message_id uuid references email_messages(id) on delete cascade nullable
* thread_id uuid references email_threads(id) on delete cascade nullable
* chunk_text text not null
* chunk_hash text not null
* chunk_index int
* source_type text
* embedding vector
* metadata jsonb
* embedding_model text
* created_at timestamptz default now()
  Unique: user_id + chunk_hash

chat_sessions:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* title text
* created_at timestamptz default now()
* updated_at timestamptz default now()

chat_messages:

* id uuid primary key default gen_random_uuid()
* session_id uuid references chat_sessions(id) on delete cascade
* role text not null
* content text not null
* sources jsonb
* retrieved_context jsonb
* created_at timestamptz default now()

email_drafts:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* thread_id uuid references email_threads(id) on delete set null
* message_id uuid references email_messages(id) on delete set null
* draft_type text not null
* prompt text
* subject text
* body text
* status text default 'draft'
* gmail_draft_id text
* created_at timestamptz default now()
* updated_at timestamptz default now()

ai_runs:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* feature text not null
* model_used text
* prompt_version text
* input_tokens int
* output_tokens int
* latency_ms int
* status text
* error_message text
* created_at timestamptz default now()

audit_events:

* id uuid primary key default gen_random_uuid()
* user_id uuid references users(id) on delete cascade
* event_type text not null
* metadata jsonb
* created_at timestamptz default now()

Required indexes:

* users(google_email)
* gmail_accounts(user_id)
* oauth_states(state)
* sync_state(user_id)
* sync_jobs(user_id, status)
* email_threads(user_id)
* email_threads(gmail_thread_id)
* email_messages(user_id)
* email_messages(gmail_message_id)
* email_messages(gmail_thread_id)
* email_messages(sender_email)
* email_messages(internal_date desc)
* email_messages(body_hash)
* email_categories(user_id)
* email_categories(category)
* email_summaries(message_id)
* email_summaries(thread_id)
* email_embeddings(user_id)
* email_embeddings(chunk_hash)
* chat_sessions(user_id)

Vector search:

* Use pgvector.
* Confirm embedding dimension from the selected Gemini embedding model.
* If the embedding model returns 768 dimensions, use vector(768).
* If it returns a different dimension, update schema and document it.
* Do not guess silently.

Create RPC:
match_email_embeddings(
query_embedding vector,
match_user_id uuid,
match_count int
)

Return:

* id
* chunk_text
* metadata
* similarity
* message_id
* thread_id

Security note:
All queries must filter by user_id.
Do not allow cross-user data leakage.

MVP RLS:
If using service role only from backend, document that backend enforces isolation.
If enabling frontend Supabase access, add RLS policies.

Future-proof:
Enable RLS for all user-owned tables and enforce auth.uid() based policies.

==================================================
PHASE 5 — GOOGLE OAUTH AND SCOPE STRATEGY
=========================================

Implement Google OAuth carefully.

Routes:

* GET /auth/google
* GET /auth/google/callback
* GET /auth/me
* POST /auth/logout

Recommended scopes for MVP:

* https://www.googleapis.com/auth/gmail.readonly
* https://www.googleapis.com/auth/gmail.send
* https://www.googleapis.com/auth/userinfo.email
* https://www.googleapis.com/auth/userinfo.profile

Use gmail.modify only if label modification is implemented.

Why:
Least privilege improves security and trust.

Risk of ignoring:
Overbroad scopes may create Google verification issues and scare users on consent screen.

MVP approach:
Use required read/send scopes and Google OAuth test users.

Future-proof:
Complete Google app verification, privacy policy, domain verification, and security assessment if needed.

OAuth flow:

1. Frontend opens backend /auth/google.
2. Backend creates OAuth URL with state.
3. Backend stores OAuth state.
4. Google redirects to backend callback.
5. Backend validates state.
6. Backend exchanges code for tokens.
7. Backend fetches Google profile.
8. Backend creates/updates user.
9. Backend stores Gmail account tokens.
10. Backend creates secure session.
11. Backend redirects to frontend dashboard.

Token handling:

* Refresh token backend-only.
* Access token backend-only.
* Do not send tokens to frontend.
* Do not log tokens.
* Store token expiry.
* Refresh token automatically.

MVP token storage:
Store tokens in backend-only Supabase tables.

Future-proof token storage:
Encrypt tokens using KMS, Supabase Vault, or AES-GCM with managed key rotation.

Document limitation:
If encryption is not implemented, clearly state:
"OAuth tokens are stored in backend-only database tables for MVP. Production should encrypt tokens using a managed key service."

==================================================
PHASE 6 — SESSION AUTH AND USER ISOLATION
=========================================

Implement session auth.

MVP options:

* signed HTTP-only cookie, or
* JWT stored in HTTP-only cookie

Do not store auth token in localStorage if avoidable.

Middleware:

* auth.middleware.js loads authenticated user.
* Every protected route requires auth.
* Every Supabase query filters by user_id.
* Never trust user_id from request body.

Why:
Email data is private.

Risk:
Without user isolation, one user may access another user's emails.

MVP:
HTTP-only session cookie + user_id from verified session.

Future-proof:
Secure cookies, SameSite, CSRF protection, refresh sessions, RLS, audit logs.

==================================================
PHASE 7 — GMAIL SYNC
====================

Routes:

* POST /gmail/sync
* GET /gmail/sync-status
* GET /gmail/messages
* GET /gmail/messages/:id
* GET /gmail/threads/:threadId
* GET /gmail/labels

Sync flow:

1. Authenticate user.
2. Load Gmail account.
3. Refresh token if expired.
4. Create sync_jobs record.
5. Fetch Gmail labels.
6. Fetch message list using pagination.
7. Limit to latest 50/100 emails for MVP.
8. Fetch each full message.
9. Parse safely.
10. Upsert thread.
11. Upsert message.
12. Upsert labels.
13. Link message-labels.
14. Store latest historyId.
15. Generate embeddings.
16. Categorize messages if enabled.
17. Update sync progress.
18. Mark sync job success/failure.

Pagination:

* Use nextPageToken.
* maxResults should be configurable.
* Do not assume one page.

Rate-limit handling:
Create retry utility with:

* exponential backoff
* jitter
* max retries
* retry only 429 and 5xx
* clear final error
* no infinite loops

Partial failures:

* If one email fails, log it and continue.
* Do not fail full sync unnecessarily.
* Store failure count and metadata in sync_jobs.

Idempotency:

* Upsert by user_id + gmail_message_id.
* Upsert thread by user_id + gmail_thread_id.
* Use chunk_hash to avoid duplicate embeddings.

Why:
Sync must be safe to re-run.

Risk:
Duplicate rows, wasted AI calls, broken demo.

Future-proof:
Move sync into queue worker with retry and dead-letter queue.

==================================================
PHASE 8 — INCREMENTAL SYNC
==========================

MVP:

* Store last_history_id and last_sync_at.
* Re-sync latest messages and rely on upserts.
* Avoid duplicates.

Better:

* Use Gmail History API.
* Fetch changes since last_history_id.
* Handle expired historyId by full resync.
* Use Gmail watch push notifications.
* Run sync in background queue.

Document clearly:

* What is implemented
* What is simplified
* Production strategy

Why:
Full re-sync wastes quota and time.

Risk:
Large inboxes become slow and unreliable.

==================================================
PHASE 9 — GMAIL PARSING
=======================

Create robust Gmail parser.

Must extract:

* subject
* sender name
* sender email
* to
* cc
* bcc
* snippet
* body_text
* body_html
* internal_date
* Message-ID
* In-Reply-To
* References
* labels
* historyId
* sizeEstimate
* raw headers
* has_attachments

Handle:

* multipart MIME
* nested parts
* text/plain
* text/html
* base64url decoding
* missing headers
* missing plain text body
* fallback to HTML stripped text
* fallback to snippet
* malformed sender
* empty body
* large emails
* encoded headers

Why:
Real Gmail messages are messy.

Risk:
Summaries, RAG, and replies become inaccurate.

MVP:
Defensive parser with recursive MIME traversal.

Future-proof:
Quote stripping, signature detection, attachment OCR/parsing, HTML sanitization.

==================================================
PHASE 10 — AI MODEL STRATEGY
============================

Gemini role:

* email summary
* thread summary
* compose email
* thread-aware reply
* final RAG answer
* fallback classification

NVIDIA NIM role:

* primary categorization model
* optional validation model

Why:
Gemini handles generation and reasoning. NVIDIA NIM is used meaningfully for classification.

Risk of ignoring:
NVIDIA NIM may appear as a checkbox-only integration.

MVP:
NIM categorizes emails. Gemini is fallback.

Future-proof:
Model router based on task, cost, speed, accuracy, and fallback policy.

AI service requirements:

* gemini.service.js
* nim.service.js
* timeout handling
* retry where safe
* JSON validation
* structured error handling
* model_used saved
* prompt_version saved
* ai_runs saved

Do not log full private email bodies unless explicitly needed for debugging in local dev.

==================================================
PHASE 11 — PROMPT ENGINEERING
=============================

Create separate prompt files:

1. summarizeEmail.prompt.js
2. summarizeThread.prompt.js
3. categorizeEmail.prompt.js
4. composeEmail.prompt.js
5. replyThread.prompt.js
6. chatAgent.prompt.js

Prompt rules:

* strict instructions
* JSON output where needed
* no markdown for JSON tasks
* no unsupported claims
* source-only grounding for chat
* concise outputs
* professional tone
* clear fallback behavior

Email summary output:
{
"summary": "...",
"sender_intent": "...",
"required_action": "...",
"urgency": "low | medium | high",
"important_dates": [],
"people_or_companies": []
}

Thread summary output:
{
"thread_summary": "...",
"conversation_arc": "...",
"current_status": "...",
"open_questions": [],
"next_steps": [],
"important_dates": [],
"participants": []
}

Categorization output:
{
"category": "Finance",
"confidence": 0.92,
"reason": "..."
}

Compose output:
{
"subject": "...",
"body": "..."
}

Reply output:
{
"subject": "...",
"body": "...",
"assumptions": [],
"missing_info": []
}

Chat output:
{
"answer": "...",
"sources": [
{
"sender": "...",
"subject": "...",
"date": "...",
"reason_used": "..."
}
],
"not_found": false
}

Chat system rule:
You are an email intelligence assistant.
You must answer only using the provided retrieved email context.
If the answer is not present in the context, say:
"I could not find this information in the synced emails."
Do not guess.
Do not use outside knowledge.
Always include sources.

==================================================
PHASE 12 — JSON VALIDATION AND AI OUTPUT SAFETY
===============================================

Create jsonRepair.js and validators.js.

For AI JSON responses:

1. Try JSON.parse.
2. If invalid, attempt safe extraction/repair once.
3. Validate required fields.
4. Validate enum values.
5. If still invalid, return controlled error or fallback model.
6. Never crash route due to malformed AI output.

Why:
LLMs may return invalid JSON.

Risk:
Frontend breaks and demo fails.

Future-proof:
Use schema validation with Zod and model function-calling/structured output where available.

==================================================
PHASE 13 — EMAIL SUMMARIZATION
==============================

Routes:

* POST /ai/summarize-message/:id
* POST /ai/summarize-thread/:threadId

Message summary:

1. Authenticate user.
2. Load message by id and user_id.
3. Send sender, subject, date, body to Gemini.
4. Validate JSON.
5. Save email_summaries.
6. Save ai_runs.
7. Return summary.

Thread summary:

1. Load thread by user_id.
2. Load messages ordered by internal_date ascending.
3. Build chronological context.
4. If long, chunk messages.
5. Summarize chunks.
6. Combine into final thread summary.
7. Save email_summaries.
8. Update email_threads.thread_summary.

Why:
The assignment requires thread-aware understanding.

Risk:
Summarizing replies individually loses conversation meaning.

Future-proof:
Conversation-state tracking, topic segmentation, and quote stripping.

==================================================
PHASE 14 — CATEGORIZATION
=========================

Routes:

* POST /ai/categorize/:id
* POST /ai/categorize-batch

Allowed categories:

* Newsletters
* Job / Recruitment
* Finance
* Notifications
* Personal
* Work / Professional

Process:

1. Load email by user_id.
2. Send subject, sender, snippet, body to NVIDIA NIM.
3. Parse and validate JSON.
4. Validate category enum.
5. Save category, confidence, reason, model_used.
6. If NIM fails, fallback to Gemini.
7. Save ai_runs.

Batch:

* small concurrency only
* avoid aggressive parallel calls
* do not exceed API limits

Why:
Categorization proves AI automation value.

Risk:
Without it, the product is only a summarizer.

==================================================
PHASE 15 — EMBEDDINGS AND RAG
=============================

Embedding process:

1. Build chunk input from:

   * subject
   * sender
   * date
   * snippet
   * body_text
   * category if available
2. Chunk text by token/character budget.
3. Create chunk_hash.
4. Skip existing chunk_hash.
5. Generate embedding.
6. Store vector with metadata.

Metadata:
{
"sender": "...",
"sender_email": "...",
"subject": "...",
"date": "...",
"gmail_message_id": "...",
"gmail_thread_id": "...",
"category": "..."
}

RAG query:

1. Authenticate user.
2. Receive user question.
3. Embed the question.
4. Search pgvector with user_id filter.
5. Retrieve top K chunks.
6. Optionally apply keyword/date/category filtering.
7. Build context with source metadata.
8. Include recent chat turns only for conversational continuity.
9. Ask Gemini to answer only from retrieved context.
10. Validate answer.
11. Return answer with sources.
12. Store chat messages and retrieved sources.

Important:
Conversation history can clarify follow-up questions, but factual claims must come only from retrieved email chunks.

Why:
This is the centerpiece of the assignment.

Risk:
Without retrieval grounding, the chat agent will hallucinate.

Future-proof:
Hybrid search, reranking, query decomposition, temporal filters, source confidence scoring.

==================================================
PHASE 16 — SOURCE ATTRIBUTION
=============================

Every chat answer must show sources.

Source object:
{
"sender": "...",
"sender_email": "...",
"subject": "...",
"date": "...",
"gmail_message_id": "...",
"gmail_thread_id": "...",
"reason_used": "..."
}

Frontend must display source list under answer.

Why:
The assignment explicitly requires source clarity.

Risk:
Evaluator may reject the AI agent as ungrounded.

MVP:
Show sender, subject, date, and reason.

Future-proof:
Clickable source links to email/thread detail pages.

==================================================
PHASE 17 — AI CHAT AGENT
========================

Routes:

* POST /chat/session
* GET /chat/sessions
* GET /chat/sessions/:id
* POST /chat/message

Frontend:

* chat input
* conversation history
* answer cards
* source cards
* not-found state
* loading state

Must support:

* "Summarize all emails from Acme Corp this month."
* "Which companies rejected my job application?"
* "What has been discussed about the data migration project?"
* "Give me an overview of Kubernetes from my emails."
* "List important tech news from recent newsletters."

If no source context:
Return:
"I could not find this information in the synced emails."

==================================================
PHASE 18 — COMPOSE AND THREAD-AWARE REPLY
=========================================

Compose route:

* POST /ai/compose

Input:
{
"prompt": "...",
"tone": "professional"
}

Output:
{
"subject": "...",
"body": "..."
}

Store in email_drafts.
Do not auto-send.

Thread reply route:

* POST /gmail/reply-draft

Input:
{
"threadId": "...",
"messageId": "...",
"instruction": "..."
}

Process:

1. Authenticate user.
2. Load thread by user_id.
3. Load selected message by user_id.
4. Build chronological thread context.
5. Ask Gemini for reply draft.
6. Store draft.
7. Return editable draft.

Optional send route:

* POST /gmail/send-reply

If implemented:

1. Load draft.
2. Load original message headers.
3. Build RFC 2822 email.
4. Set To.
5. Set Subject.
6. Set In-Reply-To.
7. Set References.
8. Use same Gmail threadId.
9. Base64url encode.
10. Send via Gmail API users.messages.send.
11. Record audit_event.

Safety:
Never send without explicit user action.

Why:
AI emails may be inaccurate or risky.

Future-proof:
Approval workflow, send preview, audit trail, undo/send delay.

==================================================
PHASE 19 — FRONTEND MVP
=======================

Pages:

1. Login
2. Dashboard
3. Inbox
4. Email Detail
5. Thread Detail
6. Chat
7. Compose

Login:

* product name
* brief value proposition
* Connect Gmail button

Dashboard:

* Sync Gmail button
* Sync status
* total synced emails
* total threads
* categorized count
* summaries count
* quick links

Inbox:

* sender
* subject
* snippet
* date
* category badge
* search/filter
* pagination or limited list

Email Detail:

* full email
* summary button
* categorization button
* view thread button
* metadata

Thread Detail:

* chronological messages
* thread summary
* reply draft instruction box
* draft editor

Chat:

* chat input
* answer
* source list
* not-found state

Compose:

* prompt input
* tone selector
* generated subject/body
* save/discard

UX:

* loading states
* error states
* empty states
* responsive design
* simple professional UI
* no unnecessary animations
* evaluator-friendly navigation

==================================================
PHASE 20 — API DESIGN
=====================

Use consistent responses.

Success:
{
"success": true,
"data": {}
}

Error:
{
"success": false,
"error": {
"message": "...",
"code": "..."
}
}

Add:

* centralized error middleware
* auth middleware
* input validation
* health route
* CORS restricted to frontend URL

Health:
GET /health

Response:
{
"status": "ok",
"timestamp": "..."
}

==================================================
PHASE 21 — SECURITY REVIEW
==========================

Implement MVP security:

* no secrets committed
* .env ignored
* service role key backend-only
* OAuth secret backend-only
* refresh token backend-only
* access token backend-only
* no token logging
* no full email body logging
* user_id from session only
* all queries scoped by user_id
* CORS restricted
* secure logout
* audit sensitive actions

Document limitations:

* token encryption simplified unless implemented
* no Google production verification
* limited RLS unless implemented
* no full data deletion flow unless implemented

Future-proof:

* KMS token encryption
* Supabase Vault
* strict RLS
* CSRF protection
* OAuth verification
* privacy policy
* data export/delete
* security monitoring

==================================================
PHASE 22 — PERFORMANCE AND RELIABILITY
======================================

MVP performance:

* sync latest 50/100 emails
* small concurrency
* upserts
* chunk_hash deduplication
* top K retrieval
* avoid re-embedding unchanged emails
* pagination-aware backend
* loading states frontend

Reliability:

* retry Gmail 429/5xx
* timeout AI calls
* log failed sync items
* continue partial sync
* save sync_jobs status
* avoid crashing entire request

Future-proof:

* background worker
* dead-letter queue
* Gmail watch
* History API
* embedding cache
* hybrid search
* reranking
* frontend virtualization

==================================================
PHASE 23 — OBSERVABILITY
========================

Add:

* logger utility
* health route
* sync_jobs tracking
* ai_runs tracking
* audit_events
* clear error messages

Do not log:

* API keys
* OAuth tokens
* refresh tokens
* full private email bodies unnecessarily

Why:
Debugging and evaluator trust.

Risk:
Failures become invisible.

==================================================
PHASE 24 — TESTING
==================

Add at least:

* gmailParser.test.js
* chunkText.test.js
* jsonRepair.test.js
* retry.test.js
* manual-test-checklist.md

Manual checklist must cover:

1. OAuth login
2. Gmail sync
3. Email list
4. Email detail
5. Thread detail
6. Email summary
7. Thread summary
8. Categorization
9. Chat with sources
10. Not-found chat response
11. Compose draft
12. Reply draft
13. Logout

Why:
Email parsing and AI JSON are failure-prone.

Future-proof:
CI pipeline with lint, unit tests, integration tests, and mock Gmail fixtures.

==================================================
PHASE 25 — DEPLOYMENT READINESS
===============================

Make the app deployable.

README must explain:

* local setup
* Supabase setup
* schema migration
* Google OAuth setup
* OAuth redirect URI
* Gemini setup
* NVIDIA NIM setup
* frontend deployment
* backend deployment
* environment variables
* test users in Google Cloud
* known deployment pitfalls

Deployment checklist:

* frontend env set
* backend env set
* Supabase schema applied
* Google OAuth redirect URI configured
* OAuth consent screen test user added
* Gemini key configured
* NVIDIA NIM key configured
* CORS configured
* health endpoint works

==================================================
PHASE 26 — README.md
====================

Create complete README.md:

1. Project title
2. Overview
3. Demo flow
4. Features implemented
5. Tech stack
6. Architecture summary
7. Folder structure
8. Prerequisites
9. Environment variables
10. Supabase setup
11. Google Cloud OAuth setup
12. Gemini setup
13. NVIDIA NIM setup
14. Local backend setup
15. Local frontend setup
16. Database migration
17. How to run
18. How to test main flows
19. Deployment guide
20. Security notes
21. Known limitations
22. Future improvements

Make it clear enough that evaluator can run the project.

==================================================
PHASE 27 — ARCHITECTURE.md
==========================

Create excellent Architecture.md.

Required sections:

1. Executive Summary

2. Requirement Coverage Matrix

| Assignment Requirement | Implemented? | Location | Notes |

3. System Architecture
   Include ASCII diagram:

User
|
React Frontend
|
Express Backend
|
|-- Google OAuth / Gmail API
|-- Gemini API
|-- NVIDIA NIM API
|
Supabase PostgreSQL + pgvector

4. Component Responsibilities

5. Data Flows:

* OAuth flow
* Gmail sync flow
* email parsing flow
* summarization flow
* categorization flow
* embedding flow
* RAG chat flow
* compose flow
* thread reply flow

6. Database Schema:
   Explain every table:

* purpose
* key columns
* relationships
* indexes
* constraints

7. AI Design:

* Gemini role
* NVIDIA NIM role
* prompt design
* JSON validation
* summarization strategy
* long thread chunking
* categorization strategy
* embeddings
* RAG
* source attribution
* hallucination prevention
* fallback handling

8. Gmail API Strategy:

* OAuth scopes
* initial sync
* pagination
* rate limit handling
* exponential backoff
* incremental sync
* historyId
* Gmail send strategy
* thread headers

9. Security Design:

* token handling
* session handling
* user isolation
* secrets management
* logging restrictions
* MVP limitations
* production hardening

10. Performance and Scalability:

* sync limits
* batching
* AI latency
* vector search
* background jobs
* future scaling

11. Reliability:

* retries
* partial failures
* sync_jobs
* idempotency

12. Testing Strategy

13. Observability

14. Tool and Technology Decisions

15. Trade-offs and Limitations

16. Future Improvements

17. Interview Defense Notes:
    Add a short section explaining how to answer:

* Why this architecture?
* Why pgvector?
* Why Gemini + NVIDIA NIM?
* How do you prevent hallucination?
* How do you handle Gmail scale?
* What would you improve with more time?

==================================================
PHASE 28 — ACCEPTANCE CRITERIA
==============================

Before finalizing, verify:

Functional:

* User can connect Gmail
* OAuth callback works
* Session works
* User can sync emails
* Emails stored in Supabase
* Threads stored separately
* Labels stored
* User can view inbox
* User can open email
* User can open thread
* User can summarize email
* User can summarize thread
* User can categorize email
* User can filter by category if implemented
* Embeddings are created
* Chat retrieves email chunks
* Chat answers with sources
* Chat says not found when needed
* User can compose draft
* User can create thread-aware reply draft

Technical:

* Gmail API used
* Pagination exists
* Retry/backoff exists
* Incremental sync strategy exists
* Supabase schema exists
* pgvector used
* Gemini used
* NVIDIA NIM used
* Prompts separated
* JSON validation exists
* Error handling exists
* Security basics handled
* README exists
* Architecture exists
* .env.example exists
* No secrets committed
* Project runs locally

==================================================
PHASE 29 — FINAL SELF-AUDIT
===========================

After implementation, audit like a strict Repeatless evaluator.

Create table:

| Area | Score /10 | Evidence | Problem | Fix |

Score:

1. Gmail OAuth
2. OAuth scopes
3. Token handling
4. Session/auth
5. User isolation
6. Gmail sync
7. Pagination
8. Rate-limit retry
9. Incremental sync
10. Email parsing
11. Thread modeling
12. Label syncing
13. Supabase schema
14. pgvector usage
15. Embedding pipeline
16. RAG retrieval
17. Source attribution
18. Hallucination prevention
19. Gemini integration
20. NVIDIA NIM integration
21. Email summary
22. Thread summary
23. Categorization
24. Compose draft
25. Thread reply draft
26. Frontend UX
27. Security
28. Testing
29. Observability
30. README
31. Architecture
32. Deployment readiness
33. Code quality
34. Product thinking

Fix in this order:

1. Runtime-breaking errors
2. Missing mandatory requirements
3. Security/data isolation issues
4. Broken Gmail sync
5. Broken RAG/source attribution
6. Missing Gemini/NIM usage
7. Weak README/Architecture
8. UI polish
9. Tests/checklist

Do not fake fixes.
Do not claim features work unless implemented.
If partial, document honestly.

==================================================
FINAL OUTPUT EXPECTATION
========================

Generate:

* complete source code
* clean project structure
* Supabase schema.sql
* README.md
* Architecture.md
* .env.example
* .gitignore
* tests or manual test checklist
* local run instructions
* deployment notes
* honest limitations
* future improvements
* evaluator-ready documentation

The final project should be:

* functional
* clean
* secure enough for MVP
* production-minded
* easy to understand
* easy to explain
* aligned with the Repeatless assignment
* honest about limitations
* strong enough to defend in an interview

FINAL GOAL:
Build a serious AI automation MVP that proves I can design and implement a Gmail Intelligence Platform using Gmail API, OAuth 2.0, Supabase PostgreSQL, pgvector, Gemini, NVIDIA NIM, RAG, source attribution, thread awareness, secure architecture, clean code, and strong technical documentation.
