import React from 'react';
import ModuleList from "./ModuleList";
import ModuleTabContent from "./ModuleTabContent";
import './Module.css';


const Module = ({
    deleteModule,
    addModule,
    modules,
    updateModule,
    selectedModule,
    selectModule,
    updateTopic,
    deleteTopic,
    addTopic,
    selectedTopic,
    selectTopic,
    topics
}) => {
    return(
        <div className="container-fluid wbdv-mStyling">
            <div className="row">
            <div className="col-3 wbdv-mTabStyling">
            <ModuleList
            deleteModule={deleteModule}
            modules={modules}
            selectModule={selectModule}
            addModule={addModule}
            selectedModule={selectedModule}
            updateModule={updateModule}/>
        </div>
        <div className=" offset-3 col-9">
        <ModuleTabContent
            deleteTopic={deleteTopic}
            selectedTopic={selectedTopic}
            topics={topics}
            updateTopic={updateTopic}
            addTopic={addTopic}
            selectTopic={selectTopic}/>
</div>
</div>
</div>
    )
}

export default Module;