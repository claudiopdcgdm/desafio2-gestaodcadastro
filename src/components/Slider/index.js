import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slide01 from '../../assests/slide_celulares.png'
import Slide02 from '../../assests/notebooks.jpeg'
import Slide03 from '../../assests/bf_02.png'
import * as S from './styled'


export default function Slider() {

    const slideImages = [
       Slide01,
       Slide02,
       Slide03,
      ];

    const zoomOutProperties = {
        indicators: true,
        scale: 0.1
    }  

    return (
        <S.Container>
            <Zoom {...zoomOutProperties}>
                {slideImages.map((each, index) => (
                <S.Slide key={index}>
                    <S.SlideImg src={each} />
                </S.Slide>
                ))}
            </Zoom>
        </S.Container>        
        
    )
}
