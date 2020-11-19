import React, { useState } from 'react';
import "./WorkSpaceTasks.css"
import TaskGroup from "./TasksGroup/TaskGroup";
import CreateTaskModal from "./CreateTaskModal/CreateTaskModal";
import TaskModal from "./TaskModal/TaskModal"
const WorkSpaceTasks = (props) => {

    const [taskData, setTaskData] = useState(props.tasks);

    const [testNumber, setTestNumber] = useState(0);

    const [taskModal, setTaskModal] = useState(0);
    const [taskModalData, setTaskModalData] = useState({});
    const [createModal, setCreateModal] = useState(0);


    return (<div className="work-space-tasks-container">

        <button className="create-task-button" onClick={createTask}>Create Task + </button>

        <TaskGroup type={"open"} tasks={taskData.openTasks} taskModalHandler={taskModalHandler} />

        <TaskGroup type={"in-progress"} tasks={taskData.inProgressTasks} taskModalHandler={taskModalHandler} />

        <TaskGroup type={"stuck"} tasks={taskData.stuckTasks} taskModalHandler={taskModalHandler} />

        <TaskGroup type={"complete"} tasks={taskData.completedTasks} taskModalHandler={taskModalHandler} />

        {renderCreateModal()}
        {renderTaskModal()}




    </div>);



    function createTask() {
        setCreateModal(1)
    }

    function closeModal() {
        setCreateModal(0)
    }

    function renderCreateModal() {
        if (createModal === 1) {
            return (<CreateTaskModal closeModal={closeModal} updateData={updateData} />)
        }
        else {
            return;
        }
    }

    function renderTaskModal() {
        if (taskModal === 1) {
            return (<TaskModal taskData={taskModalData} keepOpen={keepOpen} taskModalHandler={taskModalHandler} />)
        }
    }

    function taskModalHandler(data) {

        if (taskModal === 0) {
            setTaskModalData(data);
            setTaskModal(1);
        }
        else if (taskModal === 1) {
            setTaskModal(0);
        }
    }

    function keepOpen() {
        setTaskModal(1);
    }

    function updateData(newData) {
        let newTaskData = taskData;
        let theStorage = JSON.parse(localStorage.getItem('projectv2'));

        let oldTasks = theStorage[props.projectID].workSpaces[props.workSpaceID].workSpaceTasks.openTasks;

        newTaskData.openTasks.push(newData);
        oldTasks.push(newData);
        let newTasks = oldTasks;

        theStorage[props.projectID].workSpaces[props.workSpaceID].workSpaceTasks.openTasks = newTasks;

        localStorage.setItem('projectv2', JSON.stringify(theStorage))
        setTaskData(newTaskData);
        setTestNumber(testNumber + 1);
    }

}

export default WorkSpaceTasks;