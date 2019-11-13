# Generated by Django 2.2.7 on 2019-11-13 13:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Exhibition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('artist', models.CharField(max_length=20)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('image', models.CharField(max_length=100)),
                ('description', models.TextField(default='')),
                ('rough_price', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('postcode', models.CharField(max_length=8)),
                ('gallery', models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='exhibitions', to='exhibitions.Gallery')),
            ],
        ),
    ]
