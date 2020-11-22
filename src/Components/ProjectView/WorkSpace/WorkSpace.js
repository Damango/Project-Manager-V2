import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import "./WorkSpace.css"
import WorkSpaceTasks from "./WorkSpaceTasks/WorkSpaceTasks"
import WorkSpaceIssues from "./WorkSpaceIssues/WorkSpaceIssues"

const WorkSpace = (props) => {

    const [workSpaceView, setWorkSpaceView] = useState(0);
    const testSpring = useSpring({
        from: {
            opacity: 0,
            "margin-left": -100
        },
        to: {
            opacity: 1,
            "margin-left": 0
        }
    })

    const viewSelectorAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    })




    return (<animated.div style={viewSelectorAnimation} className="work-space-container">

        <animated.div style={testSpring} className="work-space-title">{props.workSpaceInfo.workSpaceTitle}</animated.div>
        <div className="work-space-view-selector-container">
            <animated.div style={testSpring} className="view-selector" onClick={() => { setWorkSpaceView(0) }}>Tasks</animated.div>
            <div className="view-selector" onClick={() => setWorkSpaceView(1)}>Issues</div>
            <div className="view-selector" onClick={() => setWorkSpaceView(2)}>Meetings</div>
            <div className="view-selector" onClick={() => setWorkSpaceView(3)}>Timesheet</div>

        </div>
        <div className="work-space-main-view">

            {renderWorkSpaceView()}
        </div>


    </animated.div>);



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