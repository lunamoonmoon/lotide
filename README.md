# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lunamoonmoon/lotide`

**Require it:**

`const _ = require('@lunamoonmoon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: finds first value in array
* `tail`: finds all but first value in array
* `middle`: finds middle value or values
* `eqArrays`: checks if both arrays have identical values
* `eqObjects`: checks if both objects have identical key values
* `without`: removes specified value from array and returns new array
* `flatten`: flattens nested arrays
* `countOnly`: returns object containing counts of everything in input object
* `countLetters`: returns a count of each letter in input string
* `letterPositions`: finds positions based on letter and strign input
* `findKeyByValue`: finds the corresponding key based on input value
* `findKey`: finds key belonging to input value
* `map`: returns a new array based on results from callback function input
* `takeUntil`: returns a slice of the input array with elements taken from the beginning
