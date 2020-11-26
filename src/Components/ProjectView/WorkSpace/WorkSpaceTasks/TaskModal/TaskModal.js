import React, { useState } from 'react';
import "./TaskModal.css";
import { useSpring, animated } from 'react-spring';
const TaskModal = (props) => {



    const [statusChangeState, setStatusChangeState] = useState(0);

    let height = 1200;

    if (window.innerHeight < 900) {
        height = 600;

    }
    else {
        height = 1200;
    }


    let taskModalSpring = useSpring({
        from: { height: 0 },
        to: { height: height }
    })

    let modalStatus;
    let statusColor;
    let priority;
    let priorityText;
    let priorityStyle;

    if (props.taskData.status === 'Open') {
        modalStatus = 'OPEN';
        statusColor = 'task-modal-status-open';
    }
    if (props.taskData.status === 'In-Progress') {
        modalStatus = 'IN-PROGRESS';
        statusColor = 'task-modal-status-in-progress';
    }
    if (props.taskData.status === 'Stuck') {
        modalStatus = 'STUCK';
        statusColor = 'task-modal-status-stuck';
    }
    if (props.taskData.status === 'Complete') {
        modalStatus = 'COMPLETE'
        statusColor = 'task-modal-status-complete';
    }


    if (props.taskData.priority === 'critical') {
        priority = <i class="fas fa-angle-double-up"></i>;
        priorityText = 'Critical';
        priorityStyle = 'critical'
    }
    if (props.taskData.priority === 'serious') {
        priority = <i class="fas fa-angle-double-up"></i>;
        priorityText = 'Serious';
    }
    if (props.taskData.priority === 'moderate') {
        priority = <i class="fas fa-angle-down"></i>;
        priorityText = 'Moderate';
    }

    return (
        <div className="task-modal-wrapper">
            <animated.div style={taskModalSpring} className="task-modal-container">

                <div className="close-task-modal" onClick={props.taskModalHandler}>X</div>
                <div className="task-text-modal">{props.taskData.taskText}</div>
                <div className="task-description-modal">{props.taskData.taskDescription}</div>
                <div class="task-modal-image">
                    <div class="add-image-button">+ Add Image</div>
                </div>
                <div className="task-modal-comments-container">

                </div>
                <div className="task-modal-side-bar">
                    <div className="task-modal-side-bar-heading">Status</div>
                    <div className={statusColor} onClick={openChangeStatus}>{modalStatus}</div>
                    {renderChangeStatus()}

                    <div className="task-modal-side-bar-heading">Priority</div>
                    <div className={"task-modal-priority " + props.taskData.priority} >{priority} {priorityText}</div>


                    <div className="task-modal-side-bar-heading">Date Created</div>
                    <div className="task-modal-date-created">{props.taskData.taskDate}</div>

                    <div className="task-modal-side-bar-heading">Task Author</div>
                    <div className="task-modal-task-author">{props.taskData.author}</div>
                </div>



            </animated.div>
            <div className="modal-overlay" onClick={props.taskModalHandler}>  </div>
        </div>);



    function openChangeStatus() {

        if (statusChangeState === 0) {


            setStatusChangeState(1);
        }

        else {
            setStatusChangeState(0);
        }


    }

    function renderChangeStatus() {

        if (statusChangeState === 1) {
            return (<div className="change-status-container">
                <div className="change-status-selector open">OPEN</div>
                <div className="change-status-selector in-progress">IN-PROGRESS</div>
                <div className="change-status-selector stuck">STUCK</div>
                <div className="change-status-selector complete">COMPLETED</div>
            </div>)
        }

        else {
            return '';
        }

    }
}


//Allow for the space below the description for image to be displayed to provide more clarity on the problem

//Create area to suggest ideas for code or anything else
//Different looking text area to container potential code ideas

export default TaskModal;