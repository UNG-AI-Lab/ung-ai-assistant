"""
Retrieval Service

This module handles searching the FAISS vector index to find
document chunks relevant to a user's query. The Backend/AI
team should implement the following:

- Load or initialize a FAISS index
- Accept a query embedding
- Return the top-k most relevant document chunks with metadata

Reference: https://github.com/facebookresearch/faiss
"""


def retrieve(query_embedding: list[float], top_k: int = 5) -> list[dict]:
    """
    Retrieve the most relevant document chunks for a query.

    Args:
        query_embedding: The vector embedding of the user's query.
        top_k: Number of results to return.

    Returns:
        A list of dicts, each with keys: "text", "source", "score"
    """
    # TODO: Implement FAISS similarity search
    raise NotImplementedError("Retrieval service not yet implemented")
