/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-box-sizing-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-box-sizing-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-box-sizing-design" description="The box-sizing module sets the box-sizing property of all elements to border-box. Using the border-box model makes it easier to understand how changes to an element's spacing properties like margin or padding will impact the flow of elements." layer="generic" sassdoc-path="sassdoc.json" hide-demo-container="" selected-options="{{selectedOptions}}">

<!-- 2: Set Usage Info -->
<section slot="usage">
Importing this module in your Sass will automatically set the following variable flag to \`true\` for other components:

\`\`\`
\$intuit-global-border-box : true;
\`\`\`

This will tell other modules that you are using the \`border-box\` CSS box model. You don't have to do anything else.

The component will also set all elements to use \`box-sizing: border-box\`.
</section>

</px-sass-doc>
`,

  is: 'px-box-sizing-design-demo'
});
