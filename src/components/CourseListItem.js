import React from 'react'

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

<div class="row wbdv-rowadjustment">
<div class="col-sm-5 col-9">
    <a href="#"> <i class="fas fa-file"></i> </a>
    <a class="d-inline" href={`/course-editor/${this.props.course.id}`}>{this.props.course.title}</a>
</div>
<div class="d-none col-2 d-sm-block">
    John
</div>
<div class="d-none col-3 d-sm-block">
    7:56 PM
</div>
<div class="col-1 wbdv-cross">
    <a class="fas fa-edit"  href={`/course-editor/${this.props.course.id}`}></a>
</div>
<div class="col-1 wbdv-cross">
    <i class="fas fa-times"></i>
</div>
</div>
        )
    }}

// export default CourseListItem;