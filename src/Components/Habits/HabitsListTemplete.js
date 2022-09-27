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
    border: 1px solid var(--border-color-input);
    color: var(--border-color-input);
    background-color: var(--secundary-background-color);
    border-radius: 5px;
`
const ButtonDaySelected = styled(ButtonDay)`
    background-color: var(--selected-button-color);
    color: var(--secundary-background-color);
`
const NewHabits = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 85vw;
    height: ${props => props.isOpenedNewHabits ? '100%' : '0'};
    overflow: hidden;
    background-color: var(--secundary-background-color);
    padding: ${props => props.isOpenedNewHabits ? '16px 0' : '0'};
    margin-top: 22px;
    border-radius: 5px;
    box-sizing: border-box;
    transition: all 0.07s linear;
    input {
        width: 90%;
        height: 45px;
        border: 1px solid var(--border-color-input);
        font-size: 20px;
        border-radius: 5px;
        padding-left: 10px;
        box-sizing: border-box;
        ::placeholder {
            padding-left: 10px;
            color: var(--border-color-input);
            font-size: 20px;
        }
    }
`
const WeekDays = styled.div`
    display: flex;
    margin: 8px 0;
    width: 90%;
    justify-content: space-between;
    flex-wrap: wrap;
`
const HabitsList = styled(NewHabits)`
    height: 91px;
    align-items: flex-start;
    padding: 5vw;
    color: var(--primary-text-color);

`
const NameAndTrash = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
`

