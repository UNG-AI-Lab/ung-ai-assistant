"""
Embedding Service

This module handles converting text into vector embeddings
using Sentence Transformers. The Backend/AI team should
implement the following:

- Load a Sentence Transformer model
- Accept raw text (document chunks or user queries)
- Return embedding vectors for storage or similarity search

Reference: https://www.sbert.net/
"""


def generate_embedding(text: str) -> list[float]:
    """
    Generate a vector embedding for the given text.

    Args:
        text: The raw text to embed (a document chunk or user query).

    Returns:
        A list of floats representing the embedding vector.
    """
    # TODO: Implement using sentence-transformers
    raise NotImplementedError("Embedding service not yet implemented")
