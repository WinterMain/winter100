---
layout: question
title:  iOS 6上的Safari是否缓存$ .ajax结果？
date:   2020-03-09T16:56:14.000Z
description: 自从升级到iOS 6以来，我们看到Safari的Web视图可以使用缓存$.ajax调用。这是在PhoneGap应用程序的上下文中，因此它使用的是Safar...
img: 
author: 神乐猿
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从升级到iOS 6以来，我们看到Safari的Web视图可以使用缓存</font></font><code>$.ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用。</font><font style="vertical-align: inherit;">这是在PhoneGap应用程序的上下文中，因此它使用的是Safari WebView。</font><font style="vertical-align: inherit;">我们的</font></font><code>$.ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用是</font></font><code>POST</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，并且我们将缓存设置为false </font></font><code>{cache:false}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但这仍然在发生。</font><font style="vertical-align: inherit;">我们尝试将a手动添加</font></font><code>TimeStamp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到标题中，但没有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们进行了更多研究，发现Safari仅返回具有静态功能签名且不会随调用而变化的Web服务的缓存结果。</font><font style="vertical-align: inherit;">例如，假设有一个类似以下内容的函数：</font></font></p>

<pre><code>getNewRecordID(intRecordType)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此函数一遍又一遍地接收相同的输入参数，但是每次返回的数据都应该不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一定要赶紧Apple加快iOS 6的速度，他们对缓存设置太满意了。</font><font style="vertical-align: inherit;">有人在iOS 6上看到过这种行为吗？</font><font style="vertical-align: inherit;">如果是这样，到底是什么原因造成的？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们发现的解决方法是将函数签名修改为如下所示：</font></font></p>

<pre><code>getNewRecordID(intRecordType, strTimestamp)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后也总是传入一个</font></font><code>TimeStamp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数，只是在服务器端丢弃该值。</font><font style="vertical-align: inherit;">这可以解决此问题。</font><font style="vertical-align: inherit;">希望这对其他像我一样在这个问题上花费15个小时的可怜人有所帮助！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第389篇《iOS 6上的Safari是否缓存$ .ajax结果？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里前端Tom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议一种变通办法将函数签名修改为如下形式：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getNewRecordID（intRecordType，strTimestamp），然后也总是传入一个TimeStamp参数，而只是在服务器端丢弃该值。</font><font style="vertical-align: inherit;">这可以解决此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门阳光</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有</font><font style="vertical-align: inherit;">在</font><a href="http://en.wikipedia.org/wiki/Internet_Information_Services" rel="nofollow"><font style="vertical-align: inherit;">IIS中</font></a><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">标头</font><font style="vertical-align: inherit;">之后，</font><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">才能</font><font style="vertical-align: inherit;">与</font></font><a href="http://en.wikipedia.org/wiki/ASP.NET" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASP.NET</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">还不够。</font></font><code>pragma:no-cache</code><font style="vertical-align: inherit;"></font><a href="http://en.wikipedia.org/wiki/Internet_Information_Services" rel="nofollow"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>Cache-Control: no-cache</code><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐宝儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我的登录页面和注册页面在Firefox，IE和Chrome中就像一个魅力一样……我一直在Safari的IOS和OSX上苦苦挣扎，几个月前，我在SO上找到了解决方法。</font></font></p>

<pre><code>&lt;body onunload=""&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或通过javascript</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
window.onunload = function(e){<font></font>
    e.preventDefault();<font></font>
    return;<font></font>
};<font></font>
&lt;/script&gt;   <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一件丑陋的事情，但可以工作一段时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道为什么，但返回null的</font></font><code>onunload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件不会在Safari中缓存该页面。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您已经解决了问题，但是让我分享有关Web缓存的想法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的确，您可以在服务器端，客户端使用的每种语言添加许多标头，并且可以使用许多其他技巧来避免Web缓存，但始终认为您永远无法知道客户端从何处连接到服务器，您永远不会知道他是否正在使用使用Squid或其他缓存产品的酒店“热点”连接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果用户使用代理来隐藏其真实位置等，则</font><font style="vertical-align: inherit;">避免缓存的唯一</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法就是请求中的时间戳（如果未使用）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>/ajax_helper.php?ts=3211321456
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您必须传递的每个缓存管理器都没有在缓存存储库中找到相同的URL并重新下载页面内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了一种解决方法，令我对其工作原理感到好奇。</font><font style="vertical-align: inherit;">在阅读Tadej有关ASP.NET Web服务的答案之前，我试图提出一些可行的方法。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我并不是说这是一个很好的解决方案，但我只是想在此处进行记录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主页：包括一个JavaScript函数checkStatus（）。</font><font style="vertical-align: inherit;">该方法调用另一个方法，该方法使用jQuery AJAX调用来更新html内容。</font><font style="vertical-align: inherit;">我使用setInterval调用checkStatus（）。</font><font style="vertical-align: inherit;">当然，我遇到了缓存问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：使用另一个页面来调用更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在主页上，我设置了一个布尔变量runUpdate，并将以下内容添加到body标记中：</font></font></p>

<pre><code>&lt;iframe src="helper.html" style="display: none; visibility: hidden;"&gt;&lt;/iframe&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在helper.html中：</font></font></p>

<pre><code>&lt;meta http-equiv="refresh" content="5"&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    if (parent.runUpdate) { parent.checkStatus(); }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果从主页调用checkStatus（），我将获得缓存的内容。</font><font style="vertical-align: inherit;">如果从子页面调用checkStatus，我将获得更新的内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinEva</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据应用程序的不同，您现在可以使用Safari&gt;高级&gt; Web检查器在iOS 6中解决问题，因此在这种情况下很有帮助。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将手机连接到Mac上的Safari，然后使用开发人员菜单对网络应用进行故障排除。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新到iOS6后，清除iPhone上的网站数据，包括使用Web View特定于该应用程序的数据。</font><font style="vertical-align: inherit;">只有一个应用存在问题，此问题在IOS6 Beta测试期间得以解决，此后没有任何实际问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还需要查看您的应用程序，如果在自定义应用程序的WebView中，请检出NSURLCache。</font></font></p>

<p><a href="https://developer.apple.com/library/ios/#documentation/Cocoa/Reference/Foundation/Classes/NSURLCache_Class/Reference/Reference.html#//apple_ref/doc/uid/TP40003754" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.apple.com/library/ios/#documentation/Cocoa/Reference/Foundation/Classes/NSURLCache_Class/Reference/Reference.html#//apple_ref/doc/uid/TP40003754</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想这取决于您的问题，实施等的真实性质。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：$ .ajax电话 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearItachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然添加缓存无效化参数以使请求看起来不同似乎是一个可靠的解决方案，但我建议不要这样做，因为它会损害依赖实际缓存的任何应用程序。</font><font style="vertical-align: inherit;">使API输出正确的标头是最好的解决方案，即使比向调用方添加缓存破坏程序稍微困难些。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门十三LEY</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些使用的人</font></font><code>Struts 1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是我解决此问题的方法。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">web.xml</font></font></strong></p>

<pre><code>&lt;filter&gt;<font></font>
    &lt;filter-name&gt;SetCacheControl&lt;/filter-name&gt;<font></font>
    &lt;filter-class&gt;com.example.struts.filters.CacheControlFilter&lt;/filter-class&gt;<font></font>
&lt;/filter&gt;<font></font>
<font></font>
&lt;filter-mapping&gt;<font></font>
    &lt;filter-name&gt;SetCacheControl&lt;/filter-name&gt;<font></font>
    &lt;url-pattern&gt;*.do&lt;/url-pattern&gt;<font></font>
    &lt;http-method&gt;POST&lt;/http-method&gt;<font></font>
&lt;/filter-mapping&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">com.example.struts.filters.CacheControlFilter.js</font></font></strong></p>

<pre><code>package com.example.struts.filters;<font></font>
<font></font>
import java.io.IOException;<font></font>
import java.util.Date;<font></font>
import javax.servlet.*;<font></font>
import javax.servlet.http.HttpServletResponse;<font></font>
<font></font>
public class CacheControlFilter implements Filter {<font></font>
<font></font>
        public void doFilter(ServletRequest request, ServletResponse response,<font></font>
                     FilterChain chain) throws IOException, ServletException {<font></font>
<font></font>
        HttpServletResponse resp = (HttpServletResponse) response;<font></font>
        resp.setHeader("Expires", "Mon, 18 Jun 1973 18:00:00 GMT");<font></font>
        resp.setHeader("Last-Modified", new Date().toString());<font></font>
        resp.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0");<font></font>
        resp.setHeader("Pragma", "no-cache");<font></font>
<font></font>
        chain.doFilter(request, response);<font></font>
    }<font></font>
<font></font>
    public void init(FilterConfig filterConfig) throws ServletException {<font></font>
    }<font></font>
<font></font>
    public void destroy() {<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了解决添加到主屏幕的WebApp的此问题，需要遵循两个最受欢迎的解决方法。</font><font style="vertical-align: inherit;">需要关闭Web服务器上的缓存，以防止继续缓存新的请求，并且需要向每个发布请求中添加一些随机输入，以使已缓存的请求能够通过。</font><font style="vertical-align: inherit;">请参考我的帖子：</font></font></p>

<p><a href="https://stackoverflow.com/questions/12642726/ios6-is-there-a-way-to-clear-cached-ajax-post-requests-for-webapp-added-to-hom"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iOS6-是否有办法清除添加到主屏幕的Web应用程序的缓存Ajax POST请求？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：对于通过在请求中添加时间戳而不关闭服务器上的缓存来实施变通方法的任何人。</font><font style="vertical-align: inherit;">如果您的应用程序已添加到主屏幕，则现在将缓存每个帖子响应，清除Safari缓存不会清除它，并且它似乎也不会过期。</font><font style="vertical-align: inherit;">除非有人有办法清除它，否则这似乎是潜在的内存泄漏！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小胖古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是GWT-RPC的解决方法</font></font></p>

<pre><code>class AuthenticatingRequestBuilder extends RpcRequestBuilder <font></font>
{<font></font>
       @Override<font></font>
       protected RequestBuilder doCreate(String serviceEntryPoint) <font></font>
       {<font></font>
               RequestBuilder requestBuilder = super.doCreate(serviceEntryPoint);           <font></font>
               requestBuilder.setHeader("Cache-Control", "no-cache");<font></font>
<font></font>
               return requestBuilder;<font></font>
       }<font></font>
}<font></font>
<font></font>
AuthenticatingRequestBuilder builder = new AuthenticatingRequestBuilder();<font></font>
((ServiceDefTarget)myService).setRpcRequestBuilder(builder);    <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一村村Gil</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="http://en.wikipedia.org/wiki/ASP.NET" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASP.NET中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法</font><font style="vertical-align: inherit;">（页面方法，Web服务等）</font></font></p>

<pre><code>protected void Application_BeginRequest(object sender, EventArgs e)<font></font>
{<font></font>
    Response.Cache.SetCacheability(HttpCacheability.NoCache);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Baz1nga答案的更新。</font><font style="vertical-align: inherit;">因为</font></font><code>options.data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是一个对象而是一个字符串，所以我只是串联了时间戳：</font></font></p>

<pre><code>$.ajaxPrefilter(function (options, originalOptions, jqXHR) {<font></font>
  if (originalOptions.type == "post" || options.type == "post") {<font></font>
<font></font>
    if (options.data &amp;&amp; options.data.length)<font></font>
      options.data += "&amp;";<font></font>
    else<font></font>
      options.data = "";<font></font>
<font></font>
    options.data += "timeStamp=" + new Date().getTime();<font></font>
  }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GWT-RPC服务的快速解决方法是将其添加到所有远程方法中：</font></font></p>

<pre><code>getThreadLocalResponse().setHeader("Cache-Control", "no-cache");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过一番调查，结果发现iOS6上的Safari将缓存没有Cache-Control标头甚至没有“ Cache-Control：max-age = 0”的POST。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现防止这种缓存在全局级别发生而不是将随机查询字符串砍入服务调用末尾的唯一方法是设置“ Cache-Control：no-cache”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有Cache-Control或Expires标头= iOS6 Safari将缓存</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缓存控制max-age = 0，并且立即到期= iOS6 Safari将会缓存</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缓存控制：无缓存= iOS6 Safari无法缓存</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怀疑Apple从9.5节有关POST的HTTP规范中利用了这一点：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非响应包括适当的Cache-Control或Expires标头字段，否则对此方法的响应不可缓存。</font><font style="vertical-align: inherit;">但是，303（请参阅其他）响应可用于指导用户代理检索可缓存资源。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，从理论上讲，您可以缓存POST响应...谁知道。</font><font style="vertical-align: inherit;">但是到目前为止，没有其他浏览器制造商曾认为这是一个好主意。</font><font style="vertical-align: inherit;">但这仅在设置了Cache-Control或Expires头时才考虑缓存。</font><font style="vertical-align: inherit;">因此，它一定是一个错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我在Apache配置的正确位置使用的内容，以我的整个API为目标，因为发生这种情况时，我实际上并不想缓存任何东西，甚至不需要缓存任何东西。</font><font style="vertical-align: inherit;">我不知道如何仅针对POST设置它。</font></font></p>

<pre><code>Header set Cache-Control "no-cache"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：只是注意到我没有指出它只是在POST相同的情况下，因此更改任何POST数据或URL都可以。</font><font style="vertical-align: inherit;">因此，您可以像在其他地方提到的那样，仅将一些随机数据添加到URL或一些POST数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：如果您希望在Apache中这样，可以将“无缓存”仅限制为POST：</font></font></p>

<pre><code>SetEnvIf Request_Method "POST" IS_POST<font></font>
Header set Cache-Control "no-cache" env=IS_POST<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您使用的是jQuery，则可满足所有Web服务请求的简单解决方案：</font></font></p>

<pre><code>$.ajaxPrefilter(function (options, originalOptions, jqXHR) {<font></font>
    // you can use originalOptions.type || options.type to restrict specific type of requests<font></font>
    options.data = jQuery.param($.extend(originalOptions.data||{}, { <font></font>
      timeStamp: new Date().getTime()<font></font>
    }));<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="http://api.jquery.com/jQuery.ajaxPrefilter/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关jQuery prefilter调用的更多信息</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不使用jQuery，请检查文档以查找您选择的库。</font><font style="vertical-align: inherit;">它们可能具有类似的功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从web应用程序从ASP.NET Web服务获取数据时遇到了同样的问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作：</font></font></p>

<pre><code>public WebService()<font></font>
{<font></font>
    HttpContext.Current.Response.Cache.SetCacheability(HttpCacheability.NoCache);<font></font>
    ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞羽</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="http://en.wikipedia.org/wiki/PhoneGap"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PhoneGap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序中</font><font style="vertical-align: inherit;">也遇到了这个问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我通过</font></font><code>getTime()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方式</font><font style="vertical-align: inherit;">使用JavaScript函数解决</font><font style="vertical-align: inherit;">了该问题：</font></font></p>

<pre><code>var currentTime = new Date();<font></font>
var n = currentTime.getTime();<font></font>
postUrl = "http://www.example.com/test.php?nocache="+n;<font></font>
$.post(postUrl, callbackFunction);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我浪费了几个小时弄清楚这个问题。</font><font style="vertical-align: inherit;">Apple最好将这个缓存问题通知开发人员。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
