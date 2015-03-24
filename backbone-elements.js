(function (root, factory) {
  "use strict";

  // AMD
  if (typeof define === 'function' && define.amd) {
    define(['undersore', 'jquery', 'backbone'], factory);
  }
  // CommonJS
  else if (typeof exports === 'object') {
    module.exports = factory(
      require('underscore'),
      require('jquery'),
      require('backbone')
    );
  }
  // Browser
  else {
    factory(root._, root.jQuery, root.Backbone);
  }
}(this, function (_, $, Backbone) {
  "use strict";

  _.extend(Backbone.View.prototype, {
    elementPrefix: '$',

    refreshElements: function() {
      var self = this;

      // if we have an elements member then initialize the elements within
      if (self.elements) {
        _.each(self.elements, function(fieldName, jQuerySelector) {
          self[self.elementPrefix + fieldName] = self.$el.find(jQuerySelector);
        });
      }      
    },

    initialize: function() {
      this.refreshElements();
    }
  });

}));



