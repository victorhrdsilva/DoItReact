export default function Header () {
    let userImage = localStorage.getItem("userImage");
    return (
        <Wrapper>
            <Logo>
            </Logo>
            <img src={userImage} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 70px;
    background: var(--primary-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    justify-content: space-around;
    padding: 0 2vw;
    position: fixed;
    bottom: 0;
`