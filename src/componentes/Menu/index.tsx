import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from 'react-router-dom';

const _Sidebar = styled.nav`
  width: 260px;
  height: 100vh;
  background-color: var(--sidebar-color, #1a1a1a);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color, #333);
  position: sticky;
  top: 0;
  transition: all 0.3s ease;

  ul {
    list-style: none;
    flex: 1;
    padding: 0;
    margin: 0;
  }


  @media (max-width: 900px) and (min-width: 769px) {
    width: 80px;
    padding: 1rem 0.5rem;
    .sidebar-footer { display: none; } 
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto; /* IMPORTANTE: Deixa de ser altura total */
    flex-direction: column; /* Organiza Logo e Lista em coluna no mobile */
    position: relative; 
    padding: 1rem;
    border-right: none;
    border-bottom: 1px solid var(--border-color);

    ul { 
      display: flex; 
      flex-direction: row; /* Mantém os itens do menu na horizontal */
      gap: 8px; 
      width: 100%;
      overflow-x: auto; 
      padding: 10px 0;
      &::-webkit-scrollbar { display: none; } 
    }
  }
`;


const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: var(--text-secondary, #b3b3b3);
  padding: 12px 15px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  transition: 0.3s;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  
  &:hover, &.active {
    background: rgba(0, 212, 255, 0.1);
    color: var(--accent-color, #00d4ff);
  }

  @media (max-width: 900px) and (min-width: 769px) {
    justify-content: center;
    span:not(.material-symbols-rounded) { display: none; }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent-color);
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: var(--neon-shadow);

  @media (max-width: 768px) { margin-bottom: 0; font-size: 1.1rem; }
`;

const LogoBanco = styled.img`
  width: 200px;
  margin: 0;
  padding: 0;
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.75rem;
  color: var(--text-secondary);

  .links { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    &:hover { color: var(--accent-color); }
  }

  p { opacity: 0.5; font-size: 0.7rem; margin-top: 5px; }
  
  @media (max-width: 768px) {
    display: none;
  }
`;
interface MenuItems {
  path: string;
  icon: string;
  label: string;
}



  // --- Componente React Principal ---
  const Menu: React.FC = () => {
  const menuItems: MenuItems[] = [
    { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/transferencia", icon: "compare_arrows", label: "Transferências" },
    { path: "/cartoes", icon: "credit_card", label: "Cartões" },
    { path: "/investimentos", icon: "finance_mode", label: "Investimentos" },
    { path: "/seguranca", icon: "security", label: "Segurança" },
    { path: "/ajuda", icon: "help", label: "Ajuda" },
    { path: "/", icon: "exit_to_app", label: "Sair" },
  ];
    
  return (
    <_Sidebar>
      <Logo><LogoBanco src="https://upload.wikimedia.org/wikipedia/commons/8/82/Banco_Master_logo.png" /></Logo>
      <ul>
           {menuItems.map((item) => (
          <li id="menu-dashboard">
              <NavLink to={item.path}>
                <i>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </i> 
                <span>{item.label}</span>
              </NavLink>
          </li>
        ))}
      </ul>
      <SidebarFooter className="sidebar-footer">
        <div className="links">
          <a href="#">Termos de Uso</a>
          <a href="#">Privacidade</a>
          <a href="#">Ajuda</a>
        </div>
        <p>&copy; 2026 Banco Moderno</p>
      </SidebarFooter>
    </_Sidebar>
  );
};

export default Menu;
