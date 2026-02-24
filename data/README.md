# Data Directory

This directory is managed by the **Data + Docs** team.

## Structure

```
data/
├── raw/          # Original source documents (PDFs, etc.)
├── processed/    # Cleaned, chunked text ready for embedding
└── README.md
```

## `raw/`

Place original source documents here:
- UNG Academic Catalog PDFs
- Degree requirement documents
- Prerequisite charts
- Advising FAQ documents

**Do not modify raw files.** Keep them as-is for traceability.

## `processed/`

Place cleaned and chunked documents here. Each file should be structured text (JSON or plain text) with metadata such as:
- Source document name
- Section or page number
- Date of document version

The Backend/AI team will use these files to generate embeddings and build the FAISS index.

## Important

- Do **not** commit large binary files (50MB+) directly. Use Git LFS or link to external storage if needed.
- Keep a log of which documents have been processed and their versions.
