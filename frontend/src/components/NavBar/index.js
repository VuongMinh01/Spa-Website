import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../css/NavBar.css"
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Khi kéo xuống 50px, navbar có nền màu
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showDrawer = () => setVisible(true);
    const closeDrawer = () => setVisible(false);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <Link to="/">SpaLogo</Link>
            </div>

            {/* Menu cho màn hình lớn */}
            <Menu mode="horizontal" className="nav-menu">
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

            {/* Nút menu cho điện thoại */}
            <Button className="menu-btn" type="text" icon={<MenuOutlined />} onClick={showDrawer} />

            {/* Drawer cho điện thoại */}
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
