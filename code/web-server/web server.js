import path          from 'path'
import socket_io     from 'socket.io'

import web_server from '../common/web server'

const web = web_server({  })

// serve assets
web.serve_static_files('/assets', path.join(Root_folder, 'build', 'assets'))

// remove this after fixing the "simple example" page
web.serve_static_files('/upload_temporary_store', path.join(Root_folder, configuration.image_server.temporary_files_directory))

// serve uploaded files (pictures, etc)
web.serve_static_files('/upload', path.join(Root_folder, configuration.upload_folder))

// if it's not a static file url:

// Proxy /api requests to API server
web.proxy('/api', `http://${configuration.api_server.http.host}:${configuration.api_server.http.port}`)

// Proxy /images requests to Image server
web.proxy('/upload_image', `http://${configuration.image_server.http.host}:${configuration.image_server.http.port}`)

// Proxy /log requests to Log server
web.proxy('/log', `http://${configuration.log_server.http.host}:${configuration.log_server.http.port}`)

// Proxy all the rest requests to Webpage rendering server
web.proxy(`http://${configuration.webpage_server.http.host}:${configuration.webpage_server.http.port}`)

// // websocket server
// const websocket = socket_io.listen(http_web_server)
// // don't serve client scripts
// websocket.serveClient(false)

// websocket.on('connection', socket =>
// {
// 	socket.emit('news', { message: `'Hello World!' from server` })
// 	socket.on('something', data =>
// 	{
// 		log.info(data)
// 	})
// })

// поднять http сервер
web.listen(configuration.web_server.http.port).then(() =>
{
	log.info(`Web server is listening`)
	log.info(`Now go to http://${configuration.web_server.http.host}:${configuration.web_server.http.port}`)
},
error =>
{
	log.error(error)
})