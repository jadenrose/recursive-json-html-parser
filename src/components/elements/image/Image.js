import React from 'react'

const Image = ({ options }) => {
    const { className, alt, height, src } = options

    const html = React.createElement('img', {
        className,
        alt,
        src: `${process.env.PUBLIC_URL}/assets/img/${src}`,
        style: {
            maxHeight: height,
        },
    })

    return html
}

export default Image
