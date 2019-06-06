import React from 'react';

const ListWidgetContent = ({widget, updateWidget}) => {
    return (
        <div className="container">
            <textarea className="form-control mb-2"
                      placeholder={'Enter one' + '\n' + 'list item' + '\n' + 'per line'}
                      onChange={e=> {
                          let w = {...widget};
                          w.items = e.currentTarget.value.split('\n').join(',');
                          updateWidget(w);
                      }}
            value={widget.items ? widget.items.split(',').join('\n'):''}/>
            <select className="custom-select d-inline mb-2"
                    onChange={e=> {
                        let w = {...widget};
                        w.isOrdered = e.currentTarget.value == 'unordered list' ? false : true;
                        updateWidget(w);
                    }}
             value={widget.isOrdered ? 'ordered list' : 'unordered list'}>
                <option>unordered list</option>
                <option>ordered list</option>
            </select>

            <input type="text" className="form-control" value={widget.name}
                   placeholder="Widget Name"
                   onChange={e=> {
                       let w = {...widget};
                       w.name = e.currentTarget.value;
                       updateWidget(w);
                   }}/>
        </div>
    )
}
export default ListWidgetContent;