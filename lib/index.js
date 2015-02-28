/**
*
*	COMPUTE: nanmedian
*
*
*	DESCRIPTION:
*		- Computes the median of an array ignoring non-numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Philipp Burckhardt.
*
*
*	AUTHOR:
*		Philipp Burckhardt. pburckhardt@outlook.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );
var isBoolean = require( 'validate.io-boolean' );
var isNumber = require( 'validate.io-number' );

// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()

// MEDIAN //

/**
* FUNCTION: nanmedian( arr[, sorted] )
*	Computes the median of a numeric array ignoring non-numeric values.
*
* @param {Array} arr - numeric array
* @param {Boolean} [sorted] - boolean flag indicating if the array is sorted in ascending order
* @returns {Number} median value
*/
function nanmedian( arr, sorted ) {
  if ( !isArray( arr ) ) {
    throw new TypeError( 'nanmedian()::invalid input argument. Must provide an array.' );
  }
  if ( arguments.length > 1 && !isBoolean(sorted) ) {
		throw new TypeError( 'nanmedian()::invalid input argument. Second argument must be a boolean.' );
	}

  var red = [], len, id;
  for(var i = 0; i < arr.length; i++){
    if( isNumber(arr[i]) === true ){
      red.push( arr[i] );
    }
  }

  len = red.length;
	if ( !sorted ) {
    red.sort( ascending );
	}

  // Get the middle index:
	id = Math.floor( len / 2 );

	if ( len % 2 ) {
		// The number of elements is not evenly divisible by two, hence we have a middle index:
		return red[ id ];
	}
  // Even number of elements, so must take the mean of the two middle values:
	return ( red[ id-1 ] + red[ id ] ) / 2.0;

} // end FUNCTION nanmedian()


// EXPORTS //

module.exports = nanmedian;
