import "./style.css"

function FormButton(props) {
	return (
		<button type="submit" className="form-button">{props.text}</button>
	)
}

export default FormButton