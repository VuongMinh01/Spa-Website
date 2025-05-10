import React from 'react';
import { Breadcrumb, Typography } from 'antd';

const { Title } = Typography;

export default function ServiceBanner() {
    return (
        <div
            style={{
                backgroundImage: 'url("/your-image-path.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '60px 20px',
                marginTop: '80px', // 👈 Thêm dòng này để tránh bị navbar đè lên
                position: 'relative',
                textAlign: 'center',
                color: '#fff',
            }}
        >

            {/* Overlay màu tối */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 1,
                }}
            />

            {/* Nội dung */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
                <Breadcrumb style={{ marginBottom: 20 }}>
                    <Breadcrumb.Item style={{ color: '#fff' }}>HOME</Breadcrumb.Item>
                    <Breadcrumb.Item style={{ color: '#fff' }}>OUR SERVICES</Breadcrumb.Item>
                </Breadcrumb>
                <Title level={2} style={{ color: '#fff', fontSize: '36px', marginBottom: 0 }}>
                    OUR SERVICES
                </Title>
                <div
                    style={{
                        width: 80,
                        height: 2,
                        backgroundColor: '#fff',
                        margin: '16px auto 0',
                    }}
                />
            </div>
        </div>
    );
}
