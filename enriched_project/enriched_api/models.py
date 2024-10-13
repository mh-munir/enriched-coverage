from django.db import models
from django.urls import reverse
from django.template.defaultfilters import slugify

# Create your models here.

class HomeBanner(models.Model):
    title = models.CharField(max_length=255)
    banner = models.FileField(blank=True,null=True,upload_to='static')
    
    def __str__(self) :
        return self.title
    

class MedicarePatner(models.Model):
    title = models.CharField(max_length=300,null=True,blank=True)
    sub_title = models.TextField(null=True,blank=True)
    icon = models.FileField(null=True,blank=True,upload_to='static')

    
    def __str__(self) :
        return self.title

class PersonalMedicare(models.Model):
    per_medi_tag = models.CharField(max_length=300,null=True,blank=True)
    per_medi_image = models.FileField(null=True,blank=True,upload_to='static')

    
    def __str__(self) :
        return self.per_medi_tag
    
class Carrier(models.Model):
    icon = models.FileField(null=True,blank=True,upload_to='static')

class CustomerComments(models.Model):
    commet = models.CharField(max_length=300,null=True,blank=True)
    description = models.TextField()
    author = models.CharField(max_length=100,null=True,blank=True)


    
   


