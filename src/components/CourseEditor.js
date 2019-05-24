import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import TopicService from "../services/TopicService";
import LessonService from "../services/LessonService";
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";
import Module from "./Module";
import LessonTabs from "./LessonTabs";

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.lessonService = new LessonService();
        this.topicService = new TopicService();
        this.moduleService = new ModuleService();
        this.state = {
            courseTitle: '',
            selectedTopic: '',
            selectedLesson: '',
            selectedModule: '',
            modules: []
        };
        this.updateModule = this.updateModule.bind(this);
        this.updateLesson = this.updateLesson.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.selectTopic = this.selectTopic.bind(this);
        this.addModule = this.addModule.bind(this);
        this.addLesson = this.addLesson.bind(this);
        this.addTopic = this.addTopic.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);  }
    
    addTopic = (topic) => {
            this.topicService.createTopic(this.props.match.params.courseId, this.state.selectedModule, this.state.selectedLesson, topic);
            let state_n = {...this.state}
            state_n['modules'] = this.moduleService.findAllModules(this.props.match.params.courseId);
            state_n.selectedTopic = (!this.state.selectedTopic ? topic.id : this.state.selectedTopic);
            this.setState(state_n);}
    addLesson = (lesson) => {
            this.lessonService.createLesson(this.props.match.params.courseId, this.state.selectedModule, lesson);
            let state_n = {...this.state}
            state_n['modules'] = this.moduleService.findAllModules(this.props.match.params.courseId);
            state_n.selectedLesson = (!this.state.selectedLesson ? lesson.id : this.state.selectedLesson);
            this.setState(state_n);}
    addModule = (module) => {
            this.moduleService.createModule(this.props.match.params.courseId, module);
            let state_n = {...this.state}
            state_n['modules'] = this.moduleService.findAllModules(this.props.match.params.courseId);
            state_n.selectedModule = (!this.state.selectedModule ? module.id : this.state.selectedModule);
            this.setState(state_n);
        }
    updateTopic = (topic) => {
            this.topicService.updateTopic(this.props.match.params.courseId, this.state.selectedModule, this.state.selectedLesson, topic);
            let state_n = {...this.state}
            state_n.modules = this.moduleService.findAllModules(this.props.match.params.courseId);
            this.setState(state_n);}
    updateLesson = (lesson) => {
                this.lessonService.updateLesson(this.props.match.params.courseId, this.state.selectedModule, lesson);
                let state_n = {...this.state}
                state_n.modules = this.moduleService.findAllModules(this.props.match.params.courseId);
                this.setState(state_n);
            }
    updateModule = (module) => {
                this.moduleService.updateModule(this.props.match.params.courseId, module);
                let state_n = {...this.state}
                state_n.modules = this.moduleService.findAllModules(this.props.match.params.courseId);
                this.setState(state_n);}

    selectTopic = (topicId) => {
                    let state = {...this.state};
                    state.selectedTopic = topicId;
                    this.setState(state);
                }

    selectLesson = (lessonId) => {
                    let state = {...this.state};
                    state.selectedLesson = lessonId;
                    this.setState(state);
                }

    selectModule = (moduleId) => {
                    let state = {...this.state};
                    state.selectedModule = moduleId;
                    this.setState(state);
                }
    deleteTopic = (topicId) => {
                    let lessonId = this.state.selectedLesson;
                    this.topicService.deleteTopic(this.props.match.params.courseId, this.state.selectedModule, lessonId, topicId);
                    let state_n = {...this.state}
                    state_n.modules = this.moduleService.findAllModules(this.props.match.params.courseId);
                    let topics = this.topicService.findAllTopics(this.props.match.params.courseId, this.state.selectedModule, lessonId, topicId);
                    if (this.state.selectedLesson == lessonId){
                        state_n.selectedTopic = '';
                        state_n.selectedTopic = topics.length == 0 ? '' : topics[0].id;}
                    this.setState(state_n);
                }

    deleteLesson = (lessonId) => {
                    this.lessonService.deleteLesson(this.props.match.params.courseId, this.state.selectedModule, lessonId);
                    let state_n = {...this.state}
                    state_n.modules = this.moduleService.findAllModules(this.props.match.params.courseId);
                    let lessons = this.lessonService.findAllLessons(this.props.match.params.courseId, this.state.selectedModule, lessonId);
                    if (this.state.selectedLesson == lessonId){
                        state_n.selectedLesson = '';
                        state_n.selectedLesson = lessons.length == 0 ? '' : lessons[0].id;}
                    this.setState(state_n);
                }

    deleteModule = (moduleId) => {
                    this.moduleService.deleteModule(this.props.match.params.courseId, moduleId);
                    let state_n = {...this.state}
                    state_n.modules = this.moduleService.findAllModules(this.props.match.params.courseId);
                    if (this.state.selectedModule == moduleId){
                        state_n.selectedModule = '';
                        state_n.selectedModule = state_n.modules.length == 0 ? '' : state_n.modules[0].id;}
                    this.setState(state_n);
                }

    componentDidMount() {
                    let modules = this.moduleService.findAllModules(this.props.match.params.courseId);
                    let state_n = {...this.state};
                    state_n.modules = modules;
                    state_n.selectedModule = modules.length == 0 ? '' : modules[0].id;
                    state_n.courseTitle = this.courseService.findCourseById(this.props.match.params.courseId).title;
                    if (state_n.selectedLesson) {
                        let module = state_n.modules.filter(m => {return m.id == state_n.selectedModule})[0];
                        let lesson = module.lessons.filter(l => {return l.id == state_n.selectedLesson})[0];
                        state_n.selectedTopic = (lesson.topics || lesson.topics.length) == 0 ? '' : lesson.topics[0].id;
                    }
                    if (state_n.selectedModule) {
                        let module = state_n.modules.filter(m => {return m.id == state_n.selectedModule})[0];
                        state_n.selectedLesson = (modules.lessons || module.lessons.length == 0) ? '' :module.lessons[0].id;
                    }        
                    this.setState(state_n);
                }

    render() {
                    let module, lesson, topic;
                    module = this.state.modules.filter(m => m.id == this.state.selectedModule)[0];
                    if (lesson && lesson.topics){
                        topic = lesson.topics.filter(t => t.id == this.state.selectedTopic)[0];}
                    if (module && module.lessons){
                        lesson = module.lessons.filter(l => l.id == this.state.selectedLesson)[0];}
                    
                    let topics = (lesson ? (lesson.topics ? lesson.topics : []) : []);
                    let lessons = (module ? (module.lessons ? module.lessons : []) : []);
                    
                    return (
                        <div className="container-fluid m-0 p-0">
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"></link>
                            <LessonTabs
                                addLesson={this.addLesson}
                                deleteLesson={this.deleteLesson}
                                lessons={lessons}
                                selectedLesson={this.state.selectedLesson}
                                updateLesson={this.updateLesson}
                                selectLesson={this.selectLesson}
                                courseTitle={this.state.courseTitle}
                            />
                            <Module
                                deleteModule={this.deleteModule}
                                selectedModule={this.state.selectedModule}
                                updateModule={this.updateModule}
                                addModule={this.addModule}
                                modules={this.state.modules}
                                deleteTopic={this.deleteTopic}
                                updateTopic={this.updateTopic}
                                selectedTopic={this.state.selectedTopic}
                                selectTopic={this.selectTopic}
                                addTopic={this.addTopic}
                                topics={topics}
                                selectModule={this.selectModule}
                            />
                        </div>
                    );
                }
            }
            
export default CourseEditor;