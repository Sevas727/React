/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';


class NewsMainPage extends Component {

  render() {
    return (
      <div className="NewsMainPage">
        <div className="NewsMainPage-container">
        <img src={require('../../../../../assets/images/newsMain-big-img.jpg')} />
          <div className="NewsMainPage-content">
                <div className="NewsMainPage-title">
                    <h4>НОВОСТИ</h4>
                    <h3>ПРАВА ЧЕЛОВЕКА</h3>
                    <h1>От Курбского до Кашина:</h1>
                    <h2>Открытые письма к Российским правителям  </h2>
                  </div>
                  <div className="NewsMainPage-newsMainPage-container">
                    <div className="NewsMainPage-newsMainPage">
                        <p className="NewsMainPage-date">12 Октября</p><p>Андрей Макаревич</p>
                        <p className="NewsMainPage-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                    </div>
                    <div className="NewsMainPage-newsMainPage">
                        <p className="NewsMainPage-date">12 Октября</p><p>Андрей Макаревич</p>
                        <p className="NewsMainPage-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                    </div>
                    <div className="NewsMainPage-newsMainPage">
                        <p className="NewsMainPage-date">12 Октября</p><p>Андрей Макаревич</p>
                        <p className="NewsMainPage-subject">Выборы</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                    </div>
                    <a className="NewsMainPage-allNewsMainPage" href="/AllNews" >ВСЕ НОВОСТИ</a>
              </div>
          </div>

        </div>
      </div>
    );
  }

}

export default NewsMainPage;
