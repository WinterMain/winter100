---
layout: question
title:  jQuery AJAX跨域
date:   2020-03-12T12:44:57.000Z
description: 这是两个页面，test.php和testserver.php。test.php<script src="scripts/jq.js" type="...
img: 
author: 十三Davaid
category: question
answer: 11
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是两个页面，test.php和testserver.php。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">test.php</font></font></strong></p>

<pre><code>&lt;script src="scripts/jq.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
    $(function() {<font></font>
        $.ajax({url:"testserver.php",<font></font>
            success:function() {<font></font>
                alert("Success");<font></font>
            },<font></font>
            error:function() {<font></font>
                alert("Error");<font></font>
            },<font></font>
            dataType:"json",<font></font>
            type:"get"<font></font>
        }<font></font>
    )})<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">testserver.php</font></font></strong></p>

<pre><code>&lt;?php<font></font>
$arr = array("element1",<font></font>
             "element2",<font></font>
             array("element31","element32"));<font></font>
$arr['name'] = "response";<font></font>
echo json_encode($arr);<font></font>
?&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我的问题是：当这两个文件都在同一服务器上（本地主机或Web服务器）时，它可以工作并被</font></font><code>alert("Success")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用；</font><font style="vertical-align: inherit;">如果它在不同的服务器上，则意味着Web服务器上的testserver.php和localhost上的test.php，它不起作用，并且</font></font><code>alert("Error")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正在执行。</font><font style="vertical-align: inherit;">即使ajax内的URL更改为</font></font><a href="http://domain.com/path/to/file/testserver.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://domain.com/path/to/file/testserver.php</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1336篇《jQuery AJAX跨域》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Microsoft Azure，它略有不同。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Azure具有需要设置的特殊CORS设置。</font><font style="vertical-align: inherit;">幕后本质上是相同的，但是仅设置标题joshuarh提及将不起作用。</font><font style="vertical-align: inherit;">可以在此处找到用于启用跨域的Azure文档：</font></font></p>

<p><a href="https://docs.microsoft.com/en-us/azure/app-service-api/app-service-api-cors-consume-javascript" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.microsoft.com/zh-CN/azure/app-service-api/app-service-api-cors-consume-javascript</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了几个小时弄弄这个，然后才意识到我的托管平台具有这种特殊的设置。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道三种解决您的问题的方法：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，如果您可以访问两个域，则可以使用以下命令允许所有其他域的访问： </font></font></p>

<p><code>header("Access-Control-Allow-Origin: *");</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或仅将域名添加到.htaccess文件中：</font></font></p>

<p><code>&lt;FilesMatch "\.(ttf|otf|eot|woff)$"&gt;
&lt;IfModule mod_headers.c&gt;
    SetEnvIf Origin "http(s)?://(www\.)?(google.com|staging.google.com|development.google.com|otherdomain.net|dev02.otherdomain.net)$" AccessControlAllowOrigin=$0
    Header add Access-Control-Allow-Origin %{AccessControlAllowOrigin}e env=AccessControlAllowOrigin
&lt;/IfModule&gt;
&lt;/FilesMatch&gt;</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以向服务器中的php文件提出ajax请求，并使用此php文件处理对另一个域的请求。</font></font></p></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用jsonp，因为它不需要许可。</font><font style="vertical-align: inherit;">为此，您可以阅读我们的朋友@BGerrissen的答案。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎没有使用JSONP的示例，其中包括错误处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，请注意，使用JSONP时不会触发错误事件！</font><font style="vertical-align: inherit;">请参阅：</font></font><a href="http://api.jquery.com/jQuery.ajax/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://api.jquery.com/jQuery.ajax/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//api.jquery.com/jQuery.ajax/</font></a><font style="vertical-align: inherit;">或</font></font><a href="https://stackoverflow.com/questions/5247295/jquery-ajax-request-using-jsonp-error"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jsonp错误的jQuery ajax请求</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Jquery文档（</font></font><a href="http://api.jquery.com/jQuery.ajax/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于浏览器安全性的限制，大多数“ Ajax”请求都受相同的原始策略限制；</font><font style="vertical-align: inherit;">该请求无法成功从其他域，子域或协议检索数据。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本和JSONP请求不受相同的原始策略限制。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我认为您需要对请求使用jsonp。</font><font style="vertical-align: inherit;">但是我自己还没有尝试过。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是可能的，但是您需要使用JSONP，而不是JSON。</font><font style="vertical-align: inherit;">Stefan的链接为您指明了正确的方向。</font><font style="vertical-align: inherit;">在</font></font><a href="http://api.jquery.com/jQuery.ajax/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的AJAX页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对JSONP的更多信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Remy Sharp有一个</font></font><a href="http://remysharp.com/2007/10/08/what-is-jsonp/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用PHP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://remysharp.com/2007/10/08/what-is-jsonp/" rel="noreferrer"><font style="vertical-align: inherit;">详细示例</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器安全性阻止了从一个域上托管的页面到另一域上托管的页面进行ajax调用；</font><font style="vertical-align: inherit;">这就是所谓的“ </font></font><a href="http://en.wikipedia.org/wiki/Same_origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同源政策</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”。</font></font></p></div>
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
            <span class="discuss-user">米亚逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须从本地磁盘“ file：/// C：/test/htmlpage.html”加载网页，调用“ http：//localhost/getxml.php” URL，并在IE8 +和Firefox12 +浏览器中执行此操作，使用jQuery v1 .7.2 lib以最小化样板代码。</font><font style="vertical-align: inherit;">阅读了数十篇文章后，终于弄明白了。</font><font style="vertical-align: inherit;">这是我的总结。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器脚本（.php，.jsp等）必须返回http响应标头Access-Control-Allow-Origin：*</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用jQuery ajax之前，请在javascript中设置此标志：jQuery.support.cors = true;</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在使用jQuery ajax函数之前一次或每次设置标志</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我可以在IE和Firefox中阅读.xml文档。</font><font style="vertical-align: inherit;">我未测试的其他浏览器。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应文档可以是纯文本/文本，xml，json或其他任何内容</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个带有一些调试sysouts的示例jQuery ajax调用。</font></font></p>

<pre><code>jQuery.support.cors = true;<font></font>
$.ajax({<font></font>
    url: "http://localhost/getxml.php",<font></font>
    data: { "id":"doc1", "rows":"100" },<font></font>
    type: "GET",<font></font>
    timeout: 30000,<font></font>
    dataType: "text", // "xml", "json"<font></font>
    success: function(data) {<font></font>
        // show text reply as-is (debug)<font></font>
        alert(data);<font></font>
<font></font>
        // show xml field values (debug)<font></font>
        //alert( $(data).find("title").text() );<font></font>
<font></font>
        // loop JSON array (debug)<font></font>
        //var str="";<font></font>
        //$.each(data.items, function(i,item) {<font></font>
        //  str += item.title + "\n";<font></font>
        //});<font></font>
        //alert(str);<font></font>
    },<font></font>
    error: function(jqXHR, textStatus, ex) {<font></font>
        alert(textStatus + "," + ex + "," + jqXHR.responseText);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要看一下</font></font><a href="http://en.wikipedia.org/wiki/Same_origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同源起源政策</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在计算中，对于许多浏览器端编程语言（例如JavaScript），相同的来源策略是重要的安全概念。</font><font style="vertical-align: inherit;">该策略允许在源自同一站点的页面上运行的脚本不受特定限制地访问彼此的方法和属性，但可以阻止跨不同站点的页面访问大多数方法和属性。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使您能够获取数据，它必须是：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的协议和主机</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要实现</font></font><a href="http://remysharp.com/2007/10/08/what-is-jsonp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSONP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来解决它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Access-Control-Allow-Origin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过HTTP标头来</font><strong><font style="vertical-align: inherit;">控制它</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">将其设置为*将接受来自任何域的跨域AJAX请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常简单，只需将以下行添加到要从您的域外部访问的脚本中：</font></font></p>

<pre><code>header("Access-Control-Allow-Origin: *");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要忘记在httpd.conf中启用mod_headers模块。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实，同源策略可以阻止JavaScript跨域发出请求，但是CORS规范仅允许您要查找的API访问类型，并且当前一批主要浏览器都支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解如何为客户端和服务器启用跨域资源共享：</font></font></p>

<p><a href="http://enable-cors.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://enable-cors.org/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“跨源资源共享（CORS）是一种允许跨域边界真正开放访问的规范。如果您提供公共内容，请考虑使用CORS对其进行开放以实现通用JavaScript /浏览器访问。”</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
