import React from 'react';
import { Layout, Row, Col, Space, Button } from 'antd';
import { FacebookFilled, YoutubeFilled, HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../../css/Footer.css";
import { Container } from 'react-bootstrap';

const { Footer } = Layout;

export default function FooterTest() {
    return (

        <Footer style={{ background: '#f8f9fa', padding: '20px 0', textAlign: 'center', width: '100vw' }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                {/* Mạng xã hội */}
                <Row justify="space-between" align="middle" style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                    <Col xs={24} sm={12} style={{ textAlign: 'left' }}>
                        <span>Kết nối với chúng tôi:</span>
                    </Col>
                    <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
                        <Space>
                            <Button type="link" href="https://www.facebook.com/MinMinMedia01" target="_blank" icon={<FacebookFilled style={{ fontSize: '20px', color: '#1877f2' }} />} />
                            <Button type="link" href="https://www.youtube.com/@thien_minweddingfilm6102" target="_blank" icon={<YoutubeFilled style={{ fontSize: '20px', color: '#ff0000' }} />} />
                        </Space>
                    </Col>
                </Row>

                {/* Nội dung Footer */}
                <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                    <Col xs={24} sm={12} md={8}>
                        <h4>Min Media</h4>
                        <p>Chuyên quay - chụp sự kiện, đám cưới, tiệc sinh nhật, khai trương, team building.</p>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <h4>Đường dẫn</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><Link to='/'>Trang chủ</Link></li>
                            <li><Link to='/service'>Dịch vụ</Link></li>
                            <li><Link to='/videos'>Videos</Link></li>
                            <li><Link to='/albums'>Albums</Link></li>
                            <li><Link to='/contact'>Liên hệ</Link></li>
                        </ul>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <h4>Liên hệ</h4>
                        <p><HomeOutlined /> Hóc Môn, Tp.HCM</p>
                        <p><MailOutlined /> thienminmedia@ldg.edu.vn</p>
                        <p><PhoneOutlined /> 0703427959</p>
                    </Col>
                </Row>

                {/* Bản quyền */}
                <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                    © 2024 Min Media. All rights reserved.
                </div>
            </div>
        </Footer>
    );
}
