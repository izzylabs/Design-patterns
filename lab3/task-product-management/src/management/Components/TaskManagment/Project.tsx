import React from 'react';
import { Project } from '../../../models/Project';

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

export default ProjectComponent; // Ensure the correct export