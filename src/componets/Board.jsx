import React, { useEffect, useState } from 'react';

import { fetch, post } from '../api/api';

import AddTaskButton from './content/AddTaskButton';
import AddTaskForm from './content/AddTaskForm';
import TasksList from './content/TasksList';

import './Board.scss';

const Board = () => {
    const [tasksList, setTasksList] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm((prev) => !prev);
    };

    const addOptimisticTaskItem = (newTask) => {
        setTasksList((prev) => [...prev, newTask]);
    };

    const resetTasksList = (newTasks) => {
        setTasksList(newTasks);
    };

    // TODO: add hooks
    const handleAddTask = (taskObj) => {
        addOptimisticTaskItem({ ...taskObj });

        post(taskObj)
            .then((data) => {
                resetTasksList(data);
            })
            .catch(() => {})
            .finally(() => {});
    };

    useEffect(() => {
        fetch()
            .then((data) => {
                setTasksList(data);
            })
            .catch(console.error)
            .finally(() => {});
    }, []);

    return (
        <>
            <div className='board-wrapper'>
                <TasksList tasksList={tasksList} />
            </div>
            <AddTaskButton handleClick={handleShowForm} />
            {showForm && <AddTaskForm handleAddTask={handleAddTask} />}
        </>
    );
};

export default Board;
