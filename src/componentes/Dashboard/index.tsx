import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../ContextApi'
import Button from '../Fomularios/Button';

// @ts-ignore

// --- Styled Components ---
const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  padding: 40px;
  background: #111827;
  border-radius: 12px;
  animation: var(--animation);
`;

const Header = styled.header`
  margin-bottom: 30px;
  h1 { font-size: 2.2rem; margin: 0; font-weight: 700; }
  p { color: #94a3b8; margin-top: 5px; font-size: 1.1rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 30px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const MainCard = styled.div`
  background: #1e293b;
  padding: 30px;
  border-radius: 24px;
  border: 1px solid #334155;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.1);
  animation: var(--animation);

  .header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #94a3b8;
    margin-bottom: 10px;
  }

  .balance {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    display: block;
  }
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  animation: var(--animation);
`;

const ActionItem = styled.div`
  background: #1e293b;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #334155;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: 0.2s;
  color: #22d3ee;

  &:hover {
    border-color: #22d3ee;
    background: #4b85e278;
    box-shadow: 0 0 35px rgba(34, 211, 238, 0.281);
    transform: translateY(-2px);
  }

  svg { color: #22d3ee; }
`;

const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinha em coluna */
  gap: 10px;
  padding: 15px;
  background: #1e293b;
  border-radius: 15px;
  border: 1px solid #334155; /* Borda solicitada */
    animation: var(--animation);
`;

const ActivityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .info { display: flex; align-items: center; gap: 12px; }
  .icon {
    width: 35px; height: 35px; border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem;
  }
  .amount { 
    font-weight: 700;
    color: ${props => props.type === 'in' ? '#22c55e' : '#ef4444'};
  }
`;

// --- Ícones SVG Inline ---
const Icon = ({ d, color = "currentColor", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const paths = {
  wallet: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4M4 6v12c0 1.1.9 2 2 2h14v-4M20 12a2 2 0 0 0 0 4h2v-4h-2Z",
  eye: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  plus: "M12 5v14M5 12h14",
  bolt: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  trend: "M23 6l-9.5 9.5-5-5L1 18",
  pig: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1 .5-1.5 1-1.5V5z",
  bank: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3",
  receipt: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"
};

const _i = styled.div`
  color: #22d3ee;
`;

// --- Componente Principal ---
let Dashboard: React.FC = () => {
  const  { user }: any = useContext(UserContext); //TIPAGEM TYPE ANY
  const [show, setShow] = useState(true);

  return (
    <>
      <Container>
        <Header>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>FintechOS Dashboard</span>
          <h1>Olá, {user}</h1>
          <p>Bem-vindo ao seu banco digital. O que deseja fazer hoje?</p>
        </Header>

        <Grid>
          <div>
            <MainCard>
              <div className="header-card">
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Icon d={paths.wallet} /> Saldo disponível
                </div>
                <div onClick={() => setShow(!show)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span>show</span> <Icon d={paths.eye} size={18} />
                </div>
              </div>

              <span className="balance">
                {show ? "R$ 12.450,00" : "••••••••"}
              </span>

              {/* Gráfico SVG customizado */}
              <div style={{ height: '150px', opacity: show ? 1 : 0.2, transition: '0.3s' }}>
                <svg viewBox="0 0 400 150" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="neonGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,150 L0,110 C50,130 100,60 150,110 C200,140 250,80 300,110 C350,130 400,60 400,60 L400,150 Z" fill="url(#neonGrad)" />
                  <path d="M0,110 C50,130 100,60 150,110 C200,140 250,80 300,110 C350,130 400,60 400,60" fill="none" stroke="#22d3ee" strokeWidth="3" />
                </svg>
              </div>
            </MainCard>
            
            <Button>
              <Icon d={paths.plus} color="#083344" /> Depositar Dinheiro
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <ActionGrid>
              <ActionItem><Icon d={paths.bolt} /> Pix</ActionItem>
              <ActionItem><Icon d={paths.trend} /> Investir</ActionItem>
              <ActionItem><Icon d={paths.pig} /> Renda Fixa</ActionItem>
              <ActionItem><Icon d={paths.bank} /> Empréstimo</ActionItem>
            </ActionGrid>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <h3 style={{ margin: 0 }}>Últimas Atividades</h3>
                <_i className="material-symbols-outlined">call_received</_i>
              </div>

            {/* Componente Unificado com Borda e Alinhamento em Coluna */}
            <ActivitiesContainer>
              <ActivityRow type="out">
                <div className="info">
                  <div className="icon" style={{ color: '#ef4444' }}>↓</div>
                  <div>
                    <div style={{ fontSize: '0.9rem' }}>Mercado Central</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Hoje, 14:30</div>
                  </div>
                </div>
                <div className="amount">- R$ 150,00</div>
              </ActivityRow>

              <ActivityRow type="in">
                <div className="info">
                  <div className="icon" style={{ color: '#22c55e' }}>↑</div>
                  <div>
                    <div style={{ fontSize: '0.9rem' }}>Transferência recebida</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Ontem, 09:15</div>
                  </div>
                </div>
                <div className="amount">+ R$ 1.200,00</div>
              </ActivityRow>
            </ActivitiesContainer>
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
}
export default Dashboard;