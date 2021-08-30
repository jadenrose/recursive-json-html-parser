import React from 'react'

import './app.css'
import RenderJson from '../features/renderJson/RenderJson'

const App = () => {
    const json = require('./app.json')

    const content = RenderJson({ obj: json })

    return (
        <div className="App">
            <main className="main">{content}</main>
        </div>
    )
}

export default App
