export const UPDATE_WIDGET = 'UPDATE_WIDGET';
// export const MOVE_WIDGET_UP = 'MOVE_WIDGET_UP'
// export const MOVE_WIDGET_DOWN = 'MOVE_WIDGET_DOWN';
export const PREVIEW_MODE_TOGGLE = 'PREVIEW_MODE_TOGGLE';

export function updateWidget(widget) {
    return {
        type: UPDATE_WIDGET,
        widget: widget
    }
}

// export function moveWidgetUp(curIndex) {
//     return {
//          type: MOVE_WIDGET_UP,
//          curIndex:curIndex
//      }
//  }
 
//  export function moveWidgetDown(curIndex) {
//      return {
//          type: MOVE_WIDGET_DOWN,
//          curIndex:curIndex
//      }
//  }
 export function previewModeToggle(){
    return {
        type: PREVIEW_MODE_TOGGLE
    }
}