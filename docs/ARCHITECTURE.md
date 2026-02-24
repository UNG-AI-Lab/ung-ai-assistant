# Architecture

## Overview

The UNG AI Assistant is a RAG-based (Retrieval-Augmented Generation) web application that helps University of North Georgia students get answers to academic advising questions. It retrieves information from official UNG documents and generates grounded responses using local language models.

## System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                  │
│                    React + Tailwind CSS                           │
│                                                                   │
│  ┌─────────────┐  ┌──────────────────┐  ┌─────────────────────┐ │
│  │  Student     │  │   Chat Interface  │  │  Schedule / Prof    │ │
│  │  Info Panel  │  │   (Main Panel)    │  │  Info Panel         │ │
│  │             │  │                    │  │                     │ │
│  │  - Major    │  │  - Messages        │  │  - Class cards      │ │
│  │  - Minor    │  │  - Citations       │  │  - Professor info   │ │
│  │  - Classes  │  │  - Input bar       │  │  - Ratings          │ │
│  └─────────────┘  └──────────────────┘  └─────────────────────┘ │
└──────────────────────────┬───────────────────────────────────────┘
                           │ HTTP / REST
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                        BACKEND (FastAPI)                          │
│                                                                   │
│  ┌────────────┐  ┌────────────────┐  ┌────────────────────────┐ │
│  │  API       │  │  RAG Pipeline   │  │  Prompt Engine         │ │
│  │  Routes    │──│  (LlamaIndex)   │──│  - System prompts      │ │
│  │            │  │                  │  │  - Citation rules      │ │
│  └────────────┘  └───────┬────────┘  │  - Safety guardrails   │ │
│                          │           └────────────────────────┘ │
│                          ▼                                       │
│              ┌───────────────────────┐                           │
│              │   Retrieval Layer      │                           │
│              │                        │                           │
│              │  Sentence Transformers │                           │
│              │  → FAISS Vector Search │                           │
│              │  → Reranking           │                           │
│              └───────────┬───────────┘                           │
│                          │                                       │
│                          ▼                                       │
│              ┌───────────────────────┐                           │
│              │   LLM Layer (Ollama)   │                           │
│              │                        │                           │
│              │  - Llama 3.x 8B       │                           │
│              │  - Mistral 7B         │                           │
│              │  - Phi-3              │                           │
│              └───────────────────────┘                           │
└──────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                   │
│                                                                   │
│  ┌─────────────────┐  ┌──────────────────────────────────────┐  │
│  │  PostgreSQL      │  │  Document Corpus                     │  │
│  │  (+ pgvector     │  │                                      │  │
│  │   later phase)   │  │  - UNG Academic Catalog PDFs         │  │
│  │                   │  │  - Degree requirement docs           │  │
│  └─────────────────┘  │  - Prerequisite charts                │  │
│                        │  - Advising FAQ documents             │  │
│                        └──────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

## Request Flow

1. **Student** enters a question in the chat interface
2. **Frontend** sends the query (along with student context: major, minor, completed classes) to the FastAPI backend
3. **Backend** receives the request and passes it to the RAG pipeline
4. **LlamaIndex** generates an embedding of the query using Sentence Transformers
5. **FAISS** performs vector similarity search against the document corpus
6. **Reranker** scores and filters the top retrieved chunks
7. **Prompt Engine** constructs a grounded prompt with retrieved context, system instructions, and citation rules
8. **Ollama** generates a response using the local LLM (Llama 3.x, Mistral, or Phi-3)
9. **Backend** returns the response with citations to the frontend
10. **Frontend** renders the answer with clickable citation links and updates the schedule panel if relevant

## UI Layout

The interface uses a three-panel layout:

- **Left Panel:** Student profile (major, minor, completed classes)
- **Center Panel:** Chat interface with AI responses, citations, and input bar
- **Right Panel:** Schedule cards (upcoming classes, times) and professor info with ratings

See `docs/ui-designs/` for mockup screenshots.

## Key Design Decisions

- **Local LLM inference** via Ollama — avoids API costs, keeps student data on-premises
- **FAISS over cloud vector DBs** — zero cost, sufficient for academic document scale
- **Citation enforcement** — every AI response must reference source documents
- **No personal data storage** — students enter their info per session, nothing persists
- **Hallucination guardrails** — prompt templates enforce grounded responses with escalation to human advisors when confidence is low
