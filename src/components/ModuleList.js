import React from 'react';
import {Link} from 'react-router-dom';
const ModuleList = ({
    modules, 
    selectedModule, 
    selectModule, 
    deleteModule, 
    addModule, 
    updateModule}) => {
    let nameMod;
    return (
<div className="container">
<div className="row nav flex-column nav-pills">
<span className="container">
<input defaultValue="New Module"
        ref={selectDomElement => {nameMod = selectDomElement}}/>
<Link to="#" onClick={() => {addModule({ id: (new Date()).getTime() + '',title: nameMod.value });
            nameMod.value = 'New Module';
        }}>
    <i className="action-icon fas fa-x fa-plus"></i>
</Link>
</span>
{
modules.map((module, index) => {
let pillStyle = "nav-link";
let newName;
let newid = module.id;
if (module.id == selectedModule)
pillStyle = 'nav-link active ';
return (
<span key={module.id + '-module-list-item'}
        className={pillStyle}
        onClick={() => {selectModule(module.id);}}>
    <input disabled={true}
        ref = {(domNode) => {newName = domNode;}}
        onChange={(e) => {
            let module = modules.filter(m => m.id==newid)[0];
            module.title = e.currentTarget.value;
            updateModule(module);}}
            value={module.title}
                style={{backgroundColor:'transparent',
                    border:5,
                    color:'black'}}/>
    
    <Link className="mr-2 float-right"
            to="#"
            onClick={(e) => {
                newName.removeAttribute('disabled');
                newName.focus();
                newName.select();
                e.stopPropagation();
            }}>
        <i className="action-icon fas fa-pencil-alt" style={{color: 'black'}}></i>
    </Link>
    <Link className="float-right mr-2" to="#"
        onClick={(e) => {e.stopPropagation();
            deleteModule(module.id);}}>
        <i className="fas fa-times" style={{color : 'black'}}></i>
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