/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	nanmedian = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-nanmedian', function tests() {

	it( 'should export a function', function test() {
		expect( nanmedian ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				nanmedian( value );
			};
		}
	});

	it( 'should throw an error if options is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				nanmedian( [], value );
			};
		}
	});

	it( 'should throw an error if provided a non-boolean sorted option', function test() {
		var values = [
			'5',
			5,
			[],
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				nanmedian( [], {'sorted': value });
			};
		}
	});

	it( 'should throw an error if provided an accessor option which is not a function', function test() {
		var values = [
			'5',
			5,
			[],
			undefined,
			null,
			NaN,
			true,
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				nanmedian( [], {'accessor': value });
			};
		}
	});

	it( 'should compute the median', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 3.5;

		assert.strictEqual( nanmedian( data ), expected );

		data = [ 2, 4, 5, 3, 8, 2, 9 ];
		expected = 4;

		assert.strictEqual( nanmedian( data ), expected );

		// Sorted:
		data = [ 2, 2, 3, 4, 5, 8, 9 ];
		expected = 4;

		assert.strictEqual( nanmedian( data, {'sorted': true}), expected );
	});

	it( 'should compute the median ignoring non-numeric elements', function test() {
		var data, expected;

		data = [ 2, 4, null, 5, 3, 8, null, 2 ];
		expected = 3.5;

		assert.strictEqual( nanmedian( data ), expected );

		data = [ 2, 4, 5, null, 3, 8, null, 2, 9 ];
		expected = 4;

		assert.strictEqual( nanmedian( data ), expected );

		// Sorted:
		data = [ 2, 2, 3, 4, 5, 8, 9, null, null ];
		expected = 4;

		assert.strictEqual( nanmedian( data, {'sorted': true}), expected );
	});

	it( 'should compute the median using an accessor function', function test() {
		var data, expected, actual;

		data = [
			[1,2],
			[2,4],
			[3,null],
			[4,5],
			[5,3],
			[6,8],
			[7,null],
			[8,2]
		];
		expected = 3.5;

		actual = nanmedian( data, {
			'accessor': getValue
		});
		assert.strictEqual( actual, expected );

		// Sorted:
		data = [
			[1,2],
			[2,null],
			[3,2],
			[4,3],
			[5,null],
			[6,5],
			[7,8],
			[8,9]
		];
		expected = 4;

		actual = nanmedian( data, {
			'sorted': true,
			'accessor': getValue
		});
		assert.strictEqual( actual, expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

	it( 'should return null if provided either an empty array or an array not containing any numeric values', function test() {
		var data, expected;

		data = [
			null,
			NaN,
			true,
			'',
			[],
			{}
		];

		expected = null;

		assert.strictEqual( nanmedian( data ), expected );

		assert.strictEqual( nanmedian( [] ), expected );
	});

});
