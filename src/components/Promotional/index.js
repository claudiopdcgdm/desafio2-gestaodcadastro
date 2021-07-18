import React from 'react'
import * as S from './styled'
import blackfriday from '../../assests/blackfridaylabel.png'
import bf from '../../assests/bf.jpg'
import celulares from '../../assests/celulares.jpg'



export default function Promotional() {
    
    
    
      return (
        <S.Container>
                <S.Image src={blackfriday} />
            <S.BlackLabel>
                <S.Promo>So aqui 60% off em todos os Smartfone. Aproveite</S.Promo>
            </S.BlackLabel>
            <S.Celular src={celulares} /> 
            <S.Celular src={bf} /> 
            
            
            
            
        </S.Container>
    )
}
