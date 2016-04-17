/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import UpperMenu from '../../../components/UpperMenu';


class MainHeader extends Component {

openMenuClick = this.props.openMenu;


  render() {
    return (
      <div className="MainHeader">
        
        <div className="MainHeader-menu-line"></div>
        <div className="MainHeader-container">
        <div className="MainHeader-menu">
          <a onClick={this.openMenuClick} ><img src={require('../../../../../assets/images/menu_button.png')}/></a>
          <a href="#"><img src={require('../../../../../assets/images/open_russia_menu.png')}/></a>
          <a href="#" className="menu-comunity-button">ПРИСОЕДИНИТСЯ</a>
        </div>
            <img className="MainHeader-mainHeader-background" src={require('../../../../../assets/images/map.png')} />
            <img className="MainHeader-mainHeader-background-logo" src={require('../../../../../assets/images/OpenRussiaMainHeader.png')} />
            <h1 className="MainHeader-mainHeader-background-title">МЫ ПОДДЕРЖИВАЕМ ДЕМОКРАТИЮ В РОССИИ</h1>
                      <hr className="MainHeader-mainHeader-container-firstLine"></hr>
                      <hr className="MainHeader-mainHeader-container-secondLine"></hr>
                  <div className="MainHeader-mainHeader-container">

                                      <h1>НАПРАВЛЕНИЯ <br></br>ДЕЯТЕЛЬНОСТИ</h1>
                    <div className="MainHeader-mainHeader">
                        <a href="#">СВОБОДНЫЕ ВЫБОРЫ</a>
                    </div>
                    <div className="MainHeader-mainHeader">
                        <a href="#">ПРАВА ЧЕЛОВЕКА</a>
                    </div>
                    <div className="MainHeader-mainHeader">
                        <a href="#">МЕДИА</a>
                    </div>
                     <div className="MainHeader-mainHeader">
                        <a href="#">ОБРАЗОВАНИЕ</a>
                    </div>
                    <div className="MainHeader-mainHeader">
                        <a href="#">ПРОГРАММА НА БУДУЩЕЕ</a>
                    </div>
                    <div className="MainHeader-mainHeader">
                        <a href="#">НОВОЕ НАПРАВЛЕНИЕ</a>
                    </div>
                </div>
          </div>
      </div>
    );
  }

}

export default MainHeader;
