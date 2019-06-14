import React from 'react';

const URL = 'https://wbdv-su119-javaserver.herokuapp.com';

export default class LinkWidgetService {
    static findAllWidgets(cid, mid, lid, tid) {
        return fetch(URL + '/api/topic/' + tid + '/link/widget',
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findWidgetById(cid, mid, lid, tid, wid) {
        return fetch(URL + '/api/link/widget/' + wid,
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateWidget(cid, mid, lid, tid, widget) {
        return fetch(URL + '/api/link/widget/' + widget.id,
            {
                 
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(widget)
            });
    }

    static deleteWidget(cid, mid, lid, tid, wid) {
        return fetch(URL + '/api/link/widget/' + wid,
            {
                 
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static createWidget(cid, mid, lid, topicId,widget) {
        return fetch(URL + '/api/topic/' + topicId + '/link/widget',
            {
                 
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(widget)
            });
    }
}