import React, { useState } from 'react';
import "./ProjectManager.css"
import ProjectCard from "../ProjectCard/ProjectCard"
import ProjectView from "../ProjectView/ProjectView"
const ProjectManager = () => {


    const [viewState, setViewState] = useState(-1)

    localStorage.setItem('projectv2', JSON.stringify([
        {
            projectTitle: "Black Box",
            projectID: 0,
            inbox: [
                {
                    author: "Justin Kessler",
                    message: "This is just a first inbox thing.",
                    timeStamp: "3-15-20"
                },
                {
                    author: "Trevor Allison",
                    message: "Make sure the paper work for the LLC in finished.",
                    timeStamp: "3-17-20"
                }
            ],
            todayTasks: [
                "Mee moo mee",
                "Walk the dog",
                "Go Grocery Shopping"
            ],
            activity: "Activity Page",
            members: [
                {
                    name: "Justin Kessler",
                    role: "Developer",
                    clearance: "Level 5"
                },
                {
                    name: "Jimmy Kessler",
                    role: "Engineer",
                    clearance: "Level 5"
                },
                {
                    name: "Trevor Allison",
                    role: "Bussiness Advisor",
                    clearance: "Level 5"
                }
            ],
            workSpaces: [
                {
                    workSpaceTitle: "Development",
                    workSpaceTasks: {

                        openTasks: [
                            {
                                taskText: "Eat some good food",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            },
                            {
                                taskText: "Try Something New",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            }

                        ],
                        inProgressTasks: [
                            {
                                taskText: "Work REAL GOOD",
                                priority: "urgent",
                                status: "In Progress",
                                author: "Justin Kessler"
                            }
                        ],
                        closedTasks: [
                            {
                                taskText: "Become an Engineer",
                                priority: "finished",
                                status: "Closed",
                                author: "Justin Kessler"
                            }
                        ]




                    }
                }, {
                    workSpaceTitle: "Design",
                    workSpaceTasks: {

                        openTasks: [
                            {
                                taskText: "Eat some good food",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            },
                            {
                                taskText: "Try Something New",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            }

                        ],
                        inProgressTasks: [
                            {
                                taskText: "Work REAL GOOD",
                                priority: "urgent",
                                status: "In Progress",
                                author: "Justin Kessler"
                            }
                        ],
                        closedTasks: [
                            {
                                taskText: "Become an Engineer",
                                priority: "finished",
                                status: "Closed",
                                author: "Justin Kessler"
                            }
                        ]




                    }
                }
            ]
        },
        {
            projectTitle: "Second Box",
            projectID: 1,
            inbox: [
                {
                    author: "Justin Kessler",
                    message: "This is just a first inbox thing.",
                    timeStamp: "3-15-20"
                },
                {
                    author: "Trevor Allison",
                    message: "Make sure the paper work for the LLC in finished.",
                    timeStamp: "3-17-20"
                }
            ],
            todayTasks: [
                "Mee moo mee",
                "Walk the dog",
                "Go Grocery Shopping"
            ],
            activity: "Activity Page",
            members: [
                {
                    name: "Justin Kessler",
                    role: "Developer",
                    clearance: "Level 5"
                },
                {
                    name: "Jimmy Kessler",
                    role: "Engineer",
                    clearance: "Level 5"
                },
                {
                    name: "Trevor Allison",
                    role: "Bussiness Advisor",
                    clearance: "Level 5"
                }
            ],
            workSpaces: [
                {
                    workSpaceTitle: "Development",
                    workSpaceTasks: {

                        openTasks: [
                            {
                                taskText: "Eat some good food",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            },
                            {
                                taskText: "Try Something New",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            }

                        ],
                        inProgressTasks: [
                            {
                                taskText: "Work REAL GOOD",
                                priority: "urgent",
                                status: "In Progress",
                                author: "Justin Kessler"
                            }
                        ],
                        closedTasks: [
                            {
                                taskText: "Become an Engineer",
                                priority: "finished",
                                status: "Closed",
                                author: "Justin Kessler"
                            }
                        ]




                    }
                }, {
                    workSpaceTitle: "Design",
                    workSpaceTasks: {

                        openTasks: [
                            {
                                taskText: "Eat some good food",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            },
                            {
                                taskText: "Try Something New",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler"
                            }

                        ],
                        inProgressTasks: [
                            {
                                taskText: "Work REAL GOOD",
                                priority: "urgent",
                                status: "In Progress",
                                author: "Justin Kessler"
                            }
                        ],
                        closedTasks: [
                            {
                                taskText: "Become an Engineer",
                                priority: "finished",
                                status: "Closed",
                                author: "Justin Kessler"
                            }
                        ]




                    }
                }
            ]
        }
    ]))


    let data = JSON.parse(localStorage.getItem('projectv2'));





    if (viewState === -1) {
        return (<div className="project-manager-container">
            {data.map((card) => <ProjectCard projectTitle={card.projectTitle} projectID={card.projectID} changeView={changeViewState} />)}
        </div>);
    }

    else {
        return (<ProjectView projectID={viewState} projectInfo={data[viewState]} changeView={changeViewState} />)
    }




    function changeViewState(project) {
        setViewState(project)
    }

}

export default ProjectManager;