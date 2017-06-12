;(function (window, document, undefined) {

    'use strict';

    if (typeof window.bx === "undefined") {
        throw new Error('bx object not found');
    }

    window.bx.el = {

        id: function (obj, string) {
            return (string ? obj : window.document).getElementById(string || obj);
        },

        tag: function (obj, string) {
            return (string ? obj : window.document).getElementsByTagName(string || obj);
        },

        name: function (obj, string) {
            return (string ? obj : window.document).getElementsByName(string || obj);
        },

        find: function (obj, string) {
            return (string ? obj : window.document).querySelector(string || obj);
        },

        findAll: function (obj, string) {
            return (string ? obj : window.document).querySelectorAll(string || obj);
        },

        className: function (obj, string) {
            return (string ? obj : window.document).getElementsByClassName(string || obj);
        },

        at: function (el, i) {
            el = this.load(el);

            if (typeof el.length === "undefined") {
                el = [el];
            }

            return typeof el[i] === "undefined" ? null : el[i];
        },

        load: function (el) {
            if (typeof el === "string") {
                el = bx.el.find(el);
            }

            return el;
        },

        val: function (el) {
            el = bx.el.load(el);

            return el.value || el.innerText;
        },

        html: function (el) {
            return bx.el.load(el).innerHTML;
        },

        one: function (el, type, listener) {

            var callable = function (e) {
                listener.call(this, e);
                bx.el.off(el, type, callable)
            };

            return this.on(el, type, callable);
        },

        _on: function (el, type, selector, listener) {

            if (listener !== undefined) {
                return this.on(el, type, function (event) {
                    if (event.target.matches(selector)) {
                        listener.bind(event.target)(event);
                    }
                });
            }
            else {
                listener = selector;
            }

            el = bx.el.load(el);

            if (typeof el.addEventListener === "undefined") {
                return el.attachEvent(type, listener);
            }

            return el.addEventListener(type, listener, false);
        },

        on: function (el, type, selector, listener) {
            bx.each(bx.el.load(el), function () {
                return bx.el._on(el, type, selector, listener);
            })
        },

        _off: function (el, type, listener) {

            el = bx.el.load(el);

            if (typeof el.removeEventListener === "undefined") {
                return el.detachEvent(type, listener);
            }

            return el.removeEventListener(type, listener, false);
        },

        off: function (el, type, listener) {
            bx.each(bx.el.load(el), function () {
                return bx.el._off(el, type, listener);
            })
        }

    };

    window.bx.ready = function (document, callable) {

        if (callable === undefined) {
            callable = document;
            document = window.document;
        }

        document = bx.el.load(document);

        bx.el.on(document, 'DOMContentLoaded', callable);

        if (document.readyState === 'loading') {
            bx.el.on(document, 'DOMContentLoaded', callable);
        } else if (document.readyState === 'complete') {
            var event = new Event('DOMContentLoaded');
            document.dispatchEvent(event);
        }

    };

    window.bx.each = function (data, callable) {

        // element to array
        if (typeof data.dispatchEvent === "function") {
            data = [data];
        }

        try {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    callable(key, data[key]);
                }
            }
        } catch (e) {
            if (Array.isArray(data)) {
                data.forEach(function (value, key) {
                    callable(key, value);
                });
            } else {
                Object.keys(data).forEach(function (key, _) {
                    if (data.hasOwnProperty(key)) {
                        callable(key, data[key]);
                    }
                });
            }
        }

        return data;
    };

})(window, document);
