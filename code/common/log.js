import path          from 'path'
import fs            from 'fs-extra'
import bunyan        from 'bunyan'
import stream        from 'stream'
import util          from 'util'
import moment        from 'moment'
import Error_printer from 'pretty-error'
import levels        from './log levels'

import { client as tcp_client } from './tcp'

// import colors from 'colors/safe'
//
// console.log(colors.green('hello')) // outputs green text
// console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
// console.log(colors.inverse('inverse the color')) // inverses the color
// console.log(colors.rainbow('OMG Rainbows!')) // rainbow
// console.log(colors.trap('Run the trap')) // Drops the bass

const error_printer = new Error_printer()

function print_error(error)
{
	console.log(error_printer.render(error))
}

const colours =
{
	Trace : 'blue',
	Debug : 'cyan',
	Info  : 'green',
	Warn  : 'yellow',
	Error : 'red',
	Fatal : 'magenta',
	'...' : 'grey'
}

const styles = 
{
	//styles
	'bold'      : [1,  22],
	'italic'    : [3,  23],
	'underline' : [4,  24],
	'inverse'   : [7,  27],

	//grayscale
	'white'     : [37, 39],
	'grey'      : [90, 39],
	'black'     : [90, 39],

	//colors
	'blue'      : [34, 39],
	'cyan'      : [36, 39],
	'green'     : [32, 39],
	'magenta'   : [35, 39],
	'red'       : [31, 39],
	'yellow'    : [33, 39]
}

function colorize_start(style)
{
	return style ? '\x1B[' + styles[style][0] + 'm' : ''
}

function colorize_end(style)
{
	return style ? '\x1B[' + styles[style][1] + 'm' : ''
}

function colorize(text, style)
{
	return colorize_start(style) + text + colorize_end(style)
}

// if ((item instanceof Error) && item.stack)
// {
// 	item = 
// 	{
// 		inspect: function()
// 		{
// 			return print_error(item)
// 			// return util.format(item) + '\n' + item.stack
// 		}
// 	}
// }

function preamble(source, level, time, colour)
{
	let preamble = `[${source}] ${time} `
	if (level !== 'Generic')
	{
		preamble += `${level} `
	}
	return colorize(preamble, colour)
}

function print(source, level, message, time)
{
	time = moment(time).format("dddd, MMMM Do YYYY, hh:mm:ss")

	return console.log(preamble
	(
		source,
		level,
		time,
		colours[level.toString()] || colours['...']
	)
	+ message)
}

export default function create(name, options = {})
{
	const console_output = new stream()
	console_output.writable = true

	// for console_output.write()
	const _print = print

	console_output.write = data =>
	{
		if (data.err)
		{
			return print_error(data.err)
		}

		const print = (level, message, time) => _print(data.name, level, message, time)

		print(levels[data.level] || '...', data.msg, data.time)

		// switch (data.level)
		// {
		// 	case 60:
		// 		print('Fatal', data.msg, data.time)
		// 		break
		//
		// 	case 50:
		// 		print('Error', data.msg, data.time)
		// 		break
		//
		// 	case 40:
		// 		print('Warning', data.msg, data.time)
		// 		break
		//
		// 	case 30:
		// 		print('Generic', data.msg, data.time)
		// 		break
		//
		// 	case 20:
		// 		print('Debug', data.msg, data.time)
		// 		break
		//
		// 	case 10:
		// 		print('Trace', data.msg, data.time)
		// 		break
		//
		// 	default:
		// 		print('...', data.msg, data.time)
		// 		break
		// }
	}

	const development_log = 
	{
		streams: 
		[{
			type: 'raw',
			stream: console_output
		}],
		serializers: 
		{
			error    : bunyan.stdSerializers.err,
			request  : bunyan.stdSerializers.req,
			response : bunyan.stdSerializers.res,
		}
	}

	const log_path = path.resolve(Root_folder, 'log', `${name}.txt`)

	fs.ensureDirSync(path.dirname(log_path))

	const production_log =
	{
		streams:
		[{
			type   : 'rotating-file',
			path   : log_path,
			period : '1d',            // daily rotation
			count  : 3                // keep 3 back copies
		}],
		serializers: 
		{
			error    : bunyan.stdSerializers.err,
			request  : bunyan.stdSerializers.req,
			response : bunyan.stdSerializers.res,
		}
	}

	const log_configuration = (_production_ || process.env.NODE_ENV === 'production') ? production_log : development_log

	if (options.use_log_server !== false)
	{
		const log_server = tcp_client({ host: configuration.log_server.tcp.host, port: configuration.log_server.tcp.port })

		log_server.on('error', function(error)
		{
			(log || console).error(`There's been an error related to sending messages to log server. No more log messages will be sent to the log server.`, error)
		})

		log_configuration.streams.unshift
		({
			type: 'raw',
			stream: log_server
		})
	}

	return bunyan.createLogger(extend({ name: name }, log_configuration))
}