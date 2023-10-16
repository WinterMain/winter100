---
layout: question
title:  使用Twitter Bootstrap 3将列居中
date:   2020-03-13T12:42:20.000Z
description: 如何在Twitter Bootstrap 3的容器（12列）内将一列大小的div居中？.centered {  background-color...
img: 
author: Tom猿
category: question
answer: 25
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在</font></font><a href="https://en.wikipedia.org/wiki/Bootstrap_%28front-end_framework%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter Bootstrap 3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的容器（12列）内将一列大小的div居中</font><font style="vertical-align: inherit;">？</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.centered {<font></font>
  background-color: red;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;body class="container"&gt;<font></font>
  &lt;div class="col-lg-1 col-offset-6 centered"&gt;<font></font>
    &lt;img data-src="holder.js/100x100" alt="" /&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/body&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一个</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类</font></font><code>.centered</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该类</font><font style="vertical-align: inherit;">在容器内居中。</font><font style="vertical-align: inherit;">如果有多个</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s，</font><font style="vertical-align: inherit;">我可以使用一行</font><font style="vertical-align: inherit;">，但是现在我只想要一个</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以一列为中心在容器内（12列）的大小。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也不确定上述方法是否足够好，因为其目的不是要抵消</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一半。</font><font style="vertical-align: inherit;">我不需要外部的自由空间，</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且内容的内容</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按比例缩小。</font><font style="vertical-align: inherit;">我想</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在div之外的空白处均匀分布</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（缩小直到容器宽度等于一列）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1563篇《使用Twitter Bootstrap 3将列居中》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Bootstrap 4 solution:</p>

<pre><code>&lt;div class="container"&gt;<font></font>
  &lt;div class="row"&gt;<font></font>
    &lt;div class="col align-self-center"&gt;<font></font>
      Column in the middle, variable width<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Try this</p>

<pre><code>&lt;div class="row"&gt;<font></font>
    &lt;div class="col-xs-2 col-xs-offset-5"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p>You can use other <code>col</code> as well like <code>col-md-2</code>, etc.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Try this code.</p>

<pre><code>&lt;body class="container"&gt;<font></font>
    &lt;div class="col-lg-1 col-lg-offset-10"&gt;<font></font>
        &lt;img data-src="holder.js/100x100" alt="" /&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre>

<p>Here I have used col-lg-1, and the offset should be 10 for properly centered the div on large devices. If you need it to center on medium-to-large devices then just change the lg to md and so on.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinTom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>If you put this on your row, all of the columns inside will be centered:</p>

<pre><code>.row-centered {<font></font>
    display: flex;<font></font>
    justify-content: space-between;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Append the following snippet inside your .row or your .col. This is for Bootstrap 4*.</p>

<pre><code>d-flex justify-content-center
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L木嘢</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>I suggest simply to use the class <code>text-center</code>:</p>

<pre><code>&lt;body class="container"&gt;<font></font>
    &lt;div class="col-md-12 text-center"&gt;<font></font>
        &lt;img data-src="holder.js/100x100" alt="" /&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>You can use the very flexible solution flexbox to your Bootstrap.</p>

<pre><code>justify-content: center;
</code></pre>

<p>can center your column.</p>

<p>Check out <em><a href="https://css-tricks.com/almanac/properties/f/flex/" rel="nofollow noreferrer">flex</a></em>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无达蒙JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Because I never have the need to center only a single <code>.col-</code> within a <code>.row</code>, I set the following class on the wrapping <code>.row</code> of my target columns.</p>

<pre><code>.col-center &gt; [class*="col-"] {<font></font>
    float: none;<font></font>
    margin-left: auto;<font></font>
    margin-right: auto;<font></font>
}<font></font>
</code></pre>

<p>Example</p>

<pre><code>&lt;div class="full-container"&gt;<font></font>
    &lt;div class="row col-center"&gt;<font></font>
        &lt;div class="col-xs-11"&gt;<font></font>
            Foo<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="col-xs-11"&gt;<font></font>
            Bar<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>This is probably not the best answer, but there is one more creative solution to this. As pointed out by koala_dev the column offsetting works only for even column sizes. However, by nesting rows you can achieve centering uneven columns as well.  </p>

<p>To stick with the original question where you want to center a column of 1 inside a grid of 12. </p>

<ol>
<li>Center a column of 2 by offsetting it 5</li>
<li>Make a nested row, so you get a new 12 columns inside your 2 columns.</li>
<li>Since you want to center a column of 1, and 1 is "half" of 2 (what we centered in step 1), you now need to center a column of 6 in your nested row, which is easily done by offsetting it 3. </li>
</ol>

<p>For example:</p>

<pre><code>&lt;div class="container"&gt;<font></font>
  &lt;div class="row"&gt;<font></font>
    &lt;div class="col-md-offset-5 col-md-2"&gt;<font></font>
      &lt;div class="row"&gt;<font></font>
        &lt;div class="col-md-offset-3 col-md-6"&gt;<font></font>
          centered column with that has an "original width" of 1 col<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p>See <a href="https://jsfiddle.net/L7rczrhh/" rel="noreferrer">this fiddle</a>, please note that you have to increase the size of the output window in order too see the result, otherwise the columns will wrap.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>With bootstrap 4 you can simply try <code>justify-content-md-center</code> as it is mentioned <a href="https://getbootstrap.com/docs/4.0/layout/grid/" rel="nofollow noreferrer">here</a></p>

<pre><code>&lt;div class="container"&gt;<font></font>
    &lt;div class="row justify-content-md-center"&gt;<font></font>
        &lt;div class="col col-lg-2"&gt;<font></font>
              1 of 3<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="col-md-auto"&gt;<font></font>
            Variable width content<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="col col-lg-2"&gt;<font></font>
              3 of 3<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
        &lt;div class="col"&gt;<font></font>
             1 of 3<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="col-md-auto"&gt;<font></font>
                Variable width content<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="col col-lg-2"&gt;<font></font>
              3 of 3<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/D1VEf.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/D1VEf.jpg" alt="enter image description here"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>To center the col- we need to use the below code. cols are floater elements besides margin auto. We will also set it to float none,</p>

<pre><code>&lt;body class="container"&gt;<font></font>
    &lt;div class="col-lg-1 col-md-4 centered"&gt;<font></font>
        &lt;img data-src="holder.js/100x100" alt="" /&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre>

<p>To center the above col-lg-1 with class of centered, we will write:</p>

<pre><code>.centered {<font></font>
    float: none;<font></font>
    margin-left: auto;<font></font>
    margin-right: auto;<font></font>
}<font></font>
</code></pre>

<p>To center the content inside the div, use <code>text-align:center</code>,</p>

<pre><code>.centered {<font></font>
    text-align: center;<font></font>
}<font></font>
</code></pre>

<p>If you want to center it only on the desktop and larger screen, not on mobile, then use the following media query.</p>

<pre><code>@media (min-width: 768px) {<font></font>
    .centered {<font></font>
        float: none;<font></font>
        margin-left: auto;<font></font>
        margin-right: auto;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p>And to center the div only on mobile version, use the below code.</p>

<pre><code>@media (max-width: 768px) {<font></font>
    .centered {<font></font>
        float: none;<font></font>
        margin-left: auto;<font></font>
        margin-right: auto;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1>We can achieve this by using the table layout mechanism:</h1>

<p>The mechanism is:</p>

<ol>
<li>Wrap all columns in one div.</li>
<li>Make that div as a table with a fixed layout.</li>
<li>Make each column as a table cell.</li>
<li>Use vertical-align property to control content position.</li>
</ol>

<h2>The sample demo is <a href="https://geekymohan.wordpress.com/2017/04/05/bootstrap-3-columns-with-same-height-and-vertically-aligned/" rel="nofollow noreferrer">here</a></h2>

<p><a href="https://i.stack.imgur.com/bxBZP.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/bxBZP.png" alt="Enter image description here"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该行，并可以确保内部div具有</font></font><code>display:inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不带</font></font><code>float</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如：</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
    &lt;div class="row text-center" style="background-color : black;"&gt;<font></font>
        &lt;div class="redBlock"&gt;A red block&lt;/div&gt;<font></font>
        &lt;div class="whiteBlock"&gt;A white block&lt;/div&gt;<font></font>
        &lt;div class="yellowBlock"&gt;A yellow block&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和CSS：</font></font></p>

<pre><code>.redBlock {<font></font>
    width: 100px;<font></font>
    height: 100px;<font></font>
    background-color: aqua;<font></font>
    display: inline-block<font></font>
}<font></font>
.whiteBlock {<font></font>
    width: 100px;<font></font>
    height: 100px;<font></font>
    background-color: white;<font></font>
    display: inline-block<font></font>
}<font></font>
.yellowBlock {<font></font>
    width: 100px;<font></font>
    height: 100px;<font></font>
    background-color: yellow;<font></font>
    display: inline-block<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴：</font><a href="http://jsfiddle.net/DTcHh/3177/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="http://jsfiddle.net/DTcHh/3177/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/DTcHh/3177/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿阳光</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">偏移的另一种方法是具有两个空行，例如：</font></font></p>

<pre><code>&lt;div class="col-md-4"&gt;&lt;/div&gt;<font></font>
&lt;div class="col-md-4"&gt;Centered Content&lt;/div&gt;<font></font>
&lt;div class="col-md-4"&gt;&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;div class="container-fluid"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
        &lt;div class="col-lg-4 col-lg-offset-4"&gt;<font></font>
            &lt;img src="some.jpg"&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙逆天Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将显示内容的一列设置为col-xs-12（移动设备优先;-），并配置容器即可控制您希望居中内容的宽度，因此：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.container {<font></font>
  background-color: blue;<font></font>
}<font></font>
.centered {<font></font>
    background-color: red;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;body class="container col-xs-offset-3 col-xs-6"&gt;<font></font>
    &lt;div class="col-xs-12 centered"&gt;<font></font>
        &lt;img data-src="holder.js/100x100" alt="" /&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;</code></pre>
</div>
</div>
<p></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;body class="container col-xs-offset-1 col-xs-10"&gt;<font></font>
    &lt;div class="col-xs-12 centered"&gt;<font></font>
        &lt;img data-src="holder.js/100x100" alt="" /&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关演示，请参见</font></font><a href="http://codepen.io/Kebten/pen/gpRNMe" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codepen.io/Kebten/pen/gpRNMe</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可行。</font><font style="vertical-align: inherit;">可能是一种骇人听闻的方式，但是效果很好。</font><font style="vertical-align: inherit;">已对其进行响应性测试（Y）。</font></font></p>

<pre><code>.centered {<font></font>
    background-color: teal;<font></font>
    text-align: center;<font></font>
}<font></font>
</code></pre>

<p><img src="https://i.stack.imgur.com/dGRBO.png" alt="桌面"></p>

<p><img src="https://i.stack.imgur.com/tvMEA.png" alt="反应灵敏"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德猿JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><a href="https://en.wikipedia.org/wiki/Bootstrap_%28front-end_framework%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本3具有.text-center类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加此类：</font></font></p>

<pre><code>text-center
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将简单地加载以下样式：</font></font></p>

<pre><code>.text-center {<font></font>
    text-align: center;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;div class="container-fluid"&gt;<font></font>
  &lt;div class="row text-center"&gt;<font></font>
     &lt;div class="col-md-12"&gt;<font></font>
          Bootstrap 4 is coming....<font></font>
      &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;   <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙古一神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Bootstrap v4，只需添加</font></font><code>.justify-content-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>.row</code> <code>&lt;div&gt;</code></p>

<pre><code>&lt;div class="row justify-content-center"&gt;<font></font>
    &lt;div class="col-1"&gt;centered 1 column&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><a href="https://getbootstrap.com/docs/4.0/utilities/flex/#justify-content" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.0/utilities/flex/#justify-content</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无逆天GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对中心列的使用方法是</font></font><code>display: inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于列和</font></font><code>text-align: center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器父级。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需将CSS类“居中”添加到中</font></font><code>row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></h3>

<pre><code>&lt;div class="container-fluid"&gt;<font></font>
  &lt;div class="row centered"&gt;<font></font>
    &lt;div class="col-sm-4 col-md-4"&gt;<font></font>
        Col 1<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="col-sm-4 col-md-4"&gt;<font></font>
        Col 2<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="col-sm-4 col-md-4"&gt;<font></font>
        Col 3<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></h3>

<pre><code>.centered {<font></font>
   text-align: center;<font></font>
   font-size: 0;<font></font>
}<font></font>
.centered &gt; div {<font></font>
   float: none;<font></font>
   display: inline-block;<font></font>
   text-align: left;<font></font>
   font-size: 13px;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle：</font></font></strong> <font style="vertical-align: inherit;"><a href="http://jsfiddle.net/steyffi/ug4fzcjd/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http </font></a><strong><font style="vertical-align: inherit;">: </font></strong></font><a href="http://jsfiddle.net/steyffi/ug4fzcjd/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/steyffi/ug4fzcjd/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在为此提供了一个内置类</font></font><code>.center-block</code></p>

<pre><code>.center-block {<font></font>
  display: block;<font></font>
  margin-left: auto;<font></font>
  margin-right: auto;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您仍在使用2.X，则只需将其添加到CSS中即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，Bootstrap 3.1.1正在使用</font></font><code>.center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且该帮助程序类可用于列系统。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3 </font></font><a href="http://getbootstrap.com/css/#helper-classes-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助程序类中心</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请检查</font></font><a href="http://jsfiddle.net/e7eSP/1/show/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此jsfiddle DEMO</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
        &lt;div class="center-block"&gt;row center-block&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
        &lt;div class="col-md-6 brd"&gt;<font></font>
            &lt;div class="center-block"&gt;1 center-block&lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="col-md-6 brd"&gt;<font></font>
            &lt;div class="center-block"&gt;2 center-block&lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="row"&gt;<font></font>
    &lt;div class="col-xs-2 col-center-block"&gt;row col-xs-2 col-center-block&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><img src="https://i.stack.imgur.com/bHg4V.png" alt="助手班中心"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行列中心使用</font></font><code>col-center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">辅助类。</font></font></p>

<pre><code>.col-center-block {<font></font>
    float: none;<font></font>
    display: block;<font></font>
    margin: 0 auto;<font></font>
    /* margin-left: auto; margin-right: auto; */<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将以下内容添加到您的自定义CSS文件即可。</font><font style="vertical-align: inherit;">不建议直接编辑Bootstrap CSS文件，这会取消您使用</font></font><a href="http://en.wikipedia.org/wiki/Content_delivery_network" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CDN的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">能力</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>.center-block {<font></font>
    float: none !important<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap CSS（3.7版及更低版本）使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">margin：0 auto; </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但会被size容器的float属性覆盖。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加此类后，不要忘记按正确的顺序设置类。</font></font></p>

<pre><code>&lt;div class="col-md-6 center-block"&gt;Example&lt;/div&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的优选的方法</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为中心的列</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是使用“偏移”（即：</font></font><code>col-md-offset-3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><a href="http://codeply.com/go/Sv6Z9eR9kk" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3.x居中示例</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">居中元素</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，有一个</font></font><code>center-block</code> <a href="http://getbootstrap.com/css/#helper-classes-center" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助器类</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用</font></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中心的文本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（和内联元素）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="http://bootply.com/91632" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://bootply.com/91632" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//bootply.com/91632</font></font></a></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -如注释中所述，</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可处理列的内容和</font></font><code>display:block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素，但不适用于列本身（</font></font><code>col-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">divs），因为Bootstrap使用</font></font><code>float</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2018</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在有了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">居中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法已更改。</font></font></p>

<ul>
<li><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍用于</font></font><code>display:inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font></font></li>
<li><code>mx-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为中心</font></font><code>display:block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font></font></li>
<li><code>offset-*</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font></em> <code>mx-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用于居中网格列</font></font></li>
</ul>

<p><code>mx-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（自动x轴边距）将围绕</font></font><code>display:block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>display:flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有一元件</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">限定的宽度</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，（ ，</font><font style="vertical-align: inherit;">，</font></font><code>%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> </font><font style="vertical-align: inherit;">等。）。</font><strong><font style="vertical-align: inherit;">默认情况下，</font></strong><font style="vertical-align: inherit;">在网格列上</font><strong><font style="vertical-align: inherit;">使用Flexbox</font></strong><font style="vertical-align: inherit;">，因此还有多种flexbox居中方法。</font></font><code>vw</code><font style="vertical-align: inherit;"></font><code>px</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><a href="http://www.codeply.com/go/SOSvvKpLOc" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Bootstrap 4水平居中</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关BS4中的垂直居中的信息，请参见</font></font></strong> <a href="https://stackoverflow.com/a/41464397/171456"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/41464397/171456</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两种方法可以使</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3中</font><font style="vertical-align: inherit;">的列居中</font><font style="vertical-align: inherit;">：</font></font></p>

<h2><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法1（偏移）：</font></font></strong></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一种方法使用Bootstrap自己的偏移量类，因此它不需要更改标记，也不需要额外的CSS。</font><font style="vertical-align: inherit;">关键是将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">偏移量设置为等于行剩余大小的一半</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，例如，大小为2的列将通过添加偏移量5（即）居中</font></font><code>(12-2)/2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在标记中，它看起来像：</font></font></p>

<pre><code>&lt;div class="row"&gt;<font></font>
    &lt;div class="col-md-2 col-md-offset-5"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，此方法有一个明显的缺点。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它仅适用于偶数列的尺寸</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以只</font></font><code>.col-X-2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.col-X-4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>col-X-6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>col-X-8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>col-X-10</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持。</font></font></p>

<hr>

<h2><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法2（旧</font></font><code>margin:auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></strong></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">使用成熟的</font><font style="vertical-align: inherit;">技术</font><font style="vertical-align: inherit;">将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何列大小居中</font></font></strong><font style="vertical-align: inherit;"></font><code>margin: 0 auto;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您只需要注意Bootstrap的网格系统添加的浮动即可。</font><font style="vertical-align: inherit;">我建议定义一个自定义CSS类，如下所示：</font></font></p>

<pre><code>.col-centered{<font></font>
    float: none;<font></font>
    margin: 0 auto;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以将其添加到任何屏幕尺寸的任何列尺寸，并且它将与Bootstrap的响应式布局无缝协作：</font></font></p>

<pre><code>&lt;div class="row"&gt;<font></font>
    &lt;div class="col-lg-1 col-centered"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这两种方法，您都可以跳过</font></font><code>.row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素并将列居中放置在中</font></font><code>.container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是由于容器类中的填充，您会注意到实际列大小的最小差异。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于v3.0.1 Bootstrap具有一个名为的内置类，该类</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>margin: 0 auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但缺少</font></font><code>float:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此可以将其添加到CSS中以使其与网格系统一起使用。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
