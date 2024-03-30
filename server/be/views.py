from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import uuid
import sys
import os

sys.path.append(os.path.abspath('../../pythonProject'))

from pythonProject.test import getCorrmat

class TransportData(APIView):
    def get(self, request, format=None):
        data = [
            {
                "id": uuid.uuid4(),
                "data": getCorrmat(),
            },
        ]

        print(data)
        return Response(data, status=status.HTTP_200_OK)
