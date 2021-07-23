import React, {useState} from 'react'

import * as S from './styled'

export default function SubMenu({item}) {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <S.SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
                <div>
                    {item.icon}
                    <S.SidebarLabel>{item.title}</S.SidebarLabel>
                </div>
                <div>
                    {
                        item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        :null
                    }
                </div>
            </S.SidebarLink>
            
        </>
    )
}
