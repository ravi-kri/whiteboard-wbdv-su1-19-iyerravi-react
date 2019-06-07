import widgets from './widgets.json'
const url = 'http://localhost:8080/api/widgets'
export default class WidgetService {
    
    static myInstance = null;
    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget =>
        fetch("http://localhost:8080/api/widgets", {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())

    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json())

    // findWidgetById = widgetId => {
    //     return widgets.find(widget => widget.id == widgetId)
    // }

    findWidgetById = widgetId =>
        fetch(`http://localhost:8080/api/widgets/${widgetId}`,{
            method: 'GET'
        })
            .then(response => response.json())

    deleteWidget = (widgetId) =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
        method: 'DELETE'
    }).then(response => response.json())


    udpateWidget = (widgetId, newwidget) => {
        widgets = widgets.map(widget => {
            if(widget.id != widgetId)
                return widget;
            else
                return newwidget;
        })
    }

 
}