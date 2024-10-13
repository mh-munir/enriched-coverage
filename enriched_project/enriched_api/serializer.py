
from rest_framework import serializers
from .models import HomeBanner,MedicarePatner,PersonalMedicare,Carrier



class HomeBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeBanner
        fields = ['title','banner']

class MedicarePatnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicarePatner
        fields = ['title','sub_title','icon']

class PersonalMedicareSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalMedicare
        fields = ['per_medi_tag','per_medi_image']

class CarrierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrier
        fields = ['icon']

 