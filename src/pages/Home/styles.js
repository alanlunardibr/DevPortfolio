import {Link} from "react-router-dom";
import styled from 'styled-components'


export const Container = styled.div`


    width: 100vw;
    height: 100vh;

    /* background: var(--bg-url) */
    --text-color : ${props => props.lights && "black"};
    background:  ${props => props.lights ? "var(--bg-url-light)" : "var(--bg-url)"};

    --IsSun : ${props => props.lights && "false"};

`

export const Caixa = styled.div`
    /*border: 1px solid red; */
    width: 360px;

    margin: auto;
    text-align: center;
    padding: 56px 24px ;

    > p {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        padding-bottom: 20px;
    }

`

export const Profile = styled.img`

    width: 112px;
    margin: auto;
    border-radius: 60px;
    padding: 5px;


`

export const Ul = styled.ul`
    
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 8px 0;

`
export const Li = styled.li`
    
`

export const UrlLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 24px;

    background: rgba(255,255,255,0.1);
    border: 1px solid  var(--text-color);
    border-radius: 8px;

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    text-decoration: none;
    font-weight: 500;

    transition: background 0.3s;
    

    :hover {
        background: rgba(255,255,255,0.05);
        border: 1px solid  var(--text-color);
    }
`

export const SocialLinks = styled.div`

    display: flex;
    gap: 32px;
    padding: 24px 0;
    font-size: 24px;

    justify-content: center;


`

export const Switch = styled.div`

> button {

    width: 32px;
    height: 32px;
    background: white;
    border: 0; 
    border-radius: 50%;
    background:  ${children => children.children.props.lights ? "var(--bg-url-light)" : "var(--bg-url)"};
}

>span{
    display: block;
    width: 64px;
    height: 24px;
    background-color: var(--text-color);
    border: 1px solid var(--text-color);
    backdrop-filter: blur(4px);
}

`

export const ImagemSunOrStars = styled.img`
    color: white;
    
`