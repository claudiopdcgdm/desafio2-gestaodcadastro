import React, {useState} from 'react'
import { Modal, Form } from 'react-bootstrap';
import { toast } from 'react-toastify'
import * as S from './styled'

export default function ModalNovo(props) {

        const {show, setShowModal} = props
        const [name, setName] = useState('')
        const [lastName, setLastName] = useState('')
        const [phone, setPhone] = useState('')
        const [cpf, setCpf] = useState('')
        const [email, setEmail] = useState('')
        const [endereco, setEndereco] = useState('')
        


        function handleSubmit(e){
            e.preventDefault()
            if(name ==='' || lastName ==='' || phone ==='' || cpf === '' || email === '' || endereco === ''){
                toast.error('Preencha todos os campos')
                return
            }
            
            //recupera os dados do localStorage
            const dataLocalStorage = localStorage.getItem('clientes')
            let clients = JSON.parse(dataLocalStorage) || []
            const newClient = {
                name:name,
                lastname:lastName,
                phone:phone,
                cpf:cpf,
                email:email,
                address: endereco
            }
            
            //grava novamente o array de objetos no localStorage
            clients.push(newClient)
            localStorage.setItem('clientes', JSON.stringify(clients))
            toast.success('Cliente cadastrado com sucesso')
            setShowModal(false)
            setName('')
            setLastName('')
            setPhone('')
            setCpf('')
            setEmail('')
            setEndereco('')
            
        }
        

        return (
          <>
            <Modal
              size="lg"
              show={show}
              onHide={() => setShowModal(false)}
              backdrop="static"
              keyboard={false}
              aria-labelledby="novo-cliente"
            >
              <Modal.Header closeButton>
                <Modal.Title id="novo-cliente">
                  Entre com os dados do cliente
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome*</Form.Label>
                        <Form.Control type="text" placeholder="nome do cliente" value={name} onChange={(text)=>setName(text.target.value)} />
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Sobre Nome*</Form.Label>
                        <Form.Control type="text" placeholder="Sobrenome ou utimo nome" value={lastName} onChange={(text)=>setLastName(text.target.value)}/>
                   </Form.Group> 
                   
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefone*</Form.Label>
                        <Form.Control type="phone" placeholder="Celular ou fixo" value={phone} onChange={(text)=>setPhone(text.target.value)}/>
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CPF*</Form.Label>
                        <Form.Control type="text" placeholder="00.000.000-00" value={cpf} onChange={(text)=>setCpf(text.target.value)}/>
                   </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" placeholder="email@email.com" value={email} onChange={(text)=>setEmail(text.target.value)}/>
                    </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Endereco*</Form.Label>
                        <Form.Control type="text" placeholder="Rua xpto, 301, bairro grande"  value={endereco} onChange={(text)=>setEndereco(text.target.value)}/>
                    </Form.Group>
                    
                    
                    <S.ButtonSubmit type="submit" >
                        Enviar
                    </S.ButtonSubmit>
                </Form>

              </Modal.Body>
            </Modal>
          </>
        );
      
}
