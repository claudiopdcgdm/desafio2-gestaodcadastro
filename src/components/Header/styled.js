import styled from 'styled-components'
import { FiShoppingCart,FiMail } from "react-icons/fi";


export  const Header = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #222;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin:auto;
    height: 100px;
`
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`
export const Image = styled.img`
    background-color: transparent;
    width: 10rem;
`
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 10px;
 `
export const SeachAndMail = styled.div`
    display: flex;
    flex-direction: column;
`
export const AreaInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const InputEmail = styled.input`
    width: 521px;
    border: 1px solid #fff;
    border-radius: 0.90px;
    padding: 5px;
    margin-top: 10px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    /* border-bottom-left-radius: 6px;
    border-top-left-radius: 6px; */
    
    &:focus{
        outline: 0;
    }
 `
export const ButtonEmail = styled.button`
    background-color: #fff;
    padding:5px;
    margin-top: 10px;
    background-color: #000;
    color:#fff;
    border:1px solid #000;
    margin-left:-70px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
`
export const Car = styled(FiShoppingCart)`
    cursor: pointer;   
    &:hover{
        opacity: 0.5;
    }
`
export const Email = styled(FiMail)`
    margin-top:10px;
    color:#000;
    font-size:27px ;
    z-index: 1;
    background-color: #fff;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
`
 
export const Login = styled.span`
    font-size: 15px;
    color: #fff;
    margin-left: 0.74rem;
    text-decoration:none;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
        /* color:#64df3e */
    }
 `
 