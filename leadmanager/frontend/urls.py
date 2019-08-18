from django.urls import path
from . import views

# We set the root url of the Frontend to always point to the index action defined in the views.py (renders our react app)
urlpatterns = [
  path('', views.index)
]