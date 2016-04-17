/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';


class Feedback extends Component {

  render() {
    return (
      <div className="Feedback">
          <div className="Feedback-left"></div>
          <div className="Feedback-right"></div>
          <div className="Feedback-container">
            <h1>Внести свой вклад </h1>
            <h1>в развитие проекта</h1>
            <ul className="Feedback-ul-panel">
              <li className="Feedback-switch-left"><a href="#">присоединится</a></li>
              <li className="Feedback-switch-right"><a href="#">поддержать</a></li>
            </ul>
            <div className="Feedback-social">
                <p>Регистрация</p>
                <p>с помощью соц.сетей</p>
                <a href="#">Facebook</a>
                <a href="#">Vkontakte</a>
                <p>Нет аккаунта в соц.сетях?</p>
                <a href="#">Регистрация по почте</a>
            </div>
        </div>
      </div>
    );
  }

}

export default Feedback;
