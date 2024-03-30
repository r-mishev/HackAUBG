from django.urls import path
from .views import TransportData

urlpatterns = [
    path('transport-data/', TransportData.as_view(), name='transport-data'),
]
