from django.urls import path
from .views import OrganizationRegisterView, LoginView, GrantsView, testView

urlpatterns = [
    path('register/', OrganizationRegisterView.as_view(), name='organization-register'),
    path('login/', LoginView.as_view(), name='organization-login'),
    path('grants/', GrantsView.as_view(), name='grants'),
    path('test/', testView.as_view(), name='test'),
]
