from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewsets - allows to create CRUD API without having to define all the methods, like ROR routes :resources


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.object.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = LeadSerializer
