import React from 'react';
import {Link} from 'react-router-dom';

export default class CourseCard
    extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
            
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                    <Link to = {`/course-editor/${this.props.course.id}`} className="btn btn-link"> {this.props.course.title}</Link>
                    </h5>
                    <p className="card-text">Description of the course</p>
                    <Link to = {`/course-editor/${this.props.course.id}`} className="fas fa-edit">Edit Course</Link><br></br>
                    <a href="" className="fas fa-times">Delete Course</a>
                </div>
            </div>
        )
    }
}
