import os
import yaml
from pathlib import Path

# Caminho base do projeto (onde está o config.yaml e a pasta api)
BASE_DIR = Path(__file__).resolve().parent.parent

# 1. LEITURA DO YAML
CONFIG_PATH = os.path.join(BASE_DIR, "config.yaml")

with open(CONFIG_PATH, "r") as f:
    config = yaml.safe_load(f)

# 2. CONFIGURAÇÕES BÁSICAS
SECRET_KEY = config['django'].get('secret_key', 'chave-padrao-temporaria-lucas')
DEBUG = config['django'].get('debug', False)
ALLOWED_HOSTS = ['*']

# 3. APPS OBRIGATÓRIOS (Resolve o erro do ContentType)
INSTALLED_APPS = [
    'django.contrib.contenttypes',
    'django.contrib.auth',
    'api', # Seu app de modelos
]

# 4. BANCO DE DADOS POSTGRESQL (Vindo do YAML)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config['database']['name'],     # "mydatabase" (visto no Adminer)
        'USER': config['database']['user'],
        'PASSWORD': config['database']['password'],
        'HOST': config['database']['host'],
        'PORT': config['database']['port'],
        'OPTIONS': {
            # Define o "search path" para o esquema específico
            'options': f"-c search_path={config['database'].get('schema', 'public')}"
        },
    }
}

# 5. MODELO DE USUÁRIO CUSTOMIZADO
AUTH_USER_MODEL = 'api.User'