import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "../../css/NavBar.css";

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const [isScrolled, setIsScrolled] = useState(!isHomePage);
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Scroll logic
        setIsScrolled(!isHomePage);
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (!isHomePage) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const showDrawer = () => setVisible(true);
    const closeDrawer = () => setVisible(false);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>SpaLogo</Link>
            </div>

            {!isMobile && (
                <Menu mode="horizontal" className="nav-menu">
                    <Menu.Item key="home">
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="services">
                        <Link to="/services">Dịch vụ</Link>
                    </Menu.Item>
                    <Menu.Item key="gallery">
                        <Link to="/gallery">Gallery</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about">Giới thiệu</Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link to="/contact">Liên hệ</Link>
                    </Menu.Item>
                </Menu>
            )}

            {isMobile && (
                <Button className="menu-btn" type="text" icon={<MenuOutlined />} onClick={showDrawer} />
            )}

            <Drawer placement="right" onClose={closeDrawer} open={visible}>
                <Menu mode="vertical" onClick={closeDrawer}>
                    <Menu.Item key="home">
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="services">
                        <Link to="/services">Dịch vụ</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about">Giới thiệu</Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link to="/contact">Liên hệ</Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </nav>
    );
}
