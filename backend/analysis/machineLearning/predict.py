from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.text import Tokenizer
import numpy as np
import json

from .topicModeling.topics import topicModeling

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


#Load Model
model_path = BASE_DIR / 'machineLearning' / 'model' / 'model.h5'
model =load_model(model_path)

max_words = 5000
max_len = 600

tokenizer = Tokenizer(num_words=max_words)
reviewText=[]
sentiment=[]

csv_file = BASE_DIR / 'machineLearning' / 'model' / 'output.txt'

data = []

# Reading from CSV file
with open(csv_file, mode='r') as file:
    for line in file:
        data.append(line.strip())


overall = ["Negative", "Neutral", "Positive"]
tokenizer.fit_on_texts(data)


def predictions(df):
    reviewText=df['reviewText'].tolist()
    num=df.shape[0]
    sequence = tokenizer.texts_to_sequences(reviewText)
    test_review = pad_sequences(sequence, maxlen=max_len)
    sentiment=[]
    for i in range(num):
        eachsentiment=overall[np.around(model.predict(test_review), decimals=4).argmax(axis=1)[i]]
        sentiment.append(eachsentiment)


    positiveCount=sentiment.count("Positive")
    negativeCount=sentiment.count("Negative")
    neutralCount=sentiment.count("Neutral")

    positivePercentage=positiveCount/num
    negativePercentage=negativeCount/num
    neutralPercentage=neutralCount/num

    topics=topicModeling(reviewText)
    resultDataDic=dict(zip(reviewText,sentiment))

    resultDataDic['keywords']=topics
    resultDataDic['Percentage']= {'Postive':positivePercentage , 'Negative': negativePercentage , 'Neutral': neutralPercentage}

# def returnFunction():
#     result_data = {
#         "keywords": ["Update", "post", "notification", "phone" ],
#         "sentiment_by_topics": {
#             "technical": {
#                 "positive": 10,
#                 "negative": 5,
#                 "neutral": 3
#             },
#             "billing": {
#                 "positive": 8,
#                 "negative": 2,
#                 "neutral": 5
#             },
#             "urgent": {
#                 "positive": 12,
#                 "negative": 6,
#                 "neutral": 4
#             }
#         },
#         "sentiment_over_time": [
#         {"date": "January 2019", "positive": 100, "negative": 0, "neutral": 0},
#         {"date": "February 2019", "positive": 60, "negative": 20, "neutral": 20},
#         {"date": "March 2019", "positive": 25, "negative": 50, "neutral": 25}
#     ]
#     }

    # Serialize data to JSON
    json_result = json.dumps(resultDataDic)
    return json_result

