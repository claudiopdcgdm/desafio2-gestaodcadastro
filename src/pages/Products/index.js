import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { Table } from 'react-bootstrap';
import ProdutosModal from '../../components/admin/ProdutosModal'
import * as S from './styled'


export default function Produtos() {

    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])

    //Add new user in localStorage
    function handleNew(){
        // alert('teste')
        setShowModal(true)
        
    }



    useEffect(() => {
        function loadDatas(){
           const data =  localStorage.getItem('produtos')
           let ListProducts = JSON.parse(data) || []
           console.log(ListProducts)
           setProducts(ListProducts)
           

        }

        loadDatas()

        
    }, [showModal])

    return (
        <S.Container>
            <Sidebar/>
            <ProdutosModal show={showModal} setShowModal= {setShowModal} />
            <S.AreaHead>
                <S.Title> Casdastro de Produtos</S.Title>
                <S.ButtonNovo onClick={handleNew}>Novo</S.ButtonNovo>
            </S.AreaHead>
           
            <S.Content>
               
                <Table striped  hover size="sm" >
                    <thead style={{fontSize:13}}> 
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Descrivao Breve</th>
                            <th>Preco Venda</th>
                            <th>Preco Promocional</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:13}}>
                        {products.map((item,index) => {

                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {item.name} </td>
                                    <td> {item.description} </td>
                                    <td> {item.price} </td>
                                    <td> {item.price_promo} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </S.Content>
        </S.Container>
    )
}
