from rest_framework import serializers
from .models import Organization, Grants

class OrganizationRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Organization
        fields = ['name', 'size', 'type', 'sector', 'location', 'objective', 'years', 'email', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password')
        organization = Organization.objects.create_organization(password=password, **validated_data)
        return organization


class GrantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grants
        fields = '__all__'
                
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
