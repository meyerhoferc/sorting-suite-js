function swapValues(list, i) {
  var largerValue = list[i];
  list[i] = list[i + 1];
  list[i+1] = largerValue;
  return list;
};

function bubbleSort(list) {
  var swapOccurred = true;
  while(swapOccurred) {
    swapOccurred = false;
    for(var i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        list = swapValues(list, i);
        swapOccurred = true;
      };
    };
  };
  return list;
};
module.exports = bubbleSort;
