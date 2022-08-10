import { Link } from "react-router-dom";
import FormStyled from "../styled/FormStyled";

export default function LoginPage () {
    return (
        <FormStyled>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="senha"></input>
            <input type="submit" value="Entrar"></input>
            <Link to={"/register"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </FormStyled>
    )
}
