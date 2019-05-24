import React from 'react'
import {Link} from 'react-router-dom';

const CourseListItem = ({deleteACourse,course}) => {   

        return (

<div className="row wbdv-rowadjustment">
<div className="col-sm-5 col-9">
    <a href="#"> <i className="fas fa-file"></i> </a>
    <Link to = {'/course-editor/'+ course.id } className="fas fa-edit">{course.title}</Link>
</div>
<div className="d-none col-2 d-sm-block">
    John
</div>
<div className="d-none col-3 d-sm-block">
    7:56 PM
</div>
<div className="col-1 wbdv-cross">
<Link to = {'/course-editor/'+ course.id } className="fas fa-edit"></Link>
</div>
<div className="col-1 wbdv-cross">

<Link to="#" className="fas fa-times" onClick={e => {
                    deleteACourse({id:course.id});
                }}></Link>
                    
</div>
</div>
        )
    }

export default CourseListItem;