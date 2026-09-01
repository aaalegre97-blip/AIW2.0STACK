# Content Engine — Structure Overview

**Auto-generated:** 2026-08-04 by `/load-engine-structure`
**Source of truth:** `content-engine/` in this stack (Next.js + Supabase project)

## What the Engine does

A personal content-ideation and script-generation system. The student loads seven "Library buckets" with source material once — their niche context, their own voice samples, competitor structure references, expert content, video ideas, hard rules, and past-post feedback — and then asks Claude for scripts, hooks, reels, or carousels on demand. Every generated piece is anchored to the student's voice bucket and constrained by the instructions bucket, so it sounds like them and never violates their rules.

## Content types the Engine produces

- Instagram reels (script + captions + hook + CTA)
- Carousel posts (slide-by-slide copy)
- Story sequences
- Long-form video scripts (YouTube / podcast)
- Written captions and hooks
- Post-performance feedback learnings (auto-written by the engine after posts go up)

## The seven buckets (canonical, from `content-engine/src/lib/content-engine/buckets.ts`)

| Slug | Label | Purpose | Icon | Color | Accepted source types |
|---|---|---|---|---|---|
| `video_ideas` | Video Ideas | One-line topic dumps. Generator pulls from here when the student asks "what should I make today". | Lightbulb | amber | text, instagram_reel, tiktok_url, youtube_url, link |
| `inspiration` | Inspiration | Competitor reels and viral examples. Generator extracts structure, never the topic. | Sparkles | purple | instagram_reel, tiktok_url, youtube_url, link, text |
| `expert_brain` | Expert Brain | Long-form sources: YouTube channels, books, podcasts, frameworks. | Brain | blue | youtube_url, pdf, link, text, audio_file, video_file |
| `my_voice` | My Voice & Content | The student's past posts, captions, voice memos, writing samples. Voice anchor for every script. | AudioLines | emerald | text, audio_file, video_file, instagram_reel, tiktok_url, youtube_url, link |
| `context` | Context | Niche context — offer, avatar, lead magnet, business info. PDFs, URLs, voice notes, or text. | FolderOpen | orange | text, pdf, link, audio_file, video_file, youtube_url |
| `instructions` | Instructions / Intent | Hard rules: "always end with comment WEB", "no swearing", banned topics, sign-offs. | Settings | zinc | text |
| `feedback` | Feedback | Auto-written learnings from posted content's performance. | MessageSquare | rose | text |

**Note on naming:** The framework template calls the fifth bucket `my_business`; the actual code uses `context`. Same purpose, different label. This doc reflects the code.

## Voice / style metadata

The generator reads from `my_voice` first to establish the student's voice fingerprint (register, sentence rhythm, banned phrases, catchphrases, punctuation habits). Prompts at `content-engine/src/lib/ai/prompts.ts` assemble the voice anchor before the topic prompt so scripts sound like the student, not like a generic AI content bot.

The `instructions` bucket layers hard constraints on top: things like "never use em-dashes," "always end with call-to-DM", "no cursing", "sign off with — Alan". These are treated as non-negotiable filters on every output.

## Source ingestion pipelines

Per `content-engine/src/app/api/context/route.ts` (the ingestion API):

| Source type | Pipeline |
|---|---|
| `text` | Direct store, framework-extraction pass for `expert_brain` items |
| `youtube_url` | Transcript extract → summarize → tag by relevance |
| `instagram_reel` | Apify metadata + audio scrape → transcript → structural extract |
| `tiktok_url` | Same as IG reel via Apify |
| `pdf` | Extract text → chunk → summarize |
| `link` | Fetch page → clean → summarize |
| `audio_file` | AssemblyAI transcribe → summarize |
| `video_file` | Extract audio → AssemblyAI transcribe → summarize |

All ingested items land in Supabase Postgres. The generator queries by bucket + tags at generation time and packs the most relevant items into the prompt context window.

## Handoff format for Module 7

The next command (`/generate-ce-brief`) produces `research/output/content-engine-brief.md` structured by these seven buckets. Every bucket in the brief has:
- A short description of what belongs in it
- 3-8 concrete example items the student should load first (URLs, text prompts, PDFs)
- Any niche-specific rules the student should add to `instructions`

`/walk-engine` then walks the student through pasting each bucket's section into the live dashboard one at a time.

## Required env vars for deploy (from `content-engine/vercel.json` + code refs)

**Required:**
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`
- `APIFY_TOKEN`

**Optional:**
- `ASSEMBLYAI_API_KEY` — needed only if `my_voice` or `expert_brain` will ingest audio/video files
- `OPENAI_API_KEY` — some pipelines fall back to OpenAI for embedding/transcription if AssemblyAI missing

All five required env vars are already in `.env.local` from `/setup`.

## Deploy target

Vercel project, Next.js app runtime. Deploy command: `/deploy-engine` (Module — not the factory) which uses Vercel CLI to deploy from `content-engine/` and wires the Supabase migrations.

## Directory topology reference (auto-generated)

```
content-engine/
  src/
    app/
      api/
        context/            # ingestion + retrieval API for the 7 buckets
        generate/           # Claude generation endpoints (scripts / reels / captions)
        auth/               # Supabase auth handlers
      dashboard/            # the seven-bucket UI
    lib/
      content-engine/
        buckets.ts          # canonical bucket + source-type definitions
        ingest.ts           # ingestion orchestration
        retrieval.ts        # query the buckets for generation
        types.ts            # shared TS types
      ai/
        prompts.ts          # master prompt assembly (voice + instructions + task)
      supabase/             # server-side Supabase client
  supabase/                 # migrations + seed files
  vercel.json               # deploy config
  package.json              # Next.js app deps
  README.md                 # engine-specific docs
```

## What's next in the flow

After `m6.engineStructureLoaded = true`:
1. `/generate-ce-brief` (Module 7) — writes `research/output/content-engine-brief.md` with the seven-bucket content plan for storm-restoration roofing
2. `/deploy-engine` — deploys the engine to Vercel with Supabase migrations
3. `/walk-engine` — walks bucket-by-bucket paste into the live dashboard
