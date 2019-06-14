import {
    addWidget, deleteWidget,
    findAllWidgetsForTopic, updateWidget, moveWidgetDown, moveWidgetUp
    , previewModeToggle, deleteAll
} from "../actions/WidgetAction";
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";
import WidgetService from "../services/WidgetService";

const mapStateToProps = (state,props) => {
    return {
        widgets: state.widgets,
        isPreview : state.isPreview
    }
}
const mapDispatchToProps = (dispatch,props) => {
    let courseId = props.courseId;
    let moduleId = props.moduleId;
    let lessonId = props.lessonId;
    let topicId = props.topicId;
    return {
        onWidgetAdd: (index) => {
            let widget = {
                "type": "HEADING",
                "size": 1,
                "text": '',
                "name" : '',
                "index" : index
            }
            return dispatch(addWidget(widget));
        },
        onWidgetDelete: (widgetId) => {
            return dispatch(deleteWidget(widgetId));
        },
        onDeleteAll: () => {
            return dispatch(deleteAll());
        },
        onWidgetUpdate: (widget) => {
            return dispatch(updateWidget(widget));
        },
        findAllWidgetsForTopic : () =>{
            if(!courseId || !moduleId || !lessonId || !topicId) return;
            WidgetService.findAllWidgets(courseId,moduleId,lessonId,topicId)
                .then(res =>
                {if(res.status == 200)
                    return res.json()
                else
                    return []})
                .then(widgets => {
                    dispatch(findAllWidgetsForTopic(widgets));
                });
        },
        onWidgetMoveUp:(index) => {
            return dispatch(moveWidgetUp(index));
        },
        onWidgetMoveDown:(index) => {
            return dispatch(moveWidgetDown(index));
        },
        onSaveWidgetsForTopic: (courseId, moduleId, lessonId, topicId, widgets) => {
            WidgetService.saveWidgets(courseId, moduleId, lessonId, topicId, widgets)
                .then(res => res.json())
                .then(widgets => {
                    dispatch(findAllWidgetsForTopic(widgets));
                })
        },
        onPreviewModeToggle: () => {
            return dispatch(previewModeToggle());
        }
    }
}

export const WidgetListContainer = connect(mapStateToProps,mapDispatchToProps)(WidgetList);