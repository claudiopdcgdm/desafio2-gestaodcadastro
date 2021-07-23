import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [
    {
        title: 'Admin',
        path:'/admin',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpend: <RiIcons.RiArrowUpFill/>,
        
    },
    
    {
        title: 'Clientes',
        path:'/admin/clientes',
        icon: <AiIcons.AiOutlineUser />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpend: <RiIcons.RiArrowUpFill/>,
        
    },

    {
        title: 'Produtos',
        path:'/admin/products',
        icon: <AiIcons.AiFillBoxPlot />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpend: <RiIcons.RiArrowUpFill/>,
        // subNav:[
        //     {
        //         title:'Reports',
        //         path:'/reports/reports',
        //         icon:<IoIcons.IoIosPaper/>,
        //     },
        //     {
        //         title:'Reports 2',
        //         path:'/reports/reports2',
        //         icon:<IoIcons.IoIosPaper/>,
        //     },
            
        // ]
    },

    // {
    //     title:'Products',
    //     path:'/products',
    //     icon:<FaIcons.FaCartPlus/>,
    // }
]

