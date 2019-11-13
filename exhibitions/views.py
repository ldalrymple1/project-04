# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from .models import Exhibition, Gallery, Category
from .serializers import ExhibitionSerializer, GallerySerializer, CategorySerializer


# Create your views here.

class ExhibitionListView(ListCreateAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

class ExhibitionDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class GalleryListView(ListCreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

