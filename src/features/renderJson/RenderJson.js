import React from 'react'
import { v1 as uuid } from 'uuid'

import RichText from '../../components/elements/richText/RichText'
import Image from '../../components/elements/image/Image'
import Container from '../../components/container/Container'

const RenderJson = ({ obj }) => {
    const content = []
    switch (obj.type) {
        case 'container': {
			const containerContent = []
            for (const item of obj.items) {
                containerContent.push(
					<Container key={uuid()} obj={item} />
				)
            }
			content.push(React.createElement('div', {key: uuid()}, containerContent))
            break
        }
        case 'rich-text': {
            content.push(<RichText key={uuid} options={obj} />)
            break
        }
        case 'image': {
            content.push(
                <Image
					key={uuid()}
                    src="https://via.placeholder.com/100"
                    alt="placeholder"
                />
            )
            break
        }
        default: {
            break
        }
    }

    return content
}

export default RenderJson
