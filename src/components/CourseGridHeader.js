import React from 'react';
import './CourseGridHeader.css';
import {Link} from 'react-router-dom';
const CourseGridHeader = () => {
    return(
        <div className="row">
            <div className="col-5 font-weight-bold">Recent Documents</div>
            <div className="col-3">
                <div className="dropdown show">
                    <Link className="no-decorate dropdown-toggle" to="#" role="button" id="dropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="font-weight-bold">Owned By</span>
                    </Link>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link className="dropdown-item" to="#">Ram</Link>
                        <Link className="dropdown-item" to="#">Tom</Link>
                        <Link className="dropdown-item" to="#">Bill</Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <Link className="mr-4 float-right no-decorate" to="#">
                    <i className="fas fa-folder"></i>
                </Link>
                <Link className="mr-2 float-right no-decorate" to="#">
                    <i className="fas fa-sort pr-3"></i>
                </Link>
                <Link className="mr-4 float-right no-decorate" to="/course/table">
                    <i className="fas fa-th-list"></i>
                </Link>
            </div>
        </div>
    )
}
export default CourseGridHeader;