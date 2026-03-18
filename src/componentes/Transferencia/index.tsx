import React from 'react';
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
      
    return (
        <Section>
            <h2>Transferência/Pix</h2>
            <form>
                <Input type="text" placeholder="Chave Pix ou Conta Destino" required />
                <Input type="number" placeholder="Valor (R$)" required step="0.01" />
                <Input type="text" placeholder="Descrição (opcional)" />
                <Button type="submit">Enviar PIX</Button>
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

export default Transferencia;