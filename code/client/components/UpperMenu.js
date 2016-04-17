import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { PropTypes as React_router_prop_types } from 'react-router'
import { Link } from 'react-router'
import styler from 'react-styling'


export default class UpperMenu extends Component
{

	state = {
    visible: false,
	}

	show = (e) => {this.setState({ visible: true });}
	hide = (e) => {this.setState({ visible: false });}


	render()
	{

		let menu =
			(
				<div className="UpperMenu">
						<div className={(this.state.visible ? "UpperMenu-left-show" : "UpperMenu-left")}>
						  <div className="UpperMenu-close" onClick={this.hide}></div>
						  <a href="AllNews"><span>НОВОСТИ</span></a>
						  <a href="AllEvents"><span>СОБЫТИЯ</span></a>
						  <a href="AllVideos"><span>ВИДЕО</span></a>
						  <a href="#"><span>О ПРОЕКТЕ</span></a>
						  <a href="#" className="basket"><span>КОРЗИНА</span><span className="basket-count"> 3</span></a>
						  <a href="#" className="LOG-IN"><span>ВОЙТИ</span></a>
						  <a href="#" className="LANG"><span>РУС</span></a>
						</div>
				</div> 
			)

		return menu
	}
}
