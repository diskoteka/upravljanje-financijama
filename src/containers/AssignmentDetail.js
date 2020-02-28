import React from 'react';
import { Card } from 'antd';


class AssignmentDetail extends React.Component {
    render() {
        return (
            <Card title="Card title">
                <Card type="inner" title="Inner Card title">
                    Inner Card content
                </Card>
            </Card>
        );
    }
}

export default AssignmentDetail;