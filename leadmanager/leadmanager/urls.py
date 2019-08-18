
from django.contrib import admin
from django.urls import path, include

"""
Load the front end first and have those urls exposed then load up the api urls

"""
urlpatterns = [
    path('', include('frontend.urls'))
    path('', include('leads.urls')),
]
