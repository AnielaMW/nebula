exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    var answer = -1
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item) {answer = i;}
    }
    return answer;
  },

  sum : function(arr) {
    var answer = 0
    arr.map (function (num) {answer += num})
    return answer;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){arr.splice(i, 1)};
    };
    return arr
  },

  reverseString : function(str) {
    return str.split('').reverse().join('');
  },

  longestSubString : function(str) {
    var arr = str.split(' ');
    var answer = ""
    arr.forEach(function (word){
      if (word.length > answer.length){answer = word}
    })
    return answer
  },

  letterMoveForward : function(str) {

  },

  capitalizeWords : function(str) {

  }
};
