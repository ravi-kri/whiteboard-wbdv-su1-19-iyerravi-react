import React from 'react';

const LinkWidgetContent = ({widget,updateWidget}) => {
    return (
        <div className="container">
            <input type="text"
                   value={widget.href ? widget.href : ''}
                   className="form-control mb-2"
                   placeholder="Link URL"
                   onChange={e=> {
                       let w = {...widget};
                       w.href = e.currentTarget.value;
                       updateWidget(w);
                   }}/>
            <input type="text"
                   value={widget.title ? widget.title : ''}
                   className="form-control mb-2"
                   placeholder="Link Text"
                   onChange={e=> {
                       let w = {...widget};
                       w.title = e.currentTarget.value;
                       updateWidget(w);
                   }}/>
            <input type="text" className="form-control"
                   value={widget.name}
                   placeholder="Widget Name"
                   onChange={e=> {
                       let w = {...widget};
                       w.name = e.currentTarget.value;
                       updateWidget(w);
                   }}/>
        </div>
    );
}
export default LinkWidgetContent;