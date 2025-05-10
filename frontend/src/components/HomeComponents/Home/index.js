
import React, { useState, useEffect } from 'react';
import "../../../css/Home.css";

import spa1 from "../../../assets/spa1.jpg";
import spa2 from "../../../assets/spa2.jpg";
import spa3 from "../../../assets/spa3.jpg";

const images = [spa1, spa2, spa3];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Tự động chuyển ảnh sau 4s
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="home">
            {/* Hero Section (Slider) */}
            <div className="slider">
                {images.map((image, index) => (
                    <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
                        <img src={image} alt={`Spa ${index + 1}`} className="slider-image" />
                    </div>
                ))}

                {/* Nút điều hướng */}
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
}