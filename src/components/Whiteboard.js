import React from 'react'
import CourseCard from './CourseCard'
import ModuleList from "./ModuleList";
import CourseEditor from "../containers/CourseEditor";
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import CourseTable from '../containers/CourseTable'
import CourseGrid from '../containers/CourseGrid'
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

    updateCourse = courseId => {
        this.courseService.updateCourse(courseId)
        let newState = {...this.state}
        newState.courses = this.courseService.findAllCourses();
        this.setState(newState);
    }

    deleteACourse = course => {
        this.courseService.deleteCourse(course.id);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    addNewCourse = course => {
        this.courseService.createCourse(course);
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
                        path="/course-editor/:courseId"
                        render={(props) => 
                        <CourseEditor 
                            {...props}
                            findCourseById = {this.courseService.findCourseById}
                            updateCourse = {this.updateCourse}
                            courses={courses}/>}/>
                    <Route
                        path="/course-list"
                        render={() => <CourseTable 
                        deleteACourse={this.deleteACourse}
                        addNewCourse={this.addNewCourse}
                        courses={this.state.courses}/>}/>
                    <Route
                        path="/course-grid"
                        render={() => <CourseGrid 
                        courses={courses}
                        deleteACourse={this.deleteACourse}
                        addNewCourse={this.addNewCourse}
                        courses={this.state.courses}/>}/>
                    
            </Switch> 
            </Router>
        )
    }
}

