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

corrmat= data.corr()

#MACHINE LEARNING

#assigning values to features as X and target as y
X=data.drop(["fetal_health"],axis=1)
y=data["fetal_health"]

# #Set up a standard scaler for the features
col_names = list(X.columns)
s_scaler = preprocessing.StandardScaler()
X_df= s_scaler.fit_transform(X)
X_df = pd.DataFrame(X_df, columns=col_names)

X_train, X_test, y_train,y_test = train_test_split(X_df,y,test_size=0.3,random_state=42, stratify=y)

# TODO: Divide script for Radko to run after data creation; Divide script

# #taking look at the test set
# pred_rfc = pipeline_rf.predict(X_test)
# accuracy = accuracy_score(y_test, pred_rfc)
# print(accuracy)

# #Building a dictionary with list of optional values that will me analysed by GridSearch CV
parameters = {
     'n_estimators': [100,150, 200,500,700,900],
     'max_features': ['auto', 'sqrt', 'log2'],
     'max_depth' : [4,6,8,12,14,16],
     'criterion' :['gini', 'entropy'],
     'n_jobs':[-1,1,None]
}

#Fitting the trainingset to find parameters with best accuracy
CV_rfc = GridSearchCV(estimator=RandomForestClassifier(), param_grid=parameters, cv=5)
CV_rfc.fit(X_train, y_train)

#Getting the outcome of gridsearch

RF_model = RandomForestClassifier(**CV_rfc.best_params_)
RF_model.fit(X_train, y_train)



#Testing the Model on test set
predictions=RF_model.predict(X_test)
acccuracy= accuracy_score(y_test,predictions)
recall = recall_score(y_test, predictions, average="weighted")
precision = precision_score(y_test, predictions, average="weighted")
f1_score = f1_score(y_test, predictions, average="micro")

print("********* Random Forest Results *********")
print("Accuracy    : ", acccuracy)
print("Recall      : ", recall)
print("Precision   : ", precision)
print("F1 Score    : ", f1_score)

print(classification_report(y_test, predictions))




## cofusion matrix
# plt.subplots(figsize=(12,8))
# cf_matrix = confusion_matrix(y_test, predictions)
# sns.heatmap(cf_matrix/np.sum(cf_matrix), cmap=cmap,annot = True, annot_kws = {'size':15})
#
# plt.show()

#TESTING ONLY ONE

# Assuming 'X' is your entire dataset and 'y' is the corresponding target labels
# Assuming 'trained_model' is your already trained model

#142	0.002	0.002	0.008	0	0	0	74	0.4	36	5	42	117	159	2	1	145	143	145	1	0	1

# Assuming 'X_test' is the additional data you provided
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

# Predict fetal health for the provided additional data
predicted_fetal_health = RF_model.predict(X_test_actual)

# Print the predicted fetal health
print("Predicted Fetal Health:", predicted_fetal_health)

def get_corrmat():
    return corrmat.to_dict('list')
