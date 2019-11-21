from django.urls import path, re_path
from .views import Home, Assets

urlpatterns = [
  re_path(r'^(?!/api)[\w\?\=\-\/]*$', Home.as_view()),
  re_path(r'^(?P<filename>[\w\.]+)$', Assets.as_view())
]