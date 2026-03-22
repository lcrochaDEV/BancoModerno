
### MODO 1
Ele verifica a existência da pasta, cria se necessário, garante que as dependências do sistema estejam presentes e sobe o servidor.

```shell
#!/bin/bash

# Nome da pasta do ambiente virtual
VENV_DIR="env"

# 1. Verifica se a pasta do ambiente virtual existe
if [ ! -d "$VENV_DIR" ]; then
    echo "Ambiente virtual não encontrado. Criando..."
    
    # Tenta criar o ambiente (garantindo que o python3-venv esteja instalado)
    if ! python3 -m venv $VENV_DIR 2>/dev/null; then
        echo "Erro: python3-venv não instalado. Instalando..."
        sudo apt update && sudo apt install python3-venv -y
        python3 -m venv $VENV_DIR
    fi
    echo "Ambiente criado com sucesso."
else
    echo "Ambiente virtual já existe."
fi

# 2. Ativa o ambiente virtual
echo "Ativando o ambiente..."
source $VENV_DIR/bin/activate

# 3. Verifica se o uvicorn está instalado no ambiente
if ! command -v uvicorn &> /dev/null; then
    echo "-------------------------------------------------------"
    echo "AVISO: O 'uvicorn' não está instalado neste ambiente!"
    echo "Para instalar, execute: pip install uvicorn"
    echo "-------------------------------------------------------"
    exit 1
fi

# 4. Executa o servidor
echo "Iniciando o servidor..."
uvicorn app:app --reload
```

### Como usar:
1. Salve o código acima em um arquivo, por exemplo: start.sh.
2. Dê permissão de execução: chmod +x start.sh.
3. Rode o script: ./start.sh.
Você gostaria que eu adicionasse uma verificação para instalar automaticamente o uvicorn caso ele não esteja no ambiente?


### MODO 2

O script já realiza essa verificação e criação automaticamente dentro da função preparar_ambiente(), que é chamada sempre que você escolhe as opções 1, 2 ou 4.
Aqui está o script consolidado. Note que na Opção 1, se a pasta env não existir, ele a cria, ativa e só depois tenta rodar o servidor:

```shell
#!/bin/bash

VENV_PATH="env"
DB_CONTAINER="postgres_db"

preparar_ambiente() {
    if [ ! -d "$VENV_PATH" ]; then
        echo "Criando ambiente virtual..."
        python3 -m venv $VENV_PATH
    fi
    source $VENV_PATH/bin/activate
}

while true; do
    echo "=========================================="
    echo "       GERENCIADOR DE PROJETO"
    echo "=========================================="
    echo "1) Iniciar Servidor (uvicorn)"
    echo "2) Instalar Dependências (pip)"
    echo "3) Limpar Arquivos Temporários"
    echo "4) Verificar/Criar Ambiente Virtual"
    echo "5) Acessar Terminal PostgreSQL (Docker)"
    echo "6) Sair"
    echo "=========================================="
    read -p "Escolha uma opção [1-6]: " OPCAO

    case $OPCAO in
        1)
            preparar_ambiente
            if ! command -v uvicorn &> /dev/null; then
                echo "ERRO: uvicorn não instalado. Use a Opção 2."
            else
                uvicorn app:app --reload
            fi
            ;;
        2)
            preparar_ambiente
            pip install uvicorn
            [ -f "requirements.txt" ] && pip install -r requirements.txt
            ;;
        3)
            find . -type d -name "__pycache__" -exec rm -rf {} +
            echo "Cache limpo."
            ;;
        4)
            preparar_ambiente
            echo "Ambiente pronto e ativo."
            ;;
        5)
            # Verifica se o container está rodando
            if [ "$(sudo docker ps -q -f name=$DB_CONTAINER)" ]; then
                echo "Conectando ao PostgreSQL no container $DB_CONTAINER..."
                sudo docker exec -it $DB_CONTAINER psql -U postgres
            else
                echo "ERRO: O container '$DB_CONTAINER' não está rodando!"
                echo "Certifique-se de iniciar seu docker-compose ou container primeiro."
            fi
            ;;
        6)
            exit 0
            ;;
        *)
            echo "Opção inválida."
            ;;
    esac
    echo ""
done

```
### O que acontece se você rodar o script agora:

Ele abre o menu.
1. Se você apertar 1, o script olha para a pasta.
2. Se não existir env: Ele roda python3 -m venv env, depois source env/bin/activate.
3. Se já existir: Ele pula a criação e apenas roda o source.
4. Ativa o ambiente.
5. Verificar se o container está rodando usando o comando docker ps. Se o container postgres_db estiver ativo, ele abre a conexão; caso contrário, ele avisa que o banco está offline.

##### Dica: Se o comando python3 -m venv falhar no seu Debian, você precisará rodar sudo apt install python3-venv uma única vez no terminal antes de usar o script.
