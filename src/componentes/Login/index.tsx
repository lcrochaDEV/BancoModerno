import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
const navigate = useNavigate();
const [loading, setLoading] = React.useState<boolean | undefined>(false);
const [userText, setUserText] = useState<string | undefined>(''); 
const [senhaText, setSenhaText] = useState<string | undefined>(''); 
const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setLoading(true); // Ativa o "Autenticando..."

    // Simulação de delay da API (onde entraria seu FastAPI)
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };
  return (
    <FullScreenContainer>
      <section>
        <h2>Login no Banco Moderno</h2>
        <form onSubmit={handleLogin}>
          <Input type="text" id="usuario" onChange={userText => setUserText(userText.target.value)} value={userText} placeholder="Usuário" required />
          <Input type="password" id="senha" onChange={senhaText => setSenhaText(senhaText.target.value)} value={senhaText} placeholder="Senha" required />
          <Button type="submit" disabled={loading}>
          {loading ? 'Autenticando...' : 'Entrar'}
          </Button>

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
