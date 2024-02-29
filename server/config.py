import os

from dotenv import load_dotenv

load_dotenv()

PRODUCTION = os.environ.get("PRODUCTION", False)
DJANGO_SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY")

DATABASE_NAME = os.environ.get("DATABASE_NAME")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")

TRAVEL_PAYOUTS_AVIASALES_API = os.environ.get("TRAVEL_PAYOUTS_AVIASALES_API")
AVIASALES_SUGGEST_API = os.environ.get("AVIASALES_SUGGEST_API")
