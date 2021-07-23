import React, {useState} from 'react'
import * as S from './styled'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'


import {SidebarData} from '../SidebarData'
import SubMenu from '../Submenu'
import { IconContext } from 'react-icons/lib'



export default function Sidebar() {
    
    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)


    return (

        <>
        <IconContext.Provider value={{color:"#fff"}}>
                <S.Nav>
                    <S.NavIcon to='#'>
                        < FaIcons.FaBars onClick={showSidebar} />
                    </S.NavIcon>
                    <S.AreaNavItem>
                        <S.NavWelcome>User Loged: </S.NavWelcome>
                        <S.NavNameUser>Test User</S.NavNameUser>
                    </S.AreaNavItem>
                </S.Nav>
                <S.SidebarNav sidebar={sidebar} >
                    <S.SidebarWrap>
                        <S.NavIcon to='#'>
                            <AiIcons.AiOutlineClose  onClick={showSidebar}/>
                        </S.NavIcon>
                        {SidebarData.map((item,index)=> {
                            return <SubMenu item={item} key={index}/>
                        })}
                    </S.SidebarWrap>
                </S.SidebarNav>
            </IconContext.Provider>
            
        </>
    )
}
