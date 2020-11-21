import React from 'react';
import "./WorkSpaceSelector.css"

const WorkSpaceSelector = (props) => {
    return (<div className="work-space-selector" onClick={changeWorkSpaceView}>
        <i class="fas fa-folder"></i> {props.title}
    </div>);


    function changeWorkSpaceView() {
        props.changeView(props.workSpaceID);
    }
}

export default WorkSpaceSelector;