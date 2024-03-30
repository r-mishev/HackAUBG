# Importing Libraries
import os
import secrets

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn import preprocessing
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.svm import LinearSVC
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import cross_val_score
from sklearn.metrics import precision_score, recall_score, confusion_matrix, classification_report, accuracy_score, f1_score
from sklearn import metrics
from sklearn.metrics import roc_curve, auc, roc_auc_score
np.random.seed(0)

def boxplot_xdata(baseline_value, accelerations, fetal_movement, uterine_contractions,
                      light_decelerations, severe_decelerations, prolongued_decelerations,
                      abnormal_short_term_variability, mean_value_of_short_term_variability,
                      percentage_of_time_with_abnormal_long_term_variability,
                      mean_value_of_long_term_variability, histogram_width, histogram_min,
                      histogram_max, histogram_number_of_peaks, histogram_number_of_zeroes,
                      histogram_mode, histogram_mean, histogram_median, histogram_variance,
                      histogram_tendency):
    data = pd.read_csv("fetal_health.csv")
    data.head()

    corrmat = data.corr()

    # MACHINE LEARNING

    # assigning values to features as X and target as y
    X = data.drop(["fetal_health"], axis=1)
    y = data["fetal_health"]

    shades = ['#' + secrets.token_hex(3) for _ in range(X.shape[1])]

    input_dict = {
        "baseline value": [baseline_value],
        "accelerations": [accelerations],
        "fetal_movement": [fetal_movement],
        "uterine_contractions": [uterine_contractions],
        "light_decelerations": [light_decelerations],
        "severe_decelerations": [severe_decelerations],
        "prolongued_decelerations": [prolongued_decelerations],
        "abnormal_short_term_variability": [abnormal_short_term_variability],
        "mean_value_of_short_term_variability": [mean_value_of_short_term_variability],
        "percentage_of_time_with_abnormal_long_term_variability": [
            percentage_of_time_with_abnormal_long_term_variability],
        "mean_value_of_long_term_variability": [mean_value_of_long_term_variability],
        "histogram_width": [histogram_width],
        "histogram_min": [histogram_min],
        "histogram_max": [histogram_max],
        "histogram_number_of_peaks": [histogram_number_of_peaks],
        "histogram_number_of_zeroes": [histogram_number_of_zeroes],
        "histogram_mode": [histogram_mode],
        "histogram_mean": [histogram_mean],
        "histogram_median": [histogram_median],
        "histogram_variance": [histogram_variance],
        "histogram_tendency": [histogram_tendency]
    }

    plt.figure(figsize=(20, 10))
    sns.boxenplot(data=X, palette=shades)
    plt.xticks(rotation=90)
    sns.pointplot(input_dict)
    return plt
