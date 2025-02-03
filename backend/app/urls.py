from django.urls import path
from .views import OrganizationRegisterView, LoginView, GrantsView, testView

urlpatterns = [
    path('register/', OrganizationRegisterView.as_view(), name='organization-register'),
    path('login/', LoginView.as_view(), name='organization-login'),
    path('grants/', GrantsView.as_view(), name='grants'),
    path('grants/<int:grant_id>/', GrantsView.as_view(), name='grant-detail'),
    path('', testView.as_view(), name='test'),
]
