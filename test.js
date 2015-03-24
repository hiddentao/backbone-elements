"use strict";


var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();


var Backbone = require('backbone'),
  $ = require('jquery')(require("jsdom").jsdom().parentWindow),
  _ = require('underscore');


// override
Backbone.$ = $;


require('./backbone-elements.min');

var $el = $('<div><span class="test">bla</span></div>');

var test = module.exports = {};

test['default'] = function() {
  var MyView = Backbone.View.extend({
    elements: {
      'span.test': 'myspan'
    },
  });

  var view = new MyView({ el: $el });

  view.$myspan.text().should.eql('bla');
};



test['custom prefix'] = function() {
  var MyView = Backbone.View.extend({
    elementPrefix: '',

    elements: {
      'span.test': 'myspan'
    },
  });

  var view = new MyView({ el: $el });

  view.myspan.text().should.eql('bla');
};



test['manual setup'] = function() {
  var MyView = Backbone.View.extend({
    elementPrefix: '',

    elements: {
      'span.test': 'myspan'
    },

    initialize: function() {}
  });

  var view = new MyView({ el: $el });

  expect(view.myspan).to.be.undefined;

  view.refreshElements();

  view.myspan.text().should.eql('bla');
};



