import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # UUID para bater com o 'DEFAULT uuid_generate_v4()' do seu SQL
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    full_name = models.CharField(max_length=255)
    cpf_cnpj = models.CharField(max_length=14, unique=True)
    email = models.EmailField(unique=True)

    class Meta:
        db_table = 'users'  # <--- O Django agora buscará na tabela 'users' do seu SQL
        managed = False     # <--- Diz ao Django para não tentar criar ou alterar essa tabela

    # Sobrescrevemos para evitar conflitos com o Auth padrão
    groups = models.ManyToManyField('auth.Group', related_name='custom_user_groups', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='custom_user_permissions', blank=True)

class Account(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE, 
        related_name='bank_account',
        db_column='user_id' # <--- Nome da coluna que você criou no script SQL
    )
    balance = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)

    class Meta:
        db_table = 'accounts' # <--- Aponta para a tabela 'accounts' do seu SQL
        managed = False