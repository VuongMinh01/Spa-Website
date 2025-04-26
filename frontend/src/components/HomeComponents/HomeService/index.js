import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // <- thêm useNavigate nếu dùng React Router v6
import serviceSpa1 from '../../../assets/serviceSpa1.png';
import serviceSpa2 from '../../../assets/serviceSpa2.png';
import serviceSpa3 from '../../../assets/serviceSpa3.png';
import serviceSpa4 from '../../../assets/serviceSpa4.png';

const HomeService = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // <- hook để chuyển trang

    const services = [
        {
            image: serviceSpa1,
            name: 'Dịch vụ 1',
            description: 'Giới thiệu về dịch vụ 1.',
        },
        {
            image: serviceSpa2,
            name: 'Dịch vụ 2',
            description: 'Giới thiệu về dịch vụ 2.',
        },
        {
            image: serviceSpa3,
            name: 'Dịch vụ 3',
            description: 'Giới thiệu về dịch vụ 3.',
        },
        {
            image: serviceSpa4,
            name: 'Dịch vụ 4',
            description: 'Giới thiệu về dịch vụ 4.',
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    const handleViewAll = () => {
        navigate('/services'); // Chuyển trang
    };

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center',
        }}>
            <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
                <Col span={24}>
                    {/* Khung viền và shadow */}
                    <div style={{
                        padding: '40px',
                        border: '3px solid #8B4513',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(139, 69, 19, 0.7)',
                        backgroundColor: '#fff',
                    }}>
                        <Row gutter={[32, 32]} align="middle">
                            {/* Ảnh */}
                            <Col xs={24} md={18}>
                                <div style={{
                                    width: '100%',
                                    height: '500px',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                }}>
                                    <img
                                        src={services[currentIndex].image}
                                        alt="Service"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            </Col>

                            {/* Mô tả */}
                            <Col xs={24} md={6}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                }}>
                                    <h2 style={{
                                        color: '#a0522d',
                                        fontSize: '24px',
                                        marginBottom: '20px',
                                    }}>
                                        {services[currentIndex].name}
                                    </h2>
                                    <p style={{ fontSize: '16px', color: '#555' }}>
                                        {services[currentIndex].description}
                                    </p>

                                    {/* Điều hướng dịch vụ */}
                                    <div style={{
                                        marginTop: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Button
                                            icon={<LeftOutlined />}
                                            onClick={handlePrev}
                                            style={{ marginRight: '15px', fontSize: '22px' }}
                                        />
                                        <span style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 10px' }}>
                                            {`${currentIndex + 1} / ${services.length}`}
                                        </span>
                                        <Button
                                            icon={<RightOutlined />}
                                            onClick={handleNext}
                                            style={{ fontSize: '22px' }}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Nút View All */}
                    <Button
                        onClick={handleViewAll}
                        style={{
                            marginTop: '30px',
                            backgroundColor: '#8B4513',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 30px',
                            fontSize: '18px',
                            borderRadius: '8px',
                            boxShadow: '0 5px 15px rgba(139, 69, 19, 0.5)',
                        }}
                    >
                        Xem tất cả dịch vụ
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default HomeService;
