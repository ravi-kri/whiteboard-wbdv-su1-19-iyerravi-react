import React from 'react';
import CourseService from "../services/CourseService";
import {Route,Redirect} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import CourseGrid from "../components/CourseGrid";
import CourseTable from "../components/CourseTable";

export default class WhiteBoard extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            courses:[]
        }
    }

    async componentDidMount(){
        try{
            const data = await fetch("https://wbdv-su119-javaserver.herokuapp.com/api/course")
            const jsonData = await data.json()
            this.setState({
                courses : jsonData
            })
        }
        catch(error){
    console.log(error);
        }
    }

    addCourse = c => {
        CourseService.createCourse(c)
            .then(res=>res.json()).then(c=>{
            this.setState(state => {
                let newState = {...state}
                let oldCourses = [... state.courses]
                oldCourses.push(c);
                newState.courses= oldCourses;
                return newState;
            })
        });
    }

    deleteCourse = c => {
        CourseService.deleteCourse(c.id)
            .then(res=>{
            this.setState(state => {
                let newState = {...state}
                let oldCourses = [... state.courses]
                newState.courses= oldCourses.filter(course => course.id != c.id);
                return newState;
            })
        });
    }

    updateCourse = courseId => {
        CourseService.updateCourse(courseId)
            .then(res=>res.json()).then(c=>{
            this.setState(state => {
                let newState = {...state}
                let oldCourses = [... state.courses]
                newState.courses= oldCourses.map(course => {
                    if(course.id != c.id)
                        return course;
                    else
                        return c;
                });
                return newState;
            })
        });
    }


    render() {
        return (
            <div>
            <Redirect exact path="/" to="/course/table"/>
                <Route exact path="/course/grid"
                       render={() =>
                           <CourseGrid
                               addCourse={this.addCourse}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}/>}/>
                <Route
                    exact
                    render={(props) =>
                        <CourseEditor
                            {...props}
                            findCourseById = {CourseService.findCourseById}
                            updateCourse = {this.updateCourse}
                            />}
                    path="/course/:courseId/edit"/>
                <Route exact path="/course/table"
                       render={() =>
                           <CourseTable
                               addCourse={this.addCourse}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}/>}/>
            </div>
        );
    }
}