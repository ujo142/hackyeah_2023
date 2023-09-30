from fastapi import FastAPI

# Inicjalizacja aplikacji FastAPI
app = FastAPI()

# Endpoint do powitania
@app.get("/")
def read_root():
    return {"message": "Witaj w FastAPI!"}

# Endpoint do odczytu danych na podstawie identyfikatora
@app.get("/items/{item_id}")
def read_item(item_id: int, query_param: str = None):
    return {"item_id": item_id, "query_param": query_param}

# Endpoint do tworzenia nowego elementu
@app.post("/items/")
def create_item(item: dict):
    return {"item": item}

# Endpoint do aktualizacji istniejącego elementu
@app.put("/items/{item_id}")
def update_item(item_id: int, item: dict):
    return {"item_id": item_id, "updated_item": item}

# Endpoint do usuwania istniejącego elementu
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    return {"message": f"Element o id {item_id} został usunięty"}

if __name__ == "__main__":
    import uvicorn

    # Uruchomienie aplikacji z użyciem serwera ASGI (np. uvicorn)
    uvicorn.run(app, host="0.0.0.0", port=8000)