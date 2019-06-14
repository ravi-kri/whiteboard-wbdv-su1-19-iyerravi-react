import React from 'react';
import Widget from './Widget';
import {Link} from "react-router-dom";
import {updateWidget} from "../actions/WidgetAction";

class WidgetList extends React.Component
{
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState){
        let courseId = prevProps.courseId;
        let moduleId = prevProps.moduleId;
        let lessonId = prevProps.lessonId;
        let topicId = prevProps.topicId;
        if(courseId != this.props.courseId ||
            moduleId != this.props.moduleId ||
            lessonId != this.props.lessonId ||
            topicId != this.props.topicId) {
            if((!this.props.courseId || !this.props.moduleId ||  !this.props.lessonId || !this.props.topicId))
                this.props.onDeleteAll();
            else
            this.props.findAllWidgetsForTopic(this.props.courseId,
                this.props.moduleId,
                this.props.lessonId,
                this.props.topicId);
        }
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
                                this.props.onSaveWidgetsForTopic(this.props.courseId,
                                                        this.props.moduleId,
                                                        this.props.lessonId,
                                                        this.props.topicId,
                                                        this.props.widgets);
                            }}>Save</button>
                            <span className="mr-2">Preview</span>
                            <Link className="no-decorate" to="#" onClick={e => this.props.onPreviewModeToggle()}>
                                <i className="fas fa-2x fa-toggle-off"></i>
                            </Link>
                        </div>
                    </div>
                    {widgets.map((w,index) =>
                    {
                        w.id = index;
                        return <Widget key={index} id={w.name} widget={w}
                                              onWidgetDelete={this.props.onWidgetDelete}
                                              onWidgetMoveUp = {this.props.onWidgetMoveUp}
                                              onWidgetMoveDown = {this.props.onWidgetMoveDown}
                                              isUpDisabled={w.index == 0}
                                              isDownDisabled={w.index == widgets.length-1}
                                              isPreview = {this.props.isPreview}
                                              updateWidget={this.props.onWidgetUpdate}/>
                    })}
                </div>
                <button className="btn btn-danger bottom-right m-4" onClick={e => {
                    if(!(this.props.courseId && this.props.moduleId && this.props.lessonId && this.props.topicId))
                        return;
                    this.props.onWidgetAdd(widgets.length);
                }}>
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
        )
    }
}
export default WidgetList;