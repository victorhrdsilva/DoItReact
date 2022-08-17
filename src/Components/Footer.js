import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const value = 0.66;

    return (
        <Wrapper>
            <ProgressBar>
                <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
            </ProgressBar>
            <Background>
                <h3>Hábitos</h3>
                <h3>Histórico</h3>
            </Background>
        </Wrapper>
    )
}

const Background = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
    width: 100vw;
    height: 70px;
`