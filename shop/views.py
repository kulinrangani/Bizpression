from django.shortcuts import render

# Create your views here.

def shop(request):
    return render(request,'shop/shop.html')

def shop_single(request):
    return render(request,'shop/shop_single.html')
