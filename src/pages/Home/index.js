import React, {useEffect, useState} from 'react'
import Slider from '../../components/Slider'
import * as S from './styled'
import api from '../../services/api'
import Footer from '../../components/Footer'

export default function Home() {
    
    const [products, setProducts] = useState([])

    //load list products frm api /'http://claudiopdcgdm.pythonanywhere.com/api/data-produtos/'
    useEffect(() => {
        async function loadProducts(){
                api.get('api/data-produtos/')
                .then(response => {
                    console.log(response.data)
                    setProducts(response.data)
                })
                .catch(e => {
                    console.log('Error access api produtos')
                    alert(`Error in load list products from API ${e}`)
                })
            }
        loadProducts()
    },[])

    function formatPrice(price, price_promo){
    
        if(price === price_promo){
            return <S.Price line='none' color='#000'>R${price}</S.Price>
        }else{
            return(
                <>
                    <S.Price line='line-through' color='red'> De R${price} </S.Price>
                    <S.Price line='none' color='#000'>Por R${price_promo} </S.Price>
                </>
            )
        }
        
    }

    return (
        <S.Container>
            <Slider/>
               <S.Content>
                {
                    products.map((product) => {
                        let price = product.preco_marketing
                        let price_promo = product.preco_marketing_promo

                        return (
                            <S.Card key={product.id}>
                                <S.Title>{product.name}</S.Title>
                                <S.ProductImg src={product.image} alt={product.name}/>
                                <S.Description> {product.cut_description} </S.Description>
                                {formatPrice(price, price_promo)}
                            </S.Card>
                        )
                    })
                }
            </S.Content>
            <Footer/>
        </S.Container>
    )
}
