import React from 'react'

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
                    <a href={`/course-editor/${this.props.course.id}`} className="btn btn-link"> {this.props.course.title} </a>  
                    </h5>
                    <p className="card-text">Description of the course</p>
                    <a href={`/course-editor/${this.props.course.id}`} className="fas fa-edit">Edit Course</a><br></br>
                    <a href="" className="fas fa-times">Delete Course</a>
                </div>
            </div>
        )
    }
}
