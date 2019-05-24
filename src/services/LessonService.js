import ModuleService from "./ModuleService";
let moduleService =  new ModuleService();
export default class LessonService {
findLessonById(cid,mid,lid){
    return this.findAllLessons(cid,mid).filter(l => l.id == lid)[0]
}
updateLesson(cid,mid,les){
    let module = {...moduleService.findModuleById(cid,mid)};
    module.lessons = this.findAllLessons(cid,mid).map(l =>{
        if(l.id == les.id) return les;
        else return l;
    });
    moduleService.updateModule(cid,module);
}
findAllLessons(cid,mid){
    return moduleService.findModuleById(cid,mid).lessons ? moduleService.findModuleById(cid,mid).lessons : [];
}
deleteLesson(cid,mid,lid){
    let module = {... moduleService.findModuleById(cid,mid)};
    module.lessons = module.lessons.filter(l => l.id != lid);
    moduleService.updateModule(cid,module);
}
createLesson(cid,mid,les){
    let less = this.findAllLessons(cid,mid)
    less.push(les);
    let module = {...moduleService.findModuleById(cid,mid)};
    module.lessons = less;
    moduleService.updateModule(cid,module);
}
}