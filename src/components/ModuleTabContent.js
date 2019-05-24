import React from 'react';
import Topic from './Topic';

const ModuleTabContent = ({
    updateTopic,
    deleteTopic,
    addTopic,
    selectedTopic,
    selectTopic,
    topics
}) => {
    return(
        <div className="tab-pane fade show active">
            <Topic
            updateTopic = {updateTopic}
            deleteTopic = {deleteTopic}
            addTopic = {addTopic}
            selectedTopic = {selectedTopic}
            selectTopic = {selectTopic}
            topics = {topics}
            />
        </div>
    )
}

export default ModuleTabContent;