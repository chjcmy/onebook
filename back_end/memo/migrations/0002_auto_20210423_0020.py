# Generated by Django 3.2 on 2021-04-23 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('memo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='memo',
            name='memoContent',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='memo',
            name='memoDate',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='memo',
            name='memoTitle',
            field=models.CharField(max_length=250, null=True),
        ),
    ]
