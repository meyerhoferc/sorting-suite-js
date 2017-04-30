const assert = require('chai').assert
const insertionSort = require('../lib/insertion_sort')

describe('insertion sort', function() {
  it('sorts elements of an array by insertion-sort algorithm', function() {
    var unsorted = [2, 0, 1, 3, 4, 5];
    var expected = [0, 1, 2, 3, 4, 5];
    var result = insertionSort(unsorted);
    assert.deepEqual(result, expected);
  });
});
