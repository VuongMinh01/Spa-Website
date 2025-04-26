import React from 'react';
import { Row, Col, Card, Button } from 'antd'; // Thêm Button từ antd
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Thêm các component từ react-leaflet
import 'leaflet/dist/leaflet.css'; // Đảm bảo style cho leaflet
import L from 'leaflet'; // Thư viện leaflet
import { Container } from "react-bootstrap";
import { FaDirections } from 'react-icons/fa';  // Thêm icon chỉ đường từ react-icons
import "../../css/Map.css"; // Đảm bảo import file CSS nếu có

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix lỗi icon marker không hiện
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const MyMap = () => {
    const position = [10.7769, 106.7009]; // Ví dụ: Tọa độ TP.HCM
    const address = "Số 123, Đường ABC, TP.HCM, Việt Nam";
    const phoneNumber = "+84 123 456 789";

    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
        window.open(url, "_blank");
    };

    return (
        <div className="map-custom">
            <Row gutter={[16, 16]} justify="center" align="top">
                {/* Cột Bản đồ */}
                <Col xs={24} sm={24} md={12}>
                    <MapContainer
                        center={position}
                        zoom={13}
                        style={{
                            height: '500px',
                            width: '100%',
                            margin: '10px',
                        }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="© OpenStreetMap contributors"
                        />
                        <Marker position={position}>
                            <Popup>Đây là TP.HCM.</Popup>
                        </Marker>
                    </MapContainer>
                </Col>

                {/* Cột Thông tin địa chỉ */}
                <Col xs={24} sm={24} md={12}>
                    <Container fluid>
                        <Card
                            title={<span style={{ color: '#1890ff' }}>Spa Sài Gòn</span>}  // Đổi màu title
                            bordered={false}
                            style={{ marginTop: '20px' }}
                        >
                            <p><strong>Địa chỉ:</strong> {address}</p>
                            <p><strong>SDT:</strong> {phoneNumber}</p>
                            <p>
                                <strong>Chỉ đường:</strong>
                                <Button
                                    type="link"
                                    icon={<FaDirections />}
                                    onClick={openGoogleMaps}
                                >
                                    Mở trên Google Maps
                                </Button>
                            </p>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default MyMap;
