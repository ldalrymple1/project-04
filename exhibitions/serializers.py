# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from .models import Exhibition

class ExhibitionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Exhibition
        fields = ('id','title', 'start_date', 'end_date', 'image', 'description', 'rough_price', 'postcode')

