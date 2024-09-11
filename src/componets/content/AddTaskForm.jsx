import React from 'react';

import { Button, Form, Input } from 'antd';

const AddTaskForm = ({ handleAddTask }) => {
    return (
        <Form
            name='task'
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={handleAddTask}
            autoComplete='off'
        >
            <Form.Item
                label='title'
                name='title'
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type='primary' htmlType='submit'>
                    Add task
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddTaskForm;
