---
layout: question
title:  Angular2：如何在Angular-CLI中使用带有\`extend和mixins的bootstrap-sass？
date:   2020-03-24T07:31:35.000Z
description: 我正在尝试将Twitter Bootstrap与Angular 2，SCSS以及angular-cli生成的支架一起使用我想应用最佳实践，以免乱用特定...
img: 
author: LGil
category: question
answer: 0
tags: twitter-bootstrap CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将Twitter Bootstrap与Angular 2，SCSS以及angular-cli生成的支架一起使用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想应用最佳实践，以免乱用特定于Bootstrap的CSS类标记。</font><font style="vertical-align: inherit;">相反，我想通过@extend或作为mixins应用/使用它们：</font></font></p>

<pre><code>.mybutton {<font></font>
   @extend .btn;<font></font>
}<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题：</font></font></h3>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS编译器抛出错误，因为它不知道  </font></font><code>.btn</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我添加</font></font><code>@import "bootstrap";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-File中，它将在每个组件css中呈现完整的Bootstrap-CSS</font></font></li>
</ul>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止我做了什么</font></font></h1>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>@import "bootstrap";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到我的</font></font><code>app.component.scss</code></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用</font></font><code>ViewEncapsulation.None</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>AppComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以角2不适影子DOM仿真和引导CSS适用于整个应用程序</font></font></p>

<pre><code> @Component({<font></font>
    encapsulation: ViewEncapsulation.None<font></font>
 })<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中加入以下代码块</font></font><code>angular-cli-build.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以便相对代码</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以正常工作</font></font></p>

<pre><code>sassCompiler: {<font></font>
  cacheExclude: [/\/_[^\/]+$/],<font></font>
  includePaths: [ 'node_modules/bootstrap-sass/assets/stylesheets' ]<font></font>
},<font></font>
vendorNpmFiles: [<font></font>
    ...<font></font>
    'bootstrap-sass/assets/**/*'           <font></font>
]<font></font>
</code></pre></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3447篇《Angular2：如何在Angular-CLI中使用带有\`extend和mixins的bootstrap-sass？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
