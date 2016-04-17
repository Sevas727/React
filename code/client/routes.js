import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'


import Layout           from './pages/layout'
import MainPage         from './pages/MainPage/MainPage'
import Activity         from './pages/Activity'
import AllEvents         from './pages/AllEvents'
import AllNews         from './pages/AllNews'
import AllVideos         from './pages/AllVideos'
import Article         from './pages/Article'
import ArticleAutor         from './pages/ArticleAutor'
import FutureEvents         from './pages/FutureEvents'
import Video         from './pages/Video'


export default function(store)
{
	const routes =
	(
		<Route path="/" component={Layout}>
			<IndexRoute component={MainPage}/>
			<Route path="activity" component={Activity}/>
			<Route path="allevents" component={AllEvents}/>
			<Route path="allnews" component={AllNews}/>
			<Route path="allvideos" component={AllVideos}/>
			<Route path="article" component={Article}/>
			<Route path="articleautor" component={ArticleAutor}/>
			<Route path="futureevents" component={FutureEvents}/>
			<Route path="Video" component={Video}/>
		</Route>
	)

	return routes
}