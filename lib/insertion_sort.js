function sortNewValue(currentValue, list, index = list.length - 1) {
  if (list.length == 1) {
    list.splice(index, 0, currentValue)
    return list;
  } else if (currentValue > list[index]) {
    list.splice(index + 1, 0, currentValue);
    return list;
  } else {
    return sortNewValue(currentValue, list, index - 1);
  }
};

function insertionSort(list) {
  var sortedList = [list[0]];
  list.splice(0, 1)
  for(var i = 0; i < list.length; i++) {
    var currentValue = list[i];
    sortedList = sortNewValue(currentValue, sortedList);
  };
  return sortedList;
};
module.exports = insertionSort;
