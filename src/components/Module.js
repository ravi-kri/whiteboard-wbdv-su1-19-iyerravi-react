import React from 'react';
import ModuleList from "./ModuleList";
import ModuleTabContent from "./ModuleTabContent";
import './Module.css';


const Module = ({
                    deleteModule, addModule, modules, updateModule,saveModule, selectedModule, selectModule,
                    selectedLesson,
                    updateTopic,saveTopic, deleteTopic, addTopic, selectedTopic,selectTopic,topics, widgets,courseId
                }) => {
    return (
        <div className="container-fluid modules">
            <div className="row">
                <div className="col-3 modulesTab">
                    <ModuleList
                        modules={modules}
                        selectedModule={selectedModule}
                        selectModule={selectModule}
                        deleteModule={deleteModule}
                        addModule={addModule}
                        updateModule={updateModule}
                        saveModule = {saveModule}
                    />
                </div>
                <div className="col-9 offset-3">
                    <ModuleTabContent
                        updateTopic={updateTopic}
                        saveTopic={saveTopic}
                        deleteTopic={deleteTopic}
                        addTopic={addTopic}
                        selectedTopic={selectedTopic}
                        selectTopic={selectTopic}
                        topics={topics}
                        widgets={widgets}
                        courseId = {courseId}
                        selectedModule = {selectedModule}
                        selectedLesson = {selectedLesson}
                    />
                </div>
            </div>
        </div>
    );
}
export default Module;