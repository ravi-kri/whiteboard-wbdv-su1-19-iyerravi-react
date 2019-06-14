import {
    CREATE_WIDGET,
    DELETE_WIDGET, FIND_ALL_WIDGETS,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_WIDGET, MOVE_WIDGET_DOWN, MOVE_WIDGET_UP,
    UPDATE_WIDGET, PREVIEW_MODE_TOGGLE, DELETE_ALL
} from "../actions/WidgetAction";

const initialState = {
    widgets: [],
    isPreview:false
}
const WidgetReducer = (state=initialState, action) => {
    let newState = {...state}
    newState.widgets = [...state.widgets]
    switch (action.type) {
        case CREATE_WIDGET:
        {
            newState.widgets.push(action.widget)
            return newState;
        }
        case DELETE_WIDGET: {
            newState.widgets = newState.widgets.filter(w=> (w.id!=action.widgetId))
            return newState;
        }
        case DELETE_ALL: {
            newState.widgets = [];
            return newState;
        }
        case UPDATE_WIDGET: {
            newState.widgets = newState.widgets.map(w=> {
                if(w.id==action.widget.id) return action.widget
                else return w;
            });
            return newState;
        }
        case FIND_WIDGET:{
            newState.widgets = newState.widgets.filter(w=> w.id==action.widgetId);
            return newState;
        }
        case FIND_ALL_WIDGETS_FOR_TOPIC:{
            newState.widgets = action.widgets;
            return newState;
        }
        case FIND_ALL_WIDGETS:{
            newState.widgets = action.widgets;
            return newState;
        }
        case MOVE_WIDGET_DOWN:{
           let widgets = state.widgets.map(w => {
                if(w.index == action.curIndex)
                {
                    w.index = action.curIndex+1;
                }
                else if(w.index == action.curIndex+1)
                {
                    w.index = action.curIndex;
                }
                return w;
            });
            newState.widgets = widgets;
            return newState;
        }
        case MOVE_WIDGET_UP:{
            let widgets = state.widgets.map(w => {
                if(w.index == action.curIndex)
                {
                    w.index = action.curIndex-1;
                }
                else if(w.index == action.curIndex-1)
                {
                    w.index = action.curIndex;
                }
                return w;
            });
            newState.widgets = widgets;
            return newState;
        }
        case PREVIEW_MODE_TOGGLE:{
            newState.isPreview = !newState.isPreview;
            return newState;
        }
        default:
            return state
    }
}
export default WidgetReducer;