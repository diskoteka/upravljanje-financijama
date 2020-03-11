import React from 'react';
import { Form, Input, Icon, Button } from 'antd';

import QuestionForm from './QuestionForm';


class AssignmentCreate extends React.Component {
    state = {
        formCount: 1
    };

    remove = () => {
        const { formCount } = this.state;
        this.setState({
            formCount: formCount - 1
        });
    };

    add = () => {
        const { formCount } = this.state;
        this.setState({
            formCount: formCount + 1
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { keys, names } = values;
                console.log('Received values of form: ', values);
                console.log('Merged values:', keys.map(key => names[key]));
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const questions = [];

        for (let i = 0; i < this.state.formCount; i += 1) {
            questions.push(
                <QuestionForm id={i} key={i} {...this.props} />
            );
        }

        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Create an assignment</h1>
                <Form.Item label={"Title: "}>
                    {getFieldDecorator('title', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                message: "Please input a title.",
                            },
                        ],
                    })(<Input placeholder="Add a title" />)}
                </Form.Item>
                {questions}
                <Form.Item>
                    <Button type="secondary" onClick={this.add}>
                        <Icon type="plus" /> Add question
          </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Spremi
          </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedAssignmentCreate = Form.create({ name: 'dynamic_form_item' })(AssignmentCreate);

export default WrappedAssignmentCreate;