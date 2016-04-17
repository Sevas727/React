import React, { PropTypes, Component } from 'react';


class Footer extends Component {

  render() {

    return (
      <div className="Footer">
        <div className="Footer-container">
        <div className="Footer-img-container">
          <a href="#" className="Footer-img-logo"><img src={require('../../../assets/images/footerLogo.png')}/></a>
        </div>
        <div className="Footer-ul-container">
          <ul>
            <li className="Footer-li-title"><a href="#">Информация</a></li>
            <li><a href="#">Пользовательское соглашение</a></li>
            <li><a href="#">Правила комментирования</a></li>
            <li><a href="#">Обратная связь</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">О проекте</a></li>
          </ul>
          <ul>
            <li className="Footer-li-title"><a href="#">Направления</a></li>
            <li><a href="#">Свободные выборы</a></li>
            <li><a href="#">Программа на будущее</a></li>
            <li><a href="#">Образование</a></li>
            <li><a href="#">Правозащита</a></li>
            <li><a href="#">Медиа</a></li>
          </ul>
          <ul>
            <li className="Footer-li-title"><a href="#">Активности</a></li>
            <li><a href="/AllEvents" >События</a></li>
            <li><a href="/AllNews" >Новости</a></li>
            <li><a href="/AllVideos" >Видео</a></li>
          </ul>
        </div>
        <div className="Footer-social">
          <a href="#" className="Footer-social-icon"></a>
          <a href="#" className="Footer-social-icon"></a>
          <a href="#" className="Footer-social-icon"></a>
          <a href="#" className="Footer-social-icon"></a>
          <a href="#" className="Footer-social-icon"></a>
        </div>
        <img className="copyrait" src={require('../../../assets/images/footer_copyrait.png')}/>
        </div>
        <div className="Footrer-line"></div>
      </div>
    );
  }

}

export default Footer;


