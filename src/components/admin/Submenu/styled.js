import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const SidebarLink = styled(Link)`
    display: flex;
    color:#e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration:none;
    font-size: 18px;

    &:hover{
        cursor: pointer;
        background-color: #252831;
        border-left: 4px solid #632ce4;
    }
`
export const SidebarLabel = styled.span`
    margin-left: 16px;
`