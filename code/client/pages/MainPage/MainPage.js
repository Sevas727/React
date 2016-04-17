import React, { PropTypes, Component } from 'react';


import MainHeader from './MainHeader/MainHeader';
import NewsMainPage from './NewsMainPage/NewsMainPage';
import Developments from './Developments/Developments';
import Feedback from './Feedback/Feedback';
import UpperMenu from '../../components/UpperMenu';

class MainPage extends Component {

showMenu = (e) => {this.refs.menu.show();}

  render() {
    
    return (

      <div>
        <UpperMenu ref="menu" alignment="left"/>
        <MainHeader openMenu={this.showMenu.bind(this)}/>
        <NewsMainPage />
        <Developments />
        <Feedback />
      </div>

    );
  }

}

export default MainPage;
