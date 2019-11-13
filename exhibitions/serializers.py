# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from .models import Exhibition, Artist


# class CategorySerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Category
#         fields = ('id', 'category', 'exhibitions')


class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'name', 'exhibitions')


class ExhibitionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Exhibition
        fields = ('id', 'title', 'start_date', 'end_date', 'image', 'description', 'rough_price', 'postcode')