---
layout: question
title:  Access-Control-Allow-Origin不允许使用Origin <origin>
date:   2020-03-24T07:16:29.000Z
description: XMLHttpRequest cannot load http //localhost 8080/api/test. Origin http //loca...
img: 
author: 小小
category: question
answer: 8
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>XMLHttpRequest cannot load http://localhost:8080/api/test. Origin http://localhost:3000 is not allowed by Access-Control-Allow-Origin. 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我阅读了有关跨域Ajax请求的信息，并了解了潜在的安全问题。</font><font style="vertical-align: inherit;">就我而言，有2台服务器在本地运行，并且希望在测试期间启用跨域请求。</font></font></p>

<pre><code>localhost:8080 - Google Appengine dev server<font></font>
localhost:3000 - Node.js server<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>localhost:8080 - GAE server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从节点服务器加载页面时，我</font><font style="vertical-align: inherit;">向发出了一个ajax请求</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">什么是最简单，最安全的方法（不想使用</font></font><code>disable-web-security</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">启动chrome </font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">如果必须更改</font></font><code>'Content-Type'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，是否应该在节点服务器上</font><font style="vertical-align: inherit;">进行更改</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">怎么样？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3429篇《Access-Control-Allow-Origin不允许使用Origin <origin>》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Google Chrome浏览器，请尝试安装以下插件：</font></font></p>

<p><a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我终于得到了Apache Tomcat8的答案</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须编辑tomcat web.xml文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会在webapps文件夹中， </font></font></p>

<pre><code>sudo gedit /opt/tomcat/webapps/your_directory/WEB-INF/web.xml
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到并编辑</font></font></p>

<pre><code>&lt;web-app&gt;<font></font>
<font></font>
<font></font>
&lt;filter&gt;<font></font>
  &lt;filter-name&gt;CorsFilter&lt;/filter-name&gt;<font></font>
  &lt;filter-class&gt;org.apache.catalina.filters.CorsFilter&lt;/filter-class&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.allowed.origins&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;*&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.allowed.methods&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;GET,POST,HEAD,OPTIONS,PUT&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.allowed.headers&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.exposed.headers&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;Access-Control-Allow-Origin,Access-Control-Allow-Credentials&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.support.credentials&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;true&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.preflight.maxage&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;10&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
&lt;/filter&gt;<font></font>
<font></font>
<font></font>
&lt;filter-mapping&gt;<font></font>
  &lt;filter-name&gt;CorsFilter&lt;/filter-name&gt;<font></font>
  &lt;url-pattern&gt;/*&lt;/url-pattern&gt;<font></font>
&lt;/filter-mapping&gt;<font></font>
<font></font>
<font></font>
<font></font>
&lt;/web-app&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将允许Access-Control-Allow-Origin所有主机。</font><font style="vertical-align: inherit;">如果您需要将其从所有主机更改为仅主机，则可以编辑</font></font></p>

<pre><code>&lt;param-name&gt;cors.allowed.origins&lt;/param-name&gt;<font></font>
&lt;param-value&gt;http://localhost:3000&lt;/param-value&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码从*到您的</font></font><a href="http://your_public_IP" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// your_public_IP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://www.example.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.example.com</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在这里参考</font></font><a href="https://tomcat.apache.org/tomcat-8.0-doc/config/filter.html#CORS_Filter/Filter_Class_Name" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tomcat过滤器文档</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于PHP，使用它来设置标题。</font></font></p>

<pre><code>header("Access-Control-Allow-Origin: *");<font></font>
header("Access-Control-Allow-Methods: PUT, GET, POST");<font></font>
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果之后获得403，请减少WEB.XML tomcat配置中的过滤器至以下内容： </font></font></p>

<pre><code>&lt;filter&gt;<font></font>
  &lt;filter-name&gt;CorsFilter&lt;/filter-name&gt;<font></font>
  &lt;filter-class&gt;org.apache.catalina.filters.CorsFilter&lt;/filter-class&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.allowed.origins&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;*&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.allowed.methods&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;GET,POST,HEAD,OPTIONS,PUT&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.allowed.headers&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
  &lt;init-param&gt;<font></font>
    &lt;param-name&gt;cors.exposed.headers&lt;/param-name&gt;<font></font>
    &lt;param-value&gt;Access-Control-Allow-Origin,Access-Control-Allow-Credentials&lt;/param-value&gt;<font></font>
  &lt;/init-param&gt;<font></font>
&lt;/filter&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此添加到导入下面的NodeJS服务器中：</font></font></p>

<pre><code>app.use(function(req, res, next) {<font></font>
  res.header("Access-Control-Allow-Origin", "*");<font></font>
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");<font></font>
  next();<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用Chrome中的Ajax调用跨源资源时，我遇到了一个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用节点js和本地http服务器来部署我的节点js应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问跨源资源时出现错误响应</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了一个解决方案，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）我已将以下代码添加到我的app.js文件中</font></font></p>

<pre><code>res.header("Access-Control-Allow-Origin", "*");<font></font>
res.header("Access-Control-Allow-Headers", "X-Requested-With");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）在我的html页面中，使用 </font></font><code>$.getJSON();</code></p>

<pre><code>$.getJSON("http://localhost:3000/users", function (data) {<font></font>
    alert("*******Success*********");<font></font>
    var response=JSON.stringify(data);<font></font>
    alert("success="+response);<font></font>
    document.getElementById("employeeDetails").value=response;<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我接受@Rocket hazmat的回答，因为它可以将我引向解决方案。</font><font style="vertical-align: inherit;">确实是在GAE服务器上，我需要设置标题。</font><font style="vertical-align: inherit;">我必须设置这些</font></font></p>

<pre><code>"Access-Control-Allow-Origin" -&gt; "*"<font></font>
"Access-Control-Allow-Headers" -&gt; "Origin, X-Requested-With, Content-Type, Accept"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置只</font></font><code>"Access-Control-Allow-Origin"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  给了错误</font></font></p>

<pre><code>Request header field X-Requested-With is not allowed by Access-Control-Allow-Headers.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果需要发送身份验证令牌，请也添加此令牌</font></font></p>

<pre><code>"Access-Control-Allow-Credentials" -&gt; "true"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在客户处设定 </font></font><code>withCredentials</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会导致2个请求发送到服务器，其中一个带有</font></font><code>OPTIONS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">身份验证cookie不随其一起发送，因此需要处理外部身份验证。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要在Chrome中快速解决Ajax请求，则此chrome插件会自动添加适当的响应标头，使您可以从任何来源访问任何网站</font></font></p>

<p><a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome扩展程序允许控制允许来源：*</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
