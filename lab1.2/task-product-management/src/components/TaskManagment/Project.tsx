import React from 'react';
import { Project } from '../../models/Project';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TaskComponent from './Task';

interface ProjectProps {
    project: Project;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="task-container">
            <h2>{project.getName()}</h2>
            <p>Total Estimated Time: {project.getTimeEstimate()} hours</p>
            {project.execute().split('\n').map((task, index) => (
                <p key={index} className="task-item">{task}</p>
            ))}
        </div>
    );
};

export default ProjectComponent;