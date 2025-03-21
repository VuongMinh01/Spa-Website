import React from "react";
import '../../css/PhoneRing.css';

export default function PhoneRing() {
    return (
        <div className="hotline-phone-ring-wrap">
            <div className="hotline-phone-ring">
                <div className="hotline-phone-ring-circle"></div>
                <div className="hotline-phone-ring-circle-fill"></div>
                <div className="hotline-phone-ring-img-circle">
                    <a href="tel:0703427959" className="pps-btn-img">
                        <img src="https://nguyenhung.net/wp-content/uploads/2019/05/icon-call-nh.png"
                            alt="Gọi điện thoại" width="50" height="50" />
                    </a>
                </div>
            </div>
            <div className="hotline-bar">
                <a href="tel:0703427959" className="hotline-text">
                    070.342.7959
                </a>
            </div>
        </div>
    );
}
