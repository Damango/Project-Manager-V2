import React from 'react';
import "./ProjectView.css"
const ProjectView = (props) => {
    return (<div className="project-view-container">
        <div className="close-view" onClick={closeView}>X</div>
        <div className="project-side-bar">
            <div className="project-title">{props.projectInfo.projectTitle}</div>
        </div>
    </div>);



    function closeView() {
        props.changeView(-1);
    }
}

export default ProjectView;