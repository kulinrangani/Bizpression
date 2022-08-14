from django.urls import path
from . import views

urlpatterns = [
    path('',views.shop,name='shop'),
    path('shop_single',views.shop_single,name='shop_single'),
]