import styled from 'styled-components';

const _Footer = styled.footer`
    background-color: var(--sidebar-color);
    padding: 1.5rem 2rem;
    border-top: 1px solid var(--border-color);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-secondary);
    width: 100%;
    height: 150px;
    margin-top: auto; /* Fundamental para o flex-box do pai empurrá-lo */

    .footer-links, .social {
      display: flex;
      gap: 15px;
    }

    .social { 
      justify-content: flex-end; 
    }

    a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: 0.3s;
      white-space: nowrap;

      &:hover {
        color: var(--accent-color);
      }
    }

    p {
      text-align: center;
    }

    /* --- Responsividade Mobile --- */
    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* Muda de linha para coluna */
      gap: 15px;
      padding: 1.5rem 1rem;
      text-align: center;

      .footer-links, .social {
        justify-content: center;
      }

      p {
        order: 3; /* Coloca o copyright por último no mobile */
      }
    }
`;

const Footer = () => {
    return (
        <_Footer>
            <div className="footer-links">
                <a href="#">Termos</a>
                <a href="#">Privacidade</a>
                <a href="#">Contato</a>
            </div>
            <p>&copy; 2026 Banco Moderno Digital</p>
            <div className="social">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
            </div>
        </_Footer>
    );
};

export default Footer;
