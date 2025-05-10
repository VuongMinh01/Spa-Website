import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import ContactBanner from '../../components/ContactComponents/ContactBanner';
export default function ContactPage() {
    useEffect(() => {
        document.title = 'Spa Contact';
        console.log("🏠 Contact is rendered!");
    }, []);

    return (
        <div>
            <ContactBanner />
            <Footer />
        </div>
    );
}
