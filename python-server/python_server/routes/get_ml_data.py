from flask import Blueprint

ml_data_bp = Blueprint("ml_data", __name__)

@ml_data_bp.get("/data")
def get_data():
    return "OK"