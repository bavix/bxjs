;(function (window, document, undefined) {

    'use strict';

    if (typeof window.bx === "undefined") {
        throw new Error('bx object not found');
    }

    window.bx.local = {
        get: function (name, _default) {
            var mixed = window.localStorage.getItem(name);

            return mixed === null ? _default : mixed;
        },
        set: function (name, value) {
            return window.localStorage.setItem(name, value);
        },
        clear: function () {
            return window.localStorage.clear();
        },
        remove: function (name) {
            return window.localStorage.removeItem(name);
        }
    };

})(window, document);
