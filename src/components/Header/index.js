import React, {useState} from 'react'
import * as S from './styled'
import logoGama from '../../assests/logo_gama.png'
import { toast } from 'react-toastify'



export default function Header() {

    const [email, setEmail] = useState('')

    function handleEmail(){
        const email_list = localStorage.getItem('emails')
        let emails_saved = JSON.parse(email_list) || []
       
       
        
        if (email !== ''){
             //verifica se o email ja esta cadastrado no localStorage
            //compara o email informado com o array, caso ocorra algum ocorrencia retorna true
            const hasEmail = emails_saved.some((email_saved) => email_saved === email )
            if (hasEmail){
                toast.error('Fique tranquilo, seu email já está cadastrado!!! avisaremos as promoções!!')
                setEmail('')
                return
            }
            emails_saved.push(email)
            localStorage.setItem('emails',JSON.stringify(emails_saved))
            toast.success('Email cadastrado com sucesso!!!')
            setEmail('')
        }
    }


    return (
       <S.Header>
           <S.Logo>
                <S.Image src={logoGama} />
           </S.Logo>
           <S.SeachAndMail>
                <S.AreaInput>
                    <S.Email/>
                    <S.InputEmail 
                        text='email' 
                        placeholder='Cadastre seu email aqui para receber nossas promoções '
                        value={email}
                        onChange={email => setEmail(email.target.value) }
                    />
                    <S.ButtonEmail onClick={handleEmail} >Cadastrar</S.ButtonEmail>
                </S.AreaInput>
            </S.SeachAndMail>
            <S.Nav>
                <S.Car color="#fff" size={20} onClick={() => alert('not implemented')} />
                <S.Login onClick={()=> alert('Not implemented')} >Cadastre-se</S.Login>
                <S.Login onClick={()=> alert('Not implemented')} >Login</S.Login>
            </S.Nav>

       </S.Header>
    )
}
