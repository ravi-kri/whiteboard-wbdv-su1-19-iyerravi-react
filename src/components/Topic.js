import React from 'react';
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";
import {WidgetListContainer} from '../containers/WidgetListContainer'
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import WidgetReducer from "../reducers/WidgetReducer";

const store = createStore(WidgetReducer);

const Topic = ({updateTopic,saveTopic,deleteTopic,addTopic,selectedTopic,selectTopic,topics,widgets,
                   courseId,selectedModule,selectedLesson}) => {

    return (
        <div>
            <TopicPills
                updateTopic = {updateTopic}
                saveTopic = {saveTopic}
                deleteTopic = {deleteTopic}
                addTopic = {addTopic}
                selectedTopic = {selectedTopic}
                selectTopic = {selectTopic}
                topics = {topics}
            />

            <WidgetListContainer
                courseId = {courseId}
                moduleId = {selectedModule}
                lessonId = {selectedLesson}
                topicId = {selectedTopic}
                />
        </div>
    );
}
export default Topic;