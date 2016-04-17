WebApp is an example of a generic web application with React and Flux.

Features

* React
* React-router
* Redux as Flux
* Isomorphic (universal) rendering
* Responsive design
* Webpack
* Koa
* Internationalization with React-intl (v2)
* To be done: Authentication
* To be done: GraphQL + Relay
* To be done: Persistence (PostgreSQL, Bookshelf)
* To be done: native Node.js clustering
* Microservice architecture
* Bunyan logging (log file rotation is built-in)
* // maybe: Protection against Cross Site Request Forgery attacks
* Maybe to be done: Locale switch hot reload (without reloading page)

Quick Start
===========

* `npm install`
* `npm run dev`
* wait for it to finish (it will say "Now go to http://127.0.0.1:3000" in the end)
* go to `http://localhost:3000`
* interact with the development version of the web application
* `Ctrl + C`
* `npm run production`
* wait a bit for Webpack to finish the build (green stats will appear in the terminal, plus some `node.js` server running commands)
* go to `http://localhost:3000`
* interact with the production version of the web application

Installation
==========

npm install

Optionally you may want to install ImageMagic for image upload to work

https://github.com/elad/node-imagemagick-native#installation-windows

http://www.imagemagick.org/script/binary-releases.php

Optionally you may want to install Redis (can be used for user session storage instead of memory storage)

https://github.com/MSOpenTech/redis/releases

Optionally you may want to install MongoDB (can be used to store logs)

// sudo npm instal --global pm2

Running (development)
=====================

(If you have Redis and ImageMagic installed, you may want to set `demo: false` flag in your `configuration.js`)

npm run dev

(nodemon has a bug when starting several nodemon processes in parallel fails; if this command fails - try to run it several times; eventually it will work)

After it finishes loading go to:

http://localhost:3000

(the web page will refresh automatically when you save your changes)

Running (production)
=====================

(If you have Redis and ImageMagic installed, you may want to set `demo: false` flag in your `configuration.js`)

Build the project with Webpack and run the web server:

npm run production

Next go to:

http://localhost:3000

Running in production (to be done)
====================

./automation/start.sh

./automation/stop.sh

Сгенерировать скрипт автозапуска на сервере:

./automation/start.sh

pm2 startup

pm2 save

https://github.com/Unitech/pm2

Посмотреть статус процесса: 

pm2 list

Мониторинг процесса: 

pm2 monit

Посмотреть логи:

pm2 logs webapp

Возможна кластеризация, безостановочное самообновление и т.п.
