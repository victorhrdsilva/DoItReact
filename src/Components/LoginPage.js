import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormStyled from "../styled/FormStyled";
import { login } from "./Service/Service";
import UserContext from "../contexts/UserContext";

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
            localStorage.setItem("happenToken", res.token);
            localStorage.setItem("userImage", res.data.image);
            navigate('/today');
        }).catch((res) => { alert(res.response.data.message) });
    }

    return (
        <FormStyled>
            <form onSubmit={Submit}>
                <input name="email" value={form.email} type="email" placeholder="email" onChange={handleForm} required></input>
                <input name="password" value={form.password} type="password" placeholder="senha" onChange={handleForm} required></input>
                <input type="submit" value="Entrar"></input>
            </form>
            <Link to={"/register"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </FormStyled>
    )
}
