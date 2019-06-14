import React from 'react';
import {Link} from "react-router-dom";
const TopicPills = ({updateTopic,saveTopic,deleteTopic,addTopic,selectedTopic,selectTopic,topics}) => {
    let topicTitleElem;
    let actionIconStyle = {
        color: 'white'
    }
    topics = topics.sort((t1, t2) => {
        let idx1 = t1.id ? t1.id : -1;
        let idx2 = t2.id ? t2.id : -1;
        return (idx1 < idx2) ? -1 : (idx1 > idx2) ? 1 : 0;
    });
    return (
        <div className="row w-100">
            <div className="col-8">
                <ul className="nav nav-pills mb-3" id="module1-lesson1-tab" role="tablist">
                    {
                        topics.map(topic => {
                                let className = "nav-link ml-0 mb-2 mt-2 mr-2";
                                let editInputElem;
                                let tid = topic.id;
                                if (topic.id == selectedTopic) {
                                    className = className + ' active ';
                                }
                                return (
                                    <li className="nav-item" key={topic.id}>
                                        <span className={className} id="module1-lesson1-topic1" data-toggle="pill"
                                              role="tab"
                                           aria-controls="pills-module1-lesson1-topic1" aria-selected="true"
                                           onClick={() => {
                                               selectTopic(topic.id);
                                           }}>

                                            <input disabled={true}
                                                   ref={(domNode) => {
                                                       editInputElem = domNode;
                                                   }
                                                   }
                                                   onChange={(e) => {
                                                       let topic = topics.filter(l => l.id == tid)[0];
                                                       topic.title = e.currentTarget.value;
                                                       updateTopic(topic);
                                                   }}
                                                   className="p-0 form-control d-inline text-truncate" value={topic.title}
                                                   style={{
                                                       backgroundColor: 'transparent',
                                                       border: 0,
                                                       color: 'white',
                                                       width: '50px',
                                                       height: '2vh'
                                                   }}
                                                   onBlur={(e) => {
                                                       let topic = topics.filter(l => l.id == tid)[0];
                                                       topic.title = e.currentTarget.value;
                                                       saveTopic(topic);
                                                       e.currentTarget.setAttribute('disabled', 'true');
                                                   }}/>

                                            <Link className="float-right" to="#"
                                                  onClick={(e) => {
                                                      deleteTopic(topic.id);
                                                      e.stopPropagation();
                                                  }}>
                                                <i className="fas fa-times" style={actionIconStyle}></i>
                                            </Link>
                                            <Link className="float-right mr-2"
                                                  to="#"
                                                  onClick={(e) => {
                                                      editInputElem.removeAttribute('disabled');
                                                      editInputElem.focus();
                                                      editInputElem.select();
                                                      e.stopPropagation();
                                                  }}>
                                                <i className="action-icon fas fa-pencil-alt"
                                                   style={actionIconStyle}></i>
                                            </Link>
                                        </span>
                                    </li>)
                            }
                        )
                    }
                </ul>
            </div>
            <div className="col-4">
                <input defaultValue='New Topic'
                       ref={selectDomElement => {
                           topicTitleElem = selectDomElement
                       }}
                       className="form-control w-75 mr-2 d-inline"/>
                <Link
                    to="#" onClick={() => {
                    addTopic({
                        title: topicTitleElem.value,
                        widgets: []
                    });
                    topicTitleElem.value = 'New Topic';
                }}>
                    <i className="fas fa-plus fa-2x action-icon" style={{color:'#655858'}}></i>
                </Link>
            </div>
        </div>
    );
}
export default TopicPills;