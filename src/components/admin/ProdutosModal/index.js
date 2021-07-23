import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap';
import { toast } from 'react-toastify'
import * as S from './styled'

export default function ProdutosModal(props) {

    const { show, setShowModal } = props
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [price_promo, setPrice_promo] = useState('')
    




    function handleSubmit(e) {
        e.preventDefault()
        if (!name || !description || !price || !price_promo){
            toast.error('Preencha todos os campos')
            return
        }

        // //recupera os dados do localStorage
        const dataLocalStorage = localStorage.getItem('produtos')
        let products = JSON.parse(dataLocalStorage) || []
        const newProduct = {
            name,
            description,
            price,
            price_promo,
        }

        // //grava novamente o array de objetos no localStorage
        products.push(newProduct)
        localStorage.setItem('produtos', JSON.stringify(products))
        toast.success('Produto cadastrado com sucesso')
        setShowModal(false)
        setName('')
        setDescription('')
        setPrice('')
        setPrice_promo('')
    }


    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShowModal(false)}
                backdrop="static"
                keyboard={false}
                aria-labelledby="novo-produto"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="novo-produto">
                        Entre com os dados do produto
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nome*</Form.Label>
                            <Form.Control type="text" placeholder="Nome Produto" value={name} onChange={(text) => setName(text.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Descricao(breve)*</Form.Label>
                            <Form.Control type="text" placeholder="Pequena descricao" value={description} onChange={(text) => setDescription(text.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Preco Venda*</Form.Label>
                            <Form.Control type="numeric" placeholder="Preco Venda" value={price} onChange={(text) => setPrice(text.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Preco Promocional</Form.Label>
                            <Form.Control type="numeric" placeholder="Preco Promocional" value={price_promo} onChange={(text) => setPrice_promo(text.target.value)} />
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