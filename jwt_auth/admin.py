from django.contrib import admin
from .models import User #want to use our version of User and not the built in one

# Register your models here.
admin.site.register(User)
