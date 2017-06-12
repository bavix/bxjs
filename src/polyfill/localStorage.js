/**
 * @author rez1dent3
 * @project bavix
 *
 * @library localStorage polyfill
 * @version 1.0
 *
 * @licence MIT
 */

;(function (window, undefined) {

    if (typeof window.localStorage === "undefined") {
        window[localStorage] = {
            _data: {},
            setItem: function (id, val) {
                return this._data[id] = String(val);
            },
            getItem: function (id) {
                return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
            },
            removeItem: function (id) {
                return delete this._data[id];
            },
            clear: function () {
                return this._data = {};
            }
        };
    }

})(window);
