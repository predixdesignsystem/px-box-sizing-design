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

#### A note about relative @import paths

Paths to a project's Bower dependencies differ depending on whether you are in the project itself (dependencies in some
a Bower managed directory in the project) vs. using the project 'downstream' (dependencies are siblings of the project).
Ideally we want to be able to 'build' in both cases without a lot of magic.

For Sass imports, can use the 'includePaths' option on the Grunt sass task to name a starting point to look for
relative paths. IncludePath 'bower_components/*' in the 'sass' task allows the actual @import paths in Sass files to start
with '../' so that they will resolve in either case described above and make editors happy.

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('generic.box-sizing') { ... }

## Usage

By importing the Box-sizing module this variable flag is set to true:

    $inuit-global-border-box

This tells other modules you are using the `border-box` CSS box model.
