import React, { PropTypes, Component } from 'react';
import UpperMenu from '../components/UpperMenu';
import RightMenu6 from './Menu/RightMenu6';


class AllNews extends Component {

  state = {
    down: false,
  }


showMenu = (e) => {this.refs.menu.show();}

AllEventsTitleToggle = (e) => {this.state.down ? this.setState({ down: false }) : this.setState({ down: true })}

  render() {
    return (
      <div className="AllNews">
      <div className="AllEvents-menu-small">
          <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/Menu_Button_Black.png')}/></a>
          <a href="#"><img src={require('../../../assets/images/open_Russia_Black.png')}/></a>
      </div>
      <UpperMenu ref="menu" alignment="left"/>
        <div className="AllNews-menu-line"></div>
        <div className="AllNews-container">
            <div className="AllNews-container-left">
            <div className="menu">
              <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/menu_button.png')}/></a>
              <a href="#"><img src={require('../../../assets/images/open_russia_menu.png')}/></a>
            </div>

                  <div id={(this.state.down ? "AllNews-UpperMenu-show" : "")} className="AllNews-title">
                    <div className="AllNews-title-container">
                        <h3>ПРАВА ЧЕЛОВЕКА</h3>
                        <h1>От Курбского до Кашина:</h1>
                        <h2>Открытые письма к Российским правителям</h2>
                        <h5>Саудовская Аравия задерживает выплаты государственным</h5>
                    </div>
                  </div>

                  <div className="AllNews-news">
                      <div className="AllNews-newsMainPage">
                          <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                          <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                      </div>
                      <div className="AllNews-newsMainPage">
                          <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                          <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                      </div>
                      <div className="AllNews-newsMainPage">
                          <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                          <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                      </div>
                  </div>

              <div className="AllNews-content">                     
                        <div className="AllNews-videos-container">
                                  <div className="AllNews-videos">
                                      <div className="video">
                                        <img src={require('../../../assets/images/AllNews-category.png')} />
                                        <h1>Андрей Макаревич</h1>
                                        <h2>Уход от реальности:  Можно ли спастись в красоте</h2>
                                  </div>
                                   <div className="video">
                                        <img src={require('../../../assets/images/AllNews-category.png')} />
                                        <h1>Андрей Макаревич</h1>
                                        <h2>Уход от реальности:  Можно ли спастись в красоте</h2>
                                  </div>
                                  <div className="video">
                                        <img src={require('../../../assets/images/AllNews-category.png')} />
                                        <h1>Андрей Макаревич</h1>
                                        <h2>Уход от реальности:  Можно ли спастись в красоте</h2>
                                  </div>
                                </div>


                            </div>
                  </div>

                                <div className="AllNews-news">
                                  <div className="AllNews-newsMainPage">
                                      <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                                      <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                                  </div>
                                  <div className="AllNews-newsMainPage">
                                      <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                                      <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                                  </div>
                                  <div className="AllNews-newsMainPage">
                                      <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                                      <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                                  </div><div className="AllNews-newsMainPage">
                                      <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                                      <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                                  </div>
                                  <div className="AllNews-newsMainPage">
                                      <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                                      <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                                  </div>
                                  <div className="AllNews-newsMainPage">
                                      <p className="AllNews-date">12 Октября</p><p>Андрей Макаревич</p>
                                      <p className="AllNews-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                                  </div>
                            </div>

                </div>  
                <RightMenu6 containerDown={this.AllEventsTitleToggle.bind(this)}/>
          </div>
        </div>
    );
  }

}

export default AllNews;
