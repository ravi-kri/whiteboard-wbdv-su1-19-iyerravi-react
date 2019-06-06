import React from 'react';

const ParagraphWidgetPreview = ({widget}) => {
    return (
        <div className="container">
            <p>{widget.text}</p>
        </div>
    );
}
export default ParagraphWidgetPreview