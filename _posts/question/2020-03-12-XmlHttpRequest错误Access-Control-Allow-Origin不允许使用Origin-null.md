---
layout: question
title:  XmlHttpRequest错误：Access-Control-Allow-Origin不允许使用Origin null
date:   2020-03-12T07:29:31.000Z
description: 我正在开发一个页面，该页面通过jQuery的AJAX支持从Flickr和Panoramio中提取图像。Flickr方面运行良好，但是当我尝试$.get...
img: 
author: 理查德Mandy
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在开发一个页面，该页面通过jQuery的AJAX支持从Flickr和Panoramio中提取图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flickr方面运行良好，但是当我尝试</font></font><code>$.get(url, callback)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Panoramio运行时，我在Chrome的控制台中看到错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XMLHttpRequest无法加载</font></font><a href="http://www.panoramio.com/wapi/data/get_photos?v=1&amp;key=dummykey&amp;tag=test&amp;offset=0&amp;length=20&amp;callback=processImages&amp;minx=-30&amp;miny=0&amp;maxx=0&amp;maxy=150" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.panoramio.com/wapi/data/get_photos?v=1&amp;key=dummykey&amp;tag=test&amp;offset=0&amp;length=20&amp;callback=processImages&amp;minx=-30&amp;miny=0&amp;maxx=0&amp;maxy=150</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Access-Control-Allow-Origin不允许使用Origin null。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我直接从浏览器查询该URL，它将正常工作。</font><font style="vertical-align: inherit;">这是怎么回事，我可以解决这个问题吗？</font><font style="vertical-align: inherit;">我是在错误地编写查询，还是Panoramio这样做妨碍了我的工作？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google并未在</font></font><a href="http://www.google.co.uk/search?q=%22Origin+null+is+not+allowed+by+Access-Control-Allow-Origin%22" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示任何有用的匹配项</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一些显示问题的示例代码：</font></font></p>

<pre><code>$().ready(function () {<font></font>
  var url = 'http://www.panoramio.com/wapi/data/get_photos?v=1&amp;key=dummykey&amp;tag=test&amp;offset=0&amp;length=20&amp;callback=processImages&amp;minx=-30&amp;miny=0&amp;maxx=0&amp;maxy=150';<font></font>
<font></font>
  $.get(url, function (jsonp) {<font></font>
    var processImages = function (data) {<font></font>
      alert('ok');<font></font>
    };<font></font>
<font></font>
    eval(jsonp);<font></font>
  });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="http://jsfiddle.net/ZfvKm/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在线运行示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢达林在这方面的帮助。  </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码错误。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  使用此代替：</font></font></p>

<pre><code>$().ready(function () {<font></font>
  var url = 'http://www.panoramio.com/wapi/data/get_photos?v=1&amp;key=dummykey&amp;tag=test&amp;offset=0&amp;length=20&amp;minx=-30&amp;miny=0&amp;maxx=0&amp;maxy=150&amp;callback=?';<font></font>
<font></font>
  $.get(url, function (data) {<font></font>
    // can use 'data' in here...<font></font>
  });<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1063篇《XmlHttpRequest错误：Access-Control-Allow-Origin不允许使用Origin null》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/a/9604662/999400"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面CodeGroover</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布的解决方案中有一个小问题</font><font style="vertical-align: inherit;">，即如果您更改文件，则必须重新启动服务器才能实际使用更新的文件（至少在我的情况下）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以搜索了一下，我发现</font></font><a href="https://github.com/andrewpthorp/simple-http-server" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用：</font></font></p>

<pre><code>sudo npm -g install simple-http-server # to install<font></font>
nserver # to use<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后它将在投放</font></font><code>http://localhost:8000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinTom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您使用的是最新版本的JQuery。</font><font style="vertical-align: inherit;">我们遇到了针对JQuery 1.10.2的错误，使用JQuery 1.11.1后该错误已得到解决</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AEva伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Chrome中也遇到了相同的错误（我没有测试其他浏览器）。</font><font style="vertical-align: inherit;">这是由于我浏览的是domain.com而不是www.domain.com。</font><font style="vertical-align: inherit;">有点奇怪，但是我可以通过在.htaccess中添加以下几行来解决问题。</font><font style="vertical-align: inherit;">它将domain.com重定向到www.domain.com并解决了问题。</font><font style="vertical-align: inherit;">我是一个懒惰的Web访问者，所以我几乎从不键入www，但在某些情况下显然是必需的。</font></font></p>

<pre><code>RewriteEngine on<font></font>
RewriteCond %{HTTP_HOST} ^domain\.com$ [NC]<font></font>
RewriteRule ^(.*)$ http://www.domain.com/$1 [R=301,L]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神乐小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Apache服务器，所以我使用过mod_proxy模块。</font><font style="vertical-align: inherit;">启用模块：</font></font></p>

<pre><code>LoadModule proxy_module modules/mod_proxy.so<font></font>
LoadModule proxy_http_module modules/mod_proxy_http.so<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后加：</font></font></p>

<pre><code>ProxyPass /your-proxy-url/ http://service-url:serviceport/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，将proxy-url传递给脚本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在进行本地测试或通过类似方法调用文件，</font></font><code>file://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则需要禁用浏览器安全性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在MAC上：
</font></font><code>open -a Google\ Chrome --args --disable-web-security</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY古一阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们通过</font></font><code>http.conf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">对其进行了管理</font><font style="vertical-align: inherit;">（已编辑，然后重新启动了HTTP服务）：</font></font></p>

<pre><code>&lt;Directory "/home/the directory_where_your_serverside_pages_is"&gt;<font></font>
    Header set Access-Control-Allow-Origin "*"<font></font>
    AllowOverride all<font></font>
    Order allow,deny<font></font>
    Allow from all<font></font>
&lt;/Directory&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>Header set Access-Control-Allow-Origin "*"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以放置​​一个精确的URL。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，相同的代码在Firefox上可以正常工作，但在Google Chrome上却不能。</font><font style="vertical-align: inherit;">谷歌浏览器的JavaScript控制台说：</font></font></p>

<pre><code>XMLHttpRequest cannot load http://www.xyz.com/getZipInfo.php?zip=11234. <font></font>
Origin http://xyz.com is not allowed by Access-Control-Allow-Origin.<font></font>
Refused to get unsafe header "X-JSON"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须删除Ajax URL的www部分，以使其与原始URL正确匹配，然后工作正常。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西里泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据记录，据我所知，您有两个问题：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有向您传递“ jsonp”类型说明符</font></font><code>$.get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此它使用的是普通的XMLHttpRequest。</font><font style="vertical-align: inherit;">但是，您的浏览器支持CORS（跨域资源共享），如果服务器确定，则允许跨域XMLHttpRequest。</font><font style="vertical-align: inherit;">那是</font></font><code>Access-Control-Allow-Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">头文件进入</font><font style="vertical-align: inherit;">的地方</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信您提到您是通过file：// URL运行它的。</font><font style="vertical-align: inherit;">CORS标头有两种方式来表示跨域XHR正常。</font><font style="vertical-align: inherit;">一种是发送</font></font><code>Access-Control-Allow-Origin: *</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果您通过到达Flickr </font></font><code>$.get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，他们一定在发送），另一种是回显</font></font><code>Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头</font><font style="vertical-align: inherit;">的内容</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，</font></font><code>file://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL产生的null </font></font><code>Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能通过回显进行授权。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">达林的使用建议以一种round回的方式解决了第一个问题</font></font><code>$.getJSON</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果看到</font></font><code>callback=?</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL中</font><font style="vertical-align: inherit;">的子字符串</font><font style="vertical-align: inherit;">，将</font><font style="vertical-align: inherit;">请求类型从其默认值“ json”更改为“ jsonp”确实有点魔术</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过不再尝试从</font></font><code>file://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL </font><font style="vertical-align: inherit;">执行CORS请求，解决了第二个问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了向其他人说明，以下是简单的故障排除说明：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试使用JSONP，请确保符合以下条件之一：

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在使用</font></font><code>$.get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其设置</font></font><a href="http://api.jquery.com/jQuery.get/" rel="noreferrer"><code>dataType</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>jsonp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在使用</font></font><code>$.getJSON</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并包含</font></font><code>callback=?</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在URL中。</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试通过CORS执行跨域XMLHttpRequest ...

</font></font><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您通过进行测试</font></font><code>http://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">通过运行的脚本</font></font><code>file://</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对CORS的支持有限。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保浏览器</font></font><a href="http://caniuse.com/cors" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上支持CORS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（Opera和Internet Explorer迟到了）</font></font></li>
</ol></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于一个简单的HTML项目：</font></font></p>

<pre><code>cd project<font></font>
python -m SimpleHTTPServer 8000<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后浏览您的文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要请求的服务器支持JSON数据格式，请使用JSONP（JSON填充）接口。</font><font style="vertical-align: inherit;">它使您可以发出外部域请求，而无需代理服务器或精美的标题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://developer.mozilla.org/En/Same_origin_policy_for_JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的原始策略</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您必须使用JSON-P接口或在同一主机上运行的代理。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
