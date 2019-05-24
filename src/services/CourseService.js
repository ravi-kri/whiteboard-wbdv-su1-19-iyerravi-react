import React from 'react';
import coursesjson from '../components/courses.json'

let courses = coursesjson

export default class CourseService {
    
    createCourse(course){
        courses.push(course)
        console.log(courses);
    }

    updateCourse(id,course)
    {  
        courses =  courses.map(in_course => {
            if(in_course.id==id){
                return course
            }
            else return in_course;
        });
    }

    findAllCourses()
    { return courses ? courses : []; }
    
    deleteCourse(id){
        courses =  courses.filter(course => {
            return course.id!=id;
        });
    }

    findCourseById(id){
        return courses.filter(course => course.id == id)[0];
        
    }
}