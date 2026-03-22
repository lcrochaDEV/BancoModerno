import os
import sys
import django

# Adiciona a raiz ao PATH para o Python achar 'core' e 'api'
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

# Define o módulo de settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

# Inicializa o Django ORM
django.setup()

# Agora os modelos são importados sem erro de ContentType
from api.models import User, Account

class ControllerAPI:
    @staticmethod
    def buscar_dados_banco(user_id):
        # Exemplo de consulta no Postgres
        return User.objects.filter(id=user_id).first()

    @staticmethod
    def consultar_saldo(identifier: str):
        """
        Busca o saldo do Lucas Rocha usando o ID, CPF ou Email.
        """
        try:
            # Busca o usuário por qualquer um dos identificadores únicos
            user = User.objects.filter(
                models.Q(id=identifier) | 
                models.Q(cpf_cnpj=identifier) | 
                models.Q(email=identifier)
            ).first()

            if not user:
                return {"error": "Usuário não encontrado"}

            # Acessa a conta vinculada (OneToOneField)
            # O 'bank_account' é o related_name que definimos no models.py
            account = user.bank_account 
            
            return {
                "full_name": user.full_name,
                "balance": float(account.balance),
                "currency": "BRL"
            }
        except Exception as e:
            return {"error": f"Erro ao acessar o saldo: {str(e)}"}