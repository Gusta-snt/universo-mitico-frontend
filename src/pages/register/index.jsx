import { Link } from 'react-router-dom';

import logo from "./../../assets/logo.svg"

import FormField from "./../../components/FormField"
import FormButton from "./../../components/FormButton"

import "./style.css"

function Register() {

	return (
		<main className="register-page">
			<form>
				<img src={logo} alt="Logo do univero mítico" />
				<div className="fields-wrapper">
					<FormField title="Nome" type="text" />
					<FormField title="Email" type="email" />
					<FormField title="Senha" type="password" />
				</div>
				<FormButton text="Registrar" />
				<div className="links-wrapper">
					<Link to="/">Já tem uma conta?</Link>
				</div>
			</form>
		</main>
	)
}

export default Register