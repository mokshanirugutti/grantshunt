# Generated by Django 4.2.17 on 2025-01-12 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('name', models.CharField(max_length=255)),
                ('size', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=100)),
                ('sector', models.JSONField()),
                ('location', models.CharField(max_length=255)),
                ('objective', models.TextField()),
                ('years', models.PositiveIntegerField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
