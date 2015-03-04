# Box-sizing

The Predix Experience `box-sizing` module causes all elements to use the more useful `border-box` box model. This module is a fork of the [inuitcss Box-sizing module](https://github.com/inuitcss/generic.box-sizing).

## Dependency

Px's Box-sizing module depends on one other Px module:

* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Upstream dependency

The Box-sizing module is also an upstream dependency in this meta kit:

* [px-starter-kit-design](https://github.sw.ge.com/pxc/px-starter-kit-design)

## Installation

Install this module and its dependency using bower:

    bower install --save https://github.sw.ge.com/pxc/px-box-sizing-design.git

Once installed, `@import` into your project's Sass file in its Generic layer:

    @import "../px-box-sizing-design/generic.box-sizing";

See https://github.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('generic.box-sizing') { ... }

## Usage

By importing the Box-sizing module this variable flag is set to true:

    $inuit-global-border-box

This tells other modules you are using the `border-box` CSS box model.
