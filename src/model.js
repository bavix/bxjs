;(function (window, document, undefined) {

    'use strict';

    if (typeof window.bx === "undefined") {
        throw new Error('bx object not found');
    }

    window.bx.model = function (properties) {

        var self = this;

        self.fn = self.prototype = self.__proto__ = {
            _properties: {},
            _modifiers: {},
            _update: function (prop, oldVal, newVal) {
                this._modifiers[prop] = newVal;

                return newVal;
            },
            _reset: function () {
                this._properties = this._modifiers;
                this._modifiers = {};
            }
        };

        bx.each(properties, function (key, val) {
            self.watch(key, self._update);
            self[key] = val;
        });

    };

})(window, document);
