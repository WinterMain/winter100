---
layout: question
title:  使用jQuery选择和操作CSS伪元素，例如   before和   after
date:   2020-03-15T11:01:47.000Z
description: 有没有办法使用jQuery 选择/处理CSS伪元素，例如  before和  after（以及带有分号的旧版本）？例如，我的样式表具有以下规则：....
img: 
author: 神奇Sam
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法</font><font style="vertical-align: inherit;">使用jQuery </font><font style="vertical-align: inherit;">选择/处理CSS伪元素，例如</font></font><code>::before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>::after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（以及带有分号的旧版本）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我的样式表具有以下规则：</font></font></p>

<pre class="lang-css prettyprint-override"><code>.span::after{ content:'foo' }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用jQuery将'foo'更改为'bar'？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子十三小胖</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p>I made use of variables defined in <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" rel="nofollow noreferrer"><code>:root</code></a> inside <code>CSS</code> to modify the <code>:after</code> (the same applies to <code>:before</code>) <em>pseudo-element</em>, in particular to change the <code>background-color</code> value for a styled <code>anchor</code> defined by <code>.sliding-middle-out:hover:after</code> and the <code>content</code> value for another <code>anchor</code> (<code>#reference</code>) in the following <a href="https://codepen.io/ChemBioScripting/pen/zJJMKE" rel="nofollow noreferrer">demo</a> that generates random colors by using JavaScript/jQuery:</p>

<p><strong>HTML</strong></p>

<pre><code>&lt;a href="#" id="changeColor" class="sliding-middle-out" title="Generate a random color"&gt;Change link color&lt;/a&gt;<font></font>
&lt;span id="log"&gt;&lt;/span&gt;<font></font>
&lt;h6&gt;<font></font>
  &lt;a href="https://stackoverflow.com/a/52360188/2149425" id="reference" class="sliding-middle-out" target="_blank" title="Stack Overflow topic"&gt;Reference&lt;/a&gt;<font></font>
&lt;/h6&gt;<font></font>
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="https://cdn.rawgit.com/davidmerfield/randomColor/master/randomColor.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><strong>CSS</strong></p>

<pre><code>:root {<font></font>
    --anchorsFg: #0DAFA4;<font></font>
}<font></font>
a, a:visited, a:focus, a:active {<font></font>
    text-decoration: none;<font></font>
    color: var(--anchorsFg);<font></font>
    outline: 0;<font></font>
    font-style: italic;<font></font>
<font></font>
    -webkit-transition: color 250ms ease-in-out;<font></font>
    -moz-transition: color 250ms ease-in-out;<font></font>
    -ms-transition: color 250ms ease-in-out;<font></font>
    -o-transition: color 250ms ease-in-out;<font></font>
    transition: color 250ms ease-in-out;<font></font>
}<font></font>
.sliding-middle-out {<font></font>
    display: inline-block;<font></font>
    position: relative;<font></font>
    padding-bottom: 1px;<font></font>
}<font></font>
.sliding-middle-out:after {<font></font>
    content: '';<font></font>
    display: block;<font></font>
    margin: auto;<font></font>
    height: 1px;<font></font>
    width: 0px;<font></font>
    background-color: transparent;<font></font>
<font></font>
    -webkit-transition: width 250ms ease-in-out, background-color 250ms ease-in-out;<font></font>
    -moz-transition: width 250ms ease-in-out, background-color 250ms ease-in-out;<font></font>
    -ms-transition: width 250ms ease-in-out, background-color 250ms ease-in-out;<font></font>
    -o-transition: width 250ms ease-in-out, background-color 250ms ease-in-out;<font></font>
    transition: width 250ms ease-in-out, background-color 250ms ease-in-out;<font></font>
}<font></font>
.sliding-middle-out:hover:after {<font></font>
    width: 100%;<font></font>
    background-color: var(--anchorsFg);<font></font>
    outline: 0;<font></font>
}<font></font>
#reference {<font></font>
  margin-top: 20px;<font></font>
}<font></font>
.sliding-middle-out:before {<font></font>
  content: attr(data-content);<font></font>
  display: attr(data-display);<font></font>
}<font></font>
</code></pre>

<p><strong>JS/jQuery</strong></p>

<pre><code>var anchorsFg = randomColor();<font></font>
$( ".sliding-middle-out" ).hover(function(){<font></font>
    $( ":root" ).css({"--anchorsFg" : anchorsFg});<font></font>
});<font></font>
<font></font>
$( "#reference" ).hover(<font></font>
 function(){<font></font>
    $(this).attr("data-content", "Hello World!").attr("data-display", "block").html("");<font></font>
 },<font></font>
 function(){<font></font>
    $(this).attr("data-content", "Reference").attr("data-display", "inline").html("");<font></font>
 }<font></font>
);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearGilSam</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管它们是通过浏览器通过CSS呈现的，就像它们与其他真实DOM元素一样，但伪元素本身并不属于DOM，因为顾名思义，伪元素不是真实元素，因此您不能直接使用jQuery（或与此相关的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> JavaScript API，甚至不是</font></font><a href="http://www.w3.org/TR/selectors-api" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Selectors API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来</font><font style="vertical-align: inherit;">选择和操作它们</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这适用于您要通过脚本修改其样式的所有伪元素，而不仅仅是</font></font><code>::before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>::after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只能在运行时通过CSSOM（think </font></font><code>window.getComputedStyle()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">直接访问伪元素样式</font><font style="vertical-align: inherit;">，而jQuery以外</font><font style="vertical-align: inherit;">的CSSOM </font><font style="vertical-align: inherit;">不会公开该</font><font style="vertical-align: inherit;">样式</font></font><code>.css()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该方法也不支持伪元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您始终可以找到其他解决方法，例如：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将样式应用于一个或多个任意类的伪元素，然后在类之间进行切换（</font><font style="vertical-align: inherit;">有关快速示例，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://stackoverflow.com/questions/5041494/manipulating-css-pseudo-elements-using-jquery-e-g-before-and-after/5335771#5335771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">seucolega的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）—这是惯用的方式，因为它使用了简单的选择器（伪元素不是）区分元素和元素状态，以及它们的预期使用方式</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过更改文档样式表来操纵应用于所述伪元素的样式，这更像是骇客</font></font></p></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
