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
