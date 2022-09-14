import { useState } from 'react';
import styled from 'styled-components';


function DayButton ({day, inicial, setSelectedDays, selectedDays}) {
    const [isSelectedButton, setIsSelectedButton] = useState(false);
    
    function selectDay() {
        setSelectedDays([...selectedDays, day])
        setIsSelectedButton(!isSelectedButton)
    }

    function deselectDay() {
        let numberDay = selectedDays.indexOf(day)
        selectedDays.splice(numberDay, 1)
        setIsSelectedButton(!isSelectedButton)
    }

    return ( 
    <>
        {isSelectedButton ? <ButtonDaySelected onClick={deselectDay}>{inicial}</ButtonDaySelected>:
        <ButtonDay onClick={selectDay}>{inicial}</ButtonDay>            
        }    
    </>
    )
}
export default function Habits() {
    const days = [
        {
        inicial: "D",
        day: 1        
        },
        {
        inicial: "S",
        day: 2        
        },{
        inicial: "T",
        day: 3        
        },{
        inicial: "Q",
        day: 4        
        },{
        inicial: "Q",
        day: 5        
        },{
        inicial: "S",
        day: 6        
        },{
        inicial: "S",
        day: 7        
        }
    ];

    const [newHabitsForm, setNewHabitsForm] = useState({
        name: "",
        days: []
    });
    
    const [selectedDays, setSelectedDays] = useState([])

    function handleForm(event) {
        setNewHabitsForm({
            ...newHabitsForm,
            [event.target.name]: event.target.value
        });
    };

    const [isOpenedNewHabits, setIsOpenedNewHabits] = useState(false)

    return (
        <Wrapper>
            <Headline>
                <h2>
                    Meus hábitos
                </h2>
                <button onClick={() => setIsOpenedNewHabits(!isOpenedNewHabits)}>
                    +
                </button>
            </Headline>
            <NewHabits isOpenedNewHabits={isOpenedNewHabits}>
                <input name='name' value={newHabitsForm.name} type="text" placeholder='nome do hábito' onChange={handleForm}/>
                <WeekDays>
                    {days.map((item, index) => 
                    <DayButton
                        key={index}
                        selectedDays={selectedDays}
                        setSelectedDays={setSelectedDays}
                        inicial={item.inicial}
                        day={item.day}
                        />)}
                </WeekDays>
                <Buttons>
                    <button onClick={() => setIsOpenedNewHabits(!isOpenedNewHabits)}>Cancel</button>
                    <input type='submit' value='Salvar'></input>
                </Buttons>
            </NewHabits>
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
const Buttons = styled.div`
    display: flex;
    align-self: flex-end;
    margin: 10px 5vw 0 0;
    button {
        border: none;
        background-color: transparent;
        color: var(--secondary-color);
        font-size: 18px;

    }
    input {
        width: 84px;
        height: 35px;
        color: var(--secundary-background-color);
        background-color: var(--secondary-color);
        font-size: 18px;
        padding: 0;
        margin-left: 10px;
    }
`