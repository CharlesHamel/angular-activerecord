Ext.data.JsonP.ActiveRecord({"tagname":"class","name":"ActiveRecord","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-ActiveRecord","members":{"cfg":[],"property":[{"name":"$idAttribute","tagname":"property","owner":"ActiveRecord","meta":{},"id":"property-S-idAttribute"},{"name":"$urlRoot","tagname":"property","owner":"ActiveRecord","meta":{},"id":"property-S-urlRoot"}],"method":[{"name":"constructor","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-constructor"},{"name":"$destroy","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-destroy"},{"name":"$fetch","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-fetch"},{"name":"$initialize","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-initialize"},{"name":"$isNew","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-isNew"},{"name":"$parse","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-parse"},{"name":"$save","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-save"},{"name":"$sync","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-sync"},{"name":"$url","tagname":"method","owner":"ActiveRecord","meta":{},"id":"method-S-url"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":14,"files":[{"filename":"angular-activerecord.js","href":"angular-activerecord.html#ActiveRecord"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"extend","tagname":"method","owner":"ActiveRecord","meta":{"static":true},"id":"static-method-extend"},{"name":"fetchAll","tagname":"method","owner":"ActiveRecord","meta":{"static":true},"id":"static-method-fetchAll"},{"name":"fetchOne","tagname":"method","owner":"ActiveRecord","meta":{"static":true},"id":"static-method-fetchOne"},{"name":"sync","tagname":"method","owner":"ActiveRecord","meta":{"static":true},"id":"static-method-sync"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/angular-activerecord.html#ActiveRecord' target='_blank'>angular-activerecord.js</a></div></pre><div class='doc-contents'><p>ActiveRecord for AngularJS</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-S-idAttribute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-property-S-idAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-property-S-idAttribute' class='name expandable'>$idAttribute</a><span> : String</span></div><div class='description'><div class='short'>The default name for the JSON id attribute is \"id\". ...</div><div class='long'><p>The default name for the JSON id attribute is \"id\".</p>\n<p>Defaults to: <code>&#39;id&#39;</code></p></div></div></div><div id='property-S-urlRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-property-S-urlRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-property-S-urlRoot' class='name expandable'>$urlRoot</a><span> : String</span></div><div class='description'><div class='short'>Used by $url to generate URLs based on the model id. ...</div><div class='long'><p>Used by $url to generate URLs based on the model id. \"[urlRoot]/id\"</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ActiveRecord-method-constructor' class='name expandable'>ActiveRecord</a>( <span class='pre'>[properties], [options]</span> ) : <a href=\"#!/api/ActiveRecord\" rel=\"ActiveRecord\" class=\"docClass\">ActiveRecord</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>properties</span> : Object (optional)<div class='sub-desc'><p>Initialize the record with these property values.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ActiveRecord\" rel=\"ActiveRecord\" class=\"docClass\">ActiveRecord</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-S-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-destroy' class='name expandable'>$destroy</a>( <span class='pre'>[options]</span> ) : Object</div><div class='description'><div class='short'>Destroy this model on the server if it was already persisted. ...</div><div class='long'><p>Destroy this model on the server if it was already persisted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>sync options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>$q.promise</p>\n</div></li></ul></div></div></div><div id='method-S-fetch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-fetch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-fetch' class='name expandable'>$fetch</a>( <span class='pre'>[options]</span> ) : Object</div><div class='description'><div class='short'>(re)load data from the backend. ...</div><div class='long'><p>(re)load data from the backend.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>sync options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>$q.promise</p>\n</div></li></ul></div></div></div><div id='method-S-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-initialize' class='name expandable'>$initialize</a>( <span class='pre'>[properties], [options]</span> )</div><div class='description'><div class='short'>Constructor logic\n(which is called by the autogenerated constructor via ActiveRecord.extend) ...</div><div class='long'><p>Constructor logic\n(which is called by the autogenerated constructor via <a href=\"#!/api/ActiveRecord-static-method-extend\" rel=\"ActiveRecord-static-method-extend\" class=\"docClass\">ActiveRecord.extend</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>properties</span> : Object (optional)<div class='sub-desc'><p>Initialize the record with these property values.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-S-isNew' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-isNew' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-isNew' class='name expandable'>$isNew</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>A model is new if it lacks an id. ...</div><div class='long'><p>A model is new if it lacks an id.</p>\n</div></div></div><div id='method-S-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-parse' class='name expandable'>$parse</a>( <span class='pre'>data, [options]</span> ) : Object</div><div class='description'><div class='short'>Process the data from the response and return the record-properties. ...</div><div class='long'><p>Process the data from the response and return the record-properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data from the sync response.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>sync options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>$q.promise</p>\n</div></li></ul></div></div></div><div id='method-S-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-save' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-save' class='name expandable'>$save</a>( <span class='pre'>[values], [options]</span> ) : Object</div><div class='description'><div class='short'>Save the record to the backend. ...</div><div class='long'><p>Save the record to the backend.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object (optional)<div class='sub-desc'><p>Set these values before saving the record.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>sync options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>$q.promise</p>\n</div></li></ul></div></div></div><div id='method-S-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-sync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-sync' class='name expandable'>$sync</a>( <span class='pre'>operation, model, options</span> )</div><div class='description'><div class='short'>By default calls ActiveRecord.sync\nOverride to change the backend implementation on a per model bases. ...</div><div class='long'><p>By default calls <a href=\"#!/api/ActiveRecord-static-method-sync\" rel=\"ActiveRecord-static-method-sync\" class=\"docClass\">ActiveRecord.sync</a>\nOverride to change the backend implementation on a per model bases.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-S-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-method-S-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-method-S-url' class='name expandable'>$url</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Generate the url for the $save, $fetch and $destroy methods. ...</div><div class='long'><p>Generate the url for the $save, $fetch and $destroy methods.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-extend' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>protoProps, staticProps</span> ) : Function<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Create a subclass. ...</div><div class='long'><p>Create a subclass.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protoProps</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>staticProps</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>Constructor</p>\n</div></li></ul></div></div></div><div id='static-method-fetchAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-static-method-fetchAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-static-method-fetchAll' class='name expandable'>fetchAll</a>( <span class='pre'>[options]</span> ) : Object<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Load a collection of records. ...</div><div class='long'><p>Load a collection of records.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>$q.promise</p>\n</div></li></ul></div></div></div><div id='static-method-fetchOne' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-static-method-fetchOne' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-static-method-fetchOne' class='name expandable'>fetchOne</a>( <span class='pre'>id, [options]</span> ) : Object<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Load a single record. ...</div><div class='long'><p>Load a single record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Mixed<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>$q.promise</p>\n</div></li></ul></div></div></div><div id='static-method-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ActiveRecord'>ActiveRecord</span><br/><a href='source/angular-activerecord.html#ActiveRecord-static-method-sync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ActiveRecord-static-method-sync' class='name expandable'>sync</a>( <span class='pre'>operation, model, options</span> ) : Object<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Preform a CRUD operation on the backend. ...</div><div class='long'><p>Preform a CRUD operation on the backend.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>$q.promise</p>\n</div></li></ul></div></div></div></div></div></div></div>"});