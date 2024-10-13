from django.forms.models import model_to_dict
from enriched_api.models import HomeBanner,MedicarePatner,PersonalMedicare,Carrier
from enriched_api.serializer import HomeBannerSerializer,MedicarePatnerSerializer,PersonalMedicareSerializer,CarrierSerializer
from rest_framework.response import Response


from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import IsAdminUser






# Create your views here.

class HomeBannerView(generics.ListAPIView):
    queryset = HomeBanner.objects.all()
    serializer_class = HomeBannerSerializer

    
    def get(self,requset):
        queryset = self.get_queryset()
        banner_serializer = HomeBannerSerializer(queryset,many=True)
        
        medicare_query = MedicarePatner.objects.all()
        medicate_seriliser = MedicarePatnerSerializer(medicare_query,many=True)
    
        personalize_query = PersonalMedicare.objects.all()
        personalize_seriliser = PersonalMedicareSerializer(personalize_query,many=True)
    
        carrier_query = Carrier.objects.all()
        carrier_seriliser = CarrierSerializer(carrier_query,many=True)
        
        
        datas = {
            "banner":banner_serializer.data,
            "madicare":medicate_seriliser.data,
            "personalizer":personalize_seriliser.data,
            "carrier":carrier_seriliser.data
        }
        
        
        return Response(datas,status=status.HTTP_200_OK)
    



    
    
    
    
    
        


        



