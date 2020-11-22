import React from 'react';
import "./TaskModal.css";
import { useSpring, animated } from 'react-spring';
const TaskModal = (props) => {

    const taskModalSpring = useSpring({
        from: { height: 0 },
        to: { height: 750 }
    })


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
                    <div className="task-modal-status">{props.taskData.status}</div>

                    <div className="task-modal-side-bar-heading">Priority</div>
                    <div className="task-modal-priority">{props.taskData.priority}</div>

                </div>



            </animated.div>
            <div className="modal-overlay" onClick={props.taskModalHandler}>  </div>
        </div>);
}


//Allow for the space below the description for image to be displayed to provide more clarity on the problem

//Create area to suggest ideas for code or anything else
//Different looking text area to container potential code ideas

export default TaskModal;