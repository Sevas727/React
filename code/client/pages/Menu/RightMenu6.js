import React, { PropTypes, Component } from 'react';

class RightMenu6 extends Component {

  state = {
    visible: false,
  }



  menuToggle = (e) => {
    this.props.containerDown();
    this.state.visible ? this.setState({ visible: false }) : this.setState({ visible: true })
  }

  render() {
    return (

                  <div id={(this.state.visible ? "right-menu-open" : "")} className="AllNews-right-menu">
                    <h1>Будь в курсе новостей</h1>
                      <div onClick={this.menuToggle} className="AllNews-right-menu-arrow"></div>
                      <a href="#"><span>ТЕМЫ</span></a>
                      <a href="#"><span>АВТОРЫ ДАТУ</span></a>
                      <a href="#"><span>ПОДПИСАТЬСЯ</span></a>
                  </div>

    );
  }

}

export default RightMenu6;