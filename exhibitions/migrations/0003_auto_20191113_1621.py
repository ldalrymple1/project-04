# Generated by Django 2.2.7 on 2019-11-13 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exhibitions', '0002_auto_20191113_1433'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exhibition',
            name='image',
            field=models.CharField(max_length=300),
        ),
    ]
