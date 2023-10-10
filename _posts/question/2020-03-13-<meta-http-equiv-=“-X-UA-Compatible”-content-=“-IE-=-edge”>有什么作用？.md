---
layout: question
title:  <meta http-equiv =“ X-UA-Compatible” content =“ IE = edge”>有什么作用？
date:   2020-03-13T12:52:09.000Z
description: 如果一个网页以...开头有什么区别<\!DOCTYPE html> <html>   <head>     <meta http-equiv="X...
img: 
author: 米亚神无
category: question
answer: 9
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一个网页以...开头有什么区别</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt; <font></font>
&lt;html&gt; <font></font>
  &lt;head&gt; <font></font>
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且如果页面以</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt; <font></font>
&lt;html&gt; <font></font>
  &lt;head&gt; <font></font>
     &lt;!-- without X-UA-Compatible meta --&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有区别，我想我可以忽略</font></font><code>X-UA-Compatible</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元标头，因为我只想在所有IE版本中以最标准的方式呈现它。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1568篇《<meta http-equiv =“ X-UA-Compatible” content =“ IE = edge”>有什么作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙乐理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在与服务器相同的网络中使用网站，则</font><font style="vertical-align: inherit;">尽管DOCTYPE，</font><font style="vertical-align: inherit;">IE仍希望切换到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容模式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
添加</font></font><code>meta http-equiv="X-UA-Compatible" content="IE=Edge"</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会禁用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此不必要的行为。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅出于完整性考虑，您实际上不必将其添加到HTML（HTML5中未知的http-equiv）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做到这一点，永远不要回头（第一个示例</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">apache</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，第二个</font><font style="vertical-align: inherit;">示例</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nginx</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>Header set X-UA-Compatible "IE=Edge,chrome=1"<font></font>
<font></font>
add_header X-UA-Compatible "IE=Edge,chrome=1";<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidAPro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需说一句即可</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指示Internet Explorer使用其最新的呈现引擎</font></font></strong></p>

<pre><code>&lt;meta http-equiv="x-ua-compatible" content="ie=edge"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Monkey洋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这实际上是</font></font><a href="https://www.google.com/search?q=x-ua-compatible%20ie=edge" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1个Google查询</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是这里是：</font></font></p>

<p><a href="http://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://msdn.microsoft.com/zh-CN/library/jj676915(v=vs.85).aspx</font></font></a></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解旧版文档模式</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下值从Internet Explorer 6到IE11以边缘模式显示网页，这是Internet Explorer支持的最高标准模式。</font></font></p>

<pre><code>&lt;meta http-equiv="x-ua-compatible" content="IE=edge"
</code></pre>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这在功能上等同于使用HTML5文档类型。</font><font style="vertical-align: inherit;">它将Internet Explorer置于受支持最高的文档模式。</font><font style="vertical-align: inherit;">Edge最适合定期维护的网站，这些网站经过例行测试，可以在多个浏览器（包括Internet Explorer）之间进行互操作。</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
       从IE11开始，边缘模式被认为是首选的文档模式。</font><font style="vertical-align: inherit;">（在早期版本中，它被认为是实验性的。）要了解更多信息，请参阅不建议使用文档模式。</font><font style="vertical-align: inherit;">从Windows Internet Explorer 8开始，一些Web开发人员使用边缘模式元元素来隐藏地址栏上的“兼容性视图”按钮。</font><font style="vertical-align: inherit;">从IE11开始，不再需要此按钮，因为该按钮已从地址栏中删除。</font><font style="vertical-align: inherit;">因为它强制所有页面以标准模式打开，而不管Internet Explorer的版本如何，所以您可能会倾向于对Internet Explorer查看的所有页面使用边缘模式。</font><font style="vertical-align: inherit;">不要这样做，因为仅从Internet Explorer 8开始才支持X-UA-Compatible标头。</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  如果希望所有受支持的Internet Explorer版本以标准模式打开页面，请使用HTML5文档类型声明，如前面的示例所示。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索结果中还有：</font></font></p>

<ul>
<li><a href="https://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&lt;meta http-equiv =“ X-UA-Compatible” content =“ IE = edge”&gt;有什么作用？</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=Edge"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使此行按预期工作，请确保：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是紧随其后的第一个元素 </font></font><code>&lt;head&gt;</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在meta标记之前（例如在</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">上）不使用</font><font style="vertical-align: inherit;">任何</font></font><a href="http://en.wikipedia.org/wiki/Conditional_comments" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条件注释</font></font></a><font style="vertical-align: inherit;"></font><code>&lt;html&gt;</code><font style="vertical-align: inherit;"></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，某些IE版本只会忽略它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简化了这两个规则，但它们很容易记住和验证。</font><font style="vertical-align: inherit;">尽管MSDN文档指出您可以在此标签之前放置标题和其他元标签，但我不建议这样做。</font></font></p>

<p><a href="https://stackoverflow.com/questions/2518256/override-intranet-compatibility-mode-ie8#answer-7685060"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使其与条件注释一起使用。</font></font></a></p>

<p><a href="http://blogs.msdn.com/b/ieinternals/archive/2011/07/18/optimal-html-head-ordering-to-avoid-parser-restarts-redownloads-and-improve-performance.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于元素在头部的顺序的有趣文章。</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（blogs.msdn.com，用于IE）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://msdn.microsoft.com/en-US/jj676915.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MSDN文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>X-UA-Compatible</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[...]必须出现在标题以外的元件和其他元元素的所有其他元件之前的网页（HEAD部分）的报头。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>The difference is that if you only specify the <code>DOCTYPE</code>, IE’s <em>Compatibility View Settings</em> take precedence. By default these settings force all intranet sites into Compatibility View regardless of <code>DOCTYPE</code>. There’s also a checkbox to use Compatibility View for all websites, regardless of <code>DOCTYPE</code>.</p>

<p><img src="https://i.stack.imgur.com/0rfvD.png" alt="IE兼容性视图设置对话框"></p>

<p><code>X-UA-Compatible</code> overrides the Compatibility View Settings, so the page will render in standards mode regardless of the browser settings. This forces standards mode for:</p>

<ul>
<li>intranet pages</li>
<li>external web pages when the computer administrator has chosen “Display all websites in Compatibility View” as the default—think big companies, governments, universities</li>
<li>when you unintentionally end up on the <a href="https://iecvlist.microsoft.com/ie10/201206/iecompatviewlist.xml" rel="noreferrer">Microsoft Compatibility View List</a></li>
<li>cases where users have manually added your website to the list in Compatibility View Settings</li>
</ul>

<p><code>DOCTYPE</code> alone cannot do that; you will end up in one of the Compatibility View modes in these cases regardless of <code>DOCTYPE</code>.</p>

<p>If both the <code>meta</code> tag and the HTTP header are specified, the <code>meta</code> tag takes precedence. </p>

<p>This answer is based on examining the complete rules for deciding document mode in <a href="http://ie.microsoft.com/testdrive/ieblog/2010/Mar/02_HowIE8DeterminesDocumentMode_3.png" rel="noreferrer">IE8</a>, <a href="http://ie.microsoft.com/testdrive/ieblog/2010/Jun/16_IEsCompatibilityFeaturesforSiteDevelopers_1.svg" rel="noreferrer">IE9</a>, and <a href="http://msdn.microsoft.com/en-us/library/ff405803(v=vs.85).aspx" rel="noreferrer">IE10</a>. Note that looking at the <code>DOCTYPE</code> is the very last fallback for deciding the document mode.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我无法在已标记的答案中添加评论，因此将其发布在此处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了正确答案之外，您实际上还可以对此进行验证。</font><font style="vertical-align: inherit;">由于此元标记仅针对IE，因此您需要做的就是添加IE条件代码。</font></font></p>

<pre><code>&lt;!--[if IE]&gt;<font></font>
    &lt;meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"&gt;<font></font>
&lt;![endif]--&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做就像添加任何其他IE条件语句一样，并且仅适用于IE，并且不会影响其他浏览器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为微软的这张图可以解释所有问题。</font><font style="vertical-align: inherit;">为了告诉IE如何呈现内容，！DOCTYPE必须与X-UA-Compatible元标记一起使用。</font><font style="vertical-align: inherit;">！DOCTYPE本身对更改IE文档模式没有影响。</font></font></p>

<p><a href="https://i.stack.imgur.com/teQdv.png" rel="noreferrer"><img src="https://i.stack.imgur.com/teQdv.png" alt="在此处输入图片说明"></a></p>

<p><a href="http://ie.microsoft.com/testdrive/ieblog/2010/Mar/02_HowIE8DeterminesDocumentMode_3.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ie.microsoft.com/testdrive/ieblog/2010/Mar/02_HowIE8DeterminesDocumentMode_3.png</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil樱</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此选项可强制IE在地址栏中隐藏该烦人的浏览器兼容性按钮：</font></font></p>

<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
