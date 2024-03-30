from flask import Flask, Blueprint
from typing import List
from .get_ml_data import ml_data_bp

_blueprints: List[Blueprint] = [
    ml_data_bp,
]

def register_blueprints(app: Flask) -> None:
    for blueprint in _blueprints:
        app.register_blueprint(blueprint, url_prefix="/api/v1")