from flask import Blueprint, request

from python_server.mlmodel.Predict_Test import predict
from python_server.mlmodel.Boxplot import boxplot
from python_server.mlmodel.Boxplot_Xdata import boxplot_xdata
from python_server.mlmodel.Heatmap import heatmap
import numpy as np

ml_data_bp = Blueprint("ml_data", __name__)
from joblib import load

@ml_data_bp.post("/data")
def get_data():
    data = request.json
    values = [data[key] for key in data.keys()]
    m1 = heatmap()
    m2 = boxplot()
    print(request)
    m3 = boxplot_xdata(*values)
    m4 = predict(*values)
    storage = load('storage.joblib')
    storage.child("boxplot.png").put("boxplot.png")
    storage.child("heatmap.png").put("heatmap.png")
    storage.child("boxplot_xdata.png").put("boxplot_xdata.png")
    return m4

