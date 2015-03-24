# backbone-elements

[![Build Status](https://secure.travis-ci.org/hiddentao/backbone-elements.png)](http://travis-ci.org/hiddentao/backbone-elements)

This library allows you to easily define and use child elements within your Backbone views:

```coffee
class View extends Backbone.View
  elements:
    ".status": "status"
    ".child-element > div": "childDiv"

  events:
    "click a.another-div": "_clickHandler"

  initialize: ->
    super // parent initialize() calls @refreshElements()
    console.log 'started'

  # use the references in functions
  _clickHandler: ->
    @$status.text "clicked"
    @$childDiv.remove()

    @refreshElements() # refresh element references
```

You can change the default element prefix too:


```coffee
class View extends Backbone.View
  elementPrefix: ''

  elements:
    ".status": "status"
    ".child-element > div": "childDiv"

  events:
    "click a.another-div": "_clickHandler"

  initialize: ->
    super // parent initialize() calls @refreshElements()
    console.log 'started'

  # use the references in functions
  _clickHandler: ->
    @status.text "clicked"
    @childDiv.remove()

    @refreshElements() # refresh element references
```

### node.js

Install using [npm](http://npmjs.org/):

    $ npm install backbone-elements

### Browser

Use [bower](https://github.com/bower/bower):

    $ bower install backbone-elements

## Building

To build the code and run the tests:

    $ npm install -g gulp
    $ npm install
    $ gulp


## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](https://github.com/hiddentao/backbone-elements/blob/master/CONTRIBUTING.md).


## License

MIT - see [LICENSE.md](https://github.com/hiddentao/backbone-elements/blob/master/LICENSE.md)

