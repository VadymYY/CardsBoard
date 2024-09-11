import React from 'react';

import { Button } from 'antd';

const AddTaskButton = ({ handleClick }) => {
    return (
        <Button type='primary' onClick={handleClick}>
            Add task card!
        </Button>
    );
};

export default AddTaskButton;
