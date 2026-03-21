import { styled } from "styled-components";

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean; // Para mostrar um spinner ou mudar o texto
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  background: #22d3ee;
  border: none;
  padding: 16px;
  border-radius: 12px;
  color: #083344;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 35px rgba(34, 211, 238, 0.6);
    transform: translateY(-2px);
  }

`;

export default Button;

