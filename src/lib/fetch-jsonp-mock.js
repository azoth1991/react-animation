import 'whatwg-fetch';
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.fetchJsonp = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';


    var fetchJsonp = function fetchJsonp(url) {

        return new Promise(function (resolve) {
            var urlArr = url.split('/');
            var dataurl = urlArr[urlArr.length - 1];


            fetch('/data/' + dataurl + '.json')
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                resolve({
                    json: function () {
                        return json;
                    }
                });
            })


        });
    };


    module.exports = fetchJsonp;
});
