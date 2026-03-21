// PethRouter.tsx
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  /* No Mobile, empilha o menu em cima e o conteúdo embaixo */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentArea = styled.main`
  flex: 1;
  background-color: var(--bg-color);
  padding: 2rem;
  overflow-y: auto;

  /* Reduz o padding no mobile para ganhar espaço */
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;


const PethRouter = () => {
  return (
    <LayoutContainer>
      <Menu />
      <ContentArea>
        <Outlet />
      </ContentArea>
    </LayoutContainer>
  );
};

export default PethRouter;
