import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { getHabitsToday } from '../Service/Service';


export default function Footer() {
    const navigate = useNavigate();
    const { reload, todayDoneHabits, setTodayDoneHabits, todayHabitsData, setTodayHabitsData, percentageTodayHabitsDone, setPercentageTodayHabitsDone } = useContext(UserContext);

    useEffect(() =>
        getHabitsToday().then((res => {
            setTodayHabitsData(res.data);
        })).catch((res) => {
            alert(res.response.data.message);
        }), [reload]);


    setTodayDoneHabits(todayHabitsData.filter((item) => {
        if (item.done) {
            return true
        } else {
            return false
        }
    }).length)

    if(todayDoneHabits > 0 && todayHabitsData.length > 0){
        setPercentageTodayHabitsDone((todayDoneHabits/todayHabitsData.length*100));
    } else {
        setPercentageTodayHabitsDone(0);
    }

    return (
        <Wrapper>
            <Background>
                <h3 onClick={() => navigate('/habits')}>Hábitos</h3>
                <ProgressBar onClick={() => navigate('/today')}>
                    <CircularProgressbar
                        value={percentageTodayHabitsDone/100}
                        background="true"
                        backgroundPadding={8}
                        maxValue={1}
                        text={percentageTodayHabitsDone === 0 ? "Hoje" : `${percentageTodayHabitsDone.toFixed(0)}%`}
                        styles={buildStyles({
                            textColor: "#4D4D4D",
                            pathColor: "#4D4D4D",
                            trailColor: "transparent",
                            backgroundColor: '#daff00',
                        })}
                    />
                </ProgressBar>
                <h3 onClick={() => navigate('/historic')}>Histórico</h3>
            </Background>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 3vh;
    align-items: center;
    width: 100vw;
    height: 70px;
    background: #4D4D4D;
    color: var(--secondary-color);
    font-weight: 700;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
`

const Background = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
    width: 100vw;
    height: 70px;
`
const ProgressBar = styled.div`
    width: 90px;
    height: 90px;
    margin-bottom: 50px;
`