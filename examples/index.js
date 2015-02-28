'use strict';

var nanmedian = require( './../lib' );

var data = new Array( 1001 );

for ( var i = 0; i < data.length; i++ ) {
  if( i % 2 === 0 ){
    data[ i ] = Math.round( Math.random() * 100 );
  } else {
    data[ i ] = null;
  }
}

console.log( nanmedian( data ) );
