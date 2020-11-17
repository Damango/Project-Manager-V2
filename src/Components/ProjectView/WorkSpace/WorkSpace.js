import React from 'react';
import "./WorkSpace.css"
import WorkSpaceTasks from "./WorkSpaceTasks/WorkSpaceTasks"

const WorkSpace = (props) => {
    return (<div className="work-space-container">

        <div className="work-space-title">{props.workSpaceInfo.workSpaceTitle}</div>
        <div className="work-space-view-selector-container">
            <div className="view-selector">Tasks</div>
            <div className="view-selector">Issues</div>
            <div className="view-selector">Meetings</div>
            <div className="view-selector">Timesheet</div>

        </div>
        <div className="work-space-main-view">
            <WorkSpaceTasks projectID={props.projectID} workSpaceID={props.workSpaceID} tasks={props.workSpaceInfo.workSpaceTasks} />

        </div>


    </div>);
}

export default WorkSpace;