import React from 'react'
import CourseCard from './CourseCard'
import ModuleList from "./ModuleList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import CourseList from './CourseList'
import CourseGrid from './CourseGrid'
import courses from './courses.json'
import {Switch} from "react-router";

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Switch>   
                    
                    <Redirect exact path="/" to="/course-list"/>
                    <Route
                        path="/course-grid"
                        render={() => <CourseGrid courses={courses}/>}/>
                    <Route
                        path="/course-list"
                        render={() => <CourseList courses={courses}/>}/>
                    <Route
                        path="/course-editor/:courseId"
                        render={props => <CourseEditor courses={courses}/>}/>
            </Switch> 
            </Router>
        )
    }
}

