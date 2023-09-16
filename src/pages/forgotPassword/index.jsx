import { Link } from 'react-router-dom';

import logo from "./../../assets/logo.svg"

import FormField from "./../../components/FormField"
import FormButton from "./../../components/FormButton"

import "./style.css"

function ForgotPassword() {
	return (
		<main className="forgotPassword-page">
			<form>
				<img src={logo} alt="Logo do univero mítico" />
				<p>Precisamos de seu email para que possemos lhe conceder o acesso à página de mudança de senha</p>
				<FormField title="Digite seu email" type="email" />
				<FormButton text="Enviar email" />
				<div className="links-wrapper">
					<Link to="/register">Não tem uma conta?</Link>
					<Link to="/">Tenho minha senha</Link>
				</div>
			</form>
		</main>
	)
}

export default ForgotPassword