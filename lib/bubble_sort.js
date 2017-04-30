function bubbleSort(list){
  var swapOccurred = true;
  while(swapOccurred) {
    swapOccurred = false;
    for(var i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        var largerValue = list[i];
        list[i] = list[i + 1];
        list[i+1] = largerValue;
        swapOccurred = true;
      };
    };
  };
  return list;
};
module.exports = bubbleSort;
