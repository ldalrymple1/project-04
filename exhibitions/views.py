# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from .models import Exhibition
from .serializers import ExhibitionSerializer


# Create your views here.

class ExhibitionListView(ListCreateAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

class ExhibitionDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

