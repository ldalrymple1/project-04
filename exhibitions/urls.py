from django.urls import path
from .views import ExhibitionListView, ExhibitionDetailView, GalleryListView, GalleryDetailView, CategoryListView, CategoryDetailView

urlpatterns = [
  path('exhibitions', ExhibitionListView.as_view()),
  path('exhibitions/<int:pk>/', ExhibitionDetailView.as_view()),
  path('galleries', GalleryListView.as_view()),
  path('galleries/<int:pk>/', GalleryDetailView.as_view()),
  path('categories', CategoryListView.as_view()),
  path('categories/<int:pk>/', CategoryDetailView.as_view())
]