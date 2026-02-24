# UNG AI Assistant

AI academic assistant built to help students at the **University of North Georgia** answer questions about their education, powered by RAG (Retrieval-Augmented Generation) and local LLM inference.

## What It Does

Students enter their major, minor, and completed classes. The assistant answers academic advising questions by retrieving information from official UNG documents (catalogs, degree requirements, prerequisite charts, FAQs) and generating grounded, cited responses using local language models.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Tailwind CSS, Vite |
| Backend | FastAPI, Uvicorn, Pydantic |
| RAG Pipeline | LlamaIndex, Sentence Transformers, FAISS |
| LLM Inference | Ollama (Llama 3.x 8B, Mistral 7B, Phi-3) |
| Database | PostgreSQL (pgvector in later phase) |
| Package Management | Poetry (backend), npm (frontend) |
| CI/CD | GitHub Actions |

## Repository Structure

```
ung-ai-assistant/
├── backend/           # FastAPI + RAG pipeline
│   ├── app/
│   │   ├── main.py    # FastAPI entry point
│   │   ├── routers/   # API route handlers
│   │   ├── models/    # Data models
│   │   ├── schemas/   # Pydantic schemas
│   │   └── services/  # Business logic + RAG pipeline
│   ├── tests/
│   └── pyproject.toml
├── frontend/          # React + Tailwind
├── docs/              # Architecture, tech stack, roles, UI designs
├── scripts/           # Setup and automation
├── .github/           # CI/CD workflows
├── CONTRIBUTING.md    # Git workflow for the team
└── LICENSE            # MIT
```

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 20+
- Poetry (`pip install poetry`)
- Ollama (for local LLM inference)
- Git

### Backend Setup

```bash
cd backend
poetry install
poetry run uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`
API docs at `http://localhost:8000/docs`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — system design and request flow
- [Tech Stack](docs/TECH_STACK.md) — full list of tools and technologies
- [Team Roles](docs/ROLES.md) — responsibilities for each team role
- [Contributing](CONTRIBUTING.md) — Git workflow and coding guidelines

## Team

Built by the **UNG AI Lab** research team at the University of North Georgia.

## License

MIT License. See [LICENSE](LICENSE) for details.
