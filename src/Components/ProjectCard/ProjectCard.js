import React from 'react';
import "./ProjectCard.css"

const ProjectCard = (props) => {
    return (<div className="project-card-container" onClick={changeView}>{props.projectTitle}</div>);




    function changeView() {
        props.changeView(props.projectID)
    }
}

export default ProjectCard;