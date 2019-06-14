import React from 'react';
import './CourseTableHeader.css';
import {Link} from 'react-router-dom';
const CourseRowHeader = () => {
    const styleTopMargin = {
        height: '5vh'
    }
    return (
        <div style={styleTopMargin} className="pb-2 pt-2 border-bottom course-listing-header">
            <div className="container mr-sm-5 ml-sm-4">
                <div className="row">
                    <div className="col-12 pl-0 d-block d-sm-none">
                        <p className="text-justify d-inline font-weight-bold p-2">Today</p>
                    </div>
                    <div className="col-sm-3 col-10 d-none d-sm-block">
                        <p className="text-justify d-inline font-weight-bold">Title</p>
                    </div>
                    <div className="col-3 d-none d-sm-block">
                        <div className="dropdown show">
                            <Link className="no-decorate dropdown-toggle" to="#" role="button" id="dropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="font-weight-bold"> Owned By </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-5 d-none d-sm-block">
                        <p className="text-justify text-left float-left font-weight-bold mr-3">Last modified by me</p>
                        <Link className="no-decorate float-left mr-3" to="/course/grid">
                            <i className="fas fa-grip-horizontal"></i>
                        </Link>
                        <Link className="no-decorate float-left mr-3" to="#"><i className="fas fa-sort pr-3"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseRowHeader;