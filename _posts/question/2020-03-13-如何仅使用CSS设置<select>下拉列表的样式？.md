---
layout: question
title:  如何仅使用CSS设置<select>下拉列表的样式？
date:   2020-03-13T09:35:59.000Z
description: 是否有仅CSS样式的<select>下拉菜单？我需要在<select>不使用任何JavaScript的情况下尽可能地样式化表单。我可以在CSS中使用哪...
img: 
author: 神奇Davaid
category: question
answer: 16
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有仅CSS样式的</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下拉菜单？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不使用任何JavaScript的情况下尽可能</font><font style="vertical-align: inherit;">地样式化</font><font style="vertical-align: inherit;">表单。</font><font style="vertical-align: inherit;">我可以在CSS中使用哪些属性？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码需要与所有主要浏览器兼容：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 6、7和8</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">火狐浏览器</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果浏览器</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以使用JavaScript实现：</font></font><a href="http://www.queness.com/post/204/25-jQuery-plugins-that-enhance-and-beautify-html-form-elements" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Example</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是在谈论简单的样式。</font><font style="vertical-align: inherit;">我想知道，仅CSS可以做得最好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在堆栈溢出中</font><font style="vertical-align: inherit;">发现了</font></font><a href="https://stackoverflow.com/questions/1072239/is-it-possible-to-style-a-select-box"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><a href="http://doctype.com/style-select" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Doctype.com上。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>You can also add a hover style to the dropdown.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>select {position:relative; float:left; width:21.4%; height:34px; background:#f9f9e0; border:1px solid #41533f; padding:0px 10px 0px 10px; color:#41533f; margin:-10px 0px 0px 20px; background: transparent; font-size: 12px; -webkit-appearance: none; -moz-appearance: none; appearance: none; background: url(https://alt-fit.com/images/global/select-button.png) 100% / 15% no-repeat #f9f9e0;}<font></font>
select:hover {background: url(https://alt-fit.com/images/global/select-button.png) 100% / 15% no-repeat #fff;}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;select name="type" class="select"&gt;&lt;option style="color:#41533f;" value="Select option"&gt;Select option&lt;/option&gt;<font></font>
&lt;option value="Option 1"&gt;Option 1&lt;/option&gt;<font></font>
&lt;option value="Option 2"&gt;Option 2&lt;/option&gt;<font></font>
&lt;option value="Option 3"&gt;Option 3&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanEva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>You definitely should do it like in <em><a href="http://www.electrictoolbox.com/style-select-optgroup-options-css/" rel="nofollow">Styling select, optgroup and options with CSS</a></em>. In many ways, background-color and color are just what you would typically need to style options, not the entire select.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神奇A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Yes.  You may style any HTML element by its tag name, like this:</p>

<pre><code>select {<font></font>
  font-weight: bold;<font></font>
}<font></font>
</code></pre>

<p>Of course, you can also use a CSS class to style it, like any other element:</p>

<pre><code>&lt;select class="important"&gt;<font></font>
  &lt;option&gt;Important Option&lt;/option&gt;<font></font>
  &lt;option&gt;Another Important Option&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
&lt;style type="text/css"&gt;<font></font>
  .important {<font></font>
    font-weight: bold;<font></font>
  }<font></font>
&lt;/style&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>A very nice example that uses <code>:after</code> and <code>:before</code> to do the trick is in <em><a href="http://cssdeck.com/labs/styling-select-box-with-css3" rel="nofollow">Styling Select Box with CSS3 | CSSDeck</a></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyDavaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>label {<font></font>
    position: relative;<font></font>
    display: inline-block;<font></font>
}<font></font>
select {<font></font>
    display: inline-block;<font></font>
    padding: 4px 3px 5px 5px;<font></font>
    width: 150px;<font></font>
    outline: none;<font></font>
    color: black;<font></font>
    border: 1px solid #C8BFC4;<font></font>
    border-radius: 4px;<font></font>
    box-shadow: inset 1px 1px 2px #ddd8dc;<font></font>
    background-color: lightblue;<font></font>
}<font></font>
</code></pre>

<p>This uses a background color for select elements and I removed the image..</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>select  {<font></font>
    outline: 0;<font></font>
    overflow: hidden;<font></font>
    height: 30px;<font></font>
    background: #2c343c;<font></font>
    color: #747a80;<font></font>
    border: #2c343c;<font></font>
    padding: 5px 3px 5px 10px;<font></font>
    -moz-border-radius: 6px;<font></font>
    -webkit-border-radius: 6px;<font></font>
    border-radius: 10px;<font></font>
}<font></font>
<font></font>
select option {border: 1px solid #000; background: #010;}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用该</font></font><code>clip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性裁剪</font></font><code>select</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的边框和箭头</font><font style="vertical-align: inherit;">，然后将自己的替换样式添加到包装器中：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>    &lt;!DOCTYPE html&gt;<font></font>
    &lt;html&gt;<font></font>
      &lt;head&gt;<font></font>
        &lt;style&gt;<font></font>
          select { position: absolute; clip:rect(2px 49px 19px 2px); z-index:2; }<font></font>
          body &gt; span { display:block; position: relative; width: 64px; height: 21px; border: 2px solid green;  background: url(http://www.stackoverflow.com/favicon.ico) right 1px no-repeat; }<font></font>
        &lt;/style&gt;<font></font>
      &lt;/head&gt;<font></font>
      &lt;span&gt;<font></font>
        &lt;select&gt;<font></font>
          &lt;option value=""&gt;Alpha&lt;/option&gt;<font></font>
          &lt;option value=""&gt;Beta&lt;/option&gt;<font></font>
          &lt;option value=""&gt;Charlie&lt;/option&gt;<font></font>
        &lt;/select&gt;<font></font>
      &lt;/span&gt;<font></font>
    &lt;/html&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用不透明度为零的第二个选择使按钮可单击：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>    &lt;!DOCTYPE html&gt;<font></font>
    &lt;html&gt;<font></font>
      &lt;head&gt;<font></font>
        &lt;style&gt;<font></font>
          #real { position: absolute; clip:rect(2px 51px 19px 2px); z-index:2; }<font></font>
          #fake { position: absolute; opacity: 0; }<font></font>
    <font></font>
          body &gt; span { display:block; position: relative; width: 64px; height: 21px; background: url(http://www.stackoverflow.com/favicon.ico) right 1px no-repeat; }<font></font>
        &lt;/style&gt;<font></font>
      &lt;/head&gt;<font></font>
      &lt;span&gt;<font></font>
        &lt;select id="real"&gt;<font></font>
          &lt;option value=""&gt;Alpha&lt;/option&gt;<font></font>
          &lt;option value=""&gt;Beta&lt;/option&gt;<font></font>
          &lt;option value=""&gt;Charlie&lt;/option&gt;<font></font>
        &lt;/select&gt;<font></font>
        &lt;select id="fake"&gt;<font></font>
          &lt;option value=""&gt;Alpha&lt;/option&gt;<font></font>
          &lt;option value=""&gt;Beta&lt;/option&gt;<font></font>
          &lt;option value=""&gt;Charlie&lt;/option&gt;<font></font>
        &lt;/select&gt;<font></font>
      &lt;/span&gt;<font></font>
    &lt;/html&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit和其他浏览器之间的坐标不同，但是</font></font><a href="https://stackoverflow.com/questions/504261/acceptable-css-hacks-fixes/8794265#8794265"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media查询</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以解决此问题。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文献</font></font></strong></p>

<ul>
<li><a href="https://dojotoolkit.org/reference-guide/1.8/dojox/fx/ext-dojo/complex.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo FX测试：dojox.fx.ext-dojo.complex</font></font></a></li>
<li><a href="http://test.csswg.org/suites/css-masking/nightly-unstable/html/clip-rect-auto-002.htm" rel="nofollow noreferrer">CSS Masking: Test clip property with rect function and auto values clip to border box</a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1>Custom Select CSS styles</h1>

<p>Tested in <strong>Internet&nbsp;Explorer (10 and 11), Edge, Firefox, and Chrome</strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>select::-ms-expand {<font></font>
  display: none;<font></font>
}<font></font>
select {<font></font>
  display: inline-block;<font></font>
  box-sizing: border-box;<font></font>
  padding: 0.5em 2em 0.5em 0.5em;<font></font>
  border: 1px solid #eee;<font></font>
  font: inherit;<font></font>
  line-height: inherit;<font></font>
  -webkit-appearance: none;<font></font>
  -moz-appearance: none;<font></font>
  -ms-appearance: none;<font></font>
  appearance: none;<font></font>
  background-repeat: no-repeat;<font></font>
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);<font></font>
  background-position: right 15px top 1em, right 10px top 1em;<font></font>
  background-size: 5px 5px, 5px 5px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select name=""&gt;<font></font>
  &lt;option value=""&gt;Lorem&lt;/option&gt;<font></font>
  &lt;option value=""&gt;Lorem Ipsum&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
&lt;select name="" disabled&gt;<font></font>
  &lt;option value=""&gt;Disabled&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
&lt;select name="" style="color:red;"&gt;<font></font>
  &lt;option value=""&gt;Color!&lt;/option&gt;<font></font>
  &lt;option value=""&gt;Lorem Ipsum&lt;/option&gt;<font></font>
&lt;/select&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="http://getbootstrap.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap解决</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了您的问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是最简单的解决方案：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>select.form-control {<font></font>
    -moz-appearance: none;<font></font>
    -webkit-appearance: none;<font></font>
    appearance: none;<font></font>
    background-position: right center;<font></font>
    background-repeat: no-repeat;<font></font>
    background-size: 1ex;<font></font>
    background-origin: content-box;<font></font>
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMiIKICAgdmlld0JveD0iMCAwIDM1Ljk3MDk4MyAyMy4wOTE1MTgiCiAgIGhlaWdodD0iNi41MTY5Mzk2bW0iCiAgIHdpZHRoPSIxMC4xNTE4MTFtbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjAxNDUxLC00MDcuMTIyMjUpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHRleHQKICAgICAgIGlkPSJ0ZXh0MzMzNiIKICAgICAgIHk9IjYyOS41MDUwNyIKICAgICAgIHg9IjI5MS40Mjg1NiIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4KICAgICAgICAgeT0iNjI5LjUwNTA3IgogICAgICAgICB4PSIyOTEuNDI4NTYiCiAgICAgICAgIGlkPSJ0c3BhbjMzMzgiPjwvdHNwYW4+PC90ZXh0PgogICAgPGcKICAgICAgIGlkPSJ0ZXh0MzM0MCIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6Rm9udEF3ZXNvbWU7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpGb250QXdlc29tZTtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgzMzQ1IgogICAgICAgICBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBkPSJtIDIzNy41NjY5Niw0MTMuMjU1MDcgYyAwLjU1ODA0LC0wLjU1ODA0IDAuNTU4MDQsLTEuNDczMjIgMCwtMi4wMzEyNSBsIC0zLjcwNTM1LC0zLjY4MzA0IGMgLTAuNTU4MDQsLTAuNTU4MDQgLTEuNDUwOSwtMC41NTgwNCAtMi4wMDg5MywwIEwgMjIwLDQxOS4zOTM0NiAyMDguMTQ3MzIsNDA3LjU0MDc4IGMgLTAuNTU4MDMsLTAuNTU4MDQgLTEuNDUwODksLTAuNTU4MDQgLTIuMDA4OTMsMCBsIC0zLjcwNTM1LDMuNjgzMDQgYyAtMC41NTgwNCwwLjU1ODAzIC0wLjU1ODA0LDEuNDczMjEgMCwyLjAzMTI1IGwgMTYuNTYyNSwxNi41NDAxNyBjIDAuNTU4MDMsMC41NTgwNCAxLjQ1MDg5LDAuNTU4MDQgMi4wMDg5MiwwIGwgMTYuNTYyNSwtMTYuNTQwMTcgeiIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" /&gt;<font></font>
&lt;section class="container"&gt;<font></font>
  &lt;form class="form-horizontal"&gt;<font></font>
    &lt;select class="form-control"&gt;<font></font>
      &lt;option&gt;One&lt;/option&gt;<font></font>
      &lt;option&gt;Two&lt;/option&gt;<font></font>
    &lt;/select&gt;<font></font>
  &lt;/form&gt;<font></font>
&lt;/section&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：base64内容</font></font><a href="http://fontawesome.io/icon/chevron-down/" rel="noreferrer"><code>fa-chevron-down</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在SVG中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是适用于所有现代浏览器的版本。</font><font style="vertical-align: inherit;">使用该键可</font></font><code>appearance:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除默认格式。</font><font style="vertical-align: inherit;">由于所有格式都不用了，因此您必须重新添加箭头，以可视方式将选择内容与输入内容区分开。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作示例：</font><a href="https://jsfiddle.net/gs2q1c7p/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://jsfiddle.net/gs2q1c7p/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/gs2q1c7p/</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>select:not([multiple]) {<font></font>
    -webkit-appearance: none;<font></font>
    -moz-appearance: none;<font></font>
    background-position: right 50%;<font></font>
    background-repeat: no-repeat;<font></font>
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);<font></font>
    padding: .5em;<font></font>
    padding-right: 1.5em<font></font>
}<font></font>
<font></font>
#mySelect {<font></font>
    border-radius: 0<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select id="mySelect"&gt;<font></font>
    &lt;option&gt;Option 1&lt;/option&gt;<font></font>
    &lt;option&gt;Option 2&lt;/option&gt;<font></font>
&lt;/select&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">博客文章</font></font><em><a href="http://www.danielneumann.com/blog/how-to-style-dropdown-with-css-only/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">How to CSS form drop down style没有JavaScript</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用，但是在</font></font><a href="http://en.wikipedia.org/wiki/Opera_%28web_browser%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">却</font><font style="vertical-align: inherit;">失败了</font><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>select {<font></font>
  border: 0 none;<font></font>
  color: #FFFFFF;<font></font>
  background: transparent;<font></font>
  font-size: 20px;<font></font>
  font-weight: bold;<font></font>
  padding: 2px 10px;<font></font>
  width: 378px;<font></font>
  *width: 350px;<font></font>
  *background: #58B14C;<font></font>
}<font></font>
<font></font>
#mainselection {<font></font>
  overflow: hidden;<font></font>
  width: 350px;<font></font>
  -moz-border-radius: 9px 9px 9px 9px;<font></font>
  -webkit-border-radius: 9px 9px 9px 9px;<font></font>
  border-radius: 9px 9px 9px 9px;<font></font>
  box-shadow: 1px 1px 11px #330033;<font></font>
  background: url("arrow.gif") no-repeat scroll 319px 5px #58B14C;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="mainselection"&gt;<font></font>
  &lt;select&gt;<font></font>
    &lt;option&gt;Select an Option&lt;/option&gt;<font></font>
    &lt;option&gt;Option 1&lt;/option&gt;<font></font>
    &lt;option&gt;Option 2&lt;/option&gt;<font></font>
  &lt;/select&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是可能的，但不幸的是，大多数情况下，在开发人员需要的程度上基于WebKit的浏览器中。</font><font style="vertical-align: inherit;">这是通过内置开发人员工具检查器从Chrome选项面板收集的CSS样式示例，经过改进以匹配大多数现代浏览器中当前支持的CSS属性：</font></font></p>

<pre><code>select {<font></font>
    -webkit-appearance: button;<font></font>
    -moz-appearance: button;<font></font>
    -webkit-user-select: none;<font></font>
    -moz-user-select: none;<font></font>
    -webkit-padding-end: 20px;<font></font>
    -moz-padding-end: 20px;<font></font>
    -webkit-padding-start: 2px;<font></font>
    -moz-padding-start: 2px;<font></font>
    background-color: #F07575; /* Fallback color if gradients are not supported */<font></font>
    background-image: url(../images/select-arrow.png), -webkit-linear-gradient(top, #E5E5E5, #F4F4F4); /* For Chrome and Safari */<font></font>
    background-image: url(../images/select-arrow.png), -moz-linear-gradient(top, #E5E5E5, #F4F4F4); /* For old Firefox (3.6 to 15) */<font></font>
    background-image: url(../images/select-arrow.png), -ms-linear-gradient(top, #E5E5E5, #F4F4F4); /* For pre-releases of Internet Explorer  10*/<font></font>
    background-image: url(../images/select-arrow.png), -o-linear-gradient(top, #E5E5E5, #F4F4F4); /* For old Opera (11.1 to 12.0) */<font></font>
    background-image: url(../images/select-arrow.png), linear-gradient(to bottom, #E5E5E5, #F4F4F4); /* Standard syntax; must be last */<font></font>
    background-position: center right;<font></font>
    background-repeat: no-repeat;<font></font>
    border: 1px solid #AAA;<font></font>
    border-radius: 2px;<font></font>
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);<font></font>
    color: #555;<font></font>
    font-size: inherit;<font></font>
    margin: 0;<font></font>
    overflow: hidden;<font></font>
    padding-top: 2px;<font></font>
    padding-bottom: 2px;<font></font>
    text-overflow: ellipsis;<font></font>
    white-space: nowrap;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在基于WebKit的浏览器中的任何页面上运行此代码时，它都应更改选择框的外观，删除标准的OS箭头，并添加PNG箭头，在标签前后放置一些空格，几乎是您想要的任何内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最重要的部分是</font></font><code>appearance</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，它可以更改元素的行为。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><code>appearance</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎</font><font style="vertical-align: inherit;">可以在几乎所有基于WebKit的浏览器中完美运行，包括移动浏览器，尽管Gecko并不</font><font style="vertical-align: inherit;">像WebKit </font><font style="vertical-align: inherit;">那样受支持</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小宇宙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在样式化选择下拉列表时，我注意到的最大不一致是</font></font><strong><a href="http://en.wikipedia.org/wiki/Safari_%28web_browser%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Chrome</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染（Firefox可以通过CSS完全自定义）。</font><font style="vertical-align: inherit;">经过对Internet晦涩深度的搜索后，我发现以下内容几乎可以完全解决WebKit的问题：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari和Google Chrome浏览器修复</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>select {<font></font>
  -webkit-appearance: none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这确实删除了下拉箭头。</font><font style="vertical-align: inherit;">您可以使用附近</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有背景，负边距或绝对位于所选下拉菜单上方的</font><font style="vertical-align: inherit;">箭头来添加下拉箭头</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*更多信息和其他变量可在</font></font><em><a href="http://css-infos.net/property/-webkit-appearance" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS属性中找到：-webkit-appearance</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择元素及其下拉功能</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很难的风格。</font></font></p>

<p><em><a href="http://archivist.incutio.com/viewlist/css-discuss/39858" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克里斯·海尔曼（Chris Heilmann）的</font><em><a href="http://archivist.incutio.com/viewlist/css-discuss/39858" rel="noreferrer"><font style="vertical-align: inherit;"> select元素</font></a></em><font style="vertical-align: inherit;">的</font><em><a href="http://archivist.incutio.com/viewlist/css-discuss/39858" rel="noreferrer"><font style="vertical-align: inherit;">样式属性</font></a></em><font style="vertical-align: inherit;">证实了Ryan Dohery在对第一个答案的评论中所说的话：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ select元素是操作系统的一部分，而不是浏览器chrome。因此，它的样式非常不可靠，无论如何尝试都不一定有意义。”</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry前端Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了这个确切的问题，除了我无法使用图像并且不受浏览器支持的限制。</font><font style="vertical-align: inherit;">这应该是“规范的”，运气好的话，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何地方开始工作</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用分层的旋转背景层来“切出”下拉箭头，因为伪元素对select元素不起作用。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此更新的版本中，我正在使用CSS变量和一个很小的主题系统。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>:root {<font></font>
  --radius: 2px;<font></font>
  --baseFg: dimgray;<font></font>
  --baseBg: white;<font></font>
  --accentFg: #006fc2;<font></font>
  --accentBg: #bae1ff;<font></font>
}<font></font>
<font></font>
.theme-pink {<font></font>
  --radius: 2em;<font></font>
  --baseFg: #c70062;<font></font>
  --baseBg: #ffe3f1;<font></font>
  --accentFg: #c70062;<font></font>
  --accentBg: #ffaad4;<font></font>
}<font></font>
<font></font>
.theme-construction {<font></font>
  --radius: 0;<font></font>
  --baseFg: white;<font></font>
  --baseBg: black;<font></font>
  --accentFg: black;<font></font>
  --accentBg: orange;<font></font>
}<font></font>
<font></font>
select {<font></font>
  font: 400 12px/1.3 sans-serif;<font></font>
  -webkit-appearance: none;<font></font>
  appearance: none;<font></font>
  color: var(--baseFg);<font></font>
  border: 1px solid var(--baseFg);<font></font>
  line-height: 1;<font></font>
  outline: 0;<font></font>
  padding: 0.65em 2.5em 0.55em 0.75em;<font></font>
  border-radius: var(--radius);<font></font>
  background-color: var(--baseBg);<font></font>
  background-image: linear-gradient(var(--baseFg), var(--baseFg)),<font></font>
    linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),<font></font>
    linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),<font></font>
    linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);<font></font>
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;<font></font>
  background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;<font></font>
  background-position: right 20px center, right bottom, right bottom, right bottom;   <font></font>
}<font></font>
<font></font>
select:hover {<font></font>
  background-image: linear-gradient(var(--accentFg), var(--accentFg)),<font></font>
    linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),<font></font>
    linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),<font></font>
    linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);<font></font>
}<font></font>
<font></font>
select:active {<font></font>
  background-image: linear-gradient(var(--accentFg), var(--accentFg)),<font></font>
    linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),<font></font>
    linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),<font></font>
    linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);<font></font>
  color: var(--accentBg);<font></font>
  border-color: var(--accentFg);<font></font>
  background-color: var(--accentFg);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select&gt;<font></font>
  &lt;option&gt;So many options&lt;/option&gt;<font></font>
  &lt;option&gt;...&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
&lt;select class="theme-pink"&gt;<font></font>
  &lt;option&gt;So many options&lt;/option&gt;<font></font>
  &lt;option&gt;...&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
&lt;select class="theme-construction"&gt;<font></font>
  &lt;option&gt;So many options&lt;/option&gt;<font></font>
  &lt;option&gt;...&lt;/option&gt;<font></font>
&lt;/select&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A蛋蛋乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签可以通过CSS设置样式，就像在浏览器中呈现的HTML页面上的任何其他HTML元素一样。</font><font style="vertical-align: inherit;">下面是一个（过于简单的）示例，它将在页面上放置一个select元素，并以蓝色显示选项的文本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML示例文件（selectExample.html）：</font></font></p>

<pre><code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;title&gt;Select Styling&lt;/title&gt;<font></font>
  &lt;link href="selectExample.css" rel="stylesheet"&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;select id="styledSelect" class="blueText"&gt;<font></font>
  &lt;option value="apple"&gt;Apple&lt;/option&gt;<font></font>
  &lt;option value="orange"&gt;Orange&lt;/option&gt;<font></font>
  &lt;option value="cherry"&gt;Cherry&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例CSS文件（selectExample.css）：</font></font></p>

<pre><code>/* All select elements on page */<font></font>
select {<font></font>
  position: relative;<font></font>
}<font></font>
<font></font>
/* Style by class. Effects the text of the contained options. */<font></font>
.blueText {<font></font>
  color: #0000FF;<font></font>
}<font></font>
<font></font>
/* Style by id. Effects position of the select drop down. */<font></font>
#styledSelect {<font></font>
  left: 100px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
