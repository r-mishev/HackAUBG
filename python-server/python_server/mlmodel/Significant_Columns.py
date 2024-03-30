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

data = pd.read_csv("fetal_health.csv")
data.head()


#table with reverse p-values ("accelerations","prolongued_decelerations", "abnormal_short_term_variability", "percentage_of_time_with_abnormal_long_term_variability" and "mean_value_of_long_term_variability")
#correlation matrix
corrmat= data.corr()

# Assuming 'data' is your DataFrame
# Assuming you have calculated some statistical summary and stored it in 'summary'

# Select the last row of the summary
last_row = corrmat.iloc[-1]

# Select the indexes of the columns where the values are under 0.05
significant_columns = last_row.index[last_row < 0.05]

print("Indexes of columns with values under 0.05:", significant_columns)
