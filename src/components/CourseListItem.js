import React from 'react'
import {Link} from 'react-router-dom';

// const CourseListItem = ({course}) =>
    // <a href="#" className="list-group-item">
    //     {course.title}
    //     <button className="btn btn-danger float-right">Delete</button>
    // </a>

export default class CourseListItem
    extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (

<div className="row wbdv-rowadjustment">
<div className="col-sm-5 col-9">
    <a href="#"> <i className="fas fa-file"></i> </a>
    <Link to = {`/course-editor/${this.props.course.id}`} className="fas fa-edit">{this.props.course.title}</Link>
</div>
<div className="d-none col-2 d-sm-block">
    John
</div>
<div className="d-none col-3 d-sm-block">
    7:56 PM
</div>
<div className="col-1 wbdv-cross">
<Link to = {`/course-editor/${this.props.course.id}`} className="fas fa-edit"></Link>
</div>
<div className="col-1 wbdv-cross">
    <i className="fas fa-times"></i>
</div>
</div>
        )
    }}

// export default CourseListItem;