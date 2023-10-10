---
layout: question
title:  什么是“ X-Content-Type-Options = nosniff”？
date:   2020-03-24T09:58:17.000Z
description: 我正在使用OWASP ZAP在我的本地主机上进行一些渗透测试，并且不断报告此消息：  Anti-MIME-Sniffing标头X-Content-T...
img: 
author: 阳光十三GO
category: question
answer: 4
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用OWASP ZAP在我的本地主机上进行一些渗透测试，并且不断报告此消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anti-MIME-Sniffing标头X-Content-Type-Options未设置为'nosniff'</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此检查特定于Internet Explorer 8和Google Chrome。</font><font style="vertical-align: inherit;">如果Content-Type标头未知，请确保每个页面都设置了Content-Type标头和X-CONTENT-TYPE-OPTIONS</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道这意味着什么，也无法在网上找到任何东西。</font><font style="vertical-align: inherit;">我尝试添加：</font></font></p>

<pre><code>&lt;meta content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff" http-equiv="Content-Type" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我仍然收到警报。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置参数的正确方法是什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTom</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Microsoft IIS服务器，可以通过</font></font><code>web.config</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">启用此标头</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;system.webServer&gt;<font></font>
    &lt;httpProtocol&gt;<font></font>
      &lt;customHeaders&gt;<font></font>
        &lt;remove name="X-Content-Type-Options"/&gt;<font></font>
        &lt;add name="X-Content-Type-Options" value="nosniff"/&gt;<font></font>
      &lt;/customHeaders&gt;<font></font>
    &lt;/httpProtocol&gt;<font></font>
&lt;/system.webServer&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您完成了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置服务器的</font></font><code>X-Content-Type-Options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP响应标头以</font></font><code>nosniff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指示浏览器禁用</font></font><a href="https://en.wikipedia.org/wiki/Content_sniffing" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容或MIME嗅探</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><a href="https://en.wikipedia.org/wiki/Content_sniffing" rel="noreferrer"><font style="vertical-align: inherit;">内容或MIME嗅探</font></a><font style="vertical-align: inherit;">用于覆盖响应</font></font><code>Content-Type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头以使用隐式内容类型猜测和处理数据。</font><font style="vertical-align: inherit;">尽管在某些情况下这很方便，但也可能导致下面列出的一些攻击。</font><font style="vertical-align: inherit;">配置服务器以将</font></font><code>X-Content-Type-Options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP响应标头设置为，</font></font><code>nosniff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将指示支持MIME嗅探的浏览器使用服务器提供</font></font><code>Content-Type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的内容，而不将内容解释为其他内容类型。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font></font><code>X-Content-Type-Options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP响应报头在浏览器，Firefox和边缘以及其他浏览器支持。</font><font style="vertical-align: inherit;">Mozilla开发人员网络（MDN）浏览器兼容性表中针对X-Content-Type-Options提供了最新的浏览器支持：</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反击</font></font></strong></p>

<ol>
<li><p><strong><a href="https://www.veracode.com/blog/2014/03/guidelines-for-setting-security-headers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MIME混淆攻击</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许用户上传恶意代码，然后由浏览器执行，这些浏览器将使用备用内容类型来解释文件，例如隐式或</font></font><code>application/javascript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显式</font><font style="vertical-align: inherit;">，从而通过用户生成的内容站点进行攻击</font></font><code>text/plain</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这可能会导致</font></font><a href="https://en.wikipedia.org/wiki/Drive-by_download" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> “偷渡式下载”攻击</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是网络钓鱼的常见攻击媒介。</font><font style="vertical-align: inherit;">托管用户生成内容的网站应使用此标头来保护其用户。</font><font style="vertical-align: inherit;">这是通过提到</font></font><a href="https://www.veracode.com/blog/2014/03/guidelines-for-setting-security-headers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的VeraCode</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://www.owasp.org/index.php/List_of_useful_HTTP_headers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> OWASP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它说以下内容：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以减少遭受偷渡式下载攻击和为用户上传的内容提供服务的站点的风险，这些站点通过巧妙的命名可以被MSIE视为可执行文件或动态HTML文件。</font></font></p>
</blockquote></li>
<li><p><strong><a href="https://github.com/blog/1482-heads-up-nosniff-header-support-coming-to-chrome-and-firefox" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以通过</font></font><code>Content-Type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗅探</font><font style="vertical-align: inherit;">来启用</font><strong><a href="https://github.com/blog/1482-heads-up-nosniff-header-support-coming-to-chrome-and-firefox" rel="noreferrer"><font style="vertical-align: inherit;">未经授权的热链接</font></a></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">通过以一种目的（例如查看）为目的将资源热链接到网站，应用程序可以依靠内容类型的嗅探并为另一目的在网站上产生大量流量，而这可能会违反其服务条款，例如</font></font><a href="https://github.com/blog/1482-heads-up-nosniff-header-support-coming-to-chrome-and-firefox" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> GitHub</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示JavaScript代码以供查看，但不用于执行：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些讨厌的非人类用户（即计算机）已通过原视图功能采取“盗链”资产-使用原始URL作为</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font><font style="vertical-align: inherit;">问题在于这些不是静态资产。</font><font style="vertical-align: inherit;">与Rails应用程序中的任何其他视图一样，原始文件视图必须先呈现，然后再返回给用户。</font><font style="vertical-align: inherit;">这很快会给性能造成巨大损失。</font><font style="vertical-align: inherit;">过去，我们一直被迫以这种方式阻止流行的内容，因为它给我们的服务器带来了极大的压力。</font></font></p>
</blockquote></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code># prevent mime based attacks<font></font>
Header set X-Content-Type-Options "nosniff"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此标头可防止基于“ mime”的攻击。</font><font style="vertical-align: inherit;">此标头可防止Internet Explorer MIME嗅探已声明内容类型的响应，因为标头指示浏览器不要覆盖响应内容类型。</font><font style="vertical-align: inherit;">使用nosniff选项，如果服务器说内容为text / html，则浏览器会将其呈现为text / html。</font></font></p>

<p><a href="http://stopmalvertising.com/security/securing-your-website-with-.htaccess/.htaccess-http-headers.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://stopmalvertising.com/security/securing-your-website-with-.htaccess/.htaccess-http-headers.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProL</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">X-Content-Type-Options响应HTTP标头是服务器使用的标记，用于指示不应更改和遵循Content-Type标头中通告的MIME类型。</font><font style="vertical-align: inherit;">这样就可以选择不使用MIME类型的嗅探，换句话说，这是一种表示网站管理员知道他们在做什么的方式。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">句法 ：</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">X-Content-Type-Options：nosniff</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令：</font></font></strong> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nosniff</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
如果请求的类型为1.“ style”且MIME类型不是“ text / css”或2.“ script”且MIME类型不是JavaScript MIME类型，则阻止请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：nosniff仅适用于“脚本”和“样式”类型。</font><font style="vertical-align: inherit;">还对图像应用nosniff证明与现有网站不兼容。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规格：</font></font></strong> </p>

<p><a href="https://fetch.spec.whatwg.org/#x-content-type-options-header" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fetch.spec.whatwg.org/#x-content-type-options-header</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
