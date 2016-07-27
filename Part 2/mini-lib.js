'use strict';

        var toString = Object.prototype.toString;

        function isArray(obj) {
            return toString.call(obj) === "[object Array]";
        }

        function isBoolean(obj) {
                toString.call(obj) === "[object Boolean]";
        }

        function isDate(obj) {
            return toString.call(obj) === "[object Date]";
        }

        function isNumber(obj) {
            return toString.call(obj) === "[object Number]";
        }

        function isString(obj) {
            return toString.call(obj) === "[object String]";
        }

        function isFunction(obj) {
            return toString.call(obj) === "[object Function]";
        }

        function isUndefined(obj) {
            return obj === undefined;
        }

        function isNull(obj) {
            return obj === null;
		}


  	function first(arr) {
            return arr[0];
        }


        function last(arr) {
	    var n=arr.length;
	    var lastIndex=n-1;
	    return arr[lastIndex];
        }


