import React from 'react';
import Topic from "./Topic";

const LessonTabContent = () => {
    return (
        <div className="tab-content" id="nav-module1-lesson1-tabContent">
            <div className="tab-pane fade show active" id="nav-module1-lesson1" role="tabpanel"
                 aria-labelledby="nav-module1-lesson1-tab">
                <Topic/>
            </div>
        </div>
    );
}
export default LessonTabContent;