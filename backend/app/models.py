from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from datetime import date
from django.core.exceptions import ValidationError

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
    SIZE_CHOICES = [ ('small', 'Small'), ('medium', 'Medium'), ('large', 'Large'), ]
    TYPE_CHOICES = [ 
                    ('Non-Profit', 'Non-Profit'),
                    ('Profit', 'Profit'),
                    ('Government', 'Government'),
                    ('Educational', 'Educational'),
                    ('Healthcare', 'Healthcare'),
                    ]
    
    name = models.CharField(max_length=50)
    size = models.CharField(max_length=10, choices=SIZE_CHOICES)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    sector = models.JSONField() 
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


class ContactInformation(models.Model):
    phone_number = models.CharField(max_length=20)
    address = models.TextField()

    def __str__(self):
        return f"Phone: {self.phone_number}, Address: {self.address}"
    
class Grants(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    amount = models.PositiveIntegerField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=20)
    funding_source = models.CharField(max_length=100)
    eligibility_criteria = models.TextField()
    pre_application_information = models.TextField()
    terms_of_contract = models.TextField()
    contact_information = models.TextField()
    contact_information = models.ForeignKey(ContactInformation, on_delete=models.SET_NULL, null=True, blank=True)
    
    def clean(self):
        if self.end_date <= date.today():
            raise ValidationError("End date must be in the future.")
    def __str__(self):
        return self.title