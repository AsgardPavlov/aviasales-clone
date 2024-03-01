from typing import List

from ninja import Router

from .schemas import Place
from .service import AviasalesService

aviasales_router = Router()

service = AviasalesService()


@aviasales_router.get("/places", response=List[Place])
def list_places(request, search_term: str):
    return service.search_places(search_term)
