import React from 'react';
import { Carousel, Card, Typography } from 'antd';

const { Title } = Typography;


class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <Carousel autoplay
                    style={{
                        background: "#1890FF",
                        textAlign: "center",
                        height: "251px",
                        lineHeight: "251px",
                        overflow: "hidden"
                    }}>
                    <div>
                        <Title level={4} style={{ color: '#fff' }}>Upravljanje Financijama : Pomorska škola Split</Title>
                    </div>
                    <div>
                        <Title level={4} style={{ color: '#fff' }}>Virtualna Burza brodskog prostora</Title>
                    </div>
                    <div>
                        <Title level={4} style={{ color: '#fff' }}>Upravljanje Financijama : Komercijalno-trgovačka škola Split</Title>
                    </div>
                </Carousel>
                <br></br>
                <Card style={{ width: "auto", textAlign: "center" }}>
                    {/* <img style={{ padding: "0 20px" }} src="https://i.imgur.com/3wjlMTw.png" /> */}
                    <img style={{ padding: "0 20px" }} alt="" src="https://i.imgur.com/yCDDDfA.png" />
                    <img style={{ padding: "0 20px" }} alt="" src="https://i.imgur.com/CEt8n7f.png" />
                    <img style={{ padding: "0 20px" }} alt="" src="https://i.imgur.com/GXNXhrE.png" />
                    <img style={{ padding: "0 20px" }} alt="" src="https://i.imgur.com/TAnUHVi.png" />
                </Card>
            </div>
        );
    }
}

export default Home;