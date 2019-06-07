import React from 'react';
import ListWidgetContent from './ListWidgetContent';
import ListWidgetPreview from './ListWidgetPreview';
import HeaderWidgetContent from './HeaderWidgetContent';
import HeaderWidgetPreview from './HeaderWidgetPreview';
import LinkWidgetContent from './LinkWidgetContent';
import LinkWidgetPreview from './LinkWidgetPreview';
import ImageWidgetContent from './ImageWidgetContent';
import ImageWidgetPreview from './ImageWidgetPreview';
import ParagraphWidgetContent from './ParagraphWidgetContent';
import ParagraphWidgetPreview from './ParagraphWidgetPreview';
// import { deleteWidget } from '../actions/WidgetAction';

const Widget = ({widget,updateWidget,onWidgetMoveUp,onWidgetMoveDown,isDownDisabled,isUpDisabled,isPreview,deleteWidget}) => {
    const widgetContentStyle = {
        background: 'whitesmoke'
    }
    return (
        <div className="container">
            <div className="container" style={widgetContentStyle}>
                {
                    !isPreview &&
                    <div className="row mb-3">
                        <div className="col-5">
                            {'HEADING' == widget.type && <h1>Heading widget</h1>}
                            {'PARAGRAPH' == widget.type && <h1>Paragraph widget</h1>}
                            {'LIST' == widget.type && <h1>List widget</h1>}
                            {'IMAGE' == widget.type && <h1>Image widget</h1>}
                            {'LINK' == widget.type && <h1>Link widget</h1>}
                        </div>
                        <div className="col-7">
                        
                       
                            <button className="btn btn-danger float-right" onClick={() => {
                                deleteWidget(widget.id)
                            }}>
                                Delete
                            </button>

                            <select
                                onChange={e=> {
                                    let w = {};
                                    w.type = e.currentTarget.value;
                                    w.name = widget.name
                                    w.id = widget.id
                                    updateWidget(w);
                                }}
                                className="mr-2 custom-select d-inline w-50 float-right"
                                >
                                <option>HEADING</option>
                                <option>PARAGRAPH</option>
                                <option>LIST</option>
                                <option>IMAGE</option>
                                <option>LINK</option>
                            </select>

                            <button disabled={isDownDisabled} className="mr-2 btn btn-warning float-right" onClick={e => {
                                onWidgetMoveDown(widget.index);
                            }}>
                                Down
                            </button>

                            <button disabled={isUpDisabled} className="mr-2 btn btn-warning float-right" onClick={e => {
                                onWidgetMoveUp(widget.index);
                            }}>
                                Up
                            </button>
                        </div>
                        {'HEADING' == widget.type && <HeaderWidgetContent widget={widget} updateWidget={updateWidget}/>}
                        {'PARAGRAPH' == widget.type && <ParagraphWidgetContent widget={widget}
                                                                               updateWidget={updateWidget}/>}
                        {'LIST' == widget.type && <ListWidgetContent widget={widget}
                                                                     updateWidget={updateWidget}/>}
                        {'IMAGE' == widget.type && <ImageWidgetContent widget={widget}
                                                                       updateWidget={updateWidget}/>}
                        {'LINK' == widget.type && <LinkWidgetContent widget={widget}
                                                                     updateWidget={updateWidget}/>}
                    </div>
                }
                <div className="container">
                    {
                        !isPreview &&
                        <div className="row mb-3">
                            <span className="text-black font-weight-bold">Preview</span>
                        </div>
                    }
                    <div className="row mb-3">
                        {'HEADING' == widget.type && <HeaderWidgetPreview widget={widget}/>}
                        {'PARAGRAPH' == widget.type && <ParagraphWidgetPreview widget={widget}/>}
                        {'LIST' == widget.type && <ListWidgetPreview widget={widget}/>}
                        {'IMAGE' == widget.type && <ImageWidgetPreview widget={widget}/>}
                        {'LINK' == widget.type && <LinkWidgetPreview widget={widget}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Widget;