"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var util = {};
util.reg = {
    specode: /^[1-9][0-9]{0,5}$/,
    num: /^[0-9]{1,10}$/,
    up: /^\+?[1-9][0-9]*$/,
    phone: /^1[3|4|7|5|8][0-9]\d{8}$/,
    psw: /^[A-Za-z0-9]{6,20}$/,
    //bank:/^\d{15}$|^\d{18}$/,
    bank: /^\d{15,19}$/,
    email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
};
exports.default = util;