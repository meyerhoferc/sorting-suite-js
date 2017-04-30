const assert = require('chai').assert
const bubbleSort = require('../lib/bubble_sort')

describe('bubble sort', function() {
  it('sorts elements of an array by bubble-sort algorithm', function() {
    var unsorted = [2, 0, 1, 3, 4, 5];
    var expected = [0, 1, 2, 3, 4, 5];
    var result = bubbleSort(unsorted);
    assert.deepEqual(result, expected);
  });
});
