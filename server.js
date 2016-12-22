/**
 * Created by mamoruohara on 12/21/16.
 */
'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: false,
    port: process.env.PORT || 80
} );

server.start();