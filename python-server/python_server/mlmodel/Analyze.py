# Importing Libraries
import os
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
from sklearn.metrics import precision_score, recall_score, confusion_matrix, classification_report, accuracy_score, \
    f1_score
from sklearn import metrics
from sklearn.metrics import roc_curve, auc, roc_auc_score
from joblib import dump
from joblib import load
np.random.seed(0)


def predict(baseline_value, accelerations, fetal_movement, uterine_contractions,
            light_decelerations, severe_decelerations, prolongued_decelerations,
            abnormal_short_term_variability, mean_value_of_short_term_variability,
            percentage_of_time_with_abnormal_long_term_variability,
            mean_value_of_long_term_variability, histogram_width, histogram_min,
            histogram_max, histogram_number_of_peaks, histogram_number_of_zeroes,
            histogram_mode, histogram_mean, histogram_median, histogram_variance,
            histogram_tendency, fetal_health):
    RF_model = load('RF_model.joblib')

    # Create input array with feature values
    input_data = [[baseline_value, accelerations, fetal_movement, uterine_contractions,
                   light_decelerations, severe_decelerations, prolongued_decelerations,
                   abnormal_short_term_variability, mean_value_of_short_term_variability,
                   percentage_of_time_with_abnormal_long_term_variability,
                   mean_value_of_long_term_variability, histogram_width, histogram_min,
                   histogram_max, histogram_number_of_peaks, histogram_number_of_zeroes,
                   histogram_mode, histogram_mean, histogram_median, histogram_variance,
                   histogram_tendency]]

    # Predict fetal health for the provided additional data
    predicted_fetal_health = RF_model.predict(input_data)
    acccuracy = accuracy_score(fetal_health, predicted_fetal_health)
    recall = recall_score(fetal_health, predicted_fetal_health, average="weighted")
    precision = precision_score(fetal_health, predicted_fetal_health, average="weighted")

    print("********* Random Forest Results *********")
    print("Accuracy    : ", acccuracy)
    print("Recall      : ", recall)
    print("Precision   : ", precision)

    print(classification_report(fetal_health, predicted_fetal_health))
    dump(RF_model, 'RF_model.joblib')
    return predicted_fetal_health




