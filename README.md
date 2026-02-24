# UNG AI Assistant

AI academic assistant built to help students at the **University of North Georgia** answer questions about their education.

## Project Overview

This project is developed by the **UNG AI Lab** as part of an ongoing research initiative exploring the use of artificial intelligence in academic advising and student support.

## Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | React (Vite) |
| Backend  | FastAPI (Python) |
| Package Manager | Poetry |
| CI/CD    | GitHub Actions |

## Repository Structure

```
ung-ai-assistant/
├── backend/         # FastAPI application
├── frontend/        # React application (Vite)
├── docs/            # Research documentation and architecture
├── scripts/         # Setup and automation scripts
├── .github/         # CI/CD workflows
├── CONTRIBUTING.md  # Contribution guidelines
└── LICENSE          # MIT License
```
## Getting Started

### Prerequisites

- Python 3.12+
- Node.js 20+
- Poetry (`pip install poetry`)
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

## Team

Built by the UNG AI Lab research team.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
