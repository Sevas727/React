/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import UpperMenu from '../components/UpperMenu';
import RightMenu from './Menu/RightMenu/RightMenu';


class AllVideos extends Component {

  state = {
    down: false,
  }

showMenu = (e) => {this.refs.menu.show();}

AllVideosTitleToggle = (e) => {this.state.down ? this.setState({ down: false }) : this.setState({ down: true })}

  render() {
    return  (
      <div className="AllVideos">
        <div className="AllEvents-menu-small">
          <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/Menu_Button_Black.png')}/></a>
          <a href="#"><img src={require('../../../assets/images/open_Russia_Black.png')}/></a>
        </div>
        <UpperMenu ref="menu" alignment="left"/>
        <div className="AllVideos-container">
            <div className="AllVideos-container-left">
            <div className="menu">
              <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/menu_button.png')}/></a>
              <a href="#"><img src={require('../../../assets/images/open_russia_menu.png')}/></a>
            </div>

                  <div id={(this.state.down ? "AllEvents-UpperMenu-show" : "")} className="AllVideos-title">
                    <div className="AllVideos-title-container">
                        <h3>Лекция</h3>
                        <h1>Анатолий Найман</h1>
                        <h2>«Жизнь без рецепта»</h2>
                    </div>
                  </div>

              <div className="AllVideos-content">                     
                        <div className="AllVideos-videos-container">
                                  <div className="AllVideos-videos">
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllVideos-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                   <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllVideos-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllVideos-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllVideos-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllVideos-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllVideos-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  </div>


                              </div>

                         <a className="AllVideos-allVideos" href="#">ПОКАЗАТЬ ЕЩЕ</a>
                    <div className="AllVideos-social">
                    <a className="AllVideos-allActivity" href="#">2.4k</a>
                    <a className="AllVideos-allActivity" href="#">255</a>
                    <a className="AllVideos-allActivity" href="#">123</a>
                    </div>
                  </div>
                </div>  
                <RightMenu containerDown={this.AllVideosTitleToggle.bind(this)}/>
          </div>
        </div>
);
  }

}

export default AllVideos;
