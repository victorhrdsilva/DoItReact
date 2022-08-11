import FormStyled from "../styled/FormStyled"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { register } from "./Service/Service";

export default function RegisterPage() {
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

    function Submit () {
        useEffect(() => {
            register (form)
            .then(() => {
                navigate("/");
            }).catch(() => {
                alert("Preencha os campos corretamente!")
            })
        })
    }

    return (
        <FormStyled onSubmit={Submit}>
                <input name="email" type="email" placeholder="email" onChange={handleForm} required></input>
                <input name="password" type="password" placeholder="senha" onChange={handleForm} required></input>
                <input name="name" type="text" placeholder="nome" onChange={handleForm} required></input>
                <input name="image" type="url" placeholder="foto" onChange={handleForm} required></input>
                <input type="submit" value="Cadastrar"></input>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </FormStyled>
    )
}