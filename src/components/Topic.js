import React from 'react';
import TopicPills from './TopicPills';

const Topic = ({
    updateTopic,
    deleteTopic,
    addTopic,
    selectedTopic,
    selectTopic,
    topics
}) => {
    return(
        <div>
            <TopicPills
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

export default Topic;
