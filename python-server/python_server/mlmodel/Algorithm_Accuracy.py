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
from sklearn.metrics import precision_score, recall_score, confusion_matrix, classification_report, accuracy_score, f1_score
from sklearn import metrics
from sklearn.metrics import roc_curve, auc, roc_auc_score
np.random.seed(0)

def alg_accuracy():
    data = pd.read_csv("fetal_health.csv")

    # assigning values to features as X and target as y
    X = data.drop(["fetal_health"], axis=1)
    y = data["fetal_health"]

    # Set up a standard scaler for the features
    col_names = list(X.columns)
    s_scaler = preprocessing.StandardScaler()
    X_df = s_scaler.fit_transform(X)
    X_df = pd.DataFrame(X_df, columns=col_names)

    X_train, X_test, y_train, y_test = train_test_split(X_df, y, test_size=0.3, random_state=42, stratify=y)

    # A quick model selection process
    # pipelines of models( it is short was to fit and pred)

    pipeline_lr = Pipeline([('lr_classifier', LogisticRegression(random_state=42))])

    pipeline_dt = Pipeline([('dt_classifier', DecisionTreeClassifier(random_state=42))])

    pipeline_rf = Pipeline([('rf_classifier', RandomForestClassifier())])

    pipeline_svc = Pipeline([('sv_classifier', SVC())])

    # List of all the pipelines
    pipelines = [pipeline_lr, pipeline_dt, pipeline_rf, pipeline_svc]

    # Dictionary of pipelines and classifier types for ease of reference
    pipe_dict = {0: 'Logistic Regression', 1: 'Decision Tree', 2: 'RandomForest', 3: "SVC"}

    # Fit the pipelines
    for pipe in pipelines:
        pipe.fit(X_train, y_train)

    # cross validation on accuracy
    cv_results_accuracy = []
    for i, model in enumerate(pipelines):
        cv_score = cross_val_score(model, X_train, y_train, cv=10)
        cv_results_accuracy.append(cv_score)
        print("%s: %f " % (pipe_dict[i], cv_score.mean()))
