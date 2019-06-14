import React from 'react';
import LessonService from "./LessonService";

const URL = 'https://wbdv-su119-javaserver.herokuapp.com';

export default class WidgetService {
    static findAllWidgets(cid, mid, lid, tid) {
        return fetch(URL + '/api/topic/' + tid + '/widget',
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findWidgetById(cid, mid, lid, tid, wid) {
        return fetch(URL + '/api/widget/' + wid,
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateWidget(cid, mid, lid, tid, widget) {
        return fetch(URL + '/api/widget/' + widget.id,
            {
                 
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(widget)
            });
    }

    static deleteWidget(cid, mid, lid, tid, wid) {
        return fetch(URL + '/api/topic/' + wid,
            {
                 
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static createWidget(cid, mid, lid, topicId,widget) {
        return fetch(URL + '/api/topic/' + topicId + '/widget',
            {
                 
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(widget)
            });
    }

    static  saveWidgets(courseId, moduleId, lessonId, topicId, widgets){
        return fetch(URL + '/api/topic/' + topicId + '/widgets',
            {
                 
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(widgets)
            });
    }
}