import parse from 'html-react-parser'

const RichText = ({ options }) => {
	const {
		type,
		textType,
		className,
		text
	} = options
	return (
		parse(text)
	)
}

export default RichText
