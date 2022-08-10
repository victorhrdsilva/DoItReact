import FormStyled from "../styled/FormStyled"
import { Link } from "react-router-dom"

export default function RegisterPage() {
    return (
        <FormStyled>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="senha"></input>
            <input type="text" placeholder="nome"></input>
            <input type="url" placeholder="foto"></input>
            <input type="submit" value="Cadastrar"></input>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </FormStyled>
    )
}