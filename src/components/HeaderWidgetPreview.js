import React from 'react';

const HeaderWidgetPreview = ({widget}) => {
    const headingText = widget.text;
    let size = widget.size;
    let heading;
    if(!size) size = 1;
    if (size == 1)
        heading = <h1>{widget.text}</h1>
    else if (size == 2)
        heading = <h2>{widget.text}</h2>
    else if (size == 3)
        heading = <h3>{widget.text}</h3>
    return (
        <div className="container">
            {heading}
        </div>
    );
}
export default HeaderWidgetPreview;