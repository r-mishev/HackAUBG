from flask import Blueprint, request
from python_server.mlmodel.model import get_corrmat

ml_data_bp = Blueprint("ml_data", __name__)

@ml_data_bp.get("/data")
def get_data():
    m1 = heatmap()
    m2 = boxplot()
    # m3 = boxplot_xdata(*request)
    storage = load('storage.joblib')
    storage.child("boxplot.png").put("boxplot.png")
    storage.child("heatmap.png").put("heatmap.png")
    # storage.child(".boxplot_xdata.png").put("boxplot_xdata.png")
    return "OK"
