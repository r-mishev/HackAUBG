from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class TransportData(APIView):
    def get(self, request, format=None):
        data = [
            {
                "id": "Japan",
                "data": [
                    {"x": "Train", "y": 32663},
                ]
            },
        ]
        return Response(data, status=status.HTTP_200_OK)
