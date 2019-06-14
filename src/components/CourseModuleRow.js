import React from 'react';
import './CourseModuleRow.css';
import {Link} from 'react-router-dom';
const CourseModuleRow = () => {
    return (
        <div className="row">
            <div className="col-3 modules">
                <div className="container">
                    <div className="row nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                            <span className="nav-link active m-2" id="v-pills-module1-tab" data-toggle="pill"
                                  role="tab" aria-controls="v-pills-module1"
                                  aria-selected="true">
                                <span className="pr-2"> Module1-JQuery </span>
                                <Link className="float-right" to="#">
                                    <i className="fas fa-times action-icon"></i>
                                </Link>
                            </span>
                        <span className="nav-link m-2" id="v-pills-module2-tab" data-toggle="pill"
                              role="tab" aria-controls="v-pills-module2"
                              aria-selected="false">
                                <span className="pr-2"> Module2-React </span>
                                <Link className="float-right" to="#">
                                    <i className="fas fa-times action-icon"></i>
                                </Link>
                            </span>
                        <span className="nav-link m-2" id="v-pills-module3-tab" data-toggle="pill"
                              role="tab" aria-controls="v-pills-module3"
                              aria-selected="false">
                                <span className="pr-2"> Module3-Redux </span>
                                <Link className="float-right" to="#">
                                    <i className="fas fa-times action-icon"></i>
                                </Link>
                            </span>
                        <span className="nav-link m-2" id="v-pills-module4-tab" data-toggle="pill"
                              role="tab" aria-controls="v-pills-module4"
                              aria-selected="false">
                                <span className="pr-2"> Module4-Native </span>
                                <Link className="float-right" to="#">
                                    <i className="fas fa-times action-icon"></i>
                                </Link>
                            </span>
                        <span className="nav-link m-2" id="v-pills-module5-tab" data-toggle="pill"
                              role="tab" aria-controls="v-pills-module5"
                              aria-selected="false">
                                <span className="pr-2"> Module5-Angular </span>
                                <Link className="float-right" to="#">
                                    <i className="fas fa-times action-icon"></i>
                                </Link>
                            </span>
                        <span className="nav-link m-2" id="v-pills-module6-tab" data-toggle="pill"
                              role="tab" aria-controls="v-pills-module6"
                              aria-selected="false">
                                <span className="pr-2"> Module6-Node </span>
                                <Link className="float-right" to="#">
                                    <i className="fas fa-times action-icon"></i>
                                </Link>
                            </span>
                        <span className="nav-link m-2" id="v-pills-module7-tab" data-toggle="pill"
                              role="tab" aria-controls="v-pills-module7"
                              aria-selected="false">
                                <span className="pr-2"> Module7-Mongo </span>
                                <Link className="float-right" to="#">
                                    <i className="fas fa-times action-icon"></i>
                                </Link>
                            </span>
                    </div>
                    <Link className="m-2 float-right" id="v-pills-module-add-tab"
                       href="#">
                        <i className="action-icon fas fa-2x fa-plus"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CourseModuleRow;