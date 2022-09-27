import styled from 'styled-components';

export default function Historic() {
    return (
        <Wrapper>
            <h1>Em breve...</h1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    h1 {
        font-size: 30px;
        color: var(--secundary-text-color);
        font-weight: 800;
    }
`