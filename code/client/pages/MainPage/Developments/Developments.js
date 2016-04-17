/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';

class Developments extends Component {

  render() {
    return (
      <div className="Developments">
        <div className="Developments-container">
                <img className="Developments-container-img" src={require('../../../../../assets/images/Developments-background.jpg')} />
          <div className="Developments-title">
            <h4>БУДУЩИЕ СОБЫТИЯ</h4>
            <h3>12 Октября</h3>
            <h1>Анатолий Найман</h1>
            <h2>«Жизнь без рецепта»</h2>
            <h5>Москва, Гоголь-Центр</h5>
          </div>
          <div className="Developments-developments-container">
            <div className="Developments-development">
                <div className="Developments-face"></div>
                <p className="Developments-date">12 Октября</p><p>Андрей Макаревич</p>
                <p className="Developments-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
            </div>
            <div className="Developments-development">
                <div className="Developments-face"></div>
                <p className="Developments-date">12 Октября</p><p>Андрей Макаревич</p>
                <p className="Developments-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
            </div>
            <div className="Developments-development">
                <div className="Developments-face"></div>
                <p className="Developments-date">12 Октября</p><p>Андрей Макаревич</p>
                <p className="Developments-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
            </div>
            <div className="Developments-development">
                <div className="Developments-face"></div>
                <p className="Developments-date">12 Октября</p><p>Андрей Макаревич</p>
                <p className="Developments-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
            </div>
            <a className="Developments-allDevelopments" href="/FutureEvents">ВСЕ СОБЫТИЯ</a>
          </div>
          <div className="Developments-videos-container">
            <h1>ПОСЛЕДНИЕ ВИДЕО</h1>
            <div className="Developments-videos">
              <div className="video">
                <img src={require('../../../../../assets/images/Developments-video-face.jpg')} />
                <div className="Developments-video-icon"></div>
                <h1>Андрей Макаревич</h1>
                <p>Уход от реальности:  Можно ли спастись в красоте</p>
                <hr></hr>
                <span>12 мая 2014</span>
              </div>
              <div className="video">
                <img src={require('../../../../../assets/images/Developments-video-face.jpg')} />
                <div className="Developments-video-icon"></div>
                <h1>Андрей Макаревич</h1>
                <p>Уход от реальности:  Можно ли спастись в красоте</p>
                <hr></hr>
                <span>12 мая 2014</span>
              </div>
              <div className="video">
                <img src={require('../../../../../assets/images/Developments-video-face.jpg')} />
                <div className="Developments-video-icon"></div>
                <h1>Андрей Макаревич</h1>
                <p>Уход от реальности:  Можно ли спастись в красоте</p>
                <hr></hr>
                <span>12 мая 2014</span>
              </div>
              <div className="video">
                <img src={require('../../../../../assets/images/Developments-video-face.jpg')} />
                <div className="Developments-video-icon"></div>
                <h1>Андрей Макаревич</h1>
                <p>Уход от реальности:  Можно ли спастись в красоте</p>
                <hr></hr>
                <span>12 мая 2014</span>
              </div>
            </div>
            <a className="Developments-allVideos" href="/AllEvents">ВСЕ ВИДЕО</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Developments;
