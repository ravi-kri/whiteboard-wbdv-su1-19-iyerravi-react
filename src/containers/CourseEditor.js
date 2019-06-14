import React from 'react';
import LessonTabs from "../components/LessonTabs";
import Module from "../components/Module";
import ModuleService from "../services/ModuleService";
import CourseService from "../services/CourseService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modules: [],
            selectedModule: '',
            selectedLesson: '',
            selectedTopic: '',
            courseTitle: '',
            lessons:[],
            topics:[]
        };
        this.deleteModule = this.deleteModule.bind(this);
        this.addModule = this.addModule.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.updateModule = this.updateModule.bind(this);
        this.saveModule = this.saveModule.bind(this);


        this.deleteLesson = this.deleteLesson.bind(this);
        this.addLesson = this.addLesson.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);
        this.saveLesson = this.saveLesson.bind(this);

        this.deleteTopic = this.deleteTopic.bind(this);
        this.addTopic = this.addTopic.bind(this);
        this.selectTopic = this.selectTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
        this.saveTopic = this.saveTopic.bind(this);
    }

    componentDidMount() {
        let courseId = this.props.match.params.courseId;
        CourseService.findCourseById(courseId)
            .then(res => res.json()).then(course=> {
            let newState = {...this.state};
            newState.courseTitle = course.title;
            this.setState(newState);
        });

        ModuleService.findAllModules(courseId)
            .then(res =>
                res.json()).then(mods => {
            let newState = {...this.state};
            newState.modules = mods;
            if(mods.length != 0)
            {
                newState.selectedModule = mods[0].id;
                let lessons = mods[0].lessons;
                if(lessons && lessons.length != 0)
                {
                    newState.lessons = lessons;
                    newState.selectedLesson = lessons[0].id;
                    let topics =  lessons[0].topics;
                    if(topics && topics.length != 0)
                    {
                        newState.topics = [...topics];
                        newState.selectedTopic = topics[0].id;
                    }
                }
            }
            this.setState(newState);
        });
    }

    //updating module state
    addModule = (module) => {
        let courseId = this.props.match.params.courseId;
        ModuleService.createModule(courseId,module)
            .then(res => res.json())
            .then(m => {
                this.setState(state => {
                    let newState = {...state}
                    let oldModules = [... state.modules]
                    oldModules.push(m);
                    newState.modules= oldModules;
                    if(!newState.selectedModule)
                        newState.selectedModule = m.id;
                    return newState;
                });
            });
    }

    deleteModule = (moduleId) => {
        let courseId = this.props.match.params.courseId;
        let getCurrentState = () => this.state;
        ModuleService.deleteModule(courseId,moduleId)
            .then(res => {
                this.setState(state => {
                    let newState = {...state}
                    let oldModules = [... state.modules]
                    newState.modules= oldModules.filter(module => module.id != moduleId);
                    if (this.state.selectedModule == moduleId){
                        newState.selectedModule = '';
                        newState.selectedLesson = '';
                        newState.selectedTopic = '';
                        newState.topics = [];
                        newState.lessons = [];
                        if(newState.modules.length != 0)
                            newState.selectedModule = newState.modules[0].id;
                    }
                    return newState;
                })
            }).then(res => {
                if(getCurrentState().selectedModule)
                    this.selectModule(getCurrentState().selectedModule);
            });
    }
    updateModule = (mod) => {
        this.setState(state => {
            let newState = {...state}
            let oldModules = [... state.modules]
            newState.modules= oldModules.map(m => {
                if(m.id != mod.id)
                    return m;
                else
                    return mod;
            });
            return newState;
        });
    }

    saveModule = (module) => {
        let changeState = this.updateModule;
        let courseId = this.props.match.params.courseId;
        ModuleService.updateModule(courseId,module)
            .then(res => res.json())
            .then(mod => {
                changeState(mod);
            });
    }

    selectModule = (moduleId) => {
        let courseId = this.props.match.params.courseId;
        LessonService.findAllLessons(courseId,moduleId)
            .then(res => res.json())
            .then(lessons => {
                let newState = {...this.state};
                newState.selectedModule = moduleId;
                newState.selectedLesson = '';
                newState.selectedTopic = '';
                newState.lessons = lessons;
                newState.topics = [];
                if(newState.lessons && newState.lessons.length !=0)
                {
                    newState.selectedLesson = newState.lessons[0].id;
                }
                this.setState(newState);
            }).then(()=>{
                if(this.state.selectedLesson)
                    this.selectLesson(this.state.selectedLesson)
        })
    }

    // updating lesson state
    addLesson = (lesson) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        LessonService.createLesson(courseId,moduleId,lesson)
            .then(res => res.json())
            .then(l => {
                this.setState(state => {
                    let newState = {...state}
                    let oldLessons = [... state.lessons]
                    oldLessons.push(l);
                    newState.lessons= oldLessons;
                    if(!newState.selectedLesson)
                        newState.selectedLesson = l.id;
                    return newState;
                });
            });
    }

    deleteLesson = (lessonId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let getCurrentState = () => this.state;
        LessonService.deleteLesson(courseId,moduleId,lessonId)
            .then(res => {
                this.setState(state => {
                    let newState = {...state}
                    let oldLessons = [... state.lessons]
                    newState.lessons= oldLessons.filter(lesson => lesson.id != lessonId);
                    if (this.state.selectedLesson == lessonId){
                        newState.selectedLesson = '';
                        newState.selectedTopic = '';
                        newState.topics = [];
                        if(newState.lessons.length != 0)
                            newState.selectedLesson = newState.lessons[0].id;
                    }
                    return newState;
                })
            }).then(res => {
                if(getCurrentState().selectedLesson)
                    this.selectLesson(getCurrentState().selectedLesson);
            });
    }
    updateLesson = (lesson) => {
        this.setState(state => {
            let newState = {...state}
            let oldLessons = [... state.lessons]
            newState.lessons= oldLessons.map(l => {
                if(l.id != lesson.id)
                    return l;
                else
                    return lesson;
            });
            return newState;
        });
    }

    saveLesson = (lesson) => {
        let changeState = this.updateLesson;
        let mid = this.state.selectedModule;
        let courseId = this.props.match.params.courseId;
        LessonService.updateLesson(courseId,mid,lesson)
            .then(res => res.json())
            .then(mod => {
                changeState(mod);
            });
    }

    selectLesson = (lessonId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        TopicService.findAllTopics(courseId,moduleId,lessonId)
            .then(res => res.json())
            .then(topics => {
                let newState = {...this.state};
                newState.topics = topics;
                newState.selectedLesson = lessonId;
                newState.selectedTopic = '';
                if(newState.topics && newState.topics.length !=0)
                {
                    newState.selectedTopic = newState.topics[0].id;
                }
                this.setState(newState);
            })
    }

    //updating Topic State

    addTopic = (topic) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;

        TopicService.createTopic(courseId,moduleId,lessonId,topic)
            .then(res => res.json())
            .then(t => {
                this.setState(state => {
                    let newState = {...state}
                    let oldTopics = [... state.topics]
                    oldTopics.push(t);
                    newState.topics= oldTopics;
                    if(!newState.selectedTopic)
                        newState.selectedTopic = t.id;
                    return newState;
                });
            });
    }

    deleteTopic = (topicId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        TopicService.deleteTopic(courseId,moduleId,lessonId,topicId)
            .then(res => {
                this.setState(state => {
                    let newState = {...state}
                    let oldTopics = [... state.topics]
                    newState.topics= oldTopics.filter(topic => topic.id != topicId);
                    if (this.state.selectedTopic == topicId){
                        newState.selectedTopic = '';
                        if(newState.topics.length != 0)
                            newState.selectedTopic = newState.topics[0].id;
                    }
                    return newState;
                });
            });
    }
    updateTopic = (topic) => {
        this.setState(state => {
            let newState = {...state}
            let oldTopics = [... state.topics]
            newState.topics= oldTopics.map(t => {
                if(t.id != topic.id)
                    return t;
                else
                    return topic;
            });
            return newState;
        });
    }

    saveTopic = (topic) => {
        let changeState = this.updateModule;
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        TopicService.updateTopic(courseId,moduleId,lessonId,topic)
            .then(res => res.json())
            .then(topic => {
                changeState(topic);
            });
    }

    selectTopic = (topicId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        if(!courseId || !moduleId || !lessonId || !topicId) return;
        let newState = {...this.state};
        newState.selectedTopic = topicId;
        this.setState(newState);
    }

    render() {
        let module, lesson, topic;
        module = this.state.modules.filter(m => m.id == this.state.selectedModule)[0];
        if (module && module.lessons)
            lesson = module.lessons.filter(l => l.id == this.state.selectedLesson)[0];
        if (lesson && lesson.topics)
            topic = lesson.topics.filter(t => t.id == this.state.selectedTopic)[0];


        let lessons = (module ? (module.lessons ? module.lessons : []) : []);
        let topics = (lesson ? (lesson.topics ? lesson.topics : []) : []);
        let widgets = (topic ? (topic.widgets ? topic.widgets : []) : []);

        return (
            <div className="container-fluid m-0 p-0">
                <LessonTabs
                    courseTitle={this.state.courseTitle}
                    updateLesson={this.updateLesson}
                    saveLesson={this.saveLesson}
                    deleteLesson={this.deleteLesson}
                    addLesson={this.addLesson}
                    selectedLesson={this.state.selectedLesson}
                    selectLesson={this.selectLesson}
                    lessons={this.state.lessons}
                />
                <Module
                    deleteModule={this.deleteModule}
                    addModule={this.addModule}
                    modules={this.state.modules}
                    updateModule={this.updateModule}
                    saveModule={this.saveModule}
                    selectedModule={this.state.selectedModule}
                    selectedLesson = {this.state.selectedLesson}
                    selectModule={this.selectModule}
                    updateTopic={this.updateTopic}
                    saveTopic={this.saveTopic}
                    deleteTopic={this.deleteTopic}
                    addTopic={this.addTopic}
                    selectedTopic={this.state.selectedTopic}
                    selectTopic={this.selectTopic}
                    topics={this.state.topics}
                    widgets={this.state.widgets}
                    courseId = {this.props.match.params.courseId}
                />
            </div>
        );
    }
}

export default CourseEditor;