// Criando estilos globais
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: none;
        padding: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

        font-family: "Poppins", "sans-serif";
        font-weight: 500;
    }

    body{
        background-color: #F0F2F6;
        
    }

    h1 {
    margin-top: 2.5rem;
    margin-left: 2.5rem;
  }

  .icon-top-section {
    display: flex;
    align-items: center;

    gap: 4rem;
  }

  .icon-top-section li {
    display: flex;
    align-items: center;

    gap: 1.5rem;
  }

  .icon-top-section svg {
    font-size: 1.7rem;

    color: #8c98a9;
  }

  /* Icones do topo */
  .purple {
    color: #5357b1 !important;
  }

  .green {
    color: #00ae63 !important;
  }

  /* Span de erro */

  .input-error {
    border: 2px solid #cc0808 !important;
  }

  .input-okay {
    border: 2px solid green !important;
  }

  /* Inputs */
  .input-form {
    height: 2rem;
    margin-top: -1rem;

    background-color: #f0f2f6;
    border: none;
    border-radius: 4px;
  }

  .span-form {
    transition: all 0.5s ease;
    font-size: 0.9rem;

    color: #cc0808;
    display: none;
  }

  .visible {
    display: block !important;
  }

  /* Btn */
  .btns-div{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-left: 60%;
    margin-top: 8rem;
  }

  .btn-purple {
    width: 12rem;
    height: 2.8rem;
    
    border: none;
    border-radius: 4px;

    color: white;
    background-color: #5357b1;

    transition: all 0.5s ease;
    cursor: pointer;
  }

  .btn-gray {
    width: 12rem;
    height: 2.8rem;
    
    border: none;
    border-radius: 4px;

    color: white;
    background-color: #8C98A9;

    transition: all 0.5s ease;
    cursor: pointer;
  }

  .btn-purple:hover {
    background-color: #3e43ac;
  }
`;
