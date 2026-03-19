import React from 'react';
import styled from 'styled-components';
import Button from '../Fomularios/Button';

const Investimentos: React.FC = () => {
      
    return(
      <section id="investimentos" className="section">
        <h2>Meus Investimentos</h2>
        <div className="invest-card card">
          <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)'}}>Saldo Investido</p>
          <p style={{fontSize: '2.5rem', margin: '10px 0'}}>R$ 5.000,00</p>
          <p style={{color: '#4caf50', fontWeight: 'bold'}}>Rendimento (12 meses): +8.2% (R$ 410,00)</p>
          <div className="quick-actions">
            <Button>Investir Agora</Button>
            <Button style={{background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)'}}>Simular</Button>
          </div>
        </div>
      </section>
    );

}

export default Investimentos;