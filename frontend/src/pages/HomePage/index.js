import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import '../../css/HomePage.css';

export default function HomePage() {
    useEffect(() => {
        document.title = 'Spa';
        console.log("🏠 HomePage is rendered!");
    }, []);

    return (
        <div className="homepage">
            {/* Hero Section */}
            <div className="hero">
                <div className="hero-text">
                    <h1>Thư Giãn & Trẻ Hóa</h1>
                    <p>Trải nghiệm dịch vụ spa tốt nhất dành cho bạn</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
