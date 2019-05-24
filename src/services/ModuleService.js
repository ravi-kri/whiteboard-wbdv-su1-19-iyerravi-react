import CourseService from './CourseService'
let courseService = new CourseService();
export default class ModuleService {
deleteModule(cid,mid) {
    let realtedCourse = {... courseService.findCourseById(cid)};
    realtedCourse.modules = realtedCourse.modules.filter(m => m.id != mid);
    courseService.updateCourse(cid,realtedCourse);
}
createModule(cid,module){
    let modules = this.findAllModules(cid)
    modules.push(module);
    let course = {...courseService.findCourseById(cid)};
    course.modules = modules;
    courseService.updateCourse(cid,course);
}
updateModule(cid,module){
    let course = {...courseService.findCourseById(cid)};
    course.modules = this.findAllModules(cid).map(m =>{
        if(m.id == module.id) return module;
        else return m;
    });
    courseService.updateCourse(cid,course);
}
findModuleById(cid,mid){
    return courseService.findCourseById(cid).modules.filter(m => m.id == mid)[0]
}
findAllModules(cid){
    return courseService.findCourseById(cid).modules ? courseService.findCourseById(cid).modules : []
}   
}