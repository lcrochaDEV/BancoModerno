import React from 'react';
import styled from 'styled-components';
import Input from '../Fomularios/Input';
import Button from '../Fomularios/Button';

const Section = styled.section`
    li {
        padding: 10px;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-secondary);
    }
    h3 {
        margin-top: 15px;
    }
`;

const Ajuda: React.FC = () => {
      
    return(
        <Section id="ajuda">
            <h2>Ajuda e Suporte</h2>
            <div className="chatbot card">
                <p>Nosso Chatbot 24h está disponível para dúvidas rápidas.</p>
                <Input type="text" placeholder="Digite sua dúvida..." />
                <Button>Falar com Chatbot</Button>
            </div>
            <div className="faq">
            <h3>Perguntas Frequentes (FAQ)</h3>
            <ul>
                <li>Como recuperar minha senha?</li>
                <li>Como bloquear meu cartão em caso de perda?</li>
                <li>Como aumentar meu limite de Pix?</li>
            </ul>
            </div>
        </Section>
    );

}

export default Ajuda;