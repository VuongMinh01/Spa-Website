import GalleryPage from "../pages/GalleryPage";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import ContactPage from "../pages/ContactPage";
const publicRoute = [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicePage },
    { path: '/gallery', component: GalleryPage },
    { path: '/contact', component: ContactPage },

];

export { publicRoute };
