import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./device.css";
import { Carousel } from "react-responsive-carousel";
import Skeleton from "react-loading-skeleton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Mock from "./Mock";

const PREVIEW_HERO_KEY = "preview_hero";
const PREVIEW_LOGO_KEY = "preview_logo";
function PreviewCarousel() {
    return (
        <Carousel>
            <div>
                <div className="device device-imac-pro">
                    <div className="device-frame">
                        <div className="device-content">
                            <Mock
                                hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                                logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                                device={"desktop-wide"}
                                wireframe
                                name={"Dear sponsor"}
                            />
                            <Row>
                                <Col sm={3}>
                                    <Skeleton count={8} />
                                </Col>
                                <Col sm={6}>
                                    <Skeleton count={8} />
                                </Col>
                                <Col sm={3}>
                                    <Skeleton count={8} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="device-stripe"></div>
                    <div className="device-header"></div>
                    <div className="device-sensors"></div>
                    <div className="device-btns"></div>
                    <div className="device-power"></div>
                </div>
                <img
                    src="https://image.flaticon.com/icons/png/512/102/102630.png"
                    className="deviceIcon"
                />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <div className="device device-macbook-pro">
                    <div className="device-frame">
                        <div className="device-content">
                            <Mock
                                hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                                logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                                name={"Dear sponsor"}
                            />
                            <Skeleton count={10} />
                        </div>
                    </div>
                    <div className="device-stripe"></div>
                    <div className="device-header"></div>
                    <div className="device-sensors"></div>
                    <div className="device-btns"></div>
                    <div className="device-power"></div>
                </div>
                <img
                    className="deviceIcon"
                    src="https://cdn0.iconfinder.com/data/icons/isuperuser-dark/512/679460-macbook_pro_osx_apple_laptop_notebook-512.png"
                />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <div className="device device-iphone-x">
                    <div className="device-frame">
                        <div className="device-content">
                            <Mock
                                hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                                logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                                name={"Dear sponsor"}
                            />
                        </div>
                    </div>
                    <div className="device-stripe"></div>
                    <div className="device-header"></div>
                    <div className="device-sensors"></div>
                    <div className="device-btns"></div>
                    <div className="device-power"></div>
                </div>
                <img
                    className="deviceIcon"
                    src="https://cdn3.iconfinder.com/data/icons/iphone-x-line/512/iPhoneX-01-512.png"
                />
                <p className="legend">Mobile phone: wide screen</p>
            </div>

            <div>
                <div className="device device-iphone-8">
                    <div className="device-frame">
                        <div className="device-content">
                            <Mock
                                hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                                logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                                name={"Dear sponsor"}
                            />
                        </div>
                    </div>
                    <div className="device-stripe"></div>
                    <div className="device-header"></div>
                    <div className="device-sensors"></div>
                    <div className="device-btns"></div>
                    <div className="device-power"></div>
                </div>
                <img
                    className="deviceIcon"
                    src="https://cdn3.iconfinder.com/data/icons/new-apple-product-solid/24/iphone_8_plus_front-512.png"
                />
                <p className="legend">Mobile phone: small screen</p>
            </div>
        </Carousel>
    );
}

export default PreviewCarousel;
