import React from 'react';

const URL = 'https://wbdv-su119-javaserver.herokuapp.com';

export default class ModuleService {
    static findAllModules(courseId) {
        return fetch(URL + '/api/course/' + courseId + '/module',
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findModuleById(courseId, moduleId) {
        return fetch(URL + '/api/module/' + moduleId,
            {
                 
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static deleteModule(courseId, moduleId) {
        return fetch(URL + '/api/module/' + moduleId,
            {
                 
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateModule(courseId, module) {
        return fetch(URL + '/api/module/' + module.id,
            {
                 
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(module)
            });
    }

    static createModule(courseId, module) {
        return fetch(URL + '/api/course/' + courseId + '/module',
            {
                 
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(module)
            });
    }
}