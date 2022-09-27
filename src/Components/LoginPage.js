import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormStyled from "../styled/FormStyled";
import { login } from "../Service/Service";
import UserContext from "../contexts/UserContext";
import {ThreeDots} from 'react-loader-spinner';
import logo from '../image/ativo2.png'

export default function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const { loading, setLoading } = useContext(UserContext)

    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function Submit(event) {
        event.preventDefault();

        setLoading(true);

        login(form).then((res) => {
            localStorage.setItem("happenToken", res.data.token);
            localStorage.setItem("userImage", res.data.image);
            navigate('/habits');
            setLoading(false);
        }).catch((res) => { 
            alert(res.response.data.message);
            setLoading(false)
        });
    }

    return (
        <FormStyled>
            <img src={logo} alt="logo"></img>
            <form onSubmit={Submit}>
                <input name="email" value={form.email} type="email" placeholder="email" onChange={handleForm} required></input>
                <input name="password" value={form.password} type="password" placeholder="senha" onChange={handleForm} required></input>
                <button>{loading ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : "Entrar"}</button>
            </form>
            <Link to={"/register"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </FormStyled>
    )
}
