import React, { PropTypes, Component } from 'react';
import UpperMenu from '../components/UpperMenu';
import RightMenu from './Menu/RightMenu/RightMenu';

class AllEvents extends Component {

  state = {
    down: false,
  }

showMenu = (e) => {this.refs.menu.show();}

AllEventsTitleToggle = (e) => {this.state.down ? this.setState({ down: false }) : this.setState({ down: true })}

  render() {
    return (

      <div className="AllEvents">
        <div className="AllEvents-menu-small">
          <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/Menu_Button_Black.png')}/></a>
          <a href="#"><img src={require('../../../assets/images/open_Russia_Black.png')}/></a>
        </div>
        <UpperMenu ref="menu" alignment="left"/>
        <div className="AllEvents-container">
            <div className="AllEvents-container-left">
            <div className="menu">
              <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/menu_button.png')}/></a>
              <a href="#"><img src={require('../../../assets/images/open_russia_menu.png')}/></a>
            </div>

                  <div id={(this.state.down ? "AllEvents-UpperMenu-show" : "")} className="AllEvents-title">
                    <div className="AllEvents-title-container">
                        <h3>12 Октября</h3>
                        <h1>Анатолий Найман</h1>
                        <h2>«Жизнь без рецепта»</h2>
                        <h5>Москва, Гоголь-Центр</h5>
                    </div>
                  </div>

              <div className="AllEvents-content">                     
                       <div className="AllEvents-developments">
                          <h1>БУДУЩИЕ СОБЫТИЯ</h1>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                       </div>

                        <div className="AllEvents-developments">
                          <h1>ПРОШЕДШИЕ СОБЫТИЯ</h1>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date past">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date past">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date past">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="AllEvents-development">
                                  <div className="AllEvents-face"></div>
                                  <p className="AllEvents-date past">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="AllEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                       </div>
                         <a className="AllEvents-allVideos" href="#">ПОКАЗАТЬ ЕЩЕ</a>
                         
                        <div className="AllEvents-videos-container">
                            <h1>ПОСЛЕДНИЕ ВИДЕО</h1>
                                  <div className="AllEvents-videos">
                                      <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllEvents-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                   <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllEvents-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllEvents-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  <div className="video">
                                        <img src={require('../../../assets/images/Developments-video-face.jpg')} />
                                        <div className="AllEvents-video-icon"></div>
                                        <h1>Андрей Макаревич</h1>
                                        <p>Уход от реальности:  Можно ли спастись в красоте</p>
                                        <hr></hr>
                                        <span>12 мая 2014</span>
                                      </div>
                                  </div>
                              </div>

                         <a className="AllEvents-allVideos" href="#">ПОКАЗАТЬ ЕЩЕ</a>
                    <div className="AllEvents-social">
                    <a className="AllEvents-allActivity" href="#">2.4k</a>
                    <a className="AllEvents-allActivity" href="#">255</a>
                    <a className="AllEvents-allActivity" href="#">123</a>
                    </div>
                  </div>
                </div>  
            <RightMenu containerDown={this.AllEventsTitleToggle.bind(this)}/>
          </div>
        </div>
    );
  }

}

export default AllEvents;
