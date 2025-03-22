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

    useEffect(() => {
        // Reset trạng thái navbar và cuộn về đầu trang khi chuyển trang
        setIsScrolled(!isHomePage);
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (!isHomePage) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const showDrawer = () => setVisible(true);
    const closeDrawer = () => setVisible(false);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>SpaLogo</Link>
            </div>

            <Menu mode="horizontal" className="nav-menu">
                <Menu.Item key="home">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Trang chủ</Link>
                </Menu.Item>
                <Menu.Item key="services">
                    <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Dịch vụ</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Giới thiệu</Link>
                </Menu.Item>
                <Menu.Item key="contact">
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Liên hệ</Link>
                </Menu.Item>
            </Menu>

            <Button className="menu-btn" type="text" icon={<MenuOutlined />} onClick={showDrawer} />

            <Drawer placement="right" onClose={closeDrawer} open={visible}>
                <Menu mode="vertical" onClick={closeDrawer}>
                    <Menu.Item key="home">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="services">
                        <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Dịch vụ</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Giới thiệu</Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Liên hệ</Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </nav>
    );
}
