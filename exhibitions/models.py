from django.db import models

class Exhibition(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    image = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    postcode = models.TextField(max_length=8)
    
