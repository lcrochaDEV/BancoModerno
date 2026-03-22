from ControllerClass.ControllerAPI import ControllerAPI

class Rotas:

    @classmethod
    def methodPost(self, itens: list):
        try:
            return ControllerAPI.get_or_update_user(itens.id, itens.full_name, itens.cpf_cnpj, itens.email, itens.balance)

        except Exception:
            return {"detail": "Dado não encontrado ou erro no banco."}

    @classmethod
    def balanceMethodGet(self, identifier):
        try:
            # Chama a Controller que utiliza o Django ORM e o YAML
            resultado = ControllerAPI.consultar_saldo(identifier)
            
            if not resultado or "error" in resultado:
                return {"status": 404, "detail": "Usuário não encontrado."}
                
            return resultado
                
        except Exception as e:
            print(f"Erro no Get Balance: {e}")
            return {"status": 500, "detail": "Erro interno no servidor."}
