import React from 'react'
import CourseCard from './CourseCard'
import ModuleList from "./ModuleList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseList from './CourseList'
import CourseGrid from './CourseGrid'
import courses from './courses.json'
import OmdbClient from '../omdb/OmdbClient'

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>
        <nav class="navbar navbar-expand navbar-light bg-primary">
       <i class="pr-3 fas fa-bars"></i>
      <a class="d-sm-inline navbar-brand d-none" href="#" >Course Manager</a>
      <form class="form-inline my-2 wbdv-increaseWidth">
            <input class="form-control col-9" id="sb" placeholder="New Course Title"/>
            <div>
            <button class="btn btn-danger addCourse p-2" type="submit"><i class="fas fa-plus"></i></button>
          </div>
        </form>
      </nav>
      <div class = "wbdv-columnnamebg">
          <div class="container">
              <div class="row">
                  
                  <div class="d-block d-sm-none">
					<p class="d-inline p-3">Today</p>
                  </div>
                  <div class="d-none d-sm-block col-sm-4">
                      Title
                  </div>
                  <div class="d-sm-block d-none col-3">
                       <a href="#">Owned By <i class="fas fa-caret-down"></i></a>
                  </div>
                  <div class="d-sm-block d-none col-4">
                      <p class="d-inline pr-2">Last modified by me</p> 
                  </div>
                  <div class="d-sm-block d-none">
                      <Link to="/course-grid"><i class="fas fa-th pr-3"></i></Link>
                      <a href="#"><i class="fas fa-sort-alpha-down"></i></a>
                  </div>
              </div>
          </div>
      </div>
                    <Link to="/omdb">Omdb</Link> |
                    <Link to="/course-list">List</Link> 
                    <Route
                        path="/omdb"
                        component={OmdbClient}
                    />
                    <Route
                        path="/course-grid"
                        render={() => <CourseGrid courses={courses}/>}/>
                    <Route
                        path="/course-list"
                        render={() => <CourseList courses={courses}/>}/>
                    <Route
                        path="/course-editor/:courseId"
                        render={props => <CourseEditor courses={courses}/>}/>
            
            </Router>
        )
    }
}

