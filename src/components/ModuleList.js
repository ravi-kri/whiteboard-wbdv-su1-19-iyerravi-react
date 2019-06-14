import React from 'react';
import {Link} from 'react-router-dom';

const ModuleList = ({modules, selectedModule, selectModule, deleteModule, addModule, updateModule,saveModule}) => {
    let actionIconStyle = {
        color: 'white'
    }

    let moduleTitleElem;
    modules = modules.sort((m1, m2) => {
        let idx1 = m1.id ? m1.id : -1;
        let idx2 = m2.id ? m2.id : -1;
        return (idx1 < idx2) ? -1 : (idx1 > idx2) ? 1 : 0;
    });
    return (
        <div className="container">
            <div className="row nav flex-column nav-pills" id="v-pills-module-tab" role="tablist"
                 aria-orientation="vertical">
                <span className="container">
                    <input defaultValue="New Module"
                           ref={selectDomElement => {
                               moduleTitleElem = selectDomElement
                           }}
                           className="form-control d-inline mr-2" style={{width:'70%'}}/>
                    <Link id="v-pills-course1-module-add-tab"
                          to="#"
                          onClick={(e) => {
                              addModule({
                                  id: '',
                                  title: moduleTitleElem.value
                              });
                              moduleTitleElem.value = 'New Module';
                          }}>
                        <i className="action-icon fas fa-2x fa-plus"></i>
                    </Link>
                </span>
                {
                    modules.map((module, index) => {
                        let className = "nav-link m-2 pt-0 pb-0 ";
                        let editInputElem;
                        let mid = module.id;
                        if (module.id == selectedModule)
                            className = className + ' active ';
                        return (
                            <span key={module.id + '-module-list-item'}
                                  className={className}
                                  aria-selected="true"
                                  onClick={() => {
                                      selectModule(module.id);
                                  }}>
                                <input disabled={true}
                                    ref = {(domNode) =>
                                    {editInputElem = domNode;}
                                    }
                                    onChange={(e) => {
                                        let module = modules.filter(m => m.id==mid)[0];
                                        module.title = e.currentTarget.value;
                                        updateModule(module)
                                    }}
                                    className="p-0 form-control w-75 d-inline" value={module.title}
                                       style={{backgroundColor:'transparent',
                                                border:0,
                                                color:'white'}}
                                        onBlur = {(e) =>{
                                            let module = modules.filter(m => m.id==mid)[0];
                                            module.title = e.currentTarget.value;
                                            saveModule(module);
                                            e.currentTarget.setAttribute('disabled','true');
                                        }}/>

                                <Link className="float-right" to="#"
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       deleteModule(module.id);
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
                                    <i className="action-icon fas fa-pencil-alt" style={actionIconStyle}></i>
                                </Link>

                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default ModuleList;