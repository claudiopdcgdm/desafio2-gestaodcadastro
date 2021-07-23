import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`

export const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const Msg = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`
export const AreaLinks = styled.div`
    display: flex;
    flex-direction: row;
`
export const LinkProduto = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: 10px;
    background-color:#64df3e;
    width: 10rem;
    margin-right:10px;
    font-size: 18px;
    font-weight: bold;
    border-radius:20px;
    color:#fff;
    
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
export const LinkCliente = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: 10px;
    background-color:#64df3e;
    width: 10rem;
    margin-right:10px;
    font-size: 18px;
    font-weight: bold;
    border-radius:20px;
    color:#fff;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
