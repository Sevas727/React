import React, { PropTypes, Component } from 'react';
import UpperMenu from '../components/UpperMenu';

class Activity extends Component {

showMenu = (e) => {this.refs.menu.show();}

  render() {
    return (
      <div className="Activity">
        <UpperMenu ref="menu" alignment="left"/>
        <div className="Activity-menu-line"></div>
        <div className="Activity-container">
        <div className="menu">
          <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/menu_button.png')}/></a>
          <a href="#"><img src={require('../../../assets/images/open_russia_menu.png')}/></a>
        </div>
          <div className="Activity-content">
              <div className="Activity-title">
                  <h1>Поддержка честных выборов в России</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                    sd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                    dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. 
                  </p>
              </div>
                  <div className="Activity-videos">
                  <h1>ПРОЕКТЫ</h1>
                    <div className="Activity-video-block">
                        <a href="#"><img src={require('../../../assets/images/activity-video.jpg')} /></a>
                        <h2>Открытый Университет</h2>
                        <h5>openuniversity.com</h5>
                        <p>   The Voter Expansion Project is the Democratic National Committees hub 
                        for expanding the right to vote through legislation, voter registration, education, and organizing.
                        </p>
                    </div>
                    <div className="Activity-video-block">
                        <a href="#"><img src={require('../../../assets/images/activity-video.jpg')} /></a>
                        <h2>Открытый Университет</h2>
                        <h5>openuniversity.com</h5>
                        <p>   The Voter Expansion Project is the Democratic National Committees hub 
                        for expanding the right to vote through legislation, voter registration, education, and organizing.
                        </p>
                    </div>
                   </div>
                   <div className="Activity-news">
                    <h1>НОВОСТИ НАПРАВЛЕНИЯ</h1>
                      <div className="Activity-newsMainPage">
                          <p className="Activity-date">12 Октября</p><p>Андрей Макаревич</p>
                          <p className="Activity-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                      </div>
                      <div className="Activity-newsMainPage">
                          <p className="Activity-date">12 Октября</p><p>Андрей Макаревич</p>
                          <p className="Activity-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                      </div>
                       <div className="Activity-newsMainPage">
                          <p className="Activity-date">12 Октября</p><p>Андрей Макаревич</p>
                          <p className="Activity-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                      </div>
                      <div className="Activity-newsMainPage">
                          <p className="Activity-date">12 Октября</p><p>Андрей Макаревич</p>
                          <p className="Activity-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                      </div>
                   </div>
                <div className="Activity-social">
                <a className="Activity-allActivity" href="#">2.4k</a>
                <a className="Activity-allActivity" href="#">255</a>
                <a className="Activity-allActivity" href="#">123</a>
              </div>

              </div>
              <a href="#" className="Activity-left-block"><span>ОБРАЗОВАНИЕ</span></a>
              <a href="#" className="Activity-right-block"><span>МЕДИА</span></a>
              <div className="Activity-right-menu">

                <h1>Свободные выборы</h1>
                <div className="Activity-right-menu-arrow"></div>
                  <a href="#"><span>ЗАПИСАТЬСЯ</span></a>
                  <a href="#"><span>ПРИСОЕДИНИТЬСЯ</span></a>
                  <a href="#"><span>ПОДДЕРЖАТЬ</span></a>
                  <a href="#" className="Activity-menu-button"><img src={require('../../../assets/images/menu_button.png')} /></a>
                  <a href="#" className="Activity-menu-OpenRussia"><img src={require('../../../assets/images/open_russia_menu.png')} /></a>
              </div>
          </div>
        </div>
    );
  }

}

export default Activity;
