import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import GalleryBanner from '../../components/GalleryComponents/GalleryBanner';
import Gallery from '../../components/GalleryComponents/Gallery';
export default function GalleryPage() {
    useEffect(() => {
        document.title = 'Spa Gallery';
        console.log("🏠 Spa Gallery' is rendered!");
    }, []);

    return (
        <div>
            <GalleryBanner />
            <Gallery />
            <Footer />
        </div>
    );
}
