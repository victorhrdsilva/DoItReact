import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';

export default function FormStyled({ children }) {
    const { loading } = useContext(UserContext);

    return (
        <>
            {loading ? <InvisibleLayer></InvisibleLayer> : ""}
            <Wrapper loading={loading}>
                {children}
            </Wrapper>
        </>
    )
}

const InvisibleLayer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input {
   
        width: 80vw;
        max-width: 303px;
        height: 45px;
        border: 1px solid var(--border-color-input);
        border-radius: 5px;
        margin-bottom: 6px;
        box-sizing: border-box;
        padding-left: 11px;
        font-size: 20px;
        color: ${props => props.loading ? '#AFAFAF' : "black"};
        background-color: ${props => props.loading ? 'var(--secundary-background-color-input)' : 'var(--secundary-background-color)'};

        &::placeholder {
        color: var(--border-color-input);
        }

    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80vw;
        max-width: 303px;
        height: 45px;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: var(--secondary-color);
        color: var(--secundary-text-color);
        font-size: 21px;
        border: none;
    }
    p {
        color: var(--secondary-color);
        text-decoration: underline;
        margin-top: 25px;
        text-align: center;
        max-width: 80vw;
    }
`