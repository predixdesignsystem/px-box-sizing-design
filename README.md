# px-box-sizing-design

The Predix UI Box Sizing module sets the `box-sizing` property of all elements to `border-box`. Using the `border-box` model makes it easier to understand how changes to an element's spacing properties like `margin` or `padding` will impact the flow of elements. [Read more about `box-sizing` on the Mozilla Developer Network website.](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)


## Dependencies

The `px-box-sizing-design` module doesn't have any dependencies.


## Installation

Install this module and its dependencies using bower:

    bower install --save px-box-sizing-design

Once installed, `@import` into your project's Sass file in its Generic layer:

    @import 'px-box-sizing-design/_generic.box-sizing.scss';

## Usage


Importing this module in your Sass will automatically set the following variable flag to `true` for other components:

```
$intuit-global-border-box : true;
```

This will tell other modules that you are using the `border-box` CSS box model. You don't have to do anything else.

The component will also set all elements to use `box-sizing: border-box`.



Please view the full API [here](http://predixdev.github.io/px-box-sizing-design/)
