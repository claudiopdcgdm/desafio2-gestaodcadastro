import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Content = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;
    margin-left:10px;
    margin-right:10px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 24%;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    margin-top:2rem; 
    
`

export const Title = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
    text-align:center;
`
export const ProductImg = styled.img`
    width: 150px;
    height: 150px;
`
export const Description = styled.span`
    font-size: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
    text-align:center;
`

export const Price = styled.span`
    font-size: 17px;
    text-decoration:${(props) => props.line};
    color:${props => props.color}

`