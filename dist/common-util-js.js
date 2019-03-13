/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.util = undefined;

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.util = _util2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 整个框架父类
 */
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
    /**
     * @description cookie模块
     */
};util.cookie = {
    set: function set(c_name, value, expiredays) {
        var exdate = new Date();
        if (!expiredays) {
            document.cookie = c_name + "=" + escape(JSON.stringify(value)) + ";path=/;";
        } else {
            exdate.setDate(exdate.getDate() + expiredays * 1);
            document.cookie = c_name + "=" + escape(JSON.stringify(value)) + ";expires=" + exdate.toGMTString();
        }
    },
    get: function get(c_name) {
        var res = "";
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                res = unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return res;
    },
    del: function del(c_name) {
        var exp = new Date();
        exp.setDate(exp.getDate() - 1);
        var cval = this.get(c_name);
        if (cval != null) {
            document.cookie = c_name + "=" + escape(cval) + ";expires=" + exp.toGMTString() + ";path=/;";
        }
    },
    clear: function clear() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                this.del(keys[i]);
            }
        }
    }
};
util.user = {
    saveUser: function saveUser(user) {
        util.localstorage.put('kuser', user);
    },
    remove: function remove() {
        util.localstorage.remove('kuser');
    },
    getUser: function getUser() {
        //用户缓存  三小时 有效
        return util.localstorage.get('kuser', 3);
    }
};
util.permiss = {
    judgetPermiss: function judgetPermiss(val) {
        var role = util.localstorage.get("menu");
        var res = false;
        function permiss(list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === val) {
                    res = true;
                    return res;
                }
                if (list[i].children != null && list[i].children.length > 0) {
                    permiss(list[i].children);
                }
            }
        }
        if (role != null && role.length > 0) {
            permiss(role);
        }
        return res;
    }
};
util.localstorage = {
    getStarage: function getStarage() {
        return localStorage;
    },
    /**
     * @description 存储key-value
     * @param {String} key 存储的键值
     * @param {String} value 存储的内容
     */
    put: function put(key, value) {
        this.getStarage().removeItem(key);
        var curTime = new Date().getTime();
        this.getStarage().setItem(key, JSON.stringify({ data: value, time: curTime }));
    },
    /**
     * @description 通过key值检索键值
     * @param {String} key 存储的键值
     * @return {String}
     */
    get: function get(key, exp, callback) {
        var data = this.getStarage().getItem(key);
        if (data == null) {
            return null;
        }
        var dataObj = JSON.parse(data);
        if (exp == null) {
            exp = 365;
        }

        if (dataObj != null && dataObj != '') {
            var time = new Date().getTime() - dataObj.time;
            var data = time / 1000 / 60 / 60;
            if (data > exp) {
                console.log('信息已过期');
                if (callback != null) {
                    callback();
                }
                util.localstorage.remove(key);
                return null;
            } else {
                return dataObj.data;
            }
        } else {
            return null;
        }
    },
    /**
     * @description 通过key值删除键值对
     * @param {String} key 存储的键值
     */
    remove: function remove(key) {
        this.getStarage().removeItem(key);
    },
    /**
     * @description 获取storage中保存的键值对的数量
     * @return {Number}
     */
    getItemCount: function getItemCount() {
        return this.getStarage().getLength();
    },
    /**
     * @description 获取键值对中指定索引值的key值
     * @return {String}
     */
    key: function key(index) {
        return this.getStarage().key(index);
    },
    /**
     * @description 清除应用所有的键值对,不建议使用
     */
    clearAll: function clearAll() {
        var user = util.User.getUser();
        this.getStarage().clear();
        if (user != null) {
            util.User.setUser(user);
        }
    }

};
util.log = {
    islog: false,
    /**
     * 信息分组开始
     * @param {String} d
     */
    group: function group(d) {
        if (this.islog) {
            console.group(d);
        }
    },

    /**
     * 信息分组结束
     */
    groupEnd: function groupEnd() {
        if (this.islog) {
            console.groupEnd();
        }
    },
    /**
     * 查询对象
     * @param {String} d
     */
    dir: function dir(d) {
        if (this.islog) {
            console.dir(d);
        }
    },
    /**
     * 追踪函数的调用轨迹
     */
    trace: function trace() {
        if (this.islog) {
            console.trace();
        }
    },
    /**
     * @description 打印info日志
     * @param {String} d 打印内容
     */
    info: function info(d) {
        if (util.log.islog) {
            console.info(d);
        }
    },
    /**
     * @description 打印log日志
     * @param {String} d 打印内容
     * @param 可变参数 用于格式刷打印日志，比如：LF.log.log("%d年%d月%d日",2011,3,26); 结果是：2011年3月26日
     * 支持的占位符有：字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）
     */
    log: function log(d) {
        for (var _len = arguments.length, t = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            t[_key - 1] = arguments[_key];
        }

        if (util.log.islog) {
            var _console;

            (_console = console).log.apply(_console, [d].concat(t));
        }
    },
    /**
     * @description 打印debug日志
     * @param {String} d 打印内容
     */
    debug: function debug(d) {
        if (this.islog) {
            console.debug(d);
        }
    },
    /**
     * @description 打印warn日志
     * @param {String} d 打印内容
     */
    warn: function warn(d) {
        if (this.islog) {
            console.warn(d);
        }
    },
    /**
     * @description 打印error日志
     * @param {String} d 打印内容
     */
    error: function error(d) {
        if (this.islog) {
            console.error(d);
        }
    }
};
util.animate = { //数字金额从0到当前位置的效果
    animate: function animate(opts) {
        var start = new Date();
        var timer = setInterval(function () {
            var timePassed = new Date() - start;
            var progress = timePassed / opts.duration;
            if (progress > 1) progress = 1;
            var delta = opts.delta(progress);
            opts.step(delta);
            if (progress == 1) {
                clearInterval(timer);
                opts.end();
            }
        }, opts.delay || 10);
    },
    change: function change(element, from, to, delta, duration) {
        from = from || 0;
        to = to || 80;
        util.animate.animate({
            delay: 20,
            duration: duration || 1000,
            delta: delta,
            step: function step(delta) {
                element.innerHTML = parseInt(from + (to - from) * delta);
            },
            end: function end() {
                element.innerHTML = to;
            }
        });
    }
};
util.time = {
    //获得某月的天数
    getMonthDays: function getMonthDays(myMonth) {
        var now = new Date(); //当前日期
        var nowMonth = now.getMonth(); //当前月
        var nowYear = now.getYear(); //当前年
        nowYear += nowYear < 2000 ? 1900 : 0; //
        var monthStartDate = new Date(nowYear, myMonth, 1);
        var monthEndDate = new Date(nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    },

    //获得本月的开始日期
    getMonthStartDate: function getMonthStartDate() {
        var now = new Date(); //当前日期
        var nowMonth = now.getMonth(); //当前月
        var nowYear = now.getYear(); //当前年
        nowYear += nowYear < 2000 ? 1900 : 0; //
        var monthStartDate = new Date(nowYear, nowMonth, 1);
        return util.util.formatDate(monthStartDate);
    },

    //获得本月的结束日期
    getMonthEndDate: function getMonthEndDate() {
        var now = new Date(); //当前日期
        var nowMonth = now.getMonth(); //当前月
        var nowYear = now.getYear(); //当前年
        nowYear += nowYear < 2000 ? 1900 : 0; //
        var monthEndDate = new Date(nowYear, nowMonth, this.getMonthDays(nowMonth));
        return util.util.formatDate(monthEndDate);
    }
};

util.util = {
    getArrayIndexByOptions: function getArrayIndexByOptions(arry, value, optionList) {

        for (var i = 0; i < arry.length; i++) {
            var res = true;
            for (var it in optionList) {
                if (arry[i][optionList[it]] != value[optionList[it]]) {
                    res = false;
                }
            }
            if (res) {
                return i;
            }
        }
        return -1;
    },
    getArrayObjectByValues: function getArrayObjectByValues(arry, value, option) {
        var arr = arguments;
        for (var i = 0; i < arry.length; i++) {
            if (arr.length > 3) {
                var find = true;
                for (var index = 2; index < arr.length; index++) {
                    if (arry[i][arr[index]] != value[arr[index]]) {
                        find = false;
                    }
                }
                if (find) return arry[i];
            } else {
                if (arry[i][option] == value[option]) {
                    return arry[i];
                }
            }
        }
        return null;
    },
    clearObj: function clearObj(obj) {
        for (var i in obj) {
            obj[i] = '';
        }
    },

    /*克隆一个对象*/
    cloneObj: function cloneObj(obj) {
        var newObj = {};
        if (obj instanceof Array) {
            newObj = [];
        }
        for (var key in obj) {
            var val = obj[key];
            newObj[key] = val !== null && (typeof val === "undefined" ? "undefined" : _typeof(val)) === 'object' ? util.util.cloneObj(val) : val;
        }
        return newObj;
    },
    cleanObj: function cleanObj(obj) {
        for (var key in obj) {
            if (obj[key] instanceof Array) {
                obj[key] = [];
            } else if (obj[key] instanceof Number) {
                obj[key] = 0;
            } else {
                obj[key] = '';
            }
        }
    },
    cloneOne: function cloneOne(obj) {
        var newObj = {};
        if (obj instanceof Array) {
            newObj = [];
        }
        for (var key in obj) {
            var val = obj[key];
            newObj[key] = (typeof val === "undefined" ? "undefined" : _typeof(val)) === 'object' ? '' : val;
        }
        return newObj;
    },

    /*对敏感信息 进行*号处理  比如id  身份证号,手机号*/
    infoPrivacy: function infoPrivacy(el) {
        var ht = el.innerHTML;
        var ls = el.innerHTML.length;
        var rep = void 0,
            length = 0;
        if (ls > 10) {
            rep = ht.substring(0, ls - 5);
            length = ls - 5;
        } else if (ls < 4) {
            rep = ht.substring(1, ls - 1);
            length = ls - 2;
        } else {
            rep = ht.substring(2, ls - 2);
            length = ls - 4;
        }
        var repl = '';
        for (var i = 0; i < length; i++) {
            repl += '*';
        }
        ht = ht.replace(rep, repl);
        el.innerHTML = ht;
    },
    extendObj: function extendObj(source, newdata) {
        if (source == null) return;
        for (var property in newdata) {
            if (_typeof(newdata[property]) === "object") {
                if (source[property] == null) {
                    if (newdata[property] instanceof Array) {
                        source[property] = [];
                    } else {
                        source[property] = {};
                    }
                }
                this.extendObj(source[property], newdata[property]);
            } else {
                source[property] = newdata[property];
            }
        }
        return source;
    },
    formatTime: function formatTime(el) {
        if (el == null || el == '') {
            return '';
        } else {
            return util.util.formatDates(parseInt(el));
        }
    },

    /*在传递数据的时候对对象进行中文编码处理*/
    encodeParemt: function encodeParemt(paremt) {
        var a = {};
        for (var i in paremt) {
            a[i] = encodeURI(paremt[i]);
        }
        return a;
    },

    /**
     * 获取url后面的参数  返回json
     */
    getParams: function getParams() {
        var url = window.location.hash;
        var theRequest = null;
        if (url.indexOf("?") != -1) {
            url = url.split("?")[1];
            theRequest = new Object();
            var str = url.substr(0);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
            }
        }
        if (theRequest != null) return theRequest;else return null;
    },
    formatDate: function formatDate(value, type, reg) {
        if (value == null) {
            return '';
        }
        // if (typeof (value) == 'string' && value.indexOf(' 00:00')) {
        //     value = value.split(' 00:00')[0];
        //     return value;
        // }
        var date = new Date(value);
        reg = reg == null ? '/' : reg;
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? '0' + d : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        h = h < 10 ? '0' + h : h;
        minute = minute < 10 ? '0' + minute : minute;
        if (type == null) {
            return y + reg + m + reg + d;
        } else if (type == 1) {
            return m + reg + d;
        } else if (type == 2) {
            return d + ":" + h;
        } else if (type == 3) {
            return y + reg + m + reg + d + " " + h + ":" + minute;
        } else if (type == 4) {
            return y + reg + (date.getMonth() + 1) + reg + d + " " + h + ":" + minute;
        }
    },
    formatDates: function formatDates(value) {
        if (value == null || value == '') {
            return '';
        }
        var date = new Date(value);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? '0' + d : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        var s = date.getSeconds(); //获取秒
        minute = minute < 10 ? '0' + minute : minute;
        s = s < 10 ? '0' + s : s;
        return y + '/' + m + '/' + d + " " + h + ":" + minute + ":" + s;
    },
    strToJson: function strToJson(jsonStr) {
        return JSON.parse(jsonStr);
    },
    jsonToStr: function jsonToStr(jsonObj) {
        return JSON.stringify(jsonObj);
    },
    //数组去重
    ArrayUnique: function ArrayUnique(arr) {
        var res = [];
        var json = {};
        for (var i = 0; i < arr.length; i++) {
            if (!json[arr[i]]) {
                res.push(arr[i]);
                json[arr[i]] = 1;
            }
        }
        return res;
    },
    /**
     * 数组删除指定的内容
     */
    removeByValue: function removeByValue(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
        return arr;
    },
    parseParam: function parseParam(queryConfig) {
        //吧对象转为url字符拼接
        var _str = "";
        for (var o in queryConfig) {
            if (queryConfig[o] != -1) {
                _str += o + "=" + queryConfig[o] + "&";
            }
        }
        var _str = _str.substring(0, _str.length - 1);
        return _str;
    },
    randomString: function randomString(len) {
        //生成一个随机字符串
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    empty: function empty(item) {
        for (var i in item) {
            item[i] = '';
        }
    },

    sysnLocastore: function sysnLocastore(state) {
        util.localstorage.put("activeMenu", state.activeMenu);
    },
    abbreviate: function abbreviate(str) {
        if (str == null) {
            return '';
        } else if (str.length < 2) {
            return str;
        } else {
            return str.substring(0, 2);
        }
    }
};
exports.default = util;

/***/ })
/******/ ]);