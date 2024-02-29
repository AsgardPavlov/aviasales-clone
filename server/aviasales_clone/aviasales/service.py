import requests
from ninja.errors import HttpError
from requests import Response

from config import AVIASALES_SUGGEST_API, TRAVEL_PAYOUTS_AVIASALES_API


class AviasalesSuggestService:

    def __init__(self):
        self.SUGGEST_API_URL = AVIASALES_SUGGEST_API
        self.TRAVELPAYOUTS_AVIASALES_API_URL = TRAVEL_PAYOUTS_AVIASALES_API

    def search_places(self, term: str = None) -> Response:
        params = {
            "term": term,
            "locale": "ru_RU",
            "types[]": "city",
            "types[]": "airport",
            "max": 7,
        }

        response = requests.get(self.SUGGEST_API_URL, params=params)

        if response.status_code == 200:
            return response.json()
        else:
            raise HttpError(503, "Service Unavailable. Please retry later.")
