/**
 * @author rez1dent3
 * @project bavix
 *
 * @library watch polyfill
 * @version 1.0
 *
 * @licence MIT
 */

;(function (window, undefined) {

    if (!Object.prototype.watch) {
        Object.defineProperty(Object.prototype, "watch", {
            enumerable: false
            , configurable: true
            , writable: false
            , value: function (prop, handler) {
                var oldVal = this[prop]
                    , newVal = oldVal
                    , getter = function () {
                        return newVal;
                    }
                    , setter = function (val) {
                        oldVal = newVal;
                        return newVal = handler.call(this, prop, oldVal, val);
                    }
                ;

                if (delete this[prop]) {
                    Object.defineProperty(this, prop, {
                        get: getter
                        , set: setter
                        , enumerable: true
                        , configurable: true
                    });
                }
            }
        });
    }

    if (!Object.prototype.unwatch) {
        Object.defineProperty(Object.prototype, "unwatch", {
            enumerable: false
            , configurable: true
            , writable: false
            , value: function (prop) {
                var val = this[prop];
                delete this[prop];
                this[prop] = val;
            }
        });
    }

})(window);
