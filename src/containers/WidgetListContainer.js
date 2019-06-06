import React from 'react'
import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
import { updateWidget,moveWidgetDown,moveWidgetUp,previewModeToggle,deleteWidget } from "../actions/WidgetAction";
import service from "../services/WidgetService";

const WidgetService = service.getInstance();

const mapStateToProps = (state) => {
    return {
        widgets: state.widgets,
        isPreview : state.isPreview
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findAllWidgets: () => {
            WidgetService.findAllWidgets().then(
                widgets => dispatch({type:'FIND_ALL_WIDGETS',widgets:widgets})
            )
        },
        onWidgetUpdate: (widget) => {
            return dispatch(updateWidget(widget));
        },
        onWidgetMoveUp:(index) => {
            return dispatch(moveWidgetUp(index));
        },
        onWidgetMoveDown:(index) => {
            return dispatch(moveWidgetDown(index));
        },
        onPreviewModeToggle: () => {
            return dispatch(previewModeToggle());
        },
        onWidgetDelete: (widgetId) => {
            return dispatch(deleteWidget(widgetId));
        },
        createWidget: (index) => {
            let widget = {
                id:  Math.floor(Math.random() * 1000),
                type: "HEADING",
                name : 'New Widget',
                index : index+1
            }
            console.log(widget)
            WidgetService.createWidget(widget).then(
                widgets => dispatch({type:'CREATE_WIDGET',widgets:widgets})
            )
            // return dispatch(addWidget(widget));
        },
       
        
    }
}

const WidgetListContainer = connect(mapStateToProps,mapDispatchToProps)(WidgetList)

export default WidgetListContainer