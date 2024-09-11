import React from 'react';
import TaskItem from './TaskItem';

const TasksList = ({ tasksList }) => {
    // TODO: Remove console.log
    console.log('tasksList', tasksList);

    return (
        <div>
            {tasksList.map((task) => (
                <TaskItem key={task?.id} task={task} />
            ))}
        </div>
    );
};

export default TasksList;
