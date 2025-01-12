from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class OrganizationManager(BaseUserManager):
    def create_organization(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field is required")
        email = self.normalize_email(email)
        organization = self.model(email=email, **extra_fields)
        organization.set_password(password)
        organization.save(using=self._db)
        return organization

class Organization(AbstractBaseUser):
    name = models.CharField(max_length=255)
    size = models.CharField(max_length=50)
    type = models.CharField(max_length=100)
    sector = models.JSONField()  # To handle a list of strings
    location = models.CharField(max_length=255)
    objective = models.TextField()
    years = models.PositiveIntegerField()
    email = models.EmailField(unique=True)
    
    is_active = models.BooleanField(default=True)

    objects = OrganizationManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'size', 'type', 'location', 'objective', 'years']

    def __str__(self):
        return self.name
