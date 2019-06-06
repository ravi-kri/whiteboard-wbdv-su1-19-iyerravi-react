import widgetService from '../services/WidgetService'
import {
    UPDATE_WIDGET,MOVE_WIDGET_DOWN, MOVE_WIDGET_UP,PREVIEW_MODE_TOGGLE,DELETE_WIDGET, CREATE_WIDGET
} from "../actions/WidgetAction";
const service = widgetService.getInstance();
let widgets = service.findAllWidgets();
// console.log(widgets)
const widgetReducer = (state = {widgets: [],isPreview:false}, action) => {
    let newState = {...state}
    newState.widgets = [...state.widgets]
    switch (action.type) {
        case "CREATE_WIDGET":
        {
            // newState.widgets = newState.widgets.push(action.widget)
            return {widgets: action.widgets};
        }
        case "FIND_ALL_WIDGETS":
            {
                newState.widgets = action.widgets;
                return newState;
                // widgets: action.widgets
            }
        case DELETE_WIDGET: {
                newState.widgets = newState.widgets.filter(w=> (w.id!=action.widgetId))
                return newState;
            }
        case UPDATE_WIDGET:{
            newState.widgets = newState.widgets.map(w=> {
                if(w.id==action.widget.id) return action.widget
                else return w;
            });
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
        case "FIND_WIDGET":
            break;
        default:
            return state;
    }
}

export default widgetReducer;