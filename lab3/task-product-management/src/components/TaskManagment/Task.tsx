import React from 'react';
import { Task } from '../../models/Task';

interface TaskProps {
    task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
    return (
        <div className="task-item">
            <h3>{task.getName()}</h3>
            <p>Estimated Time: {task.getTimeEstimate()} hours</p>
            <p>{task.execute()}</p>
        </div>
    );
};

export default TaskComponent;