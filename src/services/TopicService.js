import React from 'react';
import LessonService from "./LessonService";

const URL = 'https://wbdv-su119-javaserver.herokuapp.com';
export default class TopicService {
    static findAllTopics(cid, mid, lid) {
        return fetch(URL + '/api/lesson/' + lid + '/topic',
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findTopicById(cid, mid, lid, tid) {
        return fetch(URL + '/api/topic/' + tid,
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateTopic(cid, mid, lid, topic) {
        return fetch(URL + '/api/topic/' + topic.id,
            {
                 
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(topic)
            });
    }

    static deleteTopic(cid, mid, lid, tid) {
        return fetch(URL + '/api/topic/' + tid,
            {
                 
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static createTopic(cid, mid, lid, topic) {
        return fetch(URL + '/api/lesson/' + lid + '/topic',
            {
                 
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(topic)
            });
    }
}