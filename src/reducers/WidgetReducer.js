const widgetReducer = (state = {widgets: [],isPreview:false}, action) => {
    let newState = {...state}
    newState.widgets = [...state.widgets]
    switch (action.type) {
        case "CREATE_WIDGET":
        {
            return {widgets: action.widgets};
        }
        case "FIND_ALL_WIDGETS":
            {
                newState.widgets = action.widgets;
                return newState;
            }
        case "SAVED_WIDGETS":
                {
                    newState.widgets = action.widgets;
                    return newState;
                }
        case "DELETE_WIDGET": {
            return {widgets: action.widgets};
            }
        case 'MOVE_WIDGET_DOWN':{
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
         case 'MOVE_WIDGET_UP':{
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
         case 'PREVIEW_MODE_TOGGLE':{
            newState.isPreview = !newState.isPreview;
            return newState;
        }
        
        case 'UPDATE_WIDGET':{
            newState.widgets = newState.widgets.map(w=> {
                if(w.id==action.widget.id) return action.widget
                else return w;
            });
            return newState;
        }
        
        case "FIND_WIDGET":
            {
                return {widgets: action.widgets};
            }
        default:
            return state;
    }
}

export default widgetReducer;