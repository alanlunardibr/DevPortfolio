import styled from 'styled-components'

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, rgb(3, 28, 51), rgb(3, 51, 26));;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content :flex-start;

    h1{
        padding-bottom: 1px;

    }


`
export const Sublinhado = styled.div`

    width: 200px;
    border-bottom: 2px solid white;


`

export const ProjLinha = styled.div`

    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-top: 30px;
    align-items: baseline;
    border: 1px solid  var(--text-color);  
    width: 80%;
    max-width: 740px;


`