import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './device.css';
import './marvel-device.scss';
import { Carousel } from 'react-responsive-carousel';
import Skeleton from 'react-loading-skeleton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fakeHeader from './fake-header.png';
import ipadIcon from './ipad.png';

import Mock from './Mock';

const PREVIEW_HERO_KEY = 'preview_hero';
const PREVIEW_LOGO_KEY = 'preview_logo';
function PreviewCarousel() {
    return (
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div>
                <div class="full_page_section">
                    <div class="page_wrap">
                        <div class="section_title">
                            <h3>Desktop Small Browser Window</h3>
                        </div>
                        <div class="window_outline">
                            <div class="window_head">
                                <div class="circle window_item" />
                                <div class="circle window_item" />
                                <div class="circle window_item" />
                                <div class="address_bar window_item" />
                            </div>
                            <div class="browser_body">
                                <Mock
                                    hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                                    logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                                    name={'Dear sponsor'}
                                    device={'desktop-narrow'}
                                />
                                <Skeleton count={10} />
                            </div>
                        </div>
                    </div>
                    <div class="page_wrap">
                        <div class="badge">
                            <h3>
                                Made With
                                <i class="fa fa-heart heart" aria-hidden="true" /> +{' '}
                                <i class="fa fa-clock-o clock" aria-hidden="true" />
                            </h3>
                        </div>
                    </div>
                </div>

                <img
                    className="deviceIcon"
                    src="https://cdn0.iconfinder.com/data/icons/isuperuser-dark/512/679460-macbook_pro_osx_apple_laptop_notebook-512.png"
                />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <div class="section_title">
                    <h3>Mobile Phone Large screen (iPhone X)</h3>
                </div>
                <div className="device device-iphone-x">
                    <div className="device-frame">
                        <div className="device-content">
                            <img src={fakeHeader} />
                            <Mock
                                hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                                logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                                device={'mobile-wide-vertical'}
                                wireframe
                                name={'Dear sponsor'}
                            />
                            <Skeleton count={10} />
                        </div>
                    </div>
                    <div className="device-stripe" />
                    <div className="device-header" />
                    <div className="device-sensors" />
                    <div className="device-btns" />
                    <div className="device-power" />
                </div>
                <img
                    className="deviceIcon"
                    src="https://cdn3.iconfinder.com/data/icons/iphone-x-line/512/iPhoneX-01-512.png"
                />
                <p className="legend">Mobile phone: wide screen</p>
            </div>
            <div>
                <div class="section_title">
                    <h3>Mobile Phone Large screen (iPhone X) Landscape</h3>
                </div>
                <div className="device device-iphone-x landscape">
                    <div className="device-frame">
                        <div className="device-content">
                            <Mock
                                hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                                logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                                device={'mobile-wide-horizontal'}
                                wireframe
                                name={'Dear sponsor'}
                            />
                        </div>
                    </div>
                    <div className="device-stripe" />
                    <div className="device-header" />
                    <div className="device-sensors" />
                    <div className="device-btns" />
                    <div className="device-power" />
                </div>
                <img
                    className="deviceIcon horizontal"
                    src="https://cdn3.iconfinder.com/data/icons/iphone-x-line/512/iPhoneX-01-512.png"
                />
                <p className="legend">Mobile phone: wide screen</p>
            </div>
            <div>
                <div class="section_title">
                    <h3>Mobile Phone Small screen (iPhone 4S)</h3>
                </div>
                <div class="marvel-device iphone4s silver">
                    <div class="top-bar" />
                    <div class="sleep" />
                    <div class="volume" />
                    <div class="camera" />
                    <div class="sensor" />
                    <div class="speaker" />
                    <div class="screen">
                        <img src={fakeHeader} />
                        <Mock
                            hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                            logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                            device={'mobile-narrow-vertical'}
                            wireframe
                            name={'Dear sponsor'}
                        />
                        <Skeleton count={10} />
                    </div>
                    <div class="home" />
                    <div class="bottom-bar" />
                </div>

                <img
                    className="deviceIcon"
                    src="https://cdn3.iconfinder.com/data/icons/new-apple-product-solid/24/iphone_8_plus_front-512.png"
                />

                <p className="legend">Mobile phone: small screen</p>
            </div>

            <div>
                <div class="section_title">
                    <h3>Mobile Phone Small screen (iPhone 4S) Landscape</h3>
                </div>
                <div class="marvel-device iphone4s silver landscape">
                    <div class="top-bar" />
                    <div class="sleep" />
                    <div class="volume" />
                    <div class="camera" />
                    <div class="sensor" />
                    <div class="speaker" />
                    <div class="screen">
                        <Mock
                            hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                            logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                            device={'mobile-narrow-horizontal'}
                            wireframe
                            name={'Dear sponsor'}
                        />
                        <Skeleton count={10} />
                    </div>
                    <div class="home" />
                    <div class="bottom-bar" />
                </div>

                <img
                    className="deviceIcon horizontal"
                    src="https://cdn3.iconfinder.com/data/icons/new-apple-product-solid/24/iphone_8_plus_front-512.png"
                />

                <p className="legend">Mobile phone: small screen</p>
            </div>

            <div>
                <div class="section_title">
                    <h3>Tablet (iPad Mini)</h3>
                </div>
                <div class="marvel-device ipad silver">
                    <div class="camera" />
                    <div class="screen">
                        <Mock
                            hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                            logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                            name={'Dear sponsor'}
                            wireframe
                            device={'ipad-vertical'}
                        />
                        <Skeleton count={10} />
                    </div>
                    <div class="home" />
                </div>

                <img className="deviceIcon" src={ipadIcon} />

                <p className="legend">Mobile phone: small screen</p>
            </div>
            <div>
                <div class="section_title">
                    <h3>Tablet (iPad Mini) Landscape</h3>
                </div>
                <div class="marvel-device ipad silver landscape">
                    <div class="camera" />
                    <div class="screen">
                        <Mock
                            hero={sessionStorage.getItem(PREVIEW_HERO_KEY)}
                            logo={sessionStorage.getItem(PREVIEW_LOGO_KEY)}
                            name={'Dear sponsor'}
                            wireframe
                            device={'ipad-horizontal'}
                        />
                        <Skeleton count={10} />
                    </div>
                    <div class="home" />
                </div>

                <img className="deviceIcon horizontal" src={ipadIcon} />

                <p className="legend">Mobile phone: small screen</p>
            </div>
        </Carousel>
    );
}

export default PreviewCarousel;
