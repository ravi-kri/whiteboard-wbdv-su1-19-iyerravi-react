import React from 'react';
import Topic from "./Topic";

const ModuleTabContent = ({updateTopic,saveTopic,deleteTopic,addTopic,selectedTopic,
                          selectTopic,topics,widgets,courseId,
                              selectedModule,selectedLesson}) => {
    return (
        <div className="tab-content" id="v-pills-course-module-tabContent">
            <div className="tab-pane fade show active" id="v-pills-module1" role="tabpanel"
                 aria-labelledby="v-pills-module1-tab">
                <Topic
                    updateTopic = {updateTopic}
                    saveTopic = {saveTopic}
                    deleteTopic = {deleteTopic}
                    addTopic = {addTopic}
                    selectedTopic = {selectedTopic}
                    selectTopic = {selectTopic}
                    topics = {topics}
                    widgets={widgets}
                    courseId = {courseId}
                    selectedModule = {selectedModule}
                    selectedLesson = {selectedLesson}
                />
            </div>
        </div>
    );
}
export default ModuleTabContent;