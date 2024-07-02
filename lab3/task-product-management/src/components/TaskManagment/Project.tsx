import React, { useState } from 'react';
import { Project } from '../../models/Project';

interface ProjectProps {
    project: Project;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    const [tasks, setTasks] = useState(project.execute().split('\n').map((task: any) => ({ task, completed: false })));

    const toggleTaskCompletion = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <div className="task-container">
            <h2>{project.getName()}</h2>
            <p>Total Estimated Time: {project.getTimeEstimate()} hours</p>
            {tasks.map((task, index) => (
                <p key={index} className={`task-item ${task.completed ? 'completed-task' : ''}`} onClick={() => toggleTaskCompletion(index)}>
                    {task.task}
                </p>
            ))}
        </div>
    );
};

export default ProjectComponent;