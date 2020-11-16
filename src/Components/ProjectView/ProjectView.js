import React, { useState } from 'react';
import "./ProjectView.css"
import WorkSpace from "./WorkSpace/WorkSpace"
import WorkSpaceSelector from "./WorkSpaceSelector/WorkSpaceSelector"
import InboxView from "./InboxView/InboxView"
import TodayView from "./TodayView/TodayView"
const ProjectView = (props) => {

    const [projectState, setProjectState] = useState(-1);
    const [workSpaceView, setWorkSpaceView] = useState(-1);




    return (<div className="project-view-container">
        <div className="close-view" onClick={closeView}>X</div>
        <div className="project-side-bar">
            <div className="project-selector-container">
                <div className="project-selector">
                    <div className="project-logo">O</div>
                    <div className="project-title">{props.projectInfo.projectTitle}</div>
                </div>
            </div>


            <div className="side-bar-options">
                <div className="project-overview">
                    <div className="project-item" onClick={() => { setProjectState(0) }}><i class="fas fa-inbox" ></i>Inbox</div>
                    <div className="project-item" onClick={() => { setProjectState(1) }}><i class="fas fa-check-square" ></i>Today</div>
                    <div className="project-item" onClick={() => { setProjectState(2) }}><i class="fas fa-chart-line"></i>Activity</div>
                    <div className="project-item" onClick={() => { setProjectState(3) }}><i class="fas fa-users"></i>Members</div>
                </div>
                <div className="project-work-spaces-list">
                    <div className="work-spaces-heading">Work Spaces</div>
                    <button className="add-work-space-button">+</button>
                    {props.projectInfo.workSpaces.map((workspace) => <WorkSpaceSelector title={workspace.workSpaceTitle} workSpaceID={workspace.workSpaceID} changeView={handleWorkSpaceView} />)}
                </div>
            </div>

        </div>

        <div className="project-main-view">
            {handleProjectView()}

        </div>
    </div>);



    function closeView() {
        props.changeView(-1);
    }

    function handleProjectView() {
        if (projectState === 0) {
            return (<InboxView />)
        }
        else if (projectState === 1) {
            return (<TodayView />)
        }



        else if (projectState === "workspace") {
            return (<WorkSpace workSpaceID={workSpaceView} projectID={props.projectID} workSpaceInfo={props.projectInfo.workSpaces[workSpaceView]} />)
        }
    }

    function handleWorkSpaceView(number) {
        setProjectState("workspace");
        setWorkSpaceView(number);
    }


    function doChange() {

        alert("Project State: " + projectState);
    }
}

export default ProjectView;