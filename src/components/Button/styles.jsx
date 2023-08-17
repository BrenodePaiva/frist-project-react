import styled from "styled-components";


export const Button = styled.button `
    width: 342px;
    height: 74px;
    margin-top: 130px;
    border-radius: 14px;
    background: ${props => props.isBack ? "transparent" : "rgba(0, 0, 0, 0.80)"}; 
    border: ${props => props.isBack ? "1px solid #FFF" : "none"};
    color: #FFF;
    font-size: 17px;
    font-weight: bold;
    line-height: 28px; /* 164.706% */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img{
        transform: ${props => props.isBack && "rotateY(180deg);"};
    }

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`