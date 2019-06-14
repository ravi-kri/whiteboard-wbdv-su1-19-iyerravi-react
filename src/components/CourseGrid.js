import React from 'react';
import CourseGridHeader from "./CourseGridHeader";
import CourseCard from "./CourseCard";
import {Link} from 'react-router-dom';

const CourseGrid = ({addCourse,deleteCourse,courses}) => {
    const gridContainerStyle = {
        marginTop: "10vh",
        background: "#e6e6e6",
        overflowY: "scroll",
        height: "90vh"
    }
    const navbarHeight = {
        height: "10vh"
    }
    let courseTitleElem;
    return (
        <div>
             <nav style={navbarHeight} className="navbar navbar-expand navbar-dark bg-primary fixed-top">
            <i className="fas fa-bars pr-3"></i>
            <p className="mb-0 navbar-brand d-none d-sm-inline navbar-text text-left text-white text-bold">
                Course Manager
            </p>
            <form className="form-inline w-100">
                <div className="col-3">
                    <input
                        ref={selectDomElement => {
                            courseTitleElem = selectDomElement
                        }}
                        className="form-control w-100"/>
                </div>
                <div className="col-2 p-0">
                    <Link to = "#" onClick={() => {
                        addCourse({
                        title: courseTitleElem.value,
                        modules :[]
                        });
                        courseTitleElem.value = '';
                    }}>
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-1x circle"></i>
                      <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                    </Link>
                </div>
            </form>
        </nav>
            <div className="container-fluid" style={gridContainerStyle}>
                <CourseGridHeader/>
                <div className="row mr-2">
                    {courses.map((c, index) => {
                        return (<CourseCard
                            key={index}
                            deleteCourse={deleteCourse}
                            course={c}
                        />)
                    })}
                </div>
            </div>
        </div>
    )
}
export default CourseGrid;