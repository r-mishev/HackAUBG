import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# Load the dataset
data = pd.DataFrame({
    "baseline_value": [120, 132, 133, 134, 132, 134, 134, 122, 122, 122, 151, 150, 131, 131, 130, 130, 130, 131, 130, 130, 129, 128, 128, 128, 128, 128, 124, 124, 124, 132, 132],
    "accelerations": [0, 0.006, 0.003, 0.003, 0.007, 0.001, 0.001, 0, 0, 0, 0, 0, 0.005, 0.009, 0.006, 0.006, 0.006, 0.002, 0.003, 0.005, 0, 0.005, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "fetal_movement": [0, 0, 0, 0, 0, 0, 0, 0.002, 0.003, 0.003, 0.001, 0.001, 0.072, 0.222, 0.408, 0.38, 0.441, 0.383, 0.451, 0.469, 0.34, 0.425, 0.334, 0, 0, 0, 0, 0, 0, 0.135, 0.099],
    "uterine_contractions": [0, 0.006, 0.008, 0.008, 0.008, 0.01, 0.013, 0, 0.002, 0.003, 0.001, 0.001, 0.008, 0.006, 0.004, 0.004, 0.005, 0.003, 0.004, 0.005, 0.004, 0.003, 0.003, 0, 0, 0, 0, 0, 0.001, 0],
    "light_decelerations": [0, 0.003, 0.003, 0.003, 0, 0.009, 0.008, 0, 0, 0, 0.001, 0.001, 0.003, 0.002, 0.005, 0.004, 0.005, 0.005, 0.004, 0.004, 0.002, 0.003, 0.003, 0, 0, 0, 0, 0, 0.008, 0.012],
    "severe_decelerations": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "prolongued_decelerations": [0, 0, 0, 0, 0, 0.002, 0.003, 0, 0, 0, 0, 0, 0, 0, 0.001, 0.001, 0.001, 0.002, 0.001, 0.001, 0.003, 0.002, 0.003, 0, 0, 0, 0, 0, 0, 0.001],
    "abnormal_short_term_variability": [73, 17, 16, 16, 16, 26, 29, 83, 84, 86, 64, 64, 28, 28, 21, 19, 24, 18, 23, 29, 30, 26, 34, 80, 86, 86, 86, 64, 64, 29],
    "mean_value_of_short_term_variability": [0.5, 2.1, 2.1, 2.4, 2.4, 5.9, 6.3, 0.5, 0.5, 0.3, 1.9, 2, 1.4, 1.5, 2.3, 2.3, 2.1, 2.4, 1.9, 1.7, 2.1, 1.7, 2.5, 0.5, 0.3, 0.4, 0.2, 0.3, 0.3, 4.4, 6],
    "percentage_of_time_with_abnormal_long_term_variability": [43, 0, 0, 0, 0, 0, 0, 6, 5, 6, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 72, 71, 0, 0, 0, 0],
    "mean_value_of_long_term_variability": [2.4, 10.4, 13.4, 23, 19.9, 0, 0, 15.6, 13.6, 10.6, 27.6, 29.5, 12.9, 5.4, 7.9, 8.7, 10.9, 13.9, 8.8, 7.8, 8.5, 6.7, 4, 6.8, 2.9, 3.4, 4.8, 3.4, 6.8, 10.5],
    "histogram_width": [64, 130, 130, 117, 117, 150, 150, 68, 68, 68, 130, 130, 66, 87, 107, 107, 125, 107, 99, 112, 128, 141, 145, 16, 16, 24, 12, 24, 16, 141],
    "histogram_min": [62, 68, 68, 53, 53, 50, 50, 62, 62, 62, 56, 56, 88, 71, 67, 67, 53, 67, 59, 65, 54, 50, 54, 114, 114, 118, 122, 118, 122, 50],
    "histogram_max": [126, 198, 198, 170, 170, 200, 200, 130, 130, 130, 186, 186, 154, 158, 174, 174, 178, 174, 177, 177, 182, 198, 199, 130, 130, 128, 146, 128, 130, 191],
    "histogram_number_of_peaks": [2, 6, 5, 11, 9, 5, 6, 0, 0, 1, 2, 5, 5, 2, 7, 3, 5, 5, 6, 6, 13, 9, 11, 1, 1, 0, 1, 1, 0, 7],
    "histogram_number_of_zeroes": [0, 1, 1, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    "histogram_mode": [120, 141, 141, 137, 137, 76, 71, 122, 122, 122, 150, 150, 135, 141, 143, 134, 143, 134, 133, 133, 129, 134, 75, 128, 126, 124, 126, 128, 124, 133],
    "histogram_mean": [137, 136, 135, 137, 138, 107, 107, 122, 122, 122, 151, 151, 134, 137, 125, 127, 128, 125, 124, 129, 129, 125, 99, 126, 126, 123, 124, 126, 126, 119],
    "histogram_median": [121, 140, 138, 137, 138, 107, 106, 123, 123, 123, 151, 151, 137, 141, 132, 133, 138, 132, 129, 133, 132, 132, 102, 129, 125, 125, 125, 125, 128, 129],
    "histogram_variance": [73, 12, 13, 13, 11, 170, 215, 3, 3, 1, 9, 10, 7, 10, 76, 43, 70, 45, 36, 27, 138, 34, 148, 0, 0, 0, 0, 0, 0, 73],
    "histogram_tendency": [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 2, 2, 1, 1, 0, 0, 1, 0, 1, 0, 3, 0, -1, 3, 3, 3, 3, 3, 3, 0]
})

# Assuming 'X_test' is the additional data you provided
X_test = pd.DataFrame({
    "baseline_value": [120],
    "accelerations": [0],
    "fetal_movement": [0],
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

# Separate features (X) and target (y)
X = data.drop(columns=["fetal_health"])
y = data["fetal_health"]

# Train a RandomForest model
rf_model = RandomForestClassifier(random_state=42)
rf_model.fit(X, y)

# Predict fetal health for the provided additional data
predicted_fetal_health = rf_model.predict(X_test)

# Print the predicted fetal health
print("Predicted Fetal Health:", predicted_fetal_health)