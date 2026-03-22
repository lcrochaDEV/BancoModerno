import React, { useState } from 'react';
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
    const [loading, setLoading] = useState<boolean | undefined>(false);
    const [ajudaText, setaAudaText] = useState<string | undefined>(''); 

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setLoading(true); // Ativa o "Autenticando..."

        // Simulação de delay da API (onde entraria seu FastAPI)
        setTimeout(() => {
        setLoading(false);
        setaAudaText('')
        }, 1500);
    };
    return(
        <Section id="ajuda">
            <h2>Ajuda e Suporte</h2>
            <div className="chatbot card">
                <p>Nosso Chatbot 24h está disponível para dúvidas rápidas.</p>
                <form onSubmit={handleLogin}>
                    <Input type="text" onChange={ajudaText => setaAudaText(ajudaText.target.value)} value={ajudaText} placeholder="Digite sua dúvida..." />
                    <Button type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Falar com Chatbot'}
                    </Button>
                </form>
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