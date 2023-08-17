import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`

export const Imagem = styled.img `
    margin-top: 30px;
`

export const Users = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 348px;
    height: 58px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    margin-bottom: 20px;
    
    p{
        color: #FFF;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`