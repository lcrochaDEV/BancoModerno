import { styled } from "styled-components";

interface Props {

 }
const Input = styled.input<Props>`
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    background: #1a1e2e;
    border: 1px solid #3a4a63;
    border-radius: 8px;
    color: var(--text-primary);
    transition: 0.3s;


    &:focus {
        outline: none;
        border-color: var(--accent-color);
        box-shadow: 0 0 5px rgba(0, 212, 255, 0.3);
    }

    &:hover {
        filter: brightness(1.1);
        box-shadow: var(--neon-shadow);
    }
`;
export default Input;