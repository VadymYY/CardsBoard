import React from 'react';

import { Card } from 'antd';

const TaskItem = ({ task }) => {
    return (
        <Card
            style={{
                width: 300,
                background: !task.id ? 'yellow' : 'white',
            }}
        >
            <p>{task.title}</p>
            <p>{task.desc}</p>
            <p>{task.status}</p>
        </Card>
    );
};

export default TaskItem;
