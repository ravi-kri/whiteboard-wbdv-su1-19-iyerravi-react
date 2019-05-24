import React from 'react'
import CourseCard from './CourseCard'
import ModuleList from "./ModuleList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import CourseList from './CourseList'
import CourseGrid from './CourseGrid'
import courses from './courses.json'
import CourseService from '../services/CourseService'
import {Switch} from "react-router";

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = new CourseService();
        this.state = {
            courses:this.courseService.findAllCourses()
        }
    }

    addNewCourse = course => {
        this.courseService.createCourse(course);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteACourse = course => {
        this.courseService.deleteCourse(course.id);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    render() {
        return (
            <Router>
                <Switch>         
                    <Redirect exact path="/" to="/course-list"/>
                    <Route
                        path="/course-grid"
                        render={() => <CourseGrid 
                        courses={courses}
                        deleteACourse={this.deleteACourse}
                        addNewCourse={this.addNewCourse}
                        courses={this.state.courses}/>}/>
                    <Route
                        path="/course-list"
                        render={() => <CourseList 
                        deleteACourse={this.deleteACourse}
                        addNewCourse={this.addNewCourse}
                        courses={this.state.courses}/>}/>
                    <Route
                        path="/course-editor/:courseId"
                        render={props => <CourseEditor courses={courses}/>}/>
            </Switch> 
            </Router>
        )
    }
}

