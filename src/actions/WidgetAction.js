import WidgetService from "../services/WidgetService";

export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const MOVE_WIDGET_UP = 'MOVE_WIDGET_UP'
export const MOVE_WIDGET_DOWN = 'MOVE_WIDGET_DOWN';
export const PREVIEW_MODE_TOGGLE = 'PREVIEW_MODE_TOGGLE';
export const DELETE_WIDGET = 'DELETE_WIDGET';
export const CREATE_WIDGET = 'CREATE_WIDGET';
// export const FIND_ALL_WIDGETS = 'FIND_ALL_WIDGETS';

export function updateWidget(widget) {
    return {
        type: UPDATE_WIDGET,
        widget: widget
    }
}

// export function findAllWidgets(widget) {
//     return {
//         type: FIND_ALL_WIDGETS,
//         widget: widget
//     }
// }

export function addWidget(widget) {
    return {
        type: CREATE_WIDGET,
        widget: widget
    }
}

export function deleteWidget(widgetId) {
    return {
        type: DELETE_WIDGET,
        widgetId:widgetId
    }
}

export function moveWidgetUp(curIndex) {
    return {
         type: MOVE_WIDGET_UP,
         curIndex:curIndex
     }
 }
 
 export function moveWidgetDown(curIndex) {
     return {
         type: MOVE_WIDGET_DOWN,
         curIndex:curIndex
     }
 }
 export function previewModeToggle(){
    return {
        type: PREVIEW_MODE_TOGGLE
    }
}