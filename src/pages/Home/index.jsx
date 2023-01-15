import { Caixa, Container, Li, UrlLink, Profile, Ul,SocialLinks, Switch, ImagemSunOrStars} from './styles'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

import Stars from '../../assets/stars.svg'
import Sun from '../../assets/sun.svg'

export function Home(){

    const [ lights, setlights] = useState(false)

    function handleOnClick() { 
        setlights(prevlights => !prevlights)
    }


    return (
        <Container lights={lights}>
            <Caixa>
               <Profile src='https://media.licdn.com/dms/image/C4E03AQHTAfAui4LKRQ/profile-displayphoto-shrink_800_800/0/1627249690477?e=1678320000&v=beta&t=4_-YtKJgezA9yOdrNb3q4ZELb_5mZb-7K5U3aTlVxrU' alt='Imagem de Perfil'/>
               <p>@alanlunardibr</p>
               <Switch>
                   <button lights={lights} onClick={handleOnClick}>
                        {lights ? <ImagemSunOrStars src={Stars} alt=""  /> : <ImagemSunOrStars src={Sun} alt=""  />}
                   </button>
               </Switch>

               <Ul>
                   <Li>
                        <UrlLink to="/portfolio">Conheça meu Portifólio</UrlLink>
                   </Li>
                   <Li>
                        <UrlLink to="/">Experiência Profissional</UrlLink>
                   </Li>
               </Ul>

               <SocialLinks>
                   <a href="https://www.linkedin.com/in/alan-lunardi-bb277a57/" target="_blank"><FiLinkedin/></a>
                   <a href="https://github.com/alanlunardibr" target="_blank"><FiGithub /></a>
                   <a href="http://wa.me/5541987832941" target="_blank"><FaWhatsapp /></a>
                
               </SocialLinks>

               <footer>
                   <span>AL Desenvolvimento</span>
               </footer>
            </Caixa>
            
        </Container>
    )


    
}