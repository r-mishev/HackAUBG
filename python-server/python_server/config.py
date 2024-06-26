from os import getenv

from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = getenv("SECRET_KEY")