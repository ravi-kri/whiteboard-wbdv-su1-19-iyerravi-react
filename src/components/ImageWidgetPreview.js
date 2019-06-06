import React from 'react';

const ImageWidgetPreview = ({widget}) => {
    return (
        <div className="container">
            <img src={widget.src ? widget.src : ''}/>
        </div>
    );
}
export default ImageWidgetPreview;