import React from 'react'
import CourseListItem from './CourseListItem'
import './CourseList.css';

const CourseList = ({courses}) =>
    <div>
        <div className="list-group">

            {
                courses.map(course =>
                    <CourseListItem course={course}/>
                )
            }

        </div>
    </div>
export default CourseList