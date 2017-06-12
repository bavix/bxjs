;(function (window, document, undefined) {

    'use strict';

    if (typeof window.bx === "undefined") {
        throw new Error('bx object not found');
    }

    /**
     * model extensions
     *
     * @type {{}}
     */
    window.bx.modelExtensions = {};

    /**
     * model system
     *
     * @param properties
     * @returns {*}
     */
    window.bx.model = function (properties) {

        /**
         * @type {bx}
         */
        var self = this;

        /**
         * __proto__ old opera, ...
         * prototype other browsers
         *
         * @type {{_properties: {}, _modifiers: {}, _setData: bx.__proto__._setData, _reset: bx.__proto__._reset}}
         */
        self.fn = self.prototype = self.__proto__ = {

            /**
             * properties default
             */
            _properties: {},

            /**
             * properties modifiers
             *
             */
            _modifiers: {},

            /**
             * set data in model
             *
             * @param properties
             * @returns {*|bx}
             * @private
             */
            _setData: function (properties) {
                bx.each(properties, function (key, val) {
                    self.watch(key, function (prop, oldVal, newVal) {
                        this._modifiers[prop] = newVal;

                        return newVal;
                    });

                    self[key] = val;
                });

                return self._reset();
            },

            /**
             * reset model (properties = modifiers, modifiers = empty)
             *
             * @returns {bx}
             * @private
             */
            _reset: function () {
                bx.each(self._modifiers, function (key, value) {
                    self._properties[key] = value;
                    delete self._modifiers[key];
                });

                return self;
            }
        };

        bx.each(bx.modelExtensions, function (key, value) {
            self.fn[key] = value;
        });

        /**
         * return new model with properties
         */
        return self.fn._setData(properties);

    };

})(window, document);
