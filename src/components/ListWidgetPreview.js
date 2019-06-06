import React from "react";

const ListWidgetPreview = ({widget}) => {
    const list = widget.items ? widget.items.split(',') : [];
    const items = list.map((item,index) => {
        return (<li key={index}>{item}</li>)
    })
    return (
        <div className="container">
            {!widget.isOrdered && <ul> {items} </ul>}
            {widget.isOrdered && <ol> {items} </ol>}
        </div>
    )
}
export default ListWidgetPreview;