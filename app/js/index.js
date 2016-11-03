"use strict";

var _codes = require("./codes");

var tp = new _codes.TapeMachine();
tp.record("Hello... Hellooooo!!! Hell!!!!!");
tp.play();
// => Hello... Hellooooo!!! Helloooooo!!!!!

var p = document.createElement("p");
p.innerText = "Victory!!!";
document.querySelector("body").appendChild(p);