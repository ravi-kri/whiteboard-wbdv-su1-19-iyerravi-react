import coursesjson from '../components/courses.json'
let courses = coursesjson

export default class CourseService {

createCourse(course){
    courses.push(course)
}
updateCourse(cid,c){  
    courses =  courses.map(in_course => {
        if(in_course.id==cid){
            return c
        }
        else return in_course;
    });
}

findAllCourses()
{ return courses ? courses : []; }

deleteCourse(cid){
    courses =  courses.filter(course => {
        return course.id!=cid;
    });
}

findCourseById(cid){
    return courses.filter(course => course.id == cid)[0];   
}
}