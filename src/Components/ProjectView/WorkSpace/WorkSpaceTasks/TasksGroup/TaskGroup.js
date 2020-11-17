import React, { useState } from 'react';
import "./TaskGroup.css";
import Task from "./Task/Task"
const TaskGroup = (props) => {


    const [groupState, setGroupState] = useState("tasks-closed task-group-container");

    let taskHeadStyle;
    let taskHeadText;

    if (props.type === 'open') {
        taskHeadStyle = "open-title";
        taskHeadText = "OPEN";
    }

    else if (props.type === 'in-progress') {
        taskHeadStyle = "in-progress-title";
        taskHeadText = "IN PROGRESS";
    }

    else if (props.type === 'stuck') {
        taskHeadStyle = "stuck-title";
        taskHeadText = "STUCK";
    }

    else if (props.type === 'complete') {
        taskHeadStyle = "complete-title";
        taskHeadText = "COMPLETE";
    }



    return (<div className={groupState}>

        <button className="open-group-button" onClick={openTaskGroup}>+</button>
        <div className={taskHeadStyle}>{taskHeadText}</div>
        {props.tasks.map((tasks) => <Task taskInfo={tasks} taskModalHandler={props.taskModalHandler} />)}

    </div>);


    function openTaskGroup() {
        if (groupState === "tasks-closed task-group-container") {
            setGroupState("tasks-open task-group-container");
        }

        else {
            setGroupState("tasks-closed task-group-container");
        }

    }
}

export default TaskGroup;