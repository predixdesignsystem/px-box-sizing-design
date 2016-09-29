# px-box-sizing-design

The box-sizing module sets the `box-sizing` property of all elements to `border-box`. Using the `border-box` model makes it easier to understand how changes to an element's spacing properties like `margin` or `padding` will impact the flow of elements. [Read more about `box-sizing` on the Mozilla Developer Network website.](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

## Installation

Install the module and any dependencies using Bower. Run this task from the command line inside your project folder:

    bower install --save px-box-sizing-design

## Enable and Import

### Enable Flags

There are no flags to set before importing this module in your project Sass file.

### Import Sass

Import the module by placing this code into the `Objects` layer of your project Sass file:

     @import 'px-box-sizing-design/_generic.box-sizing.scss';

## Usage

Importing the module will set the following variable flag to `true`:

     $intuit-global-border-box : true

This will tell other modules that you are using the `border-box` CSS box model.

## Dependencies

This module doesn't have any dependencies.
