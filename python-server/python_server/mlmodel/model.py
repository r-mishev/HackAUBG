from Algorithm_Accuracy import alg_accuracy
from Boxplot import boxplot
from Boxplot_Xdata import boxplot_xdata
from Data_Info import data_info
from Heatmap import heatmap
from Number_Of_Entries import number_entries
from Analyze import predict
from Significant_Columns import sig_columns
from Training_Model_Initial import train_initial

train_initial()
alg_accuracy()
m = boxplot()
print(m)
boxplot_xdata(120,0,0,0,0,0,0,73,0.5,43,2.4,64,62,126,2,0,120,137,121,73,1).show()
data_info()
print(heatmap())
number_entries().show()
print(predict(120,0,0,0,0,0,0,73,0.5,43,2.4,64,62,126,2,0,120,137,121,73,1))
print(sig_columns())



