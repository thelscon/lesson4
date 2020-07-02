'use strict';

let box = document.querySelector ('.box');
let moveBy = 200;
let moved = parseInt (box.style.marginLeft) || 0;

/*do {
    box.style.marginLeft = ++moved + 'px';
} while (moved < moveBy - 1);*/

/*while (moved <= moveBy) {
    box.style.marginLeft = ++moved + 'px';
}*/

for (let number = 0, isUserHappy = true; isUserHappy; number++) {
    isUserHappy = confirm ('Are you happy that number is ' + number + ' ?');
}