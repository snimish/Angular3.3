"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monkey_1 = require("./monkey");
const tiger_1 = require("./tiger");
let t1 = new tiger_1.Tiger("Bengal Tiger");
t1.move(100);
t1.makeSound("Roar");
t1.move(340);
t1.huntPray("Deer");
t1.makeSound("Roar");
let m1 = new monkey_1.Monkey("Gorila");
m1.makeSound("Whoop");
m1.move(250);
m1.climbTree("Neem");
m1.makeSound("Screech");
