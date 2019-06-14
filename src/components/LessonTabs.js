import React from 'react';
import './LessonTabs.css'
import {Link} from 'react-router-dom';

const LessonTabs = ({
                        courseTitle, updateLesson,saveLesson, deleteLesson, addLesson, selectedLesson,
                        selectLesson, lessons
                    }) => {
    
    let lessonTitleElem;
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top" style={ {height: '9.9vh'}}>
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-3">
                        <div className="row">
                        <span className="col-2 mr-2">
                            <Link to="/course/table">
                                <i className="fas fa-times fa-2x action-icon"></i>
                            </Link>
                        </span>
                            <span className="p-0 m-0 col-8 navbar-brand text-white text-bold">
                                {courseTitle}
                        </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <nav className="navLessons">
                            <div className="nav nav-tabs border-bottom-0 hover-black" id="nav-module1-lesson1-tab"
                                 role="tablist">
                                {
                                    lessons.map(lesson => {
                                        let editInputElem;
                                        let className = "nav-item nav-link text-black";
                                        let lid = lesson.id;
                                        if (lid == selectedLesson)
                                            className = className + ' active show ';
                                        return (
                                            <span
                                                key={lesson.id + '-lesson-tab-item'}
                                                className={className}
                                                onClick={() => {
                                                    selectLesson(lesson.id);
                                                }}>

                                            <input disabled={true}
                                                   ref={(domNode) => {
                                                       editInputElem = domNode;
                                                   }
                                                   }
                                                   onChange={(e) => {
                                                       let lesson = lessons.filter(l => l.id == lid)[0];
                                                       lesson.title = e.currentTarget.value;
                                                       updateLesson(lesson);
                                                   }}
                                                   className="p-0 form-control d-inline text-truncate" value={lesson.title}
                                                   style={{
                                                       backgroundColor: 'transparent',
                                                       border: 0,
                                                       color: 'white',
                                                       width: '50px',
                                                       height: '2vh'
                                                   }}
                                                   onBlur={(e) => {
                                                       let lesson = lessons.filter(l => l.id == lid)[0];
                                                       lesson.title = e.currentTarget.value;
                                                       saveLesson(lesson);
                                                       e.currentTarget.setAttribute('disabled', 'true');
                                                   }}/>

                                            <Link className="float-right" to="#"
                                                  onClick={(e) => {
                                                      e.stopPropagation();
                                                      deleteLesson(lesson.id);
                                                  }}>
                                                <i className="fas fa-times" style={{color: 'green'}}></i>
                                            </Link>
                                            <Link className="float-right mr-2"
                                                  to="#"
                                                  onClick={(e) => {
                                                      editInputElem.removeAttribute('disabled');
                                                      editInputElem.focus();
                                                      editInputElem.select();
                                                      e.stopPropagation();
                                                  }}>
                                                <i className="action-icon fas fa-pencil-alt"
                                                   style={{color:'green'}}></i>
                                            </Link>
                                            </span>
                                        )
                                    })}
                            </div>
                        </nav>
                    </div>

                    <div className="col-3">
                        <input defaultValue='New Lesson'
                               ref={selectDomElement => {
                                   lessonTitleElem = selectDomElement
                               }}
                               className="form-control w-75 mr-2 d-inline"/>
                        <Link to="#" onClick={() => {
                            addLesson({
                                id: '',
                                title: lessonTitleElem.value,
                                topics: []
                            });
                            lessonTitleElem.value = 'New Lesson';
                        }}>
                            <i className="fas fa-plus fa-2x action-icon"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default LessonTabs;