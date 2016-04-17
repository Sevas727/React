import React, { PropTypes, Component } from 'react';

class RightMenu extends Component {

  state = {
    visible: false,
  }



  menuToggle = (e) => {
    this.props.containerDown();
    this.state.visible ? this.setState({ visible: false }) : this.setState({ visible: true })
  }

  render() {
    return (
                  <div className="right-menu" id={(this.state.visible ? "right-menu-open" : "")}>
                  <div className="right-menu-line"></div>
                    <h1>Видео с открытых лекций</h1>
                    <div onClick={this.menuToggle}  className="right-menu-arrow"></div>
                      <a href="/RightMenu2"><span>ГОРОД</span></a>
                      <a href="#"><span>ВЫБРАТЬ ДАТУ</span></a>
                      <a href="#"><span>ЛЕКТОРЫ</span></a>
                      <a href="#"><span>ТЕМЫ</span></a>
                  </div>
    );
  }

}

export default RightMenu;
