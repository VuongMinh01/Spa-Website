import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import ServicesInform from '../../components/ServiceComponents/ServicesInform';
import ServiceBanner from '../../components/ServiceComponents/ServiceBanner';

export default function ServicePage() {
    useEffect(() => {
        document.title = 'Spa Service';
        console.log("🏠 ServicePage is rendered!");
    }, []);

    return (
        <div>
            <ServiceBanner />
            <ServicesInform />
            <Footer />
        </div>
    );
}
