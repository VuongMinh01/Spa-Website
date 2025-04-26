import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Home from '../../components/HomeComponents/Home';
import HomeAboutUs from '../../components/HomeComponents/HomeAboutUs';
import MyMap from '../../components/MyMap';
import HomeService from '../../components/HomeComponents/HomeService';
export default function HomePage() {
    useEffect(() => {
        document.title = 'Spa';
        console.log("🏠 HomePage is rendered!");
    }, []);

    return (
        <div>
            <Home />
            <HomeAboutUs />
            <MyMap />
            <HomeService />
            <Footer />
        </div>
    );
}
