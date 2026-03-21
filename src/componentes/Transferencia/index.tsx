import React, { useState } from 'react';
import styled from 'styled-components';


import Button from '../Fomularios/Button';
import Input from '../Fomularios/Input';

const Section = styled.section`
    .history ul, .faq ul, .cartao-visual ul {
        margin-top: 10px;
        list-style: none;
        margin-top: 1rem;
    }

    .history li, .faq li, #seguranca li {
      padding: 10px;
      border-bottom: 1px solid var(--border-color);
      color: var(--text-secondary);
    }

    h3 {
        margin-top: 15px;
    }
`;


const Transferencia: React.FC = () => {
  const [loading, setLoading] = useState<boolean | undefined>(false);
  const [chaveText, setChaveText] = useState<string | undefined>(''); 
  const [valorText, setValorText] = useState<string | undefined>(''); 
  const [descText, setDescText] = useState<string | undefined>(''); 

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setLoading(true); // Ativa o "Autenticando..."

        // Simulação de delay da API (onde entraria seu FastAPI)
        setTimeout(() => {
            setLoading(false);
            setChaveText('')
            setValorText('')
            setDescText('')
        }, 1500);
    }; 

    return (
        <Section>
            <h2>Transferência/Pix</h2>
            <form onSubmit={handleLogin}>
                <Input type="text" onChange={chaveText => setChaveText(chaveText.target.value)} value={chaveText} placeholder="Chave Pix ou Conta Destino" required />
                <Input type="number" onChange={valorText => setValorText(valorText.target.value)} value={valorText} placeholder="Valor (R$)" required step="0.01" />
                <Input type="text" onChange={descText => setDescText(descText.target.value)} value={descText} placeholder="Descrição (opcional)" />
                
                <Button type="submit" disabled={loading}>
                {loading ? 'Processando...' : 'Enviar PIX'}
                </Button>
            </form>
            <div className="history">
            <h3>Últimas Transações</h3>
            <ul>
                <li>R$ 100,00 para João (Pix) - Hoje</li>
                <li>R$ 320,00 para Maria (TED) - Ontem</li>
            </ul>
            </div>
        </Section>
    );

}
// <input type="text" value={ip === undefined ? '' : ip} onChange={ip => setIp(ip.target.value)} id="ip_address" name="ip_address" placeholder="Ex: 192.168.1.1" pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" title="Digite um endereço IP válido (Ex: 192.168.1.1)" required />


export default Transferencia;