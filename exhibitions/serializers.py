# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from .models import Exhibition, Gallery, Category

# NESTED SERIALIZERS
class NestedExhibitionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exhibition
        fields = ('id', 'title', 'artist', 'start_date', 'end_date', 'image', 'description', 'rough_price', 'postcode')

class NestedGallerySerializer(serializers.ModelSerializer):

    class Meta:
        model = Gallery
        fields = ('id', 'name')

class NestedCategorySerializer(serializers.ModelSerializer):

    class Meta:
      model = Category
      fields =  ('id', 'category')



# ORIGINAL SERIALIZERS
class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'category', 'exhibitions')


class GallerySerializer(serializers.ModelSerializer):

    class Meta:
        model = Gallery
        fields = ('id', 'name', 'exhibitions')


class ExhibitionSerializer(serializers.ModelSerializer):

    gallery = NestedGallerySerializer() #read_only=True
    category = NestedCategorySerializer(many=True) #read_only=True

    def create(self, data):
        gallery_data = data.pop('gallery')
        category_data = data.pop('category')

        exhibition = Exhibition(**data)
        exhibition.gallery = Gallery.objects.get(**gallery_data)
        category = [Category.objects.get(**category_data) for category_data in category_data ]
        exhibition.save()
        exhibition.category.set(category)
        return exhibition



    def update(self, exhibition, data):
        gallery_data = data.pop('gallery')
        category_data = data.pop('category')

        exhibition = Exhibition(**data)
        exhibition.title = data.get('title', exhibition.title)
        exhibition.artist = data.get('artist', exhibition.artist)
        exhibition.start_date = data.get('start_date', exhibition.start_date)
        exhibition.end_date = data.get('end_date ', exhibition.end_date)
        exhibition.image = data.get('image', exhibition.image)
        exhibition.description = data.get('description', exhibition.description)
        exhibition.rough_price = data.get('rough_price', exhibition.rough_price)
        exhibition.postcode = data.get('postcode', exhibition.postcode)
        exhibition.gallery = Gallery.objects.get(**gallery_data)
        category = [Category.objects.get(**category_data) for category_data in category_data]
        exhibition.save()
        exhibition.category.set(category)
        return exhibition

        


    
    class Meta:
        model = Exhibition
        fields = ('id', 'title', 'artist', 'start_date', 'end_date', 'image', 'description', 'rough_price', 'postcode', 'gallery', 'category')
