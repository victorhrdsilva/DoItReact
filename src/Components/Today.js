import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import {setHabitsTodayDone, setHabitsTodayUndone } from '../Service/Service';

function TodayCardHabit({ id, name, done, currentSequence, highestSequence, reload, setReload }) {
    const isCurrentSequenceTheHighes = currentSequence === highestSequence;
    return (
        <Card done={done}>
            <div>
                <h2>{name}</h2>
                <p>Sequência atual: <span>{currentSequence} dias</span></p>
                <Highest
                    done={done}
                    isCurrentSequenceTheHighes={isCurrentSequenceTheHighes}>
                    Seu recorde: <span>{highestSequence} dias</span>
                </Highest>
            </div>
            <button>
                <ion-icon onClick={() => {
                    if (!done) {
                        setHabitsTodayDone(id).then(setReload(reload + 1)).catch((res) =>
                            alert(res.response.data.message)
                        )
                    } else {
                        setHabitsTodayUndone(id).then(setReload(reload + 1)).catch((res) =>
                            alert(res.response.data.message)
                        )
                    }
                }} name="checkmark-sharp"></ion-icon>
            </button>
        </Card>
    )
}

export default function Today() {
    const dayjs = require('dayjs');
    const weekdayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const { reload, setReload, todayHabitsData, percentageTodayHabitsDone } = useContext(UserContext);

    return (
        <Wrapper>
            <div>
                <h1>{weekdayNames[dayjs().day()] + ", " + dayjs().format("DD/MM")}</h1>
                <p>{percentageTodayHabitsDone === 0? "Nenhum hábito concluído ainda" : `${percentageTodayHabitsDone.toFixed(0)}% dos hábitos concluídos`} </p>
            </div>
            {todayHabitsData.map((item, index) =>
                <TodayCardHabit
                    key={index}
                    id={item.id}
                    name={item.name}
                    done={item.done}
                    highestSequence={item.highestSequence}
                    currentSequence={item.currentSequence}
                    setReload={setReload}
                    reload={reload}
                />
            )}
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
        margin-bottom: 25px;
    }
    h1 {

        font-size: 24px;
        color: var(--secundary-text-color);
        font-weight: 800;
    }
    p {
        margin-top: 10px;
        color: var(--secundary-text-color);
        font-size: 20px;
    }
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100%;
    background-color: var(--secundary-text-color);
    color: var(--secundary-background-color);
    padding: 2.5vw;
    box-sizing: border-box;
    border-radius: 5px;

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
        color: var(--secundary-background-color);
    }
    span {
        color: ${props => props.done ? "var(--secondary-color)" : "var(--secundary-background-color)"}
    }
    button {
        width: 69px;
        height: 69px;
        border-radius: 5px;
        font-size: 60px;
        border: none;
        color: var(--secundary-text-color);
        margin-left: 5px;
        background-color: ${props => props.done ? "var(--secondary-color)" : "var(--secundary-background-color)"};
    }
`
const Highest = styled.p`
    span {
        color: ${props => (props.done && props.isCurrentSequenceTheHighes) ? "var(--secondary-color)" : "var(--secundary-background-color)"};
    }
`