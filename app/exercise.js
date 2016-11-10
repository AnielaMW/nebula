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

  },

  reverseString : function(str) {

  },

  longestSubString : function(str) {

  },

  letterMoveForward : function(str) {

  },

  capitalizeWords : function(str) {

  }
};
