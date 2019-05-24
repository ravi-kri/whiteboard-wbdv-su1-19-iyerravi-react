import React from 'react'
import CourseCard from './CourseCard'
import './CourseGrid.css';
import {Link} from 'react-router-dom';

const CourseGrid = ({courses,addNewCourse,deleteACourse}) => {
    var newCourseTitle;
    return(
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"></link>
        <nav className="navbar navbar-expand navbar-light bg-primary">
       <i className="pr-3 fas fa-bars"></i>
      <a className="d-sm-inline navbar-brand d-none" href="#" >Course Manager</a>
      <form className="form-inline my-2 wbdv-increaseWidth">
            {/* <input className="form-control col-9" id="sb" placeholder="New Course Title"/> */}
            <input placeholder="New Course Title" className="form-control col-9"
                    ref={selectDomElement => 
                        {
                            newCourseTitle = selectDomElement
                        }}
                        />
            <div>

            <Link onClick={() => {
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
					<p className="d-inline p-3">Recent Documents</p>
                  </div>
                  <div className="d-none d-sm-block col-sm-4">
                      Title
                  </div>
                  <div className="d-sm-block d-none col-3">
                       <a href="#">Owned by me<i className="fas fa-caret-down"></i></a>
                  </div>
                  <div className="d-sm-block d-none col-4">
                      <p className="d-inline pr-2">Last modified by me</p> 
                  </div>
                  <div className="d-sm-block d-none">
                    <Link to="/course-list"><i className="fas fa-list pr-3"></i></Link>
                      <a href="#"><i className="fas fa-sort-alpha-down"></i></a>
                  </div>
              </div>
          </div>
      </div>
        <div className="card-columns"> 
        {
            courses.map((course) =>
                <CourseCard course={course}
                            key={course.id}
                            title={course.title}
                            deleteACourse={deleteACourse}/>)
        }
        
        </div>
    </div>
  )
}
export default CourseGrid
