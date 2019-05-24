import React from 'react';
import './LessonTabs.css'
import {Link} from 'react-router-dom';

const LessonTabs = ({
    courseTitle, 
    updateLesson, 
    deleteLesson, 
    addLesson, 
    selectedLesson,
    selectLesson, 
    lessons
    }) => {
    let newLessonName;
    return (
    <nav className="navbar navbar-expand bg-primary fixed-top" style={{height:'9.99vh'}}>
     <div className="container-fluid">
       <div className="row w-100">
         <div className="col-3">
            <div className="row">
             <span className="col-2">
               <Link to="/course-list">
                  <i className="fas fa-times fa-4x action-icon"></i>
                   </Link>
               </span>
         <span className="col-8 navbar-brand text-white">
             <h3>{courseTitle}</h3>
            </span>
        </div>
       </div>
        <div className="col-6">
            <nav className="wbdv-lessonStyling">
       <div className="border-bottom-0 nav nav-tabs">
       { lessons.map(lesson => {
    let changeLesson;
    let tabstyle = "nav-item nav-link text-black";
    let lessonID = lesson.id;
    if (lessonID == selectedLesson)
        tabstyle = tabstyle + ' active show ';
    return (
        <span
            key={lesson.id + '-lesson-tab-item'} className={tabstyle} 
            onClick={() => { selectLesson(lesson.id);}}>
        <input className="wbdv-tabStyling" disabled={true} ref={(domNode) => {changeLesson = domNode;}}
            onChange={(e) => 
                { let lesson = lessons.filter(l => l.id == lessonID)[0];
                lesson.title = e.currentTarget.value;
                updateLesson(lesson);}}
                value={lesson.title}
            />
    <Link className="mr-2"
            to="#"
            onClick={(e) => {
            changeLesson.removeAttribute('disabled');
            changeLesson.focus();
            changeLesson.select();
                e.stopPropagation();
            }}>
        <i className="action-icon fas fa-pencil-alt" style={{color: 'black'}}></i>
    </Link>
    <Link  to="#"
            onClick={(e) => {
                e.stopPropagation();
                deleteLesson(lesson.id);
            }}>
        <i className="fas fa-times" style={{color: 'black'}}></i>
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
        newLessonName = selectDomElement }}
        className="form-control w-75 mr-3 d-inline"/>
<Link to="#" onClick={() => {
    addLesson({
        id: (new Date()).getTime() + '',
        title: newLessonName.value,
        topics: []});
        newLessonName.value = 'New Lesson';}}>
    <i className="fas fa-plus fa-2x action-icon"></i>
</Link>
</div>
</div>
</div>
</nav>
);
}
export default LessonTabs;