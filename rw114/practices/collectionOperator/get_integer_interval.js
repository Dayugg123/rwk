'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  if(number_a<number_b){
    for (var i=number_a;i<=number_b;i++){
        result.push(i);
    }
    return result;
  }
  else if (number_a>number_b) {
    for (var i = number_a; i >= number_b; i--) {
        result.push(i);
    }
    return result;
  }
  else  {
      return [number_b];
    }
  }


module.exports = get_integer_interval;

