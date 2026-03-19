import React from "react";
import styled from "styled-components";
import Button from '../Fomularios/Button';
import Input from '../Fomularios/Input';

// 1. Wrapper para centralizar tudo na tela
const FullScreenContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;     /* Centraliza verticalmente */
  min-height: 100vh;       /* Ocupa toda a altura da tela */
  width: 100%;
  background-color: var(--bg-color, #0a0a0a); /* Cor de fundo opcional */
  padding: 20px;           /* Respiro para telas pequenas */


  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-top: 0.5rem;

  a {
    color: var(--text-secondary, #b3b3b3);
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: var(--accent-color, #00d4ff);
    }
  }
`;

const SecurityMsg = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary, #b3b3b3);
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-color, #333);
  padding-top: 15px;
`;

const Login: React.FC = () => {
  return (
    <FullScreenContainer>
      <section>
        <h2>Login no Banco Moderno</h2>
        <form action="/dashboard">
          <Input type="text" id="usuario" placeholder="Usuário" required />
          <Input type="password" id="senha" placeholder="Senha" required />
          <Button type="submit">Entrar</Button>
          <Links>
            <a href="#">Esqueci minha senha</a>
            <a href="#">Criar Conta</a>
          </Links>
          <SecurityMsg>
            Seu acesso é protegido por criptografia de ponta.
          </SecurityMsg>
        </form>
      </section>
    </FullScreenContainer>
  );
};

export default Login;
