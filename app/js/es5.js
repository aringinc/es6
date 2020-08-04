"use strict";

var map = new Map();
map.set(Symbol["for"]('test'), '1');
console.log(map);
console.log(map.get(Symbol["for"]('test')));
