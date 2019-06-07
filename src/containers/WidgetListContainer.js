import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
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
            return dispatch({
                type: 'UPDATE_WIDGET',
                widget: widget
            });
        },

        onWidgetMoveUp:(index) => {
            return dispatch({
                type: 'MOVE_WIDGET_UP',
                curIndex:index
            });
        },
        onWidgetMoveDown:(index) => {
            return dispatch({
                type: 'MOVE_WIDGET_DOWN',
                curIndex:index
            });
        },

        onPreviewModeToggle: () => {
            return dispatch({
                type: 'PREVIEW_MODE_TOGGLE'
            });
        },
        findWidget: (wid) => {
            WidgetService.findWidgetById(wid).then(
                widget => dispatch({type:'FIND_WIDGET'})
            )
        },
        createWidget: (index) => {
            let widget = {
                id:  Math.floor(Math.random() * 1000),
                type: "HEADING",
                name : 'New Widget',
                index : index+1
            }
            WidgetService.createWidget(widget).then(
                widgets => dispatch({type:'CREATE_WIDGET',widgets:widgets})
            )
        },
        deleteWidget: (widgetid) => {
            WidgetService.deleteWidget(widgetid).then(
                widgets => dispatch({type:'DELETE_WIDGET',widgets:widgets})
            )
        },
        onSaveWidgets: (widgets) => {
            WidgetService.saveWidgets(widgets)
                .then(res => res.json())
                .then(widgets => {
                    dispatch(
                        {
                           type: 'SAVED_WIDGETS',
                            widgets : widgets
                        }
                    );
                })
        },
        
    }
}

const WidgetListContainer = connect(mapStateToProps,mapDispatchToProps)(WidgetList)

export default WidgetListContainer