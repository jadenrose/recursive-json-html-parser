import React from 'react'
import { v1 as uuid } from 'uuid'

import RichText from '../../components/elements/richText/RichText'
import Image from '../../components/elements/image/Image'
import Container from '../../components/container/Container'

const RenderJson = ({ obj }) => {
    const content = []
    switch (obj.type) {
        case 'container': {
            const {
                items,
                className,
                flexDirection,
                flexWrap,
                justifyContent,
                alignItems,
                width: widthDecimal,
            } = obj

			const width = `${widthDecimal * 100}%`

            const options = {
                className,
				style: {
					flexDirection,
					flexWrap,
					justifyContent,
					alignItems,
					width,
				},
            }

            const containerContent = []
            for (const item of items) {
                containerContent.push(<Container key={uuid()} obj={item} />)
                // containerContent.push(React.createElement(
				// 	'div',
				// 	{
				// 		key: uuid(),
				// 		...options
				// 	},
				// 	<Container obj={item} />
				// ))
            }
            content.push(
                React.createElement(
                    'div',
                    {
                        key: uuid(),
                        ...options
                    },
                    containerContent
                )
            )

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
                    options={obj}
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
