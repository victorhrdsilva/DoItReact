import styled from 'styled-components';
export default function Header () {
    let userImage = localStorage.getItem("userImage");
    return (
        <Wrapper>
            <Logo>
                <p>Do It</p>
            </Logo>
            <Image img={userImage}></Image>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3vh;
    align-items: center;
    width: 100vw;
    height: 70px;
    background: var(--primary-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    box-sizing: border-box;
    color: #FFFFFF;
`
const Logo = styled.div`
    font-size: 25px;
    font-weight: 700;
`
const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    height: 55px;
    width: 55px;
    border-radius: 100%;
`