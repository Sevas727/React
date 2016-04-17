import React, { PropTypes, Component } from 'react';
import UpperMenu from '../components/UpperMenu';


class FutureEvents extends Component {

showMenu = (e) => {this.refs.menu.show();}

  render() {
    return (
      <div className="FutureEvents">
        <UpperMenu ref="menu" alignment="left"/>
        <div className="FutureEvents-container">
            <div className="FutureEvents-container-left">
            <div className="menu">
              <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/menu_button.png')}/></a>
              <a href="#"><img src={require('../../../assets/images/open_russia_menu.png')}/></a>
            </div>

                  <div className="FutureEvents-title">
                    <div className="FutureEvents-title-container">
                        <h3>ВИКТОР ГОЛЫШЕВ</h3>
                        <h1>Как читать «Котлован»</h1>
                        <h2>Пресс-центр РИА Новости</h2>
                        <h5>Москва, Зубовский бульвар 4</h5>
                    </div>
                  </div>

                      <div className="FutureEvents-content">    
                      <p>
                            Патриарх отечественной школы художественного перевода Виктор Голышев сразу оговаривается — его лекция не 
                            о переводе Платонова и не о стиле писателя, она о том, что скрывает в себе непростой текст и как форма дополняет 
                            содержание повести. На протяжении жизни Голышев неоднократно возвращался к «Котловану» прежде всего как читатель. 
                            Это текст, о который «постоянно спотыкаешься», так он говорит о книге. Разбирая примеры — фразы и даже отдельные 
                            словосочетания — он показывает, почему язык «Котлована» так сложен и как работает «система сжатий и спрямлений» 
                            Платонова. Переводчик дотошно анализирует шероховатый стиль писателя.invidunt ut labore et
                      </p>    
                      <p>
                            «Нарушения становятся в некотором роде стандартами. Только этот стандарт довольно трудно 
                            переварить при быстром чтении. Платонов это имел в виду: что проза должна цепляться. И 
                            каждый раз она должна заставлять тебя думать, а не просто скользить по строчкам. Хорошо, 
                            когда большие люди пишут, Достоевский или Толстой, — там как бы процесс мышления по ходу 
                            дела происходит, а у среднего беллетриста ты обычно действительно скользишь по поверхности, 
                            и хорошо, если остается там половина в голове. Он хотел читателя задержать, видимо. Ну, или не 
                            хотел — я не уверен, что это все происходит рациональным способом».
                      </p>  
                      <div className="FutureEvents-social">
                            <a className="FutureEvents-allActivity" href="#">2.4k</a>
                            <a className="FutureEvents-allActivity" href="#">255</a>
                            <a className="FutureEvents-allActivity" href="#">123</a>
                      </div>            
                       <div className="FutureEvents-developments">
                          <h1>ЕЩЕ СОБЫТИЯ</h1>
                              <div className="FutureEvents-development">
                                  <div className="FutureEvents-face"></div>
                                  <p className="FutureEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="FutureEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="FutureEvents-development">
                                  <div className="FutureEvents-face"></div>
                                  <p className="FutureEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="FutureEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="FutureEvents-development">
                                  <div className="FutureEvents-face"></div>
                                  <p className="FutureEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="FutureEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                              <div className="FutureEvents-development">
                                  <div className="FutureEvents-face"></div>
                                  <p className="FutureEvents-date">12 Октября</p><p>Андрей Макаревич</p>
                                  <p className="FutureEvents-city">Москва</p><p>Уход от реальности:  Можно ли спастись в красоте</p>
                              </div>
                            </div>
                          </div>
                        </div>
                  <div className="FutureEvents-right-menu">
                  <div className="FutureEvents-right-menu-line"></div>
                    <h2>ЛЕКЦИЯ  </h2>
                    <div className="FutureEvents-right-menu-arrow"></div>
                    <h1>12 октября</h1>
                    <h3>Вт 19:00</h3>
                      <a href="#"><span>КУПИТЬ БИЛЕТ</span></a>
                      <a href="#"><span>В КАЛЕНДАРЬ</span></a>
                      <a href="#"><span>ЗАПИСАТЬСЯ</span></a>
                  </div>
          </div>
        </div>

    );
  }

}

export default FutureEvents;
