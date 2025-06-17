from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

posts = [
    {
        "id": 1,
        "avatarUrl": "https://placekitten.com/80/80",
        "displayName": "Cat Lover",
        "username": "catlover",
        "content": "Look at this cute kitten! 😺",
        "timestamp": "1h",
    },
    {
        "id": 2,
        "avatarUrl": "https://placebear.com/80/80",
        "displayName": "Bear Fan",
        "username": "bearfan",
        "content": "Bears are awesome!",
        "timestamp": "2h",
    },
    {
        "id": 3,
        "avatarUrl": "https://placekitten.com/81/81",
        "displayName": "Another Cat",
        "username": "anothercat",
        "content": "Sleeping all day...",
        "timestamp": "3h",
    },
]

@app.get("/")
def read_root():
    return {"message": "AnimalBotSNS backend"}


@app.get("/posts")
def get_posts():
    """Return a list of recent posts."""
    return {"posts": posts}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
