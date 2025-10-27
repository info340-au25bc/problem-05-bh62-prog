'use strict';

var motto = 'The iSchool is my school';
console.log(motto);

console.log(motto.length);
console.log(motto.includes('cool'));

var expandedMotto = motto.replace('iSchool', 'Information School');
console.log(expandedMotto);

var ratio = (expandedMotto.length / motto.length) * 100;
console.log(ratio.toFixed(2) + '%');

var numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(numbers);

numbers[1] = 4.2;
console.log(numbers);

numbers.push(3);
console.log(numbers);

var sorted = numbers.slice();
sorted.sort(function (a, b) { return a - b });
var mid = Math.floor(sorted.length / 2);
var median = sorted[mid];
console.log(median);

var rect = { x: 30, y: 50, width: 100, height: 50 };
console.log(rect);

console.log(rect.x + ', ' + rect.y);

var area = rect.width * 10;
console.log(area);

var circle = { cx: 34, cy: 43, radius: 9 };
console.log(circle);

var shapes = [{ x: 30, y: 50, width: 100, height: 10 }, circle];
console.log(shapes);

var triangle = { base: 33, height: 44 };
shapes.push(triangle);
console.log(shapes);

console.log(String(triangle.hypotenuse));

triangle.hypotenuse = 55;
console.log(shapes);

module.exports = {
  motto: motto,
  expandedMotto: expandedMotto,
  numbers: numbers,
  rect: rect,
  circle: circle,
  shapes: shapes
};