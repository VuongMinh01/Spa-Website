import React from 'react';
import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

export default function GalleryBanner() {
    return (
        <div
            style={{
                backgroundImage: 'url("/your-image-path.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '60px 20px',
                marginTop: '70px', // 👈 Thêm dòng này để tránh bị navbar đè lên
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
                <Breadcrumb separator={<span style={{ color: '#fff' }}>{'>'}</span>} style={{ marginBottom: 20 }}>
                    <Breadcrumb.Item>
                        <Link to="/" style={{ color: '#fff' }}>HOME</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span style={{ color: '#fff' }}>GALLERY</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Title level={2} style={{ color: '#fff', fontSize: '36px', marginBottom: 0 }}>
                    GALLERY                </Title>
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
