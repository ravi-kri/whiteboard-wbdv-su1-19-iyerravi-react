import React from 'react';

const ParagraphWidgetContent = ({widget, updateWidget}) => {
    return (
        <div className="container">
            <textarea className="form-control mb-2" placeholder='Paragraph Text'
                      onChange={e=> {
                          let w = {...widget};
                          w.text = e.currentTarget.value;
                          updateWidget(w);
                      }}
                      value={widget.text}
            />
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
export default ParagraphWidgetContent;