import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import 'antd/dist/reset.css';

const { Paragraph, Text } = Typography;
const { Content } = Layout;

const treatmentContents = {
    'SIGNATURE PACKAGES': {
        title: 'Signature Packages',
        description:
            'Enjoy a blend of our most popular treatments in one perfect package. Ideal for total rejuvenation and relaxation.',
        price: '2,500,000',
        duration: "90'"
    },
    'FOUR–HANDS MASSAGE BY LA SPA': {
        title: 'Four-hands Massage by La Spa',
        description:
            'A luxurious relaxing treat for your body. Two therapists, four hands, 10 fingers work in choreographed synchronized movements applying sensations of touch to the skin leading to complete and total relaxation. The body falls into a state of optimal rest releasing aches and muscle tension, improving blood circulation, reducing stress and anxiety, and leading to the overall improvement in one\'s mood. It is a powerful treatment particularly suitable if you find it hard to let go during spa treatments. The La Spa team have perfected the technique making our four-hands massage particularly special.',
        price: '1,845,000',
        duration: "60'"
    },
    'RELAXING MOMENT': {
        title: 'Relaxing Moment',
        description:
            'Melt away tension and feel your body surrender to peace in this calming massage therapy session.',
        price: '1,200,000',
        duration: "60'"
    },
    FACIAL: {
        title: 'Facial',
        description:
            'Refresh your skin with a nourishing facial tailored to your skin type and needs.',
        price: '950,000',
        duration: "45'"
    },
    'BODY MASSAGE': {
        title: 'Body Massage',
        description:
            'Our full-body massage soothes sore muscles, improves circulation, and enhances relaxation.',
        price: '1,000,000',
        duration: "60'"
    },
    'FOOT TREATMENTS': {
        title: 'Foot Treatments',
        description:
            'Relieve tension in your feet and lower legs with our signature foot therapy.',
        price: '600,000',
        duration: "45'"
    },
    'BODY SKIN CARE': {
        title: 'Body Skin Care',
        description:
            'Rejuvenate your skin with our luxurious body scrubs and hydrating wraps.',
        price: '1,400,000',
        duration: "75'"
    },
    'EXTRA PAMPERING': {
        title: 'Extra Pampering',
        description:
            'Add extra indulgence to your spa visit with a range of premium upgrades.',
        price: '700,000',
        duration: "30'"
    },
    'THE WORLD IN LA SIESTA - PACKAGE': {
        title: 'The World in La Siesta - Package',
        description:
            'Experience a global journey of relaxation with our internationally inspired treatments.',
        price: '3,200,000',
        duration: "120'"
    }
};

export default function ServicesInform() {
    const [selectedTreatment, setSelectedTreatment] = useState('FOUR–HANDS MASSAGE BY LA SPA');

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '100px auto 40px',
                padding: '24px',
                boxSizing: 'border-box'
            }}
        >
            <Layout style={{ minHeight: '70vh', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
                <Layout style={{ border: '0.5px solid #b8860b' }} >
                    {/* Header bảng giả */}
                    <Row
                        style={{
                            backgroundColor: '#b8860b',
                            color: '#fff',
                            fontWeight: 'bold',
                            padding: '12px 16px',
                            textAlign: 'center',
                        }}
                    >
                        <Col span={6} style={{ textAlign: 'left' }}>TREATMENT</Col>
                        <Col span={12} style={{ textAlign: 'left' }}>{treatmentContents[selectedTreatment].title.toUpperCase()}</Col>
                        <Col span={6} style={{ textAlign: 'right' }}>PRICE (VND)</Col>
                    </Row>

                    {/* Mô tả và Giá dịch vụ cùng một hàng */}
                    <Content style={{ padding: '24px' }}>

                        <Row gutter={24}  >

                            {/* Danh sách dịch vụ theo chiều dọc */}
                            <Col span={6} style={{ borderRight: '1px solid #ddd' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 500 }}>
                                    {Object.keys(treatmentContents).map(item => (
                                        <Text
                                            key={item}
                                            onClick={() => setSelectedTreatment(item)}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '10px',
                                                borderBottom: '1px solid #ddd',
                                                transition: 'background-color 0.3s ease',
                                                color: selectedTreatment === item ? '#b8860b' : '#000',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            {item}
                                        </Text>
                                    ))}
                                </div>
                            </Col>


                            {/* Mô tả dịch vụ */}
                            <Col span={14}>
                                <Paragraph style={{ fontSize: 16 }}>
                                    {treatmentContents[selectedTreatment].description}
                                </Paragraph>
                            </Col>

                            {/* Giá dịch vụ */}
                            <Col span={4} style={{ textAlign: 'right' }}>
                                <Text strong>
                                    {treatmentContents[selectedTreatment].price}
                                </Text>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
