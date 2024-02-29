from typing import List

from ninja import Router

from aviasales_clone.aviasales.schemas import Place
from aviasales_clone.aviasales.service import AviasalesSuggestService

aviasales_router = Router()

service = AviasalesSuggestService()


@aviasales_router.get("/places", response=List[Place])
def list_places(request, search_term: str):
    return service.search_places(search_term)
