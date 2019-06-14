import React from 'react';
import './CourseRow.css'
import {Link} from 'react-router-dom';
const CourseRow = ({deleteCourse,course}) => {
    return (
        <div className="row">
            <div className="col-sm-5 col-11">
                <Link className="no-decorate" to={'/course/'+ course.id +'/edit'}>
                    <i className="fas fa-file-alt"></i> </Link>
                <Link to = {'/course/'+ course.id +'/edit'} className="no-decorate text-justify d-inline p-2">
                    {course.title}
                </Link>
            </div>
            <div className="col-2 d-none d-sm-block">
                <p className="text-justify text-left">me</p>
            </div>
            <div className="col-4 d-none d-sm-block">
                <p className="text-justify text-left">6.45 PM</p>
            </div>
            <div className="col-1">
                <Link className="no-decorate" to={"#"} onClick={e => {
                    deleteCourse({id:course.id});
                }}>
                    <i className="fas fa-times"></i></Link>
            </div>
        </div>
    )
}
export default CourseRow;