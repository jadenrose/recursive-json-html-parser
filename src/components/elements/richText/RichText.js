import React from 'react'
import parse from 'html-react-parser'

const RichText = ({ options }) => {
	const {
		textType,
		className,
		text
	} = options

	let html = null
	if (textType === 'html') {
		const element = parse(text)
		html = React.cloneElement(
			element,
			{
				className
			}
		)
	} else html = text

	return (
		html
	)
}

export default RichText
