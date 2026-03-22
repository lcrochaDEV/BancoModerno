from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from ControlRequest.ClassRequest import Rotas
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
    max_age=3600,
)

class Itens(BaseModel):
    id: str
    full_name: str
    cpf_cnpj: str
    email: str
    balance: float

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/cliente")
def methodPost(itens: Itens):
   return Rotas.methodPost(itens)


@app.get("/api/balance/{identifier}")
def get_balance(identifier: str):
    return Rotas.balanceMethodGet(identifier)