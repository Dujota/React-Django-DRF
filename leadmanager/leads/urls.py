from rest_framework import routers
from .api import LeadViewSet

# NameSpace our API url endpoints
router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

# Only use the registered url endpoints
urlpatterns = router.urls
