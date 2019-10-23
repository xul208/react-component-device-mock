import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./device.css";

import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <div class="device device-iphone-x">
            <div class="device-frame">
              <div class="device-content">
                <div>-------test-------</div>
              </div>
            </div>
            <div class="device-stripe"></div>
            <div class="device-header"></div>
            <div class="device-sensors"></div>
            <div class="device-btns"></div>
            <div class="device-power"></div>
          </div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-b/1280x250/10/ad/b3/55/vernazza.jpg" />

          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-b/1280x250/10/ad/b3/55/vernazza.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-b/1280x250/10/ad/b3/55/vernazza.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-b/1280x250/10/ad/b3/55/vernazza.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
