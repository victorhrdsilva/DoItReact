import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const value = 0.80;

    return (
        <Wrapper>
            <ProgressBar>
                <CircularProgressbar 
                    value={value}
                    background="true"
                    backgroundPadding={8}
                    maxValue={1} 
                    text={`${value * 100}%`} 
                    styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        backgroundColor: '#52B6FF',
                    })}
                    />
            </ProgressBar>
            <Background>
                <h3>Hábitos</h3>
                <h3>Histórico</h3>
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
    background: #FFFFFF;
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
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 8px;
    left: calc(50vw - 45.5px);
`