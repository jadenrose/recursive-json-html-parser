import React from 'react'

import RenderJson from '../features/renderJson/RenderJson'

const App = () => {
    const json = require('./app.json')

    const content = RenderJson({ obj: json })

    return <div className="App">{content}</div>
}

export default App
