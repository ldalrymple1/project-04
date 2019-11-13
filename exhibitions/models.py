from django.db import models


# EXHIBITION MODEL
class Exhibition(models.Model):
    title = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    image = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    rough_price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    postcode = models.CharField(max_length=8)

    def __str__(self):
        return f'{self.title}'


# add gallery!! (the person who created.....)
# Artist and category will be nested

# SPECIFY Blank  = true IF not required
# SPECIFY NULL = TRUE IF NOT REQUIRED