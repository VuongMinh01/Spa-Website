import React from "react";
import { Row, Col, Button, Card } from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "../../../css/HomeAboutUs.css";

export default function HomeAboutUs() {
    return (
        <div className="home-about-us">
            <Row justify="center" align="middle" gutter={[32, 32]}>
                {/* Cột giới thiệu */}
                <Col xs={24} md={12}>
                    <h2 className="title">Về Chúng Tôi</h2>
                    <p className="description">
                        Chúng tôi cung cấp các dịch vụ spa cao cấp giúp bạn thư giãn và chăm sóc sức khỏe toàn diện.
                        Đội ngũ chuyên gia tận tâm luôn mang đến trải nghiệm tốt nhất cho bạn.
                    </p>
                    <Button type="primary">
                        <Link to="/about">Xem thêm</Link>
                    </Button>
                </Col>


                {/* Cột Video */}
                <Col xs={24} md={12}>
                    <Container fluid>
                        <Card style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=BT5wowluQoU"
                                width="100%"
                                height="400px"
                                playing={false}
                                controls={true}
                            />
                        </Card>
                    </Container>

                </Col>
            </Row>
        </div>
    );
}
