"""
Chat Router

Handles the main chat endpoint where students ask academic
advising questions. The full implementation will:

1. Receive the student's question + context (major, classes taken)
2. Generate an embedding of the query
3. Retrieve relevant document chunks from FAISS
4. Construct a prompt with context and guardrails
5. Get a response from the local LLM via Ollama
6. Return the response with citations

For now this returns a placeholder response so the frontend
team can build against a working endpoint.
"""

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/chat", tags=["chat"])


class ChatRequest(BaseModel):
    """What the frontend sends to the backend."""
    question: str
    major: str | None = None
    minor: str | None = None
    classes_taken: list[str] = []


class Citation(BaseModel):
    """A reference to a source document."""
    source: str
    text: str


class ChatResponse(BaseModel):
    """What the backend sends back to the frontend."""
    answer: str
    citations: list[Citation] = []


@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Main chat endpoint.

    Accepts a student's question and academic context,
    returns an AI-generated answer with citations.

    TODO: Wire up the RAG pipeline (embedding → retrieval → LLM).
    """
    # Placeholder response for frontend development
    return ChatResponse(
        answer=(
            f"This is a placeholder response to: '{request.question}'. "
            "The RAG pipeline is not yet connected. "
            "Once implemented, this will return a grounded answer "
            "with citations from UNG academic documents."
        ),
        citations=[
            Citation(
                source="UNG Academic Catalog 2024-2025",
                text="Example citation — will be replaced with real retrieved text."
            )
        ],
    )
