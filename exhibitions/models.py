from djmoney.models.fields import MoneyField
from django.db import models


# GALLERY MODEL
class Gallery(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

# CATEGORY MODEL
class Category(models.Model):
    category = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.category}'
    

# EXHIBITION MODEL
class Exhibition(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=20)
    start_date = models.DateField()
    end_date = models.DateField()
    image = models.CharField(max_length=300)
    description = models.TextField(default='')
    rough_price = MoneyField(max_digits=10, decimal_places=2, null=True, default_currency='GBP') # add blank=True as well if you don't want it to be
    postcode = models.CharField(max_length=8)
    gallery = models.ForeignKey(
      Gallery,
      related_name='exhibitions',
      on_delete=models.DO_NOTHING,
      null=True #foreign key = integer so has to be null
    )
    category = models.ManyToManyField(
      Category,
      related_name='exhibitions'
    )

    def __str__(self):
        return f'{self.title}'


# SPECIFY Blank  = true IF not required
# SPECIFY NULL = TRUE IF NOT REQUIRED