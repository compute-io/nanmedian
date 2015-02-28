'use strict';

var nanmedian = require( './../lib' );

var data = new Array( 1001 );
for ( var i = 0; i < data.length; i++ ) {
	if ( i % 2 === 0 ) {
		data[ i ] = null;
	} else {
		data[ i ] = Math.round( Math.random() * 100 );
	}
}
console.log( nanmedian( data ) );
