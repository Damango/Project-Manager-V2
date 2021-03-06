import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./CreateTaskModal.css"
const CreateTaskModal = (props) => {



    const taskModalSpring = useSpring({
        from: { height: 0 },
        to: {
            height: 550
        }
    })


    return (<animated.div style={taskModalSpring} className="create-task-modal-container">
        <div className="close-modal" onClick={props.closeModal}>X</div>
        <div className="task-create-header">Create Task</div>
        <div className="task-heading-entry">
            <div className="head-entry-heading">Task Heading</div>
            <input type="text" className="task-heading-value" />
        </div>
        <div className="task-description-entry">
            <div className="head-entry-description">Task Description</div>
            <textarea className="task-description-input" />
        </div>
        <div className="task-urgency-entry">
            <div className="head-entry-urgency">Task Urgency</div>
            <select className="urgency-selection">
                <option value="critical">Critical</option>
                <option value="serious">Serious</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
            </select>


        </div>
        <button className="submit-button" onClick={updateData}>Submit</button>
    </animated.div>);


    function updateData() {
        let heading = document.querySelector(".task-heading-value").value;
        let author = 'Justin Kessler';
        let urgency = document.querySelector('.urgency-selection').value;
        let description = document.querySelector('.task-description-input').value;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        yyyy = String(yyyy);
        yyyy = yyyy[2] + yyyy[3];

        today = mm + '/' + dd + '/' + yyyy;




        let newData = {
            author: author,
            taskText: heading,
            status: 'open',
            priority: urgency,
            taskDescription: description,
            taskDate: today
        }

        props.updateData(newData);


    }
}

export default CreateTaskModal;