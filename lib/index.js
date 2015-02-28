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

var isArray = require( 'validate.io-array' ),
	isObject = require( 'validate.io-object' ),
	isBoolean = require( 'validate.io-boolean' ),
	isNumber = require( 'validate.io-number' );


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
* FUNCTION: nanmedian( arr[, options] )
*	Computes the median of an array ignoring non-numeric values.
*
* @param {Array} arr - input array
* @param {Object} [options] - function options
* @param {Boolean} [options.sorted] - boolean flag indicating if the array is sorted in ascending order
* @param {Function} [options.accessor] - accessor function for accessing array values
* @returns {Number|null} median value or null
*/
function nanmedian( arr, options ) {
	var sorted,
		clbk,
		len,
		id,
		d,
		x;
	if ( !isArray( arr ) ) {
		throw new TypeError( 'nanmedian()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'nanmedian()::invalid input argument. Options must be an object. Value: `' + options + '`.' );
		}
		if ( options.hasOwnProperty( 'sorted' ) ) {
			sorted = options.sorted;
			if ( !isBoolean( sorted ) ) {
				throw new TypeError( 'nanmedian()::invalid option. Sorted flag must be a boolean. Option: `' + sorted + '`.' );
			}
		}
		if ( options.hasOwnProperty( 'accessor' ) ) {
			clbk = options.accessor;
			if ( typeof clbk !== 'function' ) {
				throw new TypeError( 'nanmedian()::invalid option. Accessor must be a function. Option: `' + clbk + '`.' );
			}
		}
	}
	d = [];
	for ( var i = 0; i < arr.length; i++ ) {
		x = ( clbk ) ? clbk( arr[ i ] ) : arr[ i ];
		if ( isNumber( x ) ) {
			d.push( x );
		}
	}
	len = d.length;
	if ( !len ) {
		return null;
	}
	if ( !sorted ) {
		d.sort( ascending );
	}
	// Get the middle index:
	id = Math.floor( len / 2 );

	if ( len % 2 ) {
		// The number of elements is not evenly divisible by two, hence we have a middle index:
		return d[ id ];
	}
	// Even number of elements, so must take the mean of the two middle values:
	return ( d[ id-1 ] + d[ id ] ) / 2.0;
} // end FUNCTION nanmedian()


// EXPORTS //

module.exports = nanmedian;
