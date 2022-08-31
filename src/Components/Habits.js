import styled from 'styled-components';


export default function Habits() {
    return (
        <Wrapper>
            <Headline>
                <h2>
                    Meus hábitos
                </h2>
                <button>
                    +
                </button>
            </Headline>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    background-color: var(--background-color);
    min-height: 70vh;
    p{
        width: 85vw;
        margin-top: 20px;
        color: var(--primary-text-color);
        font-size: 20px;
    }
`
const Headline = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 85vw;
    h2 {
        font-size: 23px;
        color: var(--primary-color);
    }
    button {
        width: 40px;
        height: 35px;
        background-color: var(--secondary-color);
        color: var(--secundary-text-color);
        border: none;
        font-size: 25px;
        font-weight: 700;
        border-radius: 5px;
    }
`