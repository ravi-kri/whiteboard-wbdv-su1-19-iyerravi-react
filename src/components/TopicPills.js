import React from 'react';
import {Link} from "react-router-dom";
const TopicPills = ({updateTopic,deleteTopic,addTopic,selectedTopic,selectTopic,topics}) => {
let nameTopic;
return (
    <div className="row">
    <div className="col-8">
    <ul className="nav nav-pills">
    {
    topics.map(topic => {
        let pillStyle = "nav-link mt-2";
        let newName;
        let newt = topic.id;
        if (topic.id == selectedTopic) {
            pillStyle = 'nav-link mt-2 active ';
        }
        return (
    <li className="nav-item" key={topic.id}>
    <span className={pillStyle}
    onClick={() => {
        selectTopic(topic.id);
    }}>
    <input disabled={true}
            ref={(domNode) => {
            newName = domNode;
            }
            }
            onChange={(e) => {
                let changeTopic = topics.filter(l => l.id == newt)[0];
                changeTopic.title = e.currentTarget.value;
                updateTopic(changeTopic);
            }} 
            value={topic.title}
            style={{
                backgroundColor: 'transparent',
                border: 0,
                color: 'black',
                width: '100px'
            }}
            />
    
    <Link className="float-right mr-2"
            to="#"
            onClick={(e) => {
            newName.removeAttribute('disabled');
            newName.focus();
            newName.select();
                e.stopPropagation();
            }}>
        <i className="action-icon fas fa-pencil-alt"
            style={{color: 'black'}}></i>
    </Link>
    
    
    <Link className="float-right mr-2" to="#"
            onClick={(e) => {
                e.stopPropagation();
                deleteTopic(topic.id);
            }}>
        <i className="fas fa-times" style={{color: 'black'}}></i>
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
    nameTopic = selectDomElement
    }}/>
            <Link
                to="#" onClick={() => {
                addTopic({
                id: (new Date()).getTime() + '',
                title: nameTopic.value,
                widgets: []
                });
                nameTopic.value = 'New Topic';
                }}>
                <i className="fas fa-plus fa-2x action-icon" style={{color:'red'}}></i>
            </Link>
    </div>
    </div>
    );
    }
    export default TopicPills;