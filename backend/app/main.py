from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import health, chat

app = FastAPI(
    title="UNG AI Assistant API",
    description="AI academic assistant for University of North Georgia students",
    version="0.1.0",
)

# CORS — allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(health.router)
app.include_router(chat.router)


@app.get("/")
async def root():
    return {"message": "UNG AI Assistant API is running"}
