import React from 'react';
import styled from 'styled-components';
import Button from '../Fomularios/Button';


const Section = styled.section`
    li {
        padding: 10px;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-secondary);
    }
`;

const Seguranca: React.FC = () => {
      
    return(
      <Section>
        <h2>Central de Segurança</h2>
        <ul>
          <li>Dispositivos conectados (iPhone 13, Chrome PC)</li>
          <li>Alterar senha de acesso</li>
          <li>Alterar PIN de transações</li>
          <li>Autenticação de 2 fatores (Ativo)</li>
        </ul>
        <Button style={{marginTop: '1rem'}}>Revisar Segurança</Button>
      </Section>
    );

}

export default Seguranca;