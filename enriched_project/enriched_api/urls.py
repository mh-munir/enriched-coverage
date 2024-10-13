from django.urls import path
from .views import HomeBannerView



urlpatterns  = [
    path('list/',HomeBannerView.as_view(), name='home_page')
]