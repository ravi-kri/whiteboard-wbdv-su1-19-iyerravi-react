import React from 'react';
import './CourseCard.css';
import {Link} from 'react-router-dom';

const CourseCard = ({deleteCourse,course}) => {
    return (
        <React.Fragment>
        <div className="p-0 col-sm-12 col-md-4 col-lg-2 h-100"> 
            <div className="col-12 pl-3 pt-3 pb-0 pr-0 h-100">
                <div className="h-100" style={{background: "#FFFFFF"}}>
                    <div className="card-body">
                    <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                    </div>
                    <div className="h-25 p-2">
                        <Link to = {'/course/'+ course.id +'/edit'} className="no-decorate">
                            <h5 className="card-title font-weight-bold text-truncate">{course.title}</h5>
                        </Link>
                        <div className="d-block">
                            <Link className="mr-2 no-decorate d-inline" to={'/course/'+ course.id +'/edit'}>
                                <i className="fas fa-file-alt"></i> </Link>
                            <p className="mr-2 text-truncate d-inline">Modified 8.09 am</p>
                            
                            <Link className="no-decorate" to={"#"} onClick={e => {
                                deleteCourse({id:course.id});
                            }}>
                                <i className="fas fa-times"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     </React.Fragment>
    );
}
export default CourseCard;