# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from .models import Exhibition, Artist
from .serializers import ExhibitionSerializer


# Create your views here.

class ExhibitionListView(ListCreateAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

class ExhibitionDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

# class CategoryListView(RetrieveUpdateDestroyAPIView):
#     queryset = Exhibition.objects.all()
#     serializer_class = ExhibitionSerializer

# class CategoryDetailView(RetrieveUpdateDestroyAPIView):
#     queryset = Exhibition.objects.all()
#     serializer_class = ExhibitionSerializer

class ArtistListView(RetrieveUpdateDestroyAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

class ArtistDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

