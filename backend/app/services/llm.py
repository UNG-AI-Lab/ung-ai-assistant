"""
LLM Service

This module handles communication with the local LLM running
via Ollama. The Backend/AI team should implement the following:

- Connect to the Ollama API
- Accept a constructed prompt (with retrieved context)
- Return the model's generated response

Models available: Llama 3.x 8B, Mistral 7B, Phi-3
Reference: https://ollama.com/
"""


def generate_response(prompt: str, model: str = "llama3") -> str:
    """
    Generate a response from the local LLM.

    Args:
        prompt: The full prompt including system instructions,
                retrieved context, and the user's question.
        model: The Ollama model name to use.

    Returns:
        The model's text response.
    """
    # TODO: Implement using the ollama Python package
    raise NotImplementedError("LLM service not yet implemented")
