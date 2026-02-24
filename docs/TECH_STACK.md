# Technology Stack

## Hardware
- Mac mini (M4 Pro, 24 GB RAM)
- macOS 15.7.3

## Backend & API
| Tool | Purpose |
|------|---------|
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| Pydantic | Data validation and schemas |
| Poetry | Python dependency management |

## LLM Orchestration & Retrieval (RAG Pipeline)
| Tool | Purpose |
|------|---------|
| LlamaIndex | RAG orchestration framework |
| Ollama | Local LLM inference server |
| Llama 3.x 8B | Primary local language model |
| Mistral 7B | Alternative local model |
| Phi-3 | Lightweight alternative model |
| Sentence Transformers | Embedding generation |
| FAISS (CPU) | Vector similarity search |

## Database & Storage
| Tool | Purpose |
|------|---------|
| PostgreSQL | Primary database |
| pgvector | Vector storage extension (later phase) |

## Frontend
| Tool | Purpose |
|------|---------|
| React | UI framework |
| Node.js (LTS) | JavaScript runtime |
| npm | Package manager |
| Tailwind CSS | Utility-first CSS framework |
| Next.js | Optional SSR framework |

## Research & Evaluation
| Tool | Purpose |
|------|---------|
| JupyterLab | Experiment notebooks |
| Pandas | Data analysis |
| NumPy | Numerical computation |
| Matplotlib | Visualization |
| RAGAS | RAG evaluation framework |
| Weights & Biases | Experiment tracking |

## Data Sources
- UNG Academic Catalog PDFs
- Degree requirement documents
- Prerequisite charts
- Advising FAQ documents

## Security & Guardrails
- Prompt templates with citation enforcement
- Hallucination detection checks
- Advisor escalation rules
- No personal student data stored
