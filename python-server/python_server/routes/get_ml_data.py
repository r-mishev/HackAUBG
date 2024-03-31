from flask import Blueprint, request
from python_server.mlmodel.Boxplot import boxplot
from python_server.mlmodel.Boxplot_Xdata import boxplot_xdata
from python_server.mlmodel.Heatmap import heatmap

ml_data_bp = Blueprint("ml_data", __name__)
from joblib import load

@ml_data_bp.get("/data")
def get_data():
    m1 = heatmap()
    m2 = boxplot()
    m3 = boxplot_xdata(*request)
    storage = load('storage.joblib')
    storage.child("boxplot.png").put("boxplot.png")
    storage.child("heatmap.png").put("heatmap.png")
    storage.child("boxplot_xdata.png").put("boxplot_xdata.png")
    return "OK"
