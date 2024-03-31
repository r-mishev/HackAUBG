# Importing Libraries
import os
import secrets

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from flask import jsonify, send_file
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
import os
script_dir = os.path.dirname(__file__)
os.chdir(script_dir)


def boxplot():
    data = pd.read_csv('fetal_health.csv')
    data.head()

    corrmat = data.corr()

    # MACHINE LEARNING

    # assigning values to features as X and target as y
    X = data.drop(["fetal_health"], axis=1)
    y = data["fetal_health"]

    shades = ['#' + secrets.token_hex(3) for _ in range(X.shape[1])]

    # #Set up a standard scaler for the features
    col_names = list(X.columns)
    s_scaler = preprocessing.StandardScaler()
    X_df = s_scaler.fit_transform(X)
    X_df = pd.DataFrame(X_df, columns=col_names)

    plt.figure(figsize=(20, 10))
    sns.boxenplot(data=X_df, palette=shades)
    plt.xticks(rotation=90)
    plt.savefig('boxplot.png')  # Save the boxplot as an image
    plt.close()  # Close the plot to free up memory
    return
