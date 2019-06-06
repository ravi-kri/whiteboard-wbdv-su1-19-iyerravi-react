import React from 'react';
import {Link} from 'react-router-dom';
const LinkWidgetPreview = ({widget}) => {
    return (
        <div className="container">
            <Link to={widget.href ? widget.href : '#'} >{widget.title}</Link>
        </div>
    );
}
export default LinkWidgetPreview;