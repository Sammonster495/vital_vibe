import pandas as pd
import sys
import os
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

script_dir = os.path.dirname(os.path.realpath(__file__))
csv_file = os.path.join(script_dir, 'Salary_Data.csv')

data = pd.read_csv(csv_file)

X = data.drop(columns=['Salary'], axis=1).values
y = data['Salary'].values

X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.2, random_state=0)

regressor = LinearRegression()

regressor.fit(X_train, y_train)

input_data = int(sys.argv[1])

output = regressor.predict([[input_data]])
print(output[0])
