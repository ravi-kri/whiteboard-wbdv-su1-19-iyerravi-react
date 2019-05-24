import LessonService from "./LessonService";
let lessonService =  new LessonService();
export default class TopicService {
deleteTopic(cid,mid,lid,tid){
    let lesson = {... lessonService.findLessonById(cid,mid,lid)};
    lesson.topics = lesson.topics.filter(t => t.id != tid);
    lessonService.updateLesson(cid,mid,lesson );
}
createTopic(cid,mid,lid,top){
    let topics = this.findAllTopics(cid,mid,lid);
    topics.push(top);
    let lesson = {...lessonService.findLessonById(cid,mid,lid)};
    lesson.topics = topics;
    lessonService.updateLesson(cid,mid,lesson);
}
findAllTopics(cid,mid,lid){
    return lessonService.findLessonById(cid,mid,lid).topics ? lessonService.findLessonById(cid,mid,lid).topics : [];
}
updateTopic(cid,mid,lid,top){
    let lesson = {...lessonService.findLessonById(cid,mid,lid)};
    lesson.topics = this.findAllTopics(cid,mid,lid).map(t =>{
        if(t.id == top.id) return top;
        else return t;
    });
    lessonService.updateLesson(cid,mid,lesson);
}
}