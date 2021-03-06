import React, { useState } from 'react';
import "./ProjectManager.css"
import ProjectCard from "../ProjectCard/ProjectCard"
import ProjectView from "../ProjectView/ProjectView"
const ProjectManager = () => {


    const [viewState, setViewState] = useState(-1)

    /*localStorage.setItem('projectv2', JSON.stringify([
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
                    workSpaceID: 0,
                    workSpaceTasks: {

                        openTasks: [
                            {
                                taskText: "Eat some good food",
                                priority: "critical",
                                status: "open",
                                author: "Justin Kessler",
                                taskDate: "11/2/20",
                                taskDescription: "Something really different is happeneing with trying something new I can feel myself changing everyday. I think I like this. I'm going to carry on.",
                                comments: [
                                    {
                                        commentText: "Just a real quick addition to what Trevor said about the project",
                                        commentAuthor: "Justin Kessler",
                                        commentDate: '11-23-20'
                                    }
                                ]
                            },
                            {
                                taskText: "Try Something New",
                                priority: "serious",
                                status: "open",
                                author: "Justin Kessler",
                                taskDate: "11/2/20",
                                taskDescription: "Really make sure that you're pushing yourself everyday so you can see that improvement every day."
                            },
                            {
                                taskText: "Eat some good food",
                                priority: "moderate",
                                status: "open",
                                author: "Justin Kessler",
                                taskDate: "11/2/20",
                                taskDescription: "Something really different is happeneing with trying something new I can feel myself changing everyday. I think I like this. I'm going to carry on."
                            },
                            {
                                taskText: "Finish Project",
                                priority: "moderate",
                                status: "open",
                                author: "Justin Kessler",
                                taskDate: "11/2/20",
                                taskDescription: "Something really different is happeneing with trying something new I can feel myself changing everyday. I think I like this. I'm going to carry on."
                            }

                        ],
                        inProgressTasks: [
                            {
                                taskText: "Finish Project",
                                priority: "moderate",
                                status: "open",
                                author: "Justin Kessler",
                                taskDate: "11/2/20",
                                taskDescription: "Something really different is happeneing with trying something new I can feel myself changing everyday. I think I like this. I'm going to carry on."
                            }
                        ],
                        completedTasks: [
                            {
                                taskText: "Become an Engineer",
                                priority: "finished",
                                status: "Closed",
                                author: "Justin Kessler",
                                taskDate: "11/2/20"
                            }
                        ],
                        stuckTasks: [
                            {
                                taskText: "Million dollar deals getting DONE",
                                priority: "serious",
                                status: "stuck",
                                author: "Justin Kessler",
                                taskDate: "11/2/20"
                            }
                        ]




                    }
                }, {
                    workSpaceTitle: "Design",
                    workSpaceID: 1,
                    workSpaceTasks: {

                        openTasks: [
                            {
                                taskText: "Eat some good food",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler",
                                taskDate: "11/2/20",
                                taskDescription: "Something really different is happeneing with trying something new I can feel myself changing everyday. I think I like this. I'm going to carry on."
                            },
                            {
                                taskText: "Try Something New",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler",
                                taskDate: "11/2/20",
                                taskDescription: "Really make sure that you're pushing yourself everyday so you can see that improvement every day."
                            }

                        ],
                        inProgressTasks: [
                            {
                                taskText: "Work REAL GOOD",
                                priority: "urgent",
                                status: "In Progress",
                                author: "Justin Kessler",
                                taskDate: "11/2/20"
                            }
                        ],
                        completedTasks: [
                            {
                                taskText: "Become an Engineer",
                                priority: "finished",
                                status: "Closed",
                                author: "Justin Kessler",
                                taskDate: "11/2/20"
                            }
                        ],
                        stuckTasks: [
                            {
                                taskText: "Million dollar deals getting DONE",
                                priority: "important",
                                status: "stuck",
                                author: "Justin Kessler",
                                taskDate: "11/2/20"
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
                                author: "Justin Kessler",
                                taskDescription: "You really have to start eating more food if you plan on having enough to eat so you can gain enough muscle to impress these niggas."
                            },
                            {
                                taskText: "Try Something New",
                                priority: "urgent",
                                status: "open",
                                author: "Justin Kessler",
                                taskDescription: "Something really different is happeneing with trying something new I can feel myself changing everyday. I think I like this. I'm going to carry on."
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
    ]))*/


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