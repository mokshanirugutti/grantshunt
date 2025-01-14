from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .models import Organization, Grants
from .serializers import OrganizationRegisterSerializer, LoginSerializer, GrantsSerializer

class OrganizationRegisterView(APIView):
    def post(self, request):
        serializer = OrganizationRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Organization registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            organization = authenticate(email=email, password=password)
            if organization:
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GrantsView(APIView):
    def get(self,request):
        grants = Grants.objects.all()
        serializer = GrantsSerializer(grants, many=True)
        return Response(serializer.data)