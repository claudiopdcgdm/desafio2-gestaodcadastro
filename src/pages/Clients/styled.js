import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

export const Container = styled.div`
   
`
export const AreaHead = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    width: 80%;
    margin:0 auto;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin:0 auto;
`

export const Title = styled.h1`
    font-size: 21px;
    font-weight: bold;
    margin-top:10px;
`
export const ButtonNovo = styled.button`
    border:none;
    text-align: center;
    padding: 2px;
    background-color:#64df3e;
    width: 7rem;
    margin-bottom:10px;
    font-size: 15px;
    font-weight: bold;
    border-radius:9px;
    color:#fff;
    
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const ButtonEdit = styled(FaIcons.FaEdit)`
    color: #64df3e;
    font-size:23px;
    margin-right: 5px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
export const ButtonDelete = styled(FaIcons.FaTrash)`
    color: red;
    font-size:20px;
    margin-right: 5px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
