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

data = pd.read_csv("fetal_health.csv")
data.head()

corrmat= data.corr()


#MACHINE LEARNING

#assigning values to features as X and target as y
X=data.drop(["fetal_health"],axis=1)
y=data["fetal_health"]

shades = ['#' + secrets.token_hex(3) for _ in range(X.shape[1])]


X_test_actual = pd.DataFrame({
    "baseline value": [142],
    "accelerations": [0.002],
    "fetal_movement": [0.002],
    "uterine_contractions": [0],
    "light_decelerations": [0],
    "severe_decelerations": [0],
    "prolongued_decelerations": [0],
    "abnormal_short_term_variability": [73],
    "mean_value_of_short_term_variability": [0.5],
    "percentage_of_time_with_abnormal_long_term_variability": [43],
    "mean_value_of_long_term_variability": [2.4],
    "histogram_width": [64],
    "histogram_min": [62],
    "histogram_max": [126],
    "histogram_number_of_peaks": [2],
    "histogram_number_of_zeroes": [0],
    "histogram_mode": [120],
    "histogram_mean": [137],
    "histogram_median": [121],
    "histogram_variance": [73],
    "histogram_tendency": [1]
})

plt.figure(figsize=(20,10))
sns.boxenplot(data = X,palette = shades)
plt.xticks(rotation=90)
sns.pointplot(X_test_actual)
plt.show()