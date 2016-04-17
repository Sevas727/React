import React, { PropTypes, Component } from 'react';
import UpperMenu from '../components/UpperMenu';


class Video extends Component {

showMenu = (e) => {this.refs.menu.show();}

  render() {
    return (
      <div className="Video-Page">
        <UpperMenu ref="menu" alignment="left"/>
        <div className="Video-container">
            <div className="menu">
              <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/menu_button.png')}/></a>
              <a href="#"><img src={require('../../../assets/images/open_russia_menu.png')}/></a>
            </div>
            <div className="Video-title">
                <div className="Video-title-container">
                        <h3>Лекция</h3>
                        <h1>Анатолий Найман</h1>
                        <h2>«Жизнь без рецепта»</h2>
                        <h5>31 of October / Moscow at RIA-Novosti Press Center</h5>
                        <img src={require('../../../assets/images/Videi-video.png')} />
                    <div className="Video-social">
                          <a href="#">2.4k</a>
                          <a href="#">255</a>
                          <a href="#">123</a>
                          <a href="#">РАСШИФРОВКА</a>
                          <a href="#">СКАЧАТЬ АУДИО</a>

                    </div>
                </div>
            </div>
        </div>

	

                        <div className="video-white-box">
                            <div className="Video-content">                     
								<div className="Video-videos-container">
                              <h1>ПОХОЖИЕ ВИДЕО</h1>
                                  <div className="Video-videos">
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                   <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="Video-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                </div> 
								
      								</div>
      							</div>
      						</div>
                </div> 
    );
  }

}

export default Video;
