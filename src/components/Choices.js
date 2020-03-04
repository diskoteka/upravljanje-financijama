import React from 'react';
import { Radio } from 'antd';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};


class Choices extends React.Component {
    render() {
        const { questionId } = this.props;
        const { userAnswers } = this.props;
        return (
            <Radio.Group onChange={(e, qId) => this.props.change(e, questionId)}
                value={
                    userAnswers[questionId] !== undefined &&
                        userAnswers[questionId] !== null
                        ? userAnswers[questionId]
                        : null
                }
            >
                {this.props.choices.map((c, index) => {
                    return (
                        <Radio style={radioStyle} value={c} key={index}>
                            {c}
                        </Radio>
                    );
                })}
            </Radio.Group>
        );
    }
}

export default Choices;