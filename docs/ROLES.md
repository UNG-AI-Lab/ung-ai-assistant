# Team Roles & Responsibilities

## Data + Docs (Knowledge Base Owners)
- Collect source documents (PDFs, policies, catalogs, FAQs)
- Verify accuracy and versioning of all academic content
- Convert documents to clean text format
- Chunk documents logically and add metadata tags
- Maintain the source-of-truth document repository
- Create gold-standard Q&A pairs for evaluation testing
- **Deliverable:** Cleaned, structured document corpus ready for embedding

## Backend / AI (System Builders)
- Build the RAG (Retrieval-Augmented Generation) pipeline
- Generate embeddings using Sentence Transformers
- Manage the FAISS vector database
- Implement retrieval and reranking logic
- Connect local LLMs via Ollama (Llama 3.x, Mistral, Phi-3)
- Build FastAPI endpoints for the frontend to consume
- Handle errors, logging, and performance tuning
- **Deliverable:** Working AI backend with API documentation

## Frontend / UX (User Experience Owners)
- Design and build the chat interface (React + Tailwind)
- Implement the three-panel layout (student info, chat, schedule)
- Display citations clearly in AI responses
- Add feedback mechanisms (thumbs up/down, report issues)
- Implement loading states and error handling
- Ensure usability and accessibility standards
- **Deliverable:** Functional, polished web interface

## Research + Evaluation (Quality & Metrics Owners)
- Define evaluation metrics (accuracy, relevance, hallucination rate)
- Design experiments and benchmarks
- Measure accuracy and hallucination rates across models
- Track performance improvements over time
- Create evaluation reports and dashboards
- **Deliverable:** Formal evaluation results suitable for conference submission

## Prompt Engineer / Test (AI Behavior Owners)
- Design system prompts and RAG prompt templates
- Enforce citation behavior and refusal patterns
- Create stress tests and edge-case prompt suites
- Tune instructions for safety, tone, and grounding
- Collaborate with Backend/AI team on retrieval quality improvements
- **Deliverable:** Prompt templates, test suites, and behavior documentation

## Collaboration Flow

```
Data + Docs → Backend / AI → Prompt Engineer → Frontend / UX → Research + Eval
                                                                      ↓
                                                         Feedback loop to all roles
```

Each role feeds into the next. Research + Evaluation provides continuous feedback to every team to drive improvements.
