// Importando Styled components
import styled from "styled-components"


// Estilizando a primeira página
export const FirstPageStyled = styled.form`
    /* Container */
    width: 55vw;
    height: auto;
 
    display: grid;
    grid-template-columns: auto;
    margin: auto;
    margin-top: 3rem;

    padding: .5rem;
    
    background-color: white;

    h1{
        margin-top: 2.5rem;
        margin-left: 2.5rem;
    }
    /* Icones */
    .icon-top-section{
        display: flex;
        align-items: center;

        gap: 4rem;
    }

    .icon-top-section li{
        display: flex;
        align-items: center;

        gap: 1.5rem;
    }

    .icon-top-section svg{
        font-size: 1.7rem;

        color: #8C98A9;
    }

    .purple{
        color: #5357B1 !important;
    }

    .green{
        color: #00AE63 !important;
    }

    /* Span de erro */

    .input-error{
        border: 2px solid #cc0808 !important;
    }

    .input-okay{
        border: 2px solid green !important;
    }

    /* Inputs */
    .name-input-div{
        width: 90%;

        display: flex;
        flex-direction: column;

        margin-left: 2.5rem;
    }

    .input-form{
        height: 2rem;
        margin-top: -1rem;

        background-color: #F0F2F6;
        border: none;
        border-radius: 4px;
        box-shadow: .5px .5px rgba(0, 0, 0, .5);
    }

    .span-form{
        transition: all .5s ease;
       font-size: .9rem;

       color: #cc0808;
       display: none;
    }

    .visible{
        display: block !important;
    }
    
    .passwords-container{
        display: flex;
        width: 90%;

        gap: 4rem;
        margin-left: 2.5rem;
        margin-top: 1rem;
    }

    .password-input-div {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .confirm-password-input-div{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    #pasword #confirm-password #email #date{
        width: 100%;
    }

    .email-date-container{
        display: flex;
        width: 90%;

        gap: 4rem;
        margin-left: 2.5rem;
        margin-top: 1rem;
    }

    .email-input-div {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .date-input-div{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    /* Btn */
    .btn{
        width: 10rem;
        height: 2.8rem;

        margin-left: 80%;
        margin-top: 9rem;
        border: none;
        border-radius: 4px;

        color: white;
        background-color: #5357B1;

        transition: all .5s ease;
        cursor: pointer;
    }

    .btn:hover{
        background-color: #3e43ac;
    }

`