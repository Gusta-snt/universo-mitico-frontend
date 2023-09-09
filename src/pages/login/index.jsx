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
					<a href="#">Não tem uma conta?</a>
					<a href="#">Esqueci minha senha</a>
				</div>
			</form>
		</main>
	)
}

export default Login