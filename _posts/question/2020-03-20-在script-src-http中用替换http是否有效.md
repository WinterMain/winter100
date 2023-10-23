---
layout: question
title:  在<script src =“ http：//…”>中用//替换http：//是否有效？
date:   2020-03-20T02:11:51.000Z
description: 我有以下要素：<script type="text/javascript" src="https //cdn.example.com/js_file....
img: 
author: 猿小宇宙小哥
category: question
answer: 12
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下要素：</font></font></p>

<pre><code>&lt;script type="text/javascript" src="https://cdn.example.com/js_file.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，该站点是HTTPS，但该站点也可能只是HTTP。</font><font style="vertical-align: inherit;">（该JS文件位于另一个域上。）我想知道为方便起见，执行以下操作是否有效：</font></font></p>

<pre><code>&lt;script type="text/javascript" src="//cdn.example.com/js_file.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道删除</font></font><code>http:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>https:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否</font><font style="vertical-align: inherit;">有效</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在我测试过的所有地方似乎都可以使用，但是在任何情况下都无法使用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2436篇《在<script src =“ http：//…”>中用//替换http：//是否有效？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯L</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h2>1. Summary</h2>

<p>Answer for 2019: you can still use protocol-relative URLs, but <a href="https://stackoverflow.com/a/48893712/5951529"><strong>this technique</strong></a> <a href="https://stackoverflow.com/a/28454204/5951529"><strong>an anti-pattern</strong></a>.</p>

<p>Also:</p>

<ol>
<li>You may have problems in developing.</li>
<li>Some third-party tools may not support them.</li>
</ol>

<p>Migrating from protocol-relative URLs to <code>https://</code> it would be nice.</p>

<hr>

<h2>2. Relevance</h2>

<p>This answer is relevant for January 2019. In the future, the data of this answer may be obsolete.</p>

<hr>

<h2>3. Anti-pattern</h2>

<h3>3.1. Argumentation</h3>

<p>Paul Irish — <a href="https://en.wikipedia.org/wiki/Paul_Irish" rel="nofollow noreferrer"><strong>front-end engineer and a developer advocate for the Google Chrome</strong></a> — <a href="https://www.paulirish.com/2010/the-protocol-relative-url/" rel="nofollow noreferrer"><strong>write in 2014, December</strong></a>:</p>

<blockquote>
  <p>Now that SSL is <a href="https://www.eff.org/encrypt-the-web-report" rel="nofollow noreferrer"><strong>encouraged for everyone</strong></a> and <a href="https://istlsfastyet.com/" rel="nofollow noreferrer"><strong>doesn’t have performance concerns</strong></a>, <strong>this technique is now an anti-pattern</strong>. If the asset you need is available on SSL, then always use the <code>https://</code> asset.</p>
  
  <p>Allowing the snippet to request over HTTP opens the door for attacks like the <a href="https://www.netresec.com/?page=Blog&amp;month=2015-03&amp;post=China%27s-Man-on-the-Side-Attack-on-GitHub" rel="nofollow noreferrer"><strong>recent GitHub Man-on-the-side attack</strong></a>. It’s always safe to request HTTPS assets even if your site is on HTTP, however the reverse <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content" rel="nofollow noreferrer"><strong>is not true</strong></a>.</p>
</blockquote>

<h3>3.2. Another links</h3>

<ul>
<li><a href="https://sitebulb.com/hints/security/loads-page-resources-using-protocol-relative-uris/" rel="nofollow noreferrer"><strong>Loads page resources using protocol relative URIs</strong></a></li>
<li><a href="https://joonas.fi/2016/12/27/stop-using-protocol-relative-urls/" rel="nofollow noreferrer"><strong>Stop using protocol-relative URLs</strong></a></li>
</ul>

<h3>3.3. Examples</h3>

<ul>
<li><a href="https://nickcraver.com/blog/2017/05/22/https-on-stack-overflow/#mistakes-protocol-relative-urls" rel="nofollow noreferrer"><strong>In 2017 Stack Overflow switched from protocol-relative URLs to <code>https</code></strong></a></li>
<li><a href="https://www.techradar.com/news/from-july-chrome-will-flag-all-unencrypted-websites-as-not-secure" rel="nofollow noreferrer"><strong>In 2018 Chrome will flag all unencrypted websites as “not secure”</strong></a></li>
</ul>

<hr>

<h2>4. Developing process</h2>

<p>For example, I try to use <a href="https://github.com/bahmutov/clean-console" rel="nofollow noreferrer"><strong>clean-console</strong></a>.</p>

<ul>
<li>Example file <code>KiraCleanConsole__cdn_links_demo.html</code>:</li>
</ul>

<pre class="lang-html prettyprint-override"><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;meta charset="UTF-8"&gt;<font></font>
    &lt;title&gt;clean-console without protocol demonstration&lt;/title&gt;<font></font>
    &lt;!-- Really dead link --&gt;<font></font>
    &lt;script src="https://unpkg.com/bowser@latest/bowser.min.js"&gt;&lt;/script&gt;<font></font>
    &lt;!-- Package exists; link without “https:” --&gt;<font></font>
    &lt;script src="//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"&gt;&lt;/script&gt;<font></font>
    &lt;!-- Package exists: link with “https:” --&gt;<font></font>
    &lt;script src="https://cdn.jsdelivr.net/npm/gemini-scrollbar/index.js"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    Kira Goddess!<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<ul>
<li>output:</li>
</ul>

<pre class="lang-text prettyprint-override"><code>D:\SashaDebugging&gt;clean-console -i KiraCleanConsole__cdn_links_demo.html<font></font>
checking KiraCleanConsole__cdn_links_demo.html<font></font>
phantomjs: opening page KiraCleanConsole__cdn_links_demo.html<font></font>
<font></font>
phantomjs: Unable to load resource (#3URL:file://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js)<font></font>
<font></font>
<font></font>
phantomjs:   phantomjs://code/runner.js:30 in onResourceError<font></font>
Error code: 203. Description: Error opening //cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js: The network path was not found.<font></font>
<font></font>
  phantomjs://code/runner.js:31 in onResourceError<font></font>
<font></font>
phantomjs: Unable to load resource (#5URL:https://unpkg.com/bowser@2.1.0/bowser.min.js)<font></font>
<font></font>
<font></font>
phantomjs:   phantomjs://code/runner.js:30 in onResourceError<font></font>
Error code: 203. Description: Error downloading https://unpkg.com/bowser@2.1.0/bowser.min.js - server replied: Not Found<font></font>
<font></font>
  phantomjs://code/runner.js:31 in onResourceError<font></font>
<font></font>
phantomjs: Checking errors after sleeping for 1000ms<font></font>
2 error(s) on KiraCleanConsole__cdn_links_demo.html<font></font>
<font></font>
phantomjs process exited with code 2<font></font>
</code></pre>

<p>Link <code>//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js</code> is valid, but I getting an error.</p>

<p>Pay attention to <code>file://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js</code> and read <a href="https://stackoverflow.com/a/7818464/5951529"><strong>Thilo</strong></a> and <a href="https://stackoverflow.com/a/37609402/5951529"><strong>bg17aw</strong></a> answers about <code>file://</code>.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道这种行为，也无法理解为什么我</font></font><a href="https://github.com/sindresorhus/pageres/issues/331" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在pageres中</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到这样的问题</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5.第三方工具</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://packagecontrol.io/packages/Clickable%20URLs" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Clickable URLs</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Sublime Text软件包。</font><font style="vertical-align: inherit;">使用它，我可以简单地从浏览器中的文本编辑器中打开链接。</font></font></p>

<p><img src="https://i.imgur.com/nheLLEc.png" alt="CSS链接示例"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例中的两个链接均有效。</font><font style="vertical-align: inherit;">但是，我可以使用可单击的URL在浏览器中成功打开的第一个链接，第二个链接-不。</font><font style="vertical-align: inherit;">这可能不是很方便。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">六，结论</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有任何问题</font></font><code>Developing process</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以设置开发工作流程。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，您可能会遇到其他问题</font></font><code>Third-party tools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以提供工具。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您不需要这些其他问题。</font><font style="vertical-align: inherit;">通过以下</font></font><code>Anti-pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项中</font><font style="vertical-align: inherit;">的链接读取信息</font><font style="vertical-align: inherit;">：相对于协议的URL已过时。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于您的示例链接到外部域，因此，如果您使用的是HTTPS，则应验证是否也为SSL设置了外部域。</font><font style="vertical-align: inherit;">否则，您的用户可能会看到SSL错误和/或404错误（例如，旧版本的Plesk将HTTP和HTTPS存储在单独的文件夹中）。</font><font style="vertical-align: inherit;">对于CDN，这不应该是一个问题，但是对于任何其他网站而言，则可能是一个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带说明一下，在更新旧网站时进行了测试，并且还可以在META REFRESH的url =部分中使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐千羽</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循gnud的参考之后，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 3986第5.2节</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果定义了方案组件，表明引用以方案名称开头，那么该引用将被解释为绝对URI，我们就完成了。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，参考URI的方案将从基本URI的scheme组件继承</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以</font></font><code>//</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是正确的:-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，这在</font></font><a href="http://www.ietf.org/rfc/rfc2396.txt" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 3986</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第5.2节中有记录：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（编辑：糟糕，我的RFC参考已过时）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用//somedomain.com作为JS文件的引用时，我们在日志中看到404错误。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致404出现的引用看起来像这样：ref：</font></font></p>

<pre><code>&lt;script src="//somedomain.com/somescript.js" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">404要求：</font></font></p>

<pre><code>http://mydomain.com//somedomain.com/somescript.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着这些定期显示在我们的Web服务器日志中，可以肯定地说：所有浏览器和Bot </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵守RFC 3986第4.2节。</font><font style="vertical-align: inherit;">最安全的选择是在可能的情况下包括该协议。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阿飞Itachi</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他答案所言，这确实是正确的。</font><font style="vertical-align: inherit;">不过，您应该注意，某些网络搜寻器会通过在您的服务器上请求它们（就像本地URL）来触发404。</font><font style="vertical-align: inherit;">（他们无视双斜杠并将其视为单斜杠）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要在网络服务器上设置规则以捕获并重定向它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，使用Nginx，您可以添加以下内容：</font></font></p>

<pre><code>location ~* /(?&lt;redirect_domain&gt;((([a-z]|[0-9]|\-)+)\.)+([a-z])+)/(?&lt;redirect_path&gt;.*) {<font></font>
  return 301 $scheme:/$redirect_domain/$redirect_path;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过请注意，如果您在URI中使用句点，则需要提高特异性，否则最终会将这些页面重定向到不存在的域。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，这是为每个查询运行的一个相当大的正则表达式-我认为，值得对404兼容的不兼容浏览器进行惩罚，而不是对大多数兼容浏览器造成（轻微）性能下降。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子樱</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下它不起作用？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果父页面是从加载的</font></font><code>file://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则它可能无法正常工作（它将尝试获取</font></font><code>file://cdn.example.com/js_file.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当然您也可以在本地提供）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Harry</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，我重复了</font></font><a href="https://stackoverflow.com/questions/954327/hidden-features-of-html/960111#960111"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML的隐藏功能中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的答案</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用与协议无关的绝对路径：</font></font></p>

<pre><code>&lt;img src="//domain.com/img/logo.png"/&gt;
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果浏览器正在通过HTTPS以SSL查看网页，则它将使用https协议请求该资产，否则将通过HTTP请求该资产。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以防止IE中出现可怕的“此页面同时包含安全和非安全项目”错误消息，从而使所有资产请求都保持在同一协议内。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：在</font></font><code>&lt;link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式表的@import上使用IE7和IE8
   </font></font><a href="http://www.stevesouders.com/blog/2010/02/10/5a-missing-schema-double-download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两次下载文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，所有其他用途都很好。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天古一</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多人将此称为协议相对URL。</font></font></p>

<p><a href="http://www.stevesouders.com/blog/2010/02/10/5a-missing-schema-double-download/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会导致在IE 7和8中双重下载CSS文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOGil老丝</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="http://www.ietf.org/rfc/rfc3986.txt" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 3986：“统一资源标识符（URI）：通用语法”，第4.2节，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不带方案的相对URL（http：或https ：）有效</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果客户端对此感到窒息，那是客户端的错，因为它们不符合RFC中指定的URI语法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的示例有效，应该可以工作。</font><font style="vertical-align: inherit;">我本人在人流量大的网站上使用了这种相对URL方法，并且零投诉。</font><font style="vertical-align: inherit;">另外，我们在Firefox，Safari，IE6，IE7和Opera中测试我们的网站。</font><font style="vertical-align: inherit;">这些浏览器都了解该URL格式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放弃该协议是完全有效的。</font><font style="vertical-align: inherit;">多年来，URL规范对此非常清楚，但是我还没有找到一个不了解它的浏览器。</font><font style="vertical-align: inherit;">我不知道为什么这种技术不为人所知。</font><font style="vertical-align: inherit;">它是解决HTTP / HTTPS边界棘手问题的完美解决方案。</font><font style="vertical-align: inherit;">更多信息：</font></font><a href="http://nedbatchelder.com/blog/200710/httphttps_transitions_and_relative_urls.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Http-https转换和相对URL</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Tom</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保证可以在任何主流浏览器中使用（我没有考虑市场份额低于0.05％的浏览器）。</font><font style="vertical-align: inherit;">哎呀，它可以在Internet Explorer 3.0中使用。</font></font></p>

<p><a href="http://tools.ietf.org/html/rfc3986#section-3" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 3986</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将URI定义为以下部分：</font></font></p>

<pre><code>     foo://example.com:8042/over/there?name=ferret#nose<font></font>
     \_/   \______________/\_________/ \_________/ \__/<font></font>
      |           |            |            |        |<font></font>
   scheme     authority       path        query   fragment<font></font>
</code></pre>

<p>When defining relative URIs (<a href="http://tools.ietf.org/html/rfc3986#section-5.2" rel="noreferrer">Section 5.2</a>), you can omit any of those sections, always starting from the left. In pseudo-code, it looks like this:</p>

<pre><code> result = ""<font></font>
<font></font>
  if defined(scheme) then<font></font>
     append scheme to result;<font></font>
     append ":" to result;<font></font>
  endif;<font></font>
<font></font>
  if defined(authority) then<font></font>
     append "//" to result;<font></font>
     append authority to result;<font></font>
  endif;<font></font>
<font></font>
  append path to result;<font></font>
<font></font>
  if defined(query) then<font></font>
     append "?" to result;<font></font>
     append query to result;<font></font>
  endif;<font></font>
<font></font>
  if defined(fragment) then<font></font>
     append "#" to result;<font></font>
     append fragment to result;<font></font>
  endif;<font></font>
<font></font>
  return result;<font></font>
</code></pre>

<p>The URI you are describing is a scheme-less relative URI.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
