import { Link } from 'react-router-dom';

import logo from "./../../assets/logo.svg"

import FormField from "./../../components/FormField"
import FormButton from "./../../components/FormButton"

import "./style.css"

function Login() {
	return (
		<main className="login-page">
			<form>
				<img src={logo} alt="Logo do univero mítico" />
				<div className="fields-wrapper">
					<FormField title="Email" type="email" />
					<FormField title="Senha" type="password" />
				</div>
				<FormButton text="Login" />
				<div className="links-wrapper">
					<Link to="/register">Não tem uma conta?</Link>
					<Link to="/forgotPassword">Esqueci minha senha</Link>
				</div>
			</form>
		</main>
	)
}

export default Login