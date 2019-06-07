import React from 'react'
import Widget from './Widget'
import {Link} from "react-router-dom";

class WidgetList extends React.Component
{
    constructor(props){
        super(props);
        this.props.findAllWidgets();
    }
    render()
    {
        let widgets = this.props.widgets.sort((w1,w2) => {
            let idx1 = w1.index ? w1.index : -1;
            let idx2 = w2.index ? w2.index : -1;
            return (idx1<idx2) ? -1 : (idx1>idx2) ? 1 : 0;
        });
        
        return (
            <div className="tab-content" id="pills-tabContent-module1">
                <div className="tab-pane fade show active" id='pills-module1-lesson1-topic1' role="tabpanel"
                     aria-labelledby='module1-lesson1-topic1'>
                    <div className="row mb-3">
                        <div className="offset-9">
                        <button className="btn btn-success mr-2" onClick={e => {
                                this.props.onSaveWidgets(this.props.widgets);
                            }}>Save</button>
                            <Link className="no-decorate" to="#" onClick={e => this.props.onPreviewModeToggle()}>
                                <p className="btn btn-info">Preview</p>
                            </Link>
                        </div>
                    </div>
                    {widgets.map(w => <Widget 
                                        key={w.id} widget={w} 
                                            updateWidget={this.props.onWidgetUpdate}
                                            isUpDisabled={w.index == 1}
                                            onWidgetDelete={this.props.onWidgetDelete}
                                            isDownDisabled={w.index == widgets.length}
                                            isPreview = {this.props.isPreview}
                                            deleteWidget = {this.props.deleteWidget}
                                            onWidgetMoveUp = {this.props.onWidgetMoveUp}
                                            onWidgetMoveDown = {this.props.onWidgetMoveDown}/>)}
                </div>
                <button className="btn btn-success bottom-right m-4" onClick={e => {
                    this.props.createWidget(widgets.length);
                }}>
                    Create
                </button>
            </div>
        )
    }
}
export default WidgetList;