import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { delectHabit } from "../../Service/Service";
import styled from 'styled-components';


export default function HabitsListTemplete({ name, days, id, daysInicial }) {

    const { reload, setReload } = useContext(UserContext);

    function returnDays(item, index) {
        if (days.includes(index + 1)) {
            return (<ButtonDaySelected key={index}>{daysInicial[index]}</ButtonDaySelected>)
        } else {
            return (<ButtonDay key={index}>{daysInicial[index]}</ButtonDay>)
        }
    }

    return (
        <HabitsList>
            <NameAndTrash>
                <h2>{name}</h2>
                <ion-icon name="trash-outline" onClick={() => {
                    if (window.confirm("Você apagará o hábito com essa ação! Clique em OK para continuar.")) {
                        delectHabit(id).then((res) =>
                            setReload(reload + 1)
                        ).catch((res) =>
                            alert(res.response.data.message)
                        )
                    }
                }}></ion-icon>
            </NameAndTrash>
            <WeekDays>
                {
                    daysInicial.map(
                        (item, index) => returnDays(item, index)
                    )}
            </WeekDays>
        </HabitsList>
    )
}

const ButtonDay = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    color: var(--secundary-text-color);
    background-color: var(--secundary-background-color);
    border-radius: 5px;
`
const ButtonDaySelected = styled(ButtonDay)`
    background-color: var(--secondary-color);
    color: var(--secundary-text-color);
`
const NewHabits = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 85vw;
    background-color: var(--secundary-text-color);
    margin-top: 22px;
    border-radius: 5px;
    box-sizing: border-box;
`
const WeekDays = styled.div`
    display: flex;
    margin: 8px 0;
    width: 90%;
    justify-content: space-between;
    flex-wrap: wrap;
`
const HabitsList = styled(NewHabits)`
    align-items: flex-start;
    padding: 5vw;
    color: var(--secondary-color);

`
const NameAndTrash = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
`

