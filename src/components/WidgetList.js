import React from 'react'

const WidgetList = ({widgets}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
        <ul>
            {
                widgets.map(widget =>
                    <div>
                <li>{widget.name}</li>
                <li>{widget.text}</li>
                </div>
                )
            }
        </ul>
    </div>

export default WidgetList