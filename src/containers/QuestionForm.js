import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import Hoc from '../hoc/hoc';

let id = 0;


class QuestionForm extends React.Component {
    remove = k => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 1) {
            return;
        }

        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;

        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                label={index === 0 ? 'Choices' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`names[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message: "Please input passenger's name or delete this field.",
                        },
                    ],
                })(
                    <Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />
                )}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));
        return (
            <Hoc>
                <Form.Item label="Answer: ">
                    {getFieldDecorator(`answers[${this.props.id}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                message: "Please input an answer to this question.",
                            },
                        ],
                    })(
                        <Input placeholder="What is the answer?" />
                    )}
                </Form.Item>
                {formItems}
                < Form.Item >
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add an answer choice
                </Button>
                </Form.Item >
            </Hoc>
        );
    }
}

export default QuestionForm;