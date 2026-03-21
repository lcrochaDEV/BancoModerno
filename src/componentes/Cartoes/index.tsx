import React, { useEffect , useRef  } from 'react';
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

const GraficoGastos = styled.canvas`
    background: rgba(0,0,0,0.2);
    border-radius: 8px;
    margin-top: 10px;
    width: 100%; /* O JS lida com o tamanho interno */
    height: 150px;
`;

interface DadoMensal {
  mes: string;
  valor: number;
}

const Cartoes: React.FC = () => {
  const dadosMensais: DadoMensal[] = [
    { mes: 'Jan', valor: 40 },
    { mes: 'Fev', valor: 85 },
    { mes: 'Mar', valor: 50 },
    { mes: 'Abr', valor: 110 },
    { mes: 'Mai', valor: 70 },
    { mes: 'Jun', valor: 95 },
  ];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const larguraBarra = 40;
    const espacamento = 25;
    const paddingBottom = 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';

    // Note que agora usamos 'item' para acessar .valor e .mes
    dadosMensais.forEach((item, i) => {
        const x = 20 + i * (larguraBarra + espacamento);
        const yBarra = canvas.height - item.valor - paddingBottom;

        // Gradiente
        const gradient = ctx.createLinearGradient(0, canvas.height - paddingBottom, 0, yBarra);
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.2)');
        gradient.addColorStop(1, '#00d4ff');

        // Barra com Sombra
        ctx.fillStyle = gradient;
        ctx.shadowColor = 'rgba(0, 212, 255, 0.5)';
        ctx.shadowBlur = 8;
        ctx.fillRect(x, yBarra, larguraBarra, item.valor);
        
        // Reset de sombra para os textos
        ctx.shadowBlur = 0;

        // Rótulo do Mês (Jan, Fev...)
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(item.mes, x + larguraBarra / 2, canvas.height - 5);

        // Valor acima da barra
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`R$ ${item.valor * 10}`, x + larguraBarra / 2, yBarra - 5);
      });
    }, []); // Adicione [dadosMensais] aqui se eles forem vir de uma API/State




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
          <GraficoGastos ref={canvasRef} width="400" height="150"></GraficoGastos>
        </div>
      </section>
    );

}

export default Cartoes;