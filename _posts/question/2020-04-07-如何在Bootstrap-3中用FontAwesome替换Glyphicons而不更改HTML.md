---
layout: question
title:  如何在Bootstrap 3中用FontAwesome替换Glyphicons，而不更改HTML？
date:   2020-04-07T03:38:51.000Z
description: 我在项目中使用Bootstrap 3，并且在使用FontAwesome图标库，而不是捆绑的Glyphicons。问题是我有一些依赖Glyphicons...
img: 
author: 老丝阿飞
category: question
answer: 3
tags: twitter-bootstrap CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在项目中</font><font style="vertical-align: inherit;">使用</font></font><a href="http://getbootstrap.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且在使用</font></font><a href="http://fortawesome.github.io/Font-Awesome/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FontAwesome</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图标库，而不是捆绑的</font></font><a href="http://getbootstrap.com/components/#glyphicons" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Glyphicons</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我有一些依赖Glyphicons的第三方组件，我不想更改其HTML。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过</font></font><a href="http://bower.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bower</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://sass-lang.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> + </font></font><a href="http://compass-style.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Compass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（SCSS）加入了</font><font style="vertical-align: inherit;">超棒的字体</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以在不更改HTML且不应用其他CSS类的情况下用FontAwesome替换Glyphicons？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4093篇《如何在Bootstrap 3中用FontAwesome替换Glyphicons，而不更改HTML？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在纯CSS中，只需定义glyphicon类，使其具有与font-awesome类（.fa）相同的属性，并与所需图标进行对应即可：</font></font></p>

<pre><code>.glyphicon{<font></font>
    display: inline-block;<font></font>
    font: normal normal normal 14px/1 FontAwesome;<font></font>
    font-size: inherit;<font></font>
    text-rendering: auto;<font></font>
    -webkit-font-smoothing: antialiased;<font></font>
    -moz-osx-font-smoothing: grayscale;<font></font>
}<font></font>
.glyphicon-chevron-left:before{<font></font>
    content:"\f053"<font></font>
}<font></font>
.glyphicon-chevron-right:before{<font></font>
    content:"\f054"<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L泡芙Jim</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下方法</font><font style="vertical-align: inherit;">通过SCSS </font><font style="vertical-align: inherit;">使用</font><a href="http://fortawesome.github.io/Font-Awesome/"><font style="vertical-align: inherit;">FontAwesome</font></a><font style="vertical-align: inherit;">重载</font></font><a href="http://getbootstrap.com/components/#glyphicons"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Glyphicon</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> CSS类</font><font style="vertical-align: inherit;">：</font></font><a href="http://fortawesome.github.io/Font-Awesome/"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre class="lang-scss prettyprint-override"><code>// Overloading "glyphicon" class with "fa".<font></font>
.glyphicon {<font></font>
<font></font>
    @extend .fa;<font></font>
<font></font>
    // Overloading "glyphicon-chevron-left" with "fa-arrow-left".<font></font>
    &amp;.glyphicon-chevron-left {<font></font>
        @extend .fa-chevron-left;<font></font>
    }<font></font>
<font></font>
    // Overloading "glyphicon-chevron-right" with "fa-arrow-right".<font></font>
    &amp;.glyphicon-chevron-right {<font></font>
        @extend .fa-chevron-right;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案</font></font><a href="https://github.com/angular-ui/bootstrap/issues/2475#issuecomment-49469969"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于代码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">史蒂芬Clontz</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保在此替代之前导入了FontAwesome SCSS。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的例子中我超载了以下两个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Glyphicons</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">雪佛龙左</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">雪佛龙权</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有以下</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FontAwesome</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图标：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">左箭头</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右箭头</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尊敬。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将需要重载第三方组件中使用的所有图标，以实现所需的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font><font style="vertical-align: inherit;">请将其</font><font style="vertical-align: inherit;">视为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HACK，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要重载所有图标</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它会使CSS不必要地变大！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑说服您的第三方供应商为不同的图标库实施支持。</font><font style="vertical-align: inherit;">这将是一个适当的解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了这个要点，以将所有glyphicon图标映射到超棒的字体。</font><font style="vertical-align: inherit;">我估计它具有约95％的准确性和覆盖率（glyphicon有一些无用的图标，而真棒字体则没有）。</font></font></p>

<p><a href="https://gist.github.com/blowsie/15f8fe303383e361958bd53ecb7294f9" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/blowsie/15f8fe303383e361958bd53ecb7294f9</font></font></a></p>

<p><code>code removed in favor of gist</code></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使这样做确实会重载所有图标，但是如果您从引导程序构建中删除所有glyphicon图标，您实际上也会节省一些字节（-字体的确很棒）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
