import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.div`
    background-color: #222;
    height: 45px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    
`

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size:2rem;
    height: 80px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
`

export const SidebarNav = styled.nav`
    background:#222;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top:200;
    left:${({sidebar})=> (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index:10;
`

export const SidebarWrap = styled.div`
    width: 100%;
`
export const AreaNavItem = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    margin-right: 10px;
`

export const NavWelcome = styled.span`
    font-size: 18px;
    color: #64df3e;
`
export const NavNameUser = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`
