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

	it( 'should throw an error if provided a non-boolean sorted flag', function test() {
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
				nanmedian( [], value );
			};
		}
	});

	it( 'should compute the median for numeric array', function test() {
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

		assert.strictEqual( nanmedian( data, true ), expected );
	});

	it( 'should compute the median for array ignoring non-numeric elements', function test() {
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

		assert.strictEqual( nanmedian( data, true ), expected );
	});

});
