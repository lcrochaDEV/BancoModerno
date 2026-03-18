import React from 'react';
import styled from 'styled-components';

import Button from '../Fomularios/Button';


const CartaoVisual = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    .gastos {
      margin-top: 2rem;
    }
    
`;

const Cartao = styled.div`
    flex: 1;
    background: rgba(255,255,255,0.03);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



const Cartoes: React.FC = () => {
      
    return(
      <section>
        <h2>Meus Cartões</h2>
        <CartaoVisual>
          <Cartao>
            <span>Cartão Físico (**** 1234)</span>
            <Button style={{width: 'auto', padding: '8px 15px'}}>Bloquear</Button>
          </Cartao>
          <Cartao>
            <span>Cartão Virtual Ativo</span>
            <Button style={{width: 'auto', padding: '8px 15px'}}>Gerar Novo</Button>
          </Cartao>
        </CartaoVisual>
        <div className="gastos">
          <h3>Gastos do Mês (Simulação)</h3>
          <canvas id="graficoGastos" width="400" height="150"></canvas>
        </div>
      </section>
    );

}

export default Cartoes;