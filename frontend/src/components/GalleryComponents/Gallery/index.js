import React from 'react';
import { Row, Col } from 'antd';

const imageData = [
    'https://laspas.vn/sai-gon/wp-content/uploads/sites/6/2019/07/PQC_7924rs-1500-600x400.jpg',
    'https://i.imgur.com/6HP35WX.jpg',
    'https://i.imgur.com/6HP35WX.jpg',
    'https://i.imgur.com/6HP35WX.jpg',
    'https://i.imgur.com/6HP35WX.jpg',
    'https://i.imgur.com/6HP35WX.jpg',
];

const Gallery = () => {
    return (
        <div style={{ padding: '24px' }}>
            <Row gutter={[16, 16]}>
                {imageData.map((src, index) => (
                    <Col
                        key={index}
                        xs={24}
                        sm={12}
                        md={8}
                        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
                    >
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            style={{ width: '100%', maxWidth: '360px', height: 'auto' }}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Gallery;
