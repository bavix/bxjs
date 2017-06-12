;(function (window, document, undefined) {

    'use strict';

    if (typeof window.bx === "undefined") {
        throw new Error('bx object not found');
    }

    window.bx.fetch = function (url, obj) {

        if (obj === undefined) {
            obj = {};
        }

        if (!obj.hasOwnProperty('credentials')) {
            obj.credentials = 'include';
        }

        return fetch(url, obj);

    };

})(window, document);
