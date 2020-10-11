'use strict'

var markArray = [];

var MyAverage = function MyAverage(markArray) {
  this.markArray = markArray;
}

MyAverage.prototype.run = function() {

}

var average1 = new MyAverage(markArray);
average1.run();
