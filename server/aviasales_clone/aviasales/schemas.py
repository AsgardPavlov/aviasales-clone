from typing import List, Optional

from ninja import Schema


class Coordinates(Schema):
    lon: float
    lat: float


class Cases(Schema):
    vi: str
    tv: str
    su: str
    ro: str
    pr: str
    da: str


class Place(Schema):
    id: str
    type: str
    code: str
    name: str
    country_code: str
    country_name: str
    state_code: Optional[str]
    coordinates: Coordinates
    index_strings: List[str]
    weight: int
    cases: Cases
    country_cases: Cases
    main_airport_name: str
