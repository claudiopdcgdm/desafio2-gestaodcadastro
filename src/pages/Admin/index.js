import React from 'react'
import * as S from './styled'
import Sidebar from '../../components/admin/Sidebar'



export default function Admin() {
    return (
        <S.Container>
            <Sidebar/>
           <S.Content>
                <S.Msg>Simples painel para gestão de produtos e clientes do ecommerce</S.Msg>
                <S.AreaLinks>
                    <S.LinkProduto to='/admin/clientes' >Clientes</S.LinkProduto>
                    <S.LinkCliente to='/admin/products' >Produtos</S.LinkCliente>
                </S.AreaLinks>
            </S.Content>
        </S.Container>
    )
}
