from django.urls import path
from .views import OrganizationRegisterView, LoginView

urlpatterns = [
    path('register/', OrganizationRegisterView.as_view(), name='organization-register'),
    path('login/', LoginView.as_view(), name='organization-login'),
]
