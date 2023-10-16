---
layout: question
title:  handlebars.js {{#if}}中的逻辑运算符
date:   2020-03-12T12:41:25.000Z
description: handlebars JS中是否可以将逻辑运算符合并到标准handlebars.js条件运算符中？像这样：{{#if section1 || sect...
img: 
author: 米亚小小神乐
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">handlebars JS中是否可以将逻辑运算符合并到标准handlebars.js条件运算符中？</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>{{#if section1 || section2}}<font></font>
.. content<font></font>
{{/if}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以编写自己的帮助程序，但是首先我想确保自己不会重新发明轮子。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1333篇《handlebars.js {{#if}}中的逻辑运算符》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我用于ember 1.10和ember-cli 2.0的方法。</font></font></p>

<pre><code>// app/helpers/js-x.js<font></font>
export default Ember.HTMLBars.makeBoundHelper(function (params) {<font></font>
  var paramNames = params.slice(1).map(function(val, idx) { return "p" + idx; });<font></font>
  var func = Function.apply(this, paramNames.concat("return " + params[0] + ";"))<font></font>
  return func.apply(params[1] === undefined ? this : params[1], params.slice(1));<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以在模板中使用它，如下所示：</font></font></p>

<pre><code>// used as sub-expression<font></font>
{{#each item in model}}<font></font>
  {{#if (js-x "this.section1 || this.section2" item)}}<font></font>
  {{/if}}<font></font>
{{/each}}<font></font>
<font></font>
// used normally<font></font>
{{js-x "p0 || p1" model.name model.offer.name}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的参数来表达的传递为</font></font><code>p0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等，并</font></font><code>p0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还可以作为参考</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomProSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Ember.js中，可以</font><font style="vertical-align: inherit;">在if阻止帮助</font><font style="vertical-align: inherit;">程序中使用</font></font><a href="http://guides.emberjs.com/v1.11.0/templates/conditionals/#toc_inline-if-syntax" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联if</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助程序。</font><font style="vertical-align: inherit;">它可以代替</font></font><code>||</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">逻辑运算符，例如：</font></font></p>

<pre><code>{{#if (if firstCondition firstCondition secondCondition)}}<font></font>
  (firstCondition || (or) secondCondition) === true<font></font>
{{/if}}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三JimHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照这两个指南</font></font><a href="http://discuss.emberjs.com/t/a-way-to-let-users-define-custom-made-bound-if-statements/2583/6" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，让用户定义自定义绑定if语句</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://gist.github.com/slindberg/9924116" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义绑定帮助器，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够在</font></font><a href="https://stackoverflow.com/questions/23851551/emberjs-pass-params-to-a-view-then-to-helper/23862168"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">stackoverflow</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的</font><font style="vertical-align: inherit;">这篇文章中调整我的共享视图，</font><font style="vertical-align: inherit;">以使用它代替标准的＃如果声明。</font><font style="vertical-align: inherit;">这不仅比在其中扔一个#if更安全。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该要旨中的自定义绑定帮手非常出色。 </font></font></p>

<pre><code>&lt;li&gt;<font></font>
    &lt;a href="{{unbound view.varProductSocialBlog}}"&gt;<font></font>
        {{#if-equal view.showDiv "true"}}&lt;div&gt;{{/if-equal}}&lt;i class="fa fa-rss-square"&gt;&lt;/i&gt;{{#if-equal view.showDiv "true"}}&lt;/div&gt;{{/if-equal}}<font></font>
        {{#if-equal view.showTitle "true"}}Blog{{/if-equal}}<font></font>
    &lt;/a&gt;<font></font>
&lt;/li&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="http://discuss.emberjs.com/t/a-way-to-let-users-define-custom-made-bound-if-statements/2583/6" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ember cli</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目来构建我的ember应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">撰写本文时的当前设置：</font></font></p>

<pre><code>DEBUG: -------------------------------<font></font>
DEBUG: Ember      : 1.5.1<font></font>
DEBUG: Ember Data : 1.0.0-beta.7+canary.b45e23ba<font></font>
DEBUG: Handlebars : 1.3.0<font></font>
DEBUG: jQuery     : 2.1.1<font></font>
DEBUG: -------------------------------<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阿飞古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，我们有用于多个逻辑&amp;&amp;和||的香草车把。</font><font style="vertical-align: inherit;">（和）：</font></font></p>

<pre><code>Handlebars.registerHelper("and",function() {<font></font>
    var args = Array.prototype.slice.call(arguments);<font></font>
    var options = args[args.length-1];<font></font>
<font></font>
    for(var i=0; i&lt;args.length-1; i++){<font></font>
        if( !args[i] ){<font></font>
            return options.inverse(this);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return options.fn(this);<font></font>
});<font></font>
<font></font>
<font></font>
Handlebars.registerHelper("or",function() {<font></font>
    var args = Array.prototype.slice.call(arguments);<font></font>
    var options = args[args.length-1];<font></font>
<font></font>
    for(var i=0; i&lt;args.length-1; i++){<font></font>
        if( args[i] ){<font></font>
            return options.fn(this);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return options.inverse(this);<font></font>
}<font></font>
<font></font>
// Results<font></font>
// {{#and foo bar sally bob}} yup {{else}} nope {{/and}} // yup<font></font>
// {{#or foo bar "" sally bob}} yup {{else}} nope {{/or}} // yup<font></font>
<font></font>
// {{#and foo bar "" sally bob}} yup {{else}} nope {{/and}} // nope<font></font>
// {{#or "" "" "" "" ""}} yup {{else}} nope {{/or}} // nope<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不确定使用“ and”和“ or”是否“安全”……也许更改为“ op_and”和“ op_or”之类的东西？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些在比较对象属性方面遇到问题的人，可以在助手内部添加此解决方案</font></font></p>

<p><a href="https://stackoverflow.com/questions/9261976/ember-js-helper-not-properly-recognizing-a-parameter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ember.js帮助器无法正确识别参数</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYTom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了一个由CoffeeScript制作的npm软件包，其中有许多令人难以置信的有用的辅助工具。</font><font style="vertical-align: inherit;">查看以下URL中的文档：</font></font></p>

<p><a href="https://npmjs.org/package/handlebars-helpers" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://npmjs.org/package/handlebars-helpers</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以执行以下</font></font><code>wget http://registry.npmjs.org/handlebars-helpers/-/handlebars-helpers-0.2.6.tgz</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作下载它们并查看软件包的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将能够执行类似</font></font><code>{{#is number 5}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>{{formatDate date "%m/%d/%Y"}}</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYPro达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过运行以下命令来</font><font style="vertical-align: inherit;">安装</font></font><a href="https://github.com/jmurphyau/ember-truth-helpers" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ember Truth Helpers</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件   </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">余烬安装ember-truth-helpers</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以开始使用大多数逻辑运算符（eq，not-eq，not和and，gt，gte，lt，lte，xor）。</font></font></p>

<pre><code>{{#if (or section1 section2)}}  <font></font>
...content  <font></font>
{{/if}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您甚至可以包含子表达式以进一步扩展，    </font></font></p>

<pre><code>{{#if (or (eq section1 "section1") (eq section2 "section2") ) }}  <font></font>
...content  <font></font>
{{/if}}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙阿飞斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与Jim的答案类似，但是通过使用一些创造力，我们还可以执行以下操作：</font></font></p>

<pre><code>Handlebars.registerHelper( "compare", function( v1, op, v2, options ) {<font></font>
<font></font>
  var c = {<font></font>
    "eq": function( v1, v2 ) {<font></font>
      return v1 == v2;<font></font>
    },<font></font>
    "neq": function( v1, v2 ) {<font></font>
      return v1 != v2;<font></font>
    },<font></font>
    ...<font></font>
  }<font></font>
<font></font>
  if( Object.prototype.hasOwnProperty.call( c, op ) ) {<font></font>
    return c[ op ].call( this, v1, v2 ) ? options.fn( this ) : options.inverse( this );<font></font>
  }<font></font>
  return options.inverse( this );<font></font>
} );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用它，我们得到类似：</font></font></p>

<pre><code>{{#compare numberone "eq" numbretwo}}<font></font>
  do something<font></font>
{{else}}<font></font>
  do something else<font></font>
{{/compare}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议将对象移出该函数，以获得更好的性能，但否则，您可以添加所需的任何比较函数，包括“ and”和“ or”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这些解决方案都不能解决“ OR”运算符“ cond1 || cond2”的问题。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查第一个值是否为真</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用“ ^”（或）并检查cond2是否为true</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{#if cond1}}采取行动{{^}} {{#if cond2}}采取行动{{/ if}} {{/ if}}</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">违反了DRY规则。</font><font style="vertical-align: inherit;">那么为什么不使用partial来减少混乱</font></font></p>

<pre><code>{{#if cond1}}<font></font>
    {{&gt; subTemplate}}<font></font>
{{^}}<font></font>
    {{#if cond2}}<font></font>
        {{&gt; subTemplate}}<font></font>
    {{/if}}<font></font>
{{/if}}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的块帮助器的链接：   </font></font><a href="http://doginthehat.com.au/2012/02/comparison-block-helper-for-handlebars-templates//#comment-44"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较块帮助器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它支持所有标准运算符，并允许您编写如下所示的代码。</font><font style="vertical-align: inherit;">真的很方便。</font></font></p>

<pre><code>{{#compare Database.Tables.Count "&gt;" 5}}<font></font>
There are more than 5 tables<font></font>
{{/compare}}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙小小米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改进的解决方案，基本上可以与任何二进制运算符一起使用（至少数字，字符串不能与eval一起很好地使用，如果使用带有用户输入的未定义的运算符，请注意可能的脚本注入）：</font></font></p>

<pre><code>Handlebars.registerHelper("ifCond",function(v1,operator,v2,options) {<font></font>
    switch (operator)<font></font>
    {<font></font>
        case "==":<font></font>
            return (v1==v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "!=":<font></font>
            return (v1!=v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "===":<font></font>
            return (v1===v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "!==":<font></font>
            return (v1!==v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "&amp;&amp;":<font></font>
            return (v1&amp;&amp;v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "||":<font></font>
            return (v1||v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "&lt;":<font></font>
            return (v1&lt;v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "&lt;=":<font></font>
            return (v1&lt;=v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "&gt;":<font></font>
            return (v1&gt;v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        case "&gt;=":<font></font>
         return (v1&gt;=v2)?options.fn(this):options.inverse(this);<font></font>
<font></font>
        default:<font></font>
            return eval(""+v1+operator+v2)?options.fn(this):options.inverse(this);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">车把支持嵌套操作。</font><font style="vertical-align: inherit;">如果我们将逻辑编写得有些不同，这将提供很大的灵活性（和更简洁的代码）。</font></font></p>

<pre><code>{{#if (or section1 section2)}}<font></font>
.. content<font></font>
{{/if}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，我们可以添加各种逻辑：</font></font></p>

<pre><code>{{#if (or <font></font>
        (eq section1 "foo")<font></font>
        (ne section2 "bar"))}}<font></font>
.. content<font></font>
{{/if}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需注册这些助手：</font></font></p>

<pre><code>Handlebars.registerHelper({<font></font>
    eq: function (v1, v2) {<font></font>
        return v1 === v2;<font></font>
    },<font></font>
    ne: function (v1, v2) {<font></font>
        return v1 !== v2;<font></font>
    },<font></font>
    lt: function (v1, v2) {<font></font>
        return v1 &lt; v2;<font></font>
    },<font></font>
    gt: function (v1, v2) {<font></font>
        return v1 &gt; v2;<font></font>
    },<font></font>
    lte: function (v1, v2) {<font></font>
        return v1 &lt;= v2;<font></font>
    },<font></font>
    gte: function (v1, v2) {<font></font>
        return v1 &gt;= v2;<font></font>
    },<font></font>
    and: function () {<font></font>
        return Array.prototype.slice.call(arguments).every(Boolean);<font></font>
    },<font></font>
    or: function () {<font></font>
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
