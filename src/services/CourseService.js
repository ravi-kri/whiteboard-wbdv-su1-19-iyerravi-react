const URL = 'https://wbdv-su119-javaserver.herokuapp.com';

export default class CourseService {
    static findAllCourses() {
        return fetch(URL + '/api/course',
            {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findCourseById(id) {
        return fetch(URL + '/api/course/' + id,
            {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateCourse(id, course) {
        return fetch(URL + '/api/course/' + id,
            {
                 
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(course)
            });
    }

    static deleteCourse(id) {
        return fetch(URL + '/api/course/' + id,
            {
                 
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static createCourse(c) {
        return fetch(URL + '/api/course',
            {
                 
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(c)
            });
    }
}