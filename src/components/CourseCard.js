import React from 'react';
import {Link} from 'react-router-dom';


const CourseCard = ({deleteACourse,course}) => {   
        return (
            <div className="card" styles={{width: '18rem'}}>
            
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                    <Link to =  {'/course-editor/'+ course.id } className="btn btn-link"> {course.title}</Link>
                    </h5>
                    <p className="card-text">Description of the course</p>
                    <Link to = {'/course-editor/'+ course.id } className="fas fa-edit">Edit Course</Link><br></br>
                    <Link className="fas fa-times" onClick={e => {
                    deleteACourse({id:course.id});
                }}>Delete Course</Link>
                </div>
            </div>
        )
    }

export default CourseCard;