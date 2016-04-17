import React, { Component, PropTypes } from 'react'

import { bindActionCreators as bind_action_creators } from 'redux'

// testing `flat` styler
import styler              from 'react-styling/flat'

import { connect }         from 'react-redux'
import { Link, IndexLink } from 'react-router'
import { defineMessages }  from 'react-intl'
import { head }            from 'react-isomorphic-render'


import Footer 		   from '../components/Footer'

export default class Layout extends Component
{

	render()
	{
		return (
	<div>
					{this.props.children}
					<Footer/>
				</div>

		)
	}

}