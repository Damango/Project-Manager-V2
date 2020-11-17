import React from 'react';
import "./Task.css";

const Task = (props) => {

    let statusStyle;
    let statusText;

    let theUrgency;

    if (props.taskInfo.status === 'open') {
        statusStyle = 'open-task task-status';
        statusText = 'OPEN';
    }

    if (props.taskInfo.status === 'In Progress') {
        statusStyle = 'in-progress-task task-status';
        statusText = 'IN PROGRESS';
    }

    if (props.taskInfo.status === 'stuck') {
        statusStyle = 'stuck-task task-status';
        statusText = 'STUCK';
    }

    if (props.taskInfo.status === 'Closed') {
        statusStyle = 'complete-task task-status';
        statusText = 'COMPLETE';
    }


    if (props.taskInfo.priority === 'urgent') {
        theUrgency = <i class="fas fa-chevron-up"></i>;
    }

    if (props.taskInfo.priority === 'important') {
        theUrgency = <i class="fas fa-angle-double-up"></i>;
    }






    return (<div className="task-container" onClick={taskModalHandler}>
        <div className="task-selector"></div>
        <div className="task-text"> {props.taskInfo.taskText}</div>
        <div className="task-urgency">{theUrgency}</div>
        <div className={statusStyle}>{statusText}</div>
        <div className="task-date">{props.taskInfo.taskDate}</div>

    </div>);


    function taskModalHandler() {
        props.taskModalHandler(props.taskInfo)
    }
}

export default Task;