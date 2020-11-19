import React, { useState } from 'react';
import "./WorkSpace.css"
import WorkSpaceTasks from "./WorkSpaceTasks/WorkSpaceTasks"
import WorkSpaceIssues from "./WorkSpaceIssues/WorkSpaceIssues"

const WorkSpace = (props) => {

    const [workSpaceView, setWorkSpaceView] = useState(0);




    return (<div className="work-space-container">

        <div className="work-space-title">{props.workSpaceInfo.workSpaceTitle}</div>
        <div className="work-space-view-selector-container">
            <div className="view-selector" onClick={() => { setWorkSpaceView(0) }}>Tasks</div>
            <div className="view-selector" onClick={() => setWorkSpaceView(1)}>Issues</div>
            <div className="view-selector" onClick={() => setWorkSpaceView(2)}>Meetings</div>
            <div className="view-selector" onClick={() => setWorkSpaceView(3)}>Timesheet</div>

        </div>
        <div className="work-space-main-view">

            {renderWorkSpaceView()}
        </div>


    </div>);



    function renderWorkSpaceView() {
        if (workSpaceView === 0) {
            return (<WorkSpaceTasks projectID={props.projectID} workSpaceID={props.workSpaceID} tasks={props.workSpaceInfo.workSpaceTasks} workSpaceRender={props.workSpaceRender} />)
        }
        if (workSpaceView === 1) {
            return (<WorkSpaceIssues />)
        }
    }

    function setView() {
        setWorkSpaceView(1);

    }
}

export default WorkSpace;