from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListAPI.as_view(), name='product-list'),
]
