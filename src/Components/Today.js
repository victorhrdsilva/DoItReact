import { useState } from 'react';
import styled from 'styled-components';

function TodayCardHabit ({name, done, currentSequence, highestSequence, currentSequence}) {
    return (
        <Card>
                <div>
                    <h2>{name}</h2>
                    <p done={done}>Sequência atual: {currentSequence} dias</p>
                    <p done={done}>Seu recorde: {highestSequence} dias</p>
                </div>
                <button done={done}>
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </button>
        </Card>
    )
}

export default function Today() {
    const dayjs = require('dayjs');
    const weekdayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const todayHabitsData = [
        {
            "id": 3,
            "name": "Acordar",
            "done": true,
            "currentSequence": 3,
            "highestSequence": 2
        },
        {
            "id": 3,
            "name": "Dormir",
            "done": true,
            "currentSequence": 2,
            "highestSequence": 1
        },
        {
            "id": 3,
            "name": "Viver",
            "done": true,
            "currentSequence": 1,
            "highestSequence": 1
        }
    ]

    return (
        <Wrapper>
            <div>
                <h1>{weekdayNames[dayjs().day()] + ", " + dayjs().format("DD/MM")}</h1>
                <p>67% dos hábitos concluídos</p>
            </div>
            <Card>
                <div>
                    <h2>Acordar</h2>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <button>
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </button>
            </Card>

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
    div {
        width: 85vw;
        margin-bottom: 40px;
    }
    h1 {

        font-size: 24px;
        color: var(--primary-color);
    }
    p {
        margin-top: 10px;
        color: var(--sucess-color);
        font-size: 20px;
    }
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100%;
    background-color: var(--secundary-background-color);
    color: var(--primary-text-color);
    padding: 2.5vw;
    box-sizing: border-box;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
    }
    h2 {
        font-size: 25px;
        margin-bottom: 7px;
    }
    p {
        font-size: 13px;
        color: ${props => props.done ?  "var(--sucess-color)": "var(--primary-text-color)"};
    }
    button {
        width: 69px;
        height: 69px;
        border-radius: 5px;
        font-size: 60px;
        border: none;
        color: var(--secundary-background-color);
        margin-left: 5px;
        background-color: ${props => props.done ?  "var(--sucess-color)": "var(--background-color)"};
    }
`