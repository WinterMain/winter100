---
layout: question
title:  使用JavaScript获取当前URL？
date:   2020-03-09T05:17:52.000Z
description: 我想要的只是获取网站URL。不是从链接获取的URL。在页面加载过程中，我需要能够获取网站的完整，当前URL，并将其设置为一个变量，以便我随意使用。...
img: 
author: 樱古一
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要的只是获取网站URL。</font><font style="vertical-align: inherit;">不是从链接获取的URL。</font><font style="vertical-align: inherit;">在页面加载过程中，我需要能够获取网站的完整，当前URL，并将其设置为一个变量，以便我随意使用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第160篇《使用JavaScript获取当前URL？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nikhil Agrawal的答案很好，只需在此处添加一个小示例，您就可以在控制台中进行操作以查看实际的不同组件：</font></font></p>

<p><a href="https://i.stack.imgur.com/ls587.png" rel="nofollow noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/ls587.png" alt="在此处输入图片说明"></a></p>

<p>If you want the base URL without path or query parameter (for example to do AJAX requests against to work on both development/staging AND production servers), <code>window.location.origin</code> is best as it keeps the protocol as well as optional port (in Django development, you sometimes have a non-standard port which breaks it if you just use hostname etc.)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Try</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">location</span><span class="pun">+</span><span class="str">''</span></code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false"><div class="snippet-display" style="vertical-align: center"><p><a class="snippet-show-link-chevron" data-bitapp="processed"><span class="expander-arrow-hide" style="vertical-align: middle;"></span></a><a class="snippet-show-link" data-bitapp="processed"><span class="show-hide" data-ishidden="true" style="vertical-align: middle">Show code snippet</span></a></p></div>
<div class="snippet-code snippet-currently-hidden" style="display: none;">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> url </span><span class="pun">=</span><span class="pln"> location</span><span class="pun">+</span><span class="str">''</span><span class="pun">;</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">url</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif3" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猴子Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript获取当前URL：</font></font></strong> </p>

<blockquote>
  <ul>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.location.toString（）;</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.location.href</font></font></p></li>
  </ul>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">满天星</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过以下</font></font><code>location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
方式获取</font><font style="vertical-align: inherit;">当前页面的完整链接，</font><font style="vertical-align: inherit;">并获取当前控制器的链接，请使用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">location</span><span class="pun">.</span><span class="pln">href</span><span class="pun">.</span><span class="pln">substring</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> location</span><span class="pun">.</span><span class="pln">href</span><span class="pun">.</span><span class="pln">lastIndexOf</span><span class="pun">(</span><span class="str">'/'</span><span class="pun">));</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Pro小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取当前位置对象的方法是</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此与进行比较</font></font><code>document.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，后者最初仅将当前URL作为字符串返回。</font><font style="vertical-align: inherit;">可能是为了避免混淆，</font></font><code>document.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已将替换为</font></font><code>document.URL</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且，所有现代浏览器都映射</font></font><code>document.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，为了确保跨浏览器的安全，您应该使用</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>document.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jstl中，我们可以使用来访问当前的URL路径</font></font><code>pageContext.request.contextPath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果要进行Ajax调用，请使用以下URL。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">url </span><span class="pun">=</span><span class="pln"> </span><span class="str">"${pageContext.request.contextPath}"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"/controller/path"</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：对于页面，</font></font><code>http://stackoverflow.com/posts/36577223</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将给出</font></font><code>http://stackoverflow.com/controller/path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">   location</span><span class="pun">.</span><span class="pln">origin</span><span class="pun">+</span><span class="pln">location</span><span class="pun">.</span><span class="pln">pathname</span><span class="pun">+</span><span class="pln">location</span><span class="pun">.</span><span class="pln">search</span><span class="pun">+</span><span class="pln">location</span><span class="pun">.</span><span class="pln">hash</span><span class="pun">;</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些想要实际URL对象的人，可能是将URL作为参数的实用程序：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> url </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> URL</span><span class="pun">(</span><span class="pln">window</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">href</span><span class="pun">)</span></code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/URL</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于带有查询字符串的完整URL：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">document</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">().</span><span class="pln">toLowerCase</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于主机URL：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="pln">location</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> currentPageUrlIs </span><span class="pun">=</span><span class="pln"> </span><span class="str">""</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">typeof</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">href </span><span class="pun">!=</span><span class="pln"> </span><span class="str">"undefined"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
       currentPageUrlIs </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">href</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">().</span><span class="pln">toLowerCase</span><span class="pun">();</span><span class="pln"> 
</span><span class="pun">}</span><span class="kwd">else</span><span class="pun">{</span><span class="pln"> 
       currentPageUrlIs </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">().</span><span class="pln">toLowerCase</span><span class="pun">();</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码也可以帮助某人 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加结果以供快速参考</font></font></strong> </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.location;</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="typ">Location</span><span class="pln"> </span><span class="pun">{</span><span class="pln">href</span><span class="pun">:</span><span class="pln"> </span><span class="str">"https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript"</span><span class="pun">,</span><span class="pln">
 ancestorOrigins</span><span class="pun">:</span><span class="pln"> </span><span class="typ">DOMStringList</span><span class="pun">,</span><span class="pln">
 origin</span><span class="pun">:</span><span class="pln"> </span><span class="str">"https://stackoverflow.com"</span><span class="pun">,</span><span class="pln">
 replace</span><span class="pun">:</span><span class="pln"> </span><span class="pun">ƒ,</span><span class="pln"> assign</span><span class="pun">:</span><span class="pln"> </span><span class="pun">ƒ,</span><span class="pln">&nbsp;</span><span class="pun">…}</span></code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件位置</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">  </span><span class="typ">Location</span><span class="pln"> </span><span class="pun">{</span><span class="pln">href</span><span class="pun">:</span><span class="pln"> </span><span class="str">"https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript"</span><span class="pun">,</span><span class="pln"> 
ancestorOrigins</span><span class="pun">:</span><span class="pln"> </span><span class="typ">DOMStringList</span><span class="pun">,</span><span class="pln">
 origin</span><span class="pun">:</span><span class="pln"> </span><span class="str">"https://stackoverflow.com"</span><span class="pun">,</span><span class="pln">
 replace</span><span class="pun">:</span><span class="pln"> </span><span class="pun">ƒ,</span><span class="pln"> assign</span><span class="pun">:</span><span class="pln"> </span><span class="pun">ƒ</span><span class="pln">
</span><span class="pun">,</span><span class="pln">&nbsp;</span><span class="pun">…}</span></code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.location.pathname</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"/questions/1034621/get-the-current-url-with-javascript"</span></code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.location.href</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript"</span></code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">location.hostname</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"stackoverflow.com"</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Pro卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用：</font></font><code>window.location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如上所述，</font></font><code>document.URL</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时</font><strong><font style="vertical-align: inherit;">不会</font></strong><font style="vertical-align: inherit;">更新</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">参见</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/document.URL" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Developer Developer</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键入以下内容，</font><font style="vertical-align: inherit;">然后按</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Enter</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="pln">location</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：以下是当前页面上结果的屏幕截图。</font></font></p>

<p><a href="https://i.stack.imgur.com/EbfAs.png" rel="noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/EbfAs.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这里获取您的需求。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>window.location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获得完整的URL。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>window.location.pathname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到URL离开主机。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取当前页面的URL：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">href</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对</font><font style="vertical-align: inherit;">与当前帧关联</font><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/En/DOM/Window.location#Location_object" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位置对象的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">读写访问</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您只想以只读字符串的形式获取地址，则可以使用</font></font><code>document.URL</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其值应与相同</font></font><code>window.location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易斯丁神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL信息访问</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript为您提供了许多方法来检索和更改当前URL，该URL显示在浏览器的地址栏中。</font><font style="vertical-align: inherit;">所有这些方法都使用</font></font><code>Location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，它是对象的属性</font></font><code>Window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以创建一个</font></font><code>Location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有当前URL </font><font style="vertical-align: inherit;">的新</font><font style="vertical-align: inherit;">对象，如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> currentLocation </span><span class="pun">=</span><span class="pln"> window</span><span class="pun">.</span><span class="pln">location</span><span class="pun">;</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本网址结构</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">protocol</span><span class="pun">&gt;</span><span class="com">//&lt;hostname&gt;:&lt;port&gt;/&lt;pathname&gt;&lt;search&gt;&lt;hash&gt;</span></code></pre>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">protocol：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">协议名称，用于访问Internet上的资源。</font><font style="vertical-align: inherit;">（HTTP（不带SSL）或HTTPS（带SSL））</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hostname：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主机名指定拥有资源的主机。</font><font style="vertical-align: inherit;">例如，</font></font><code>www.stackoverflow.com</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">服务器使用主机名提供服务。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口号，用于识别Internet或其他网络消息到达服务器时将转发到的特定进程。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pathname：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径提供有关Web客户端要访问的主机内特定资源的信息。</font><font style="vertical-align: inherit;">例如，</font></font><code>/index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询字符串位于路径部分之后，并提供资源可用于某些目的的信息字符串（例如，用作搜索的参数或要处理的数据）。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hash：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> URL的锚点部分，包括井号（＃）。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这些</font></font><code>Location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象属性，您可以访问所有这些URL组件以及它们可以设置或返回的内容：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">href-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整个网址</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">protocol</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -URL的协议</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">host</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -URL的主机名和端口</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hostname</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -URL的主机名</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">port-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器用于URL的端口号</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pathname</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -URL的路径名</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">search</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -URL的查询部分</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hash</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -URL的锚点部分</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望你能得到答案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">href </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如评论中所述，下面的行有效，但对于Firefox而言是错误的。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">document</span><span class="pun">.</span><span class="pln">URL</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><strong><a href="https://web.archive.org/web/20170327080647/http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-46183437" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOMString类型的URL，只读</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
