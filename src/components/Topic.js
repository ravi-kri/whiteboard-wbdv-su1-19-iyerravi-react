import React from 'react';
import TopicPills from './TopicPills';
import WidgetList from './WidgetList'
import WidgetService from '../services/WidgetService'
import WidgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'

const store = createStore(WidgetReducer)

// const Topic = ({
//     updateTopic,
//     deleteTopic,
//     addTopic,
//     selectedTopic,
//     selectTopic,
//     topics
// }) => {
//     return(
//         <div>
//             <TopicPills
//                 updateTopic = {updateTopic}
//                 deleteTopic = {deleteTopic}
//                 addTopic = {addTopic}
//                 selectedTopic = {selectedTopic}
//                 selectTopic = {selectTopic}
//                 topics = {topics}
//             />
//         </div>
//     )
// }

// export default Topic;

export default class Topic extends React.Component {
    constructor(props) {
        super(props)
        this.widgetService = WidgetService.getInstance()
        this.state = {
            widgets: this.widgetService.findAllWidgets()
        }
    }
    render() {
        return (
            <div>
            <TopicPills
                updateTopic = {this.props.updateTopic}
                deleteTopic = {this.props.deleteTopic}
                addTopic = {this.props.addTopic}
                selectedTopic = {this.props.selectedTopic}
                selectTopic = {this.props.selectTopic}
                topics = {this.props.topics}
            />
             <Provider store={store}>
             <WidgetListContainer />
                </Provider>
        </div>
           
        )
    }
}

