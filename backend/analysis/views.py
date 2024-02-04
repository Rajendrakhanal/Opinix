from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import MyFile
from .serializers import MyFileSerializer
from rest_framework import status
from .machineLearning.preprocessing.dataProcessing import preprocess_data , returnFunction

class MyFileView(APIView):
    def post(self, request, *args, **kwargs):
        fileSerializer = MyFileSerializer(data=request.data)
        if fileSerializer.is_valid():
            fileSerializer.save()
            
            # Extract and preprocess data
            filePath = fileSerializer.instance.file.path
            data = preprocess_data(filePath)
            # print(data)

            # Load  pre-trained model
            # model = RandomForestClassifier()  # Update with your actual model

            # Make predictions
            # predictions = loadedModel.predict(data)

            # Update the instance with predictions
            value1 = returnFunction()
            response= Response(fileSerializer.data, status=status.HTTP_201_CREATED)
            return response
        else:
            return Response(fileSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
        



