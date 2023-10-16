---
layout: question
title:  什么是WebKit？它与CSS有什么关系？
date:   2020-03-24T03:25:17.000Z
description: 最近，我看到了带有“ webkit”标签的问题。这些问题通常是与CSS，jQuery，布局，跨浏览器兼容性问题等有关的基于Web的问题。那么，这是什么...
img: 
author: 神无
category: question
answer: 14
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我看到了带有“ webkit”标签的问题。</font><font style="vertical-align: inherit;">这些问题通常是与CSS，jQuery，布局，跨浏览器兼容性问题等有关的基于Web的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，这是什么“ Webkit”，它与CSS有什么关系？</font><font style="vertical-align: inherit;">我还注意到</font></font><code>-webkit-...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">各种网站的源代码中</font><font style="vertical-align: inherit;">有很多</font><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">这两个有关系吗？</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，到目前为止的答案……WebKit是Safari / Chrome的HTML / CSS Web浏览器呈现引擎。</font><font style="vertical-align: inherit;">是否有针对IE / Opera / Firefox的引擎，将它们相互使用有什么优缺点？</font><font style="vertical-align: inherit;">例如，我可以在Firefox中使用WebKit功能吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终的问题... IE支持WebKit吗？ </font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有主要的浏览器都使用不同的渲染引擎。</font><font style="vertical-align: inherit;">我猜这是跨浏览器兼容性问题如此之多的重要原因！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，是否存在所有浏览器都将使用的某种项目或向标准渲染引擎的迁移？</font><font style="vertical-align: inherit;">HTML5是否会终结跨浏览器的兼容性问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3314篇《什么是WebKit？它与CSS有什么关系？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德阳光</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit是在流行的浏览器Safari和Chrome以及其他浏览器中使用的渲染引擎。每个浏览器都由渲染引擎支持以绘制HTML / CSS网页。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE→Trident（已停产）Edge→EdgeHTML（Trident的清理分支）Firefox→Gecko Opera→Presto（自2013年2月起不再使用Presto，如今考虑使用Opera = Chrome）Safari→WebKit Chrome→Blink（WebKit的分支） 。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font><code>WebEngines</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特别是</font></font><code>webKit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其开发人员的</font><font style="vertical-align: inherit;">优秀文档，</font><font style="vertical-align: inherit;">您可以在以下网站阅读：
 </font></font><a href="http://en.wikipedia.org/wiki/WebKit" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Itachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使这是一个较旧的文章，也存在另一种方法来渲染较旧版本的Internet Explorer。</font><font style="vertical-align: inherit;">-webkit作为CSS Vendor Prefix时，您还可以下载一些JS应用程序并将它们放在HTML HEAD的底部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用Modernizr，HTML5 Shiv和Respond.js。</font><font style="vertical-align: inherit;">这些是惊人的与IE兼容的polyfill脚本，这些脚本使用polyfill和其他资源，有助于更好地呈现IE9及以下的HTML5元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用这些polyfill，只要浏览器小于所需的IE版本，只需添加HTML布尔逻辑来放置它们。</font><font style="vertical-align: inherit;">示例代码是：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;head&gt;<font></font>
&lt;!-- HEAD Elements --&gt;  <font></font>
&lt;script src="path/to/modernizr.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;!--[if lt IE 6]&gt;<font></font>
  &lt;script src="path/to/HTMLSiv.js" type="text/javascript"&gt;<font></font>
  &lt;/script&gt;<font></font>
  &lt;script src="path/to/respond.js" type="text/javascript"&gt;<font></font>
  &lt;/script&gt;<font></font>
&lt;![endif]--&gt;<font></font>
&lt;/head&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit是在流行的浏览器Safari和Chrome以及其他浏览器中使用的渲染引擎。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为网站设计师，我遇到的一个常见问题是很多人使用IE6 +。</font><font style="vertical-align: inherit;">通常没什么大不了的，除了在CSS中，我必须添加多个渲染语法以解析每个浏览器的每个请求。</font><font style="vertical-align: inherit;">如果有一个通用的CSS呈现设置，并且IE可以像Chrome / FF / Opera和webkit一样容易阅读，那将非常好。</font><font style="vertical-align: inherit;">IE的问题在于，如果我不使用所有正确的CSS样式和渲染，那么除IE之外，我的网站在使用其他所有浏览器时的外观和效果都很好。</font><font style="vertical-align: inherit;">这会使不高兴的，顽固的IE客户。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子是这样的：假设我需要一个1px的灰色边框，边框半径为10％。</font><font style="vertical-align: inherit;">对于Chrome和其他浏览器，我使用webkit属性。</font><font style="vertical-align: inherit;">现在，对于IE，我必须使用简单的旧CSS值“ border：1px solid＃E5E5E5”和“ border-radius：10％”添加单独的CSS样式。</font><font style="vertical-align: inherit;">并非总是能在所有IE浏览器版本上都获得肯定的结果，但是在大多数情况下，此方法对我和其他许多人都有效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit是一种布局引擎，旨在允许Web浏览器呈现网页。</font><font style="vertical-align: inherit;">WebKit引擎提供了一组用于在Windows中显示Web内容的类，并实现了浏览器功能，例如当用户单击时跟随链接，管理后退列表以及管理最近访问的页面的历史记录。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit最初是作为KHTML的分支而创建的，它是Apple Safari的布局引擎。</font><font style="vertical-align: inherit;">它可移植到许多其他计算平台。</font><font style="vertical-align: inherit;">它也在Google的Chrome浏览器中使用。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit的WebCore和JavaScriptCore组件可在GNU通用通用公共许可证下获得，其余WebKit可在BSD样式的许可证下获得。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源</font></font><a href="http://en.wikipedia.org/wiki/WebKit" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">维基百科</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关布局引擎的更多信息，请</font></font><a href="http://en.wikipedia.org/wiki/Comparison_of_layout_engines_%28Cascading_Style_Sheets%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击此处</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit是Chrome和Safari使用的HTML呈现引擎。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它支持许多以开头的自定义CSS属性</font></font><code>-webkit-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit是在Apple的Safari浏览器和Google的Chrome中使用的html / css呈现引擎。</font><font style="vertical-align: inherit;">带-webkit-的css值前缀是特定于Webkit的，它们通常是CSS3或其他非标准化的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答更新2 w3c是试图标准化这些东西的主体，他们编写规则，然后程序员编写其渲染引擎来解释这些规则。</font><font style="vertical-align: inherit;">因此，基本上w3c表示DIV应该以这种方式工作，然后引擎编写者使用该规则来编写其代码，任何错误或对该规则的错误解释都会导致兼容性问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：显然，WebKit是Safari / Chrome的HTML / CSS Web浏览器呈现引擎。</font><font style="vertical-align: inherit;">是否有针对IE / Opera / Firefox的引擎，将它们相互使用有什么优缺点？</font><font style="vertical-align: inherit;">例如，我可以在Firefox中使用WebKit功能吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个浏览器都有一个渲染引擎来绘制HTML / CSS网页。</font></font></p>

<ul>
<li><del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE→ </font></font><a href="http://en.wikipedia.org/wiki/Trident_%28layout_engine%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三叉戟</font></font></a></del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （已停产）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边缘→ </font></font><del><a href="https://en.wikipedia.org/wiki/EdgeHTML" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EdgeHTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Trident的清理叉）</font></font></del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Edge </font><font style="vertical-align: inherit;">在2019年</font><font style="vertical-align: inherit;">切换为</font></font><a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Blink</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox→ </font></font><a href="http://en.wikipedia.org/wiki/Gecko_%28layout_engine%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">壁虎</font></font></a></li>
<li><del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">歌剧→ </font></font><a href="http://en.wikipedia.org/wiki/Presto_%28layout_engine%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普雷斯托</font></font></a></del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（自2013年2月起不再使用Presto，请考虑Opera = Chrome，因此</font><font style="vertical-align: inherit;">现在</font><font style="vertical-align: inherit;">会</font></font><a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闪烁</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari→ </font></font><a href="http://en.wikipedia.org/wiki/WebKit" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome→ </font></font><a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Blink</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://en.wikipedia.org/wiki/WebKit" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的分支</font><font style="vertical-align: inherit;">）。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">不同领域的比较列表，</font><font style="vertical-align: inherit;">请参阅</font></font><a href="http://en.wikipedia.org/wiki/Comparison_of_web_browser_engines" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web浏览器引擎</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终的问题... IE支持WebKit吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是本地的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终的问题... IE支持WebKit吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的种类。</font><font style="vertical-align: inherit;">查看</font></font><strong><a href="http://code.google.com/chrome/chromeframe/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome Frame</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是Internet Explorer的插件，可以使用Webkit引擎。</font><font style="vertical-align: inherit;">唯一的怪癖是您必须说服访问者安装插件。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再维护或不支持Chrome框架…</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>-webkit-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是Chrome，Safari，Opera和iOS浏览器适合的一组。</font><font style="vertical-align: inherit;">它们都有一个共同的祖先，因此它们的功能/限制（在运行CSS和Javascript时）通常仅限于该组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员将在</font></font><code>-webkit-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其后</font><font style="vertical-align: inherit;">放置</font><font style="vertical-align: inherit;">一些代码，这意味着该代码将仅在Chrome，Safari，Opera和iOS浏览器上运行。</font><font style="vertical-align: inherit;">这是完整列表：</font></font></p>

<p><code>-webkit-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （Chrome，Safari，Opera的较新版本，几乎所有iOS浏览器（包括Firefox for iOS）；基本上是任何基于WebKit的浏览器）</font></font></p>

<p><code>-moz-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （Firefox）</font></font></p>

<p><code>-o-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （旧的WebKit之前的Opera版本）</font></font></p>

<p><code>-ms-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （Internet Explorer和Microsoft Edge）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webkit是Safari和Chrome使用的网络浏览器呈现引擎（还有其他流行的工具）。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>-webkit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS选择器上</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">前缀是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此引擎要处理的</font></font><code>-moz</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">，与</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">非常相似</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我们中的许多人希望这一点消失，例如，</font></font><code>-webkit-border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被标准所取代，</font></font><code>border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font><font style="vertical-align: inherit;">对于多个浏览器</font><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同一</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">件事</font><font style="vertical-align: inherit;">您不需要多个规则</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这实际上是“预规范”功能的结果，这些功能旨在在出现时不干扰标准版本。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于您的更新：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...不，它与IE无关，IE至少在9之前使用另一个名为</font></font><a href="http://en.wikipedia.org/wiki/Trident_(layout_engine)" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trident的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染引擎</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这已经得到了回答和接受，但是如果有人仍然想知道为什么今天的事情有些混乱，那么您必须阅读以下内容：</font></font></p>

<p><a href="http://webaim.org/blog/user-agent-string-history/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://webaim.org/blog/user-agent-string-history/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它很好地说明了gecko，webkit和其他主要渲染引擎是如何演变的以及导致用户代理字符串混乱的当前状态的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为TL; DR目的引用最后一段：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后Google建立了Chrome，Chrome使用了Webkit，就像Safari一样，想要为Safari构建页面，因此假装为Safari。</font><font style="vertical-align: inherit;">因此，Chrome使用了WebKit，并假装为Safari，WebKit假装为KHTML，KHTML假装为Gecko，所有浏览器都假装为Mozilla，Chrome调用了self </font></font><code>Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且用户代理字符串完全是一团糟，并且几乎毫无用处，每个人都假装成其他人，到处都是混乱。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/questions/3468154/what-is-webkit-and-how-is-it-related-to-css/3468236#3468236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@KennyTM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所说的</font><font style="vertical-align: inherit;">内容</font><a href="https://stackoverflow.com/questions/3468154/what-is-webkit-and-how-is-it-related-to-css/3468236#3468236"><font style="vertical-align: inherit;">之外</font></a><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE浏览器</font></font></strong>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引擎：</font></font><a href="https://en.wikipedia.org/wiki/Trident_%28layout_engine%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三叉戟</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS前缀： </font></font><code>-ms</code></li>
</ul></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边缘</font></font></strong>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引擎：</font></font><s><a href="https://en.wikipedia.org/wiki/EdgeHTML" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EdgeHTML</font></font></a></s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> → </font></font><a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闪烁</font></font></a><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></sup></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS前缀： </font></font><code>-ms</code></li>
</ul></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">火狐浏览器</font></font></strong>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引擎：</font></font><a href="https://en.wikipedia.org/wiki/Gecko_%28software%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">壁虎</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS前缀： </font></font><code>-moz</code></li>
</ul></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">歌剧</font></font></strong>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引擎：</font></font><s><a href="https://en.wikipedia.org/wiki/Presto_%28layout_engine%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Presto</font></font></a></s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> → </font></font><a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闪烁</font></font></a><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></sup></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS前缀：</font></font><code>-o</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Presto）和</font></font><code>-webkit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Blink）</font></font></li>
</ul></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果浏览器</font></font></strong>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引擎：</font></font><a href="https://en.wikipedia.org/wiki/WebKit" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS前缀： </font></font><code>-webkit</code></li>
</ul></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬</font></font></strong>

<ul>
<li>Engine: <s><a href="https://en.wikipedia.org/wiki/WebKit" rel="nofollow noreferrer">WebKit</a></s> → <a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="nofollow noreferrer">Blink</a><sup>2</sup></li>
<li>CSS-prefix: <code>-webkit</code></li>
</ul></li>
</ul>

<p><sup>1)</sup> On February 12 2013 Opera (version 15+) <a href="https://dev.opera.com/blog/300-million-users-and-move-to-webkit/" rel="nofollow noreferrer">announces</a> they moving away from their own engine Presto to WebKit named <a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="nofollow noreferrer">Blink</a>.</p>

<p><sup>2)</sup> On April 3 2013 Google (Chrome version 28+) <a href="http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html" rel="nofollow noreferrer">announces</a> they are going to use the WebKit-based <a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="nofollow noreferrer">Blink</a> engine.</p>

<p><sup>3)</sup> On December 6 2018 Microsoft (Microsoft Edge 79+ stable) <a href="https://github.com/MicrosoftEdge/MSEdge/blob/7d69268e85e198cee1c2b452d888ac5b9e5995ca/README.md" rel="nofollow noreferrer">announces</a> they are going to use the WebKit-based <a href="https://en.wikipedia.org/wiki/Blink_%28web_engine%29" rel="nofollow noreferrer">Blink</a> engine.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
