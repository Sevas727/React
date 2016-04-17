import React, { PropTypes, Component } from 'react';
import UpperMenu from '../components/UpperMenu';

class ArticleAutor extends Component {

showMenu = (e) => {this.refs.menu.show();}

  render() {
    return (
      <div className="ArticleAutor">
        <UpperMenu ref="menu" alignment="left"/>
        <div className="ArticleAutor-container">
            <div className="menu">
              <a href="#" onClick={this.showMenu}><img src={require('../../../assets/images/menu_button.png')}/></a>
              <a href="#"><img src={require('../../../assets/images/open_russia_menu.png')}/></a>
            </div>
            <div className="ArticleAutor-container-left">

                      <div className="ArticleAutor-social">
                            <a href="#">2.4k</a>
                            <a href="#">255</a>
                            <a href="#">123</a>
                            <a href="#"></a>
                      </div>  


                      <div className="ArticleAutor-content"> 

                                  <div className="ArticleAutor-title">
                <div className="ArticleAutor-title-container">
                        <img src={require('../../../assets/images/Article-autor-face.png')} />
                        <h3>ВЫБОРЫ</h3>
                        <h5>·   12 апреля </h5>
                        <h1>Открытые письма к Российским правителям</h1>
                        <h4>Андрей Макаревич</h4>

                </div>
            </div>
                          <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed 
                                iam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
                                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                          </p>    
                      </div>
                  </div>
 
                  <div className="ArticleAutor-comments"> 
                    <div className="ArticleAutor-content">
                      <h1>КОММЕНТАРИИ(<span>243</span>)</h1>
                        <form action="#" method="post">
                          <textarea rows="3" cols="45" name="text" placeholder="Поделись своим мнением">
                          </textarea>
                          <input type="submit" value="Отправить"/>
                        </form>
                        <div className="ArticleAutor-comment"> 
                              <div className="ArticleAutor-comment-raiting">
                                    <a className="ArticleAutor-upper-arrow"></a>
                                    <a className="ArticleAutor-raiting-number">123</a>
                                    <a className="ArticleAutor-bottom-arrow"></a>
                              </div>
                              <h2>RICKYVEE</h2><h4 className="ArticleAutor-comment-date">1 ДЕНЬ НАЗАД</h4>
                              <p>
                                      Commendable plan. But what about teens and adolescents, the forgotten population of 
                                      homeless New Yorkers? Often these young people are not evicted but kicked out by their 
                                      arents (for coming out, becoming pregnant, etc.).
                                      These youth have a particularly traumatic experience of homelessness. Because they lack job skills and a social support
                                      network, many of them trade sex for money, food, or even a place to sleep. This survival sex, as it’s called, puts 
                                      them at risk for assault, violence, and STIs: traumas with long-lasting implications. 
                                      I’ve worked with needy teens and adolescents for more than 30 years, so I know that trauma and stress can have 
                                      long-term medical and mental health implications. The pressure of homelessness can heighten teen’s allostatic load: 
                                      essentially the cumulative damage or wear and tear on the body caused by repeated traumatization. A high allostatic 
                                      load is difficult to reverse, and can weaken a persons immune system, speed up the disease process, and lead to
                                       longer-term medical problems, such as cardiovascular disease.
                                      While it\’s great to protect adults from eviction, if we want a healthy society, we need to ensure our homeless young people also have access to stable housing.
                              </p>
                                <div className="ArticleAutor-comment-submit">
                                    <form action="#" method="post">
                                          <textarea rows="3" cols="45" name="text" placeholder="Поделись своим мнением">
                                          </textarea>
                                          <input type="submit" value="Ответить"/>
                                    </form>
                                </div>    
                              <div className="ArticleAutor-comment"> 
                              <div className="ArticleAutor-comment-raiting">
                                    <a className="ArticleAutor-upper-arrow"></a>
                                    <a className="ArticleAutor-raiting-number">123</a>
                                    <a className="ArticleAutor-bottom-arrow"></a>
                              </div>
                              <h2>RICKYVEE</h2><h4>1 ДЕНЬ НАЗАД</h4>
                              <p>
                                      Commendable plan. But what about teens and adolescents, the forgotten population of 
                                      homeless New Yorkers? Often these young people are not evicted but kicked out by their 
                                      arents (for coming out, becoming pregnant, etc.).
                                      These youth have a particularly traumatic experience of homelessness. Because they lack job skills and a social support
                                      network, many of them trade sex for money, food, or even a place to sleep. This survival sex, as it’s called, puts 
                                      them at risk for assault, violence, and STIs: traumas with long-lasting implications. 
                                      I’ve worked with needy teens and adolescents for more than 30 years, so I know that trauma and stress can have 
                                      long-term medical and mental health implications. The pressure of homelessness can heighten teen’s allostatic load: 
                                      essentially the cumulative damage or wear and tear on the body caused by repeated traumatization. A high allostatic 
                                      load is difficult to reverse, and can weaken a persons immune system, speed up the disease process, and lead to
                                       longer-term medical problems, such as cardiovascular disease.
                                      While it\’s great to protect adults from eviction, if we want a healthy society, we need to ensure our homeless young people also have access to stable housing.
                              </p>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
        </div>

    );
  }

}

export default ArticleAutor;
