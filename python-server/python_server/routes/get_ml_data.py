from flask import Blueprint
from python_server.mlmodel.model import get_corrmat

ml_data_bp = Blueprint("ml_data", __name__)

@ml_data_bp.get("/data")
def get_data():
    return get_corrmat()