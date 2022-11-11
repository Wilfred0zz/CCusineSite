import re
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class User(BaseModel):
    firstName:str
    lastName : str 
    email: str
    password: str

@app.get("/")
async def root():
    return {"message": "Mos world"}

@app.post("/register")
async def register(user_email:str, userItem: Item):
    if user_email in User:
        return {"message":"Added user to database"}
    User[user_email] = userItem
    return User[user_email]