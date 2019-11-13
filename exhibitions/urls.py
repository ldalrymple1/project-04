from django.urls import path
from .views import ExhibitionListView, ExhibitionDetailView

urlpatterns = [
  path('exhibitions', ExhibitionListView.as_view()),
  path('exhibitions/<int:pk>/', ExhibitionDetailView.as_view()), 
]