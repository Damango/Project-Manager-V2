import React from 'react';
import "./CreateTaskModal.css"
const CreateTaskModal = (props) => {
    return (<div className="create-task-modal-container">
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
                <option value="important">Critical</option>
                <option value="serious">Serious</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
            </select>


        </div>
        <button className="submit-button" onClick={updateData}>Submit</button>
    </div>);


    function updateData() {
        let heading = document.querySelector(".task-heading-value").value;
        let author = 'Justin Kessler';
        let urgency = 'important';
        let description = document.querySelector('.task-description-input').value;



        let newData = {
            author: author,
            taskText: heading,
            status: 'open',
            priority: urgency,
            taskDescription: description
        }

        props.updateData(newData);


    }
}

export default CreateTaskModal;