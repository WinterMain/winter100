---
layout: question
title:  仅使用CSS定位Firefox
date:   2020-03-17T07:46:03.000Z
description: 使用条件注释，可以使用特定于浏览器的CSS规则轻松定位Internet Explorer：<\!--\[if IE 6\]>...include IE6-...
img: 
author: 猪猪小宇宙
category: question
answer: 7
tags: CSS的 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用条件注释，可以使用特定于浏览器的CSS规则轻松定位Internet Explorer：</font></font></p>

<pre><code>&lt;!--[if IE 6]&gt;<font></font>
...include IE6-specific stylesheet here...<font></font>
&lt;![endif]--&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，行为不当的是Gecko引擎（Firefox）。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是将CSS规则仅定位到Firefox而不是其他浏览器的最佳方式？</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，Internet Explorer不仅应该忽略仅Firefox的规则，而且WebKit和Opera也应该忽略它们。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找一种“干净”的解决方案。</font><font style="vertical-align: inherit;">在我看来，使用JavaScript浏览器嗅探器向HTML添加“ firefox”类并不符合要求。</font><font style="vertical-align: inherit;">我希望看到一些依赖于浏览器功能的内容，就像条件注释只是IE的“特殊”……</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1897篇《仅使用CSS定位Firefox》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带说明，</font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports" rel="nofollow noreferrer"><font style="vertical-align: inherit;">CSS支持</font></a><font style="vertical-align: inherit;">已绑定到javascript。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>if (CSS.supports("( -moz-user-select:unset )")) {<font></font>
    console.log("FIREFOX!!!")<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Mozilla_Extensions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/CSS/Mozilla_Extensions</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码倾向于引发样式棉绒警告：</font></font></p>

<pre><code>@-moz-document url-prefix() {<font></font>
    h1 {<font></font>
        color: red;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替使用 </font></font></p>

<pre><code>@-moz-document url-prefix('') {<font></font>
    h1 {<font></font>
        color: red;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助了我！</font><font style="vertical-align: inherit;">从</font><a href="https://stylelint.io/user-guide/rules/function-url-quotes/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">获得了样式棉绒警告的解决方案</font></font><a href="https://stylelint.io/user-guide/rules/function-url-quotes/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Stafan</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的方法是通过各种CSS hack，这将使您的页面在下次浏览器更新时更可能失败。</font><font style="vertical-align: inherit;">如果有的话，它比使用js浏览器嗅探器安全性低。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AItachi</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的想法有一个变体，</font></font><code>server-side USER-AGENT detector</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即可以确定要附加到页面的样式表。</font><font style="vertical-align: inherit;">这样，您可以拥有一个</font></font><code>firefox.css, ie.css, opera.css, etc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在Javascript本身中完成类似的操作，尽管您可能不认为它是干净的。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">一个</font></font><code>default.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font><code>all common styles and then specific style sheets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来覆盖或增强默认值的方法</font><font style="vertical-align: inherit;">也做了类似的事情</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，免责声明。</font><font style="vertical-align: inherit;">我实际上并不主张我在下面提出的解决方案。</font><font style="vertical-align: inherit;">我编写的唯一针对浏览器的CSS是针对IE（尤其是IE6）的，尽管我希望并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，解决方案。</font><font style="vertical-align: inherit;">您要求它优雅，所以我不知道它有多优雅，但可以肯定只针对Gecko平台。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该技巧仅在启用JavaScript并使用Mozilla绑定（</font></font><a href="https://developer.mozilla.org/en/XBL/XBL_1.0_Reference" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XBL</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">时才有效</font><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">在Firefox和所有其他基于Gecko的产品内部大量使用。</font><font style="vertical-align: inherit;">作为比较，这类似于IE中的行为CSS属性，但功能更强大。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案涉及三个文件：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ff.html：要样式化的文件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ff.xml：包含Gecko绑定的文件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ff.css：Firefox特定样式</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ff.html</font></font></strong></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;style type="text/css"&gt;<font></font>
body {<font></font>
 -moz-binding: url(ff.xml#load-mozilla-css);<font></font>
}<font></font>
&lt;/style&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
<font></font>
&lt;h1&gt;This should be red in FF&lt;/h1&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ff.xml</font></font></strong></p>

<pre><code>&lt;?xml version="1.0"?&gt;<font></font>
<font></font>
&lt;bindings xmlns="http://www.mozilla.org/xbl"&gt;<font></font>
    &lt;binding id="load-mozilla-css"&gt;<font></font>
        &lt;implementation&gt;<font></font>
            &lt;constructor&gt;<font></font>
            &lt;![CDATA[<font></font>
                var link = document.createElement("link");<font></font>
                    link.setAttribute("rel", "stylesheet");<font></font>
                    link.setAttribute("type", "text/css");<font></font>
                    link.setAttribute("href", "ff.css");<font></font>
<font></font>
                document.getElementsByTagName("head")[0]<font></font>
                        .appendChild(link);<font></font>
            ]]&gt;<font></font>
            &lt;/constructor&gt;<font></font>
        &lt;/implementation&gt;<font></font>
    &lt;/binding&gt;<font></font>
&lt;/bindings&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ff.css</font></font></strong></p>

<pre><code>h1 {<font></font>
 color: red;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
上面的解决方案不是很好。</font><font style="vertical-align: inherit;">这将是更好，如果不是追加一个新的LINK元素，它将增加</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> body元素的“火狐”级。</font><font style="vertical-align: inherit;">只需将上面的JS替换为以下内容，就有可能：</font></font></p>

<pre><code>this.className += " firefox";
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案的灵感来自</font></font><a href="http://dean.edwards.name/moz-behaviors/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dean Edwards的莫兹行为</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三Davaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（来自@Antoine评论）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用 </font></font><code>@supports</code></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>@supports (-moz-appearance:none) {<font></font>
    h1 { color:red; } <font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h1&gt;This should be red in FF&lt;/h1&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports" rel="noreferrer"><font style="vertical-align: inherit;">这里</font></a></strong><font style="vertical-align: inherit;">更多</font></font><code>@supports</code> <strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好，我找到了。</font><font style="vertical-align: inherit;">这可能是那里最干净，最简单的解决方案，并且不依赖于打开JavaScript。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>@-moz-document url-prefix() {<font></font>
  h1 {<font></font>
    color: red;<font></font>
  }<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h1&gt;This should be red in FF&lt;/h1&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它基于Mozilla的另一个CSS扩展。</font><font style="vertical-align: inherit;">这里有这些CSS扩展的完整列表：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Mozilla_Extensions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla CSS扩展</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
