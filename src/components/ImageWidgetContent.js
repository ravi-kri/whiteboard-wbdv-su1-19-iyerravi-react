import React from 'react';

const ImageWidgetContent = ({widget, updateWidget}) => {
    return (
        <div className="container">
            <input type="text"
                   placeholder="Image URL"
                   value={widget.src ? widget.src : ''}
                   className="form-control mb-2"
                   onChange={e=> {
                       let w = {...widget};
                       w.src = e.currentTarget.value;
                       updateWidget(w);
                   }}/>
            <input type="text" className="form-control" value={widget.name}
                   placeholder="Widget Name"
                   onChange={e=> {
                       let w = {...widget};
                       w.name = e.currentTarget.value;
                       updateWidget(w);
                   }}/>
        </div>
    );
}
export default ImageWidgetContent;