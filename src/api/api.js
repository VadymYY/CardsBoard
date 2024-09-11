function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Fetch tasks from localStorage
function fetchTasks() {
    return new Promise((resolve, reject) => {
        try {
            window.setTimeout(() => {
                resolve(JSON.parse(localStorage.getItem('tasks')) || []);
            }, (1 + 2 * Math.random()) * 1000); // Simulate network latency
        } catch (error) {
            reject(error);
        }
    });
}

// Post a task to localStorage
function postTask(task) {
    return fetchTasks().then((tasks) => {
        // eslint-disable-next-line no-param-reassign
        task.id = uid(); // Generate a unique ID for the task
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return tasks;
    });
}

// Put a task to localStorage
function putTask(taskId, updatedTask) {
    return fetchTasks().then((tasks) => {
        // eslint-disable-next-line no-param-reassign
        tasks[taskId] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return tasks;
    });
}

// Delete a task from localStorage
function deleteTask(taskId) {
    return fetchTasks().then((tasks) => {
        tasks.splice(taskId, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return tasks;
    });
}

fetchTasks().then((tasks) => {
    if (!tasks.length) {
        return postTask({ title: 'First task' });
    }
    return tasks;
});

export const fetch = fetchTasks;
export const post = postTask;
export const put = putTask;
export const remove = deleteTask;
