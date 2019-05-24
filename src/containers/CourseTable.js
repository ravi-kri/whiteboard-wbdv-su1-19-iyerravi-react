import React from 'react'
import CourseRow from '../components/CourseRow'
import './CourseTable.css';
import {Link} from 'react-router-dom';

const CourseTable = ({courses,addNewCourse,deleteACourse}) => {

    var newCourseTitle;
    return(
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"></link>
        <nav className="navbar navbar-expand navbar-light bg-primary">
       <i className="pr-3 fas fa-bars"></i>
      <a className="d-sm-inline navbar-brand d-none" href="#" >Course Manager</a>
      <form className="form-inline my-2 wbdv-increaseWidth">
            <input value="New Course Title" className="form-control col-9"
                    ref={selectDomElement => 
                        {
                            newCourseTitle = selectDomElement
                        }}
                        />
            <div>
            <Link to='#' onClick={() => {
                        addNewCourse({
                        id: (new Date()).getTime()+'',
                        title: newCourseTitle.value,
                        modules :[]
                        });
                        newCourseTitle.value = '';
                    }}>
                    <button className="btn btn-danger p-2"><i className="fas fa-plus"></i></button>
                    </Link>
          </div>
        </form>
      </nav>
      <div className = "wbdv-columnnamebg">
          <div className="container">
              <div className="row">
                  
                  <div className="d-block d-sm-none">
					<p className="d-inline p-3">Today</p>
                  </div>
                  <div className="d-none d-sm-block col-sm-4">
                      Title
                  </div>
                  <div className="d-sm-block d-none col-3">
                       <a href="#">Owned By <i className="fas fa-caret-down"></i></a>
                  </div>
                  <div className="d-sm-block d-none col-4">
                      <p className="d-inline pr-2">Last modified by me</p> 
                  </div>
                  <div className="d-sm-block d-none">
                    <Link to="/course-grid"><i className="fas fa-th pr-3"></i></Link>
                      <a href="#"><i className="fas fa-sort-alpha-down"></i></a>
                  </div>
              </div>
          </div>
      </div>
        <div className="list-group">

            {
                courses.map(course =>
                    <CourseRow
                    key={course.id}
                    deleteACourse={deleteACourse}
                    course={course}
                    />
                )
            }

        </div>
    </div>
    )
}
export default CourseTable