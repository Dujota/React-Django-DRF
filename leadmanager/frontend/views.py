from django.shortcuts import render

"""
 We define the index action to point to the newly created index.html
 which will render our react app
"""

def index(request):
  return render(request, 'frontend/index.html')