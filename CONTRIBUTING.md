# Contributing to UNG AI Assistant

Thank you for contributing to the UNG AI Assistant project. This document explains the workflow every team member should follow.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/UNG-AI-Lab/ung-ai-assistant.git
   cd ung-ai-assistant
   ```

2. Set up the backend:
   ```bash
   cd backend
   poetry install
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   ```

## Branching Strategy

We use the following branches:

- `main` — stable, production-ready code. **Never push directly to main.**
- `dev` — integration branch. All feature branches merge here first.
- `feature/<name>` — your working branch for a specific task.

### Creating a Feature Branch

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

### Making Changes

1. Write your code
2. Test locally
3. Commit with clear messages:
   ```bash
   git add .
   git commit -m "feat: add student query endpoint"
   ```

### Submitting a Pull Request

1. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Go to GitHub and open a Pull Request into `dev`
3. Request a review from at least one teammate
4. After approval, the PR will be merged

### Commit Message Format

Use this format:
- `feat: description` — new feature
- `fix: description` — bug fix
- `docs: description` — documentation changes
- `refactor: description` — code restructuring
- `test: description` — adding or fixing tests

## Code Style

- **Python**: Follow PEP 8. Use type hints.
- **JavaScript/React**: Use ESLint defaults. Use functional components.
- **General**: Keep functions small and focused. Comment when logic is complex.

## Questions?

If you are unsure about something, open a GitHub Issue or ask in the team Discord.
