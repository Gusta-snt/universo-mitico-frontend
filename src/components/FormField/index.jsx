import "./style.css"

function FormField(props) {
	const title = props.title + ":"
	return (
		<label className="field-label">
			{title}
			<input type={props.type} required/>
		</label>
	)
}

export default FormField