import React from 'react';
import "./TaskModal.css";
import { useSpring, animated } from 'react-spring';
const TaskModal = (props) => {

    const taskModalSpring = useSpring({
        from: { height: 0 },
        to: { height: 750 }
    })


    let modalStatus;
    let priority;
    let priorityText;
    let priorityStyle;

    if (props.taskData.status === 'open') {
        modalStatus = 'OPEN';
    }
    if (props.taskData.status === 'in-progress') {
        modalStatus = 'IN-PROGRESS';
    }
    if (props.taskData.status === 'stuck') {
        modalStatus = 'STUCK';
    }
    if (props.taskData.status === 'complete') {
        modalStatus = 'COMPLETE'
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
                    <div className="task-modal-status">{modalStatus}</div>

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
}


//Allow for the space below the description for image to be displayed to provide more clarity on the problem

//Create area to suggest ideas for code or anything else
//Different looking text area to container potential code ideas

export default TaskModal;