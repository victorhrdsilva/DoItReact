import FormStyled from "../styled/FormStyled"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { register } from "../Service/Service";
import UserContext from "../contexts/UserContext";
import { ThreeDots } from 'react-loader-spinner'

export default function RegisterPage() {
    const { loading, setLoading } = useContext(UserContext)

    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const navigate = useNavigate();

    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function Submit(event) {
        event.preventDefault();
        setLoading(true);

        register(form)
            .then(() => {
                navigate("/");
                setLoading(false);
            }).catch(() => {
                alert((res) => {
                    alert(res.response.data.message);
                    setLoading(false)
                })
            })
    }


    return (
        <FormStyled>
            <form onSubmit={Submit}>
                <input name="email" type="email" placeholder="email" onChange={handleForm} required></input>
                <input name="password" type="password" placeholder="senha" onChange={handleForm} required></input>
                <input name="name" type="text" placeholder="nome" onChange={handleForm} required></input>
                <input name="image" type="url" placeholder="foto" onChange={handleForm} required></input>
                <button type="submit" value="Cadastrar">{loading ? <ThreeDots
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
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </FormStyled>
    )
}