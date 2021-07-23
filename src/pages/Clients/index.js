import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { Table } from 'react-bootstrap';
import ModalNovo from '../../components/admin/NovoModal'
import * as S from './styled'


export default function Clients() {

    const [showModal, setShowModal] = useState(false)
    const [clients, setClients] = useState([])

    //Add new user in localStorage
    function handleNew(){
        // alert('teste')
        setShowModal(true)
        
    }

    //Edit user in locaStorage
    function handleEdit(){
        alert('teste')
    }

    //Delete user in localstorage
    function handleDelete(){
        alert('teste')
    }


    useEffect(() => {
        function loadDatas(){
           const data =  localStorage.getItem('clientes')
           let ListClients = JSON.parse(data) || []
           console.log(ListClients)
           setClients(ListClients)
           

        }

        loadDatas()

        
    }, [showModal])
    return (
        <S.Container>
            <Sidebar/>
            <ModalNovo show={showModal} setShowModal= {setShowModal} />
            <S.AreaHead>
                <S.Title> Casdastro de Clientes</S.Title>
                <S.ButtonNovo onClick={handleNew}>Novo</S.ButtonNovo>
            </S.AreaHead>
           
            <S.Content>
               
                <Table striped  hover size="sm" >
                    <thead style={{fontSize:13}}> 
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Sobre Nome</th>
                            <th>Telefone</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Endereco</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:13}}>
                        {clients.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {item.name} </td>
                                    <td> {item.lastname} </td>
                                    <td> {item.phone} </td>
                                    <td> {item.cpf} </td>
                                    <td> {item.email} </td>
                                    <td> {item.address} </td>
                                    <td>
                                        <S.ButtonEdit onClick={handleEdit}/>
                                        <S.ButtonDelete onClick={handleDelete} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

               
            </S.Content>
        </S.Container>
    )
}
