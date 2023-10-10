---
layout: question
title:  使用jQuery获取当前URL？
date:   2020-03-09T11:19:45.000Z
description: 我正在使用jQuery。如何获取当前URL的路径并将其分配给变量？范例网址：http //localhost/menuname.de?foo=ba...
img: 
author: SamL
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用jQuery。</font><font style="vertical-align: inherit;">如何获取当前URL的路径并将其分配给变量？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范例网址：</font></font></p>

<pre><code>http://localhost/menuname.de?foo=bar&amp;amp;number=0
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In jstl we can access current url path using <code>pageContext.request.contextPath</code>, If you want to do a ajax call,</p>

<pre><code>  url = "${pageContext.request.contextPath}" + "/controller/path"
</code></pre>

<p>Ex: in the page <code>http://stackoverflow.com/questions/406192</code> this will give <code>http://stackoverflow.com/controller/path</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>var path = location.pathname</code> returns the path of the current URL (jQuery is not needed). The use of <code>window.location</code> is optional.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Very Commonly Used top 3 ones are</p>

<pre><code>1. window.location.hostname <font></font>
2. window.location.href<font></font>
3. window.location.pathname<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>See <a href="https://github.com/allmarkedup/purl/" rel="noreferrer">purl.js</a>. This will really help and can also be used, depending on jQuery. Use it like this:</p>

<pre><code>$.url().param("yourparam");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><em>window.location</em></strong> will give you the current <a href="http://en.wikipedia.org/wiki/Uniform_Resource_Locator" rel="noreferrer">URL</a>, and you can extract whatever you want from it...</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Use <strong>window.location.href</strong>. This will give you the complete <a href="http://en.wikipedia.org/wiki/Uniform_Resource_Locator" rel="noreferrer">URL</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The following are examples of useful code snippets that can be used – some of the examples use standard JavaScript functions and are not specific to jQuery:</p>

<p>See <em><a href="http://www.designchemical.com/blog/index.php/jquery/8-useful-jquery-snippets-for-urls-querystrings/" rel="noreferrer">8 Useful jQuery Snippets For URL’s &amp; Querystrings</a></em>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用js本身获取路径，</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您提供当前URL的对象</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log("Origin - ",location.origin);<font></font>
console.log("Entire URL - ",location.href);<font></font>
console.log("Path Beyond URL - ",location.pathname);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人要连接</font></font><a href="http://en.wikipedia.org/wiki/Uniform_Resource_Locator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和哈希标记，请结合使用以下两个功能：</font></font></p>

<pre><code>var pathname = window.location.pathname + document.location.hash;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user"> ....</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将</font><font style="vertical-align: inherit;">使用JavaScript / </font><a href="http://en.wikipedia.org/wiki/JQuery" rel="noreferrer"><font style="vertical-align: inherit;">jQuery</font></a><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">当前页面</font><font style="vertical-align: inherit;">的绝对</font></font><a href="http://en.wikipedia.org/wiki/Uniform_Resource_Locator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="http://en.wikipedia.org/wiki/JQuery" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<ul>
<li><p><code>document.URL</code></p></li>
<li><p><code>$("*").context.baseURI</code></p></li>
<li><p><code>location.href</code></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以登录window.location并查看所有选项，仅使用URL：</font></font></p>

<pre><code>window.location.origin
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于整个路径：</font></font></p>

<pre><code>window.location.href
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有位置。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> _</font></font></p>

<pre><code>.host<font></font>
.hostname<font></font>
.protocol<font></font>
.pathname<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也将起作用：</font></font></p>

<pre><code>var currentURL = window.location.href;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJinJin路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅对于主机名，使用：</font></font></p>

<pre><code>window.location.hostname
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是比许多人想象的更为复杂的问题。</font><font style="vertical-align: inherit;">一些浏览器支持内置的JavaScript位置对象以及可通过</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">访问的关联参数/方法</font></font><code>document.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，不同版本的Internet Explorer（6,7）不以相同的方式支持这些方法（</font><font style="vertical-align: inherit;">不支持</font></font><code>window.location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？   </font></font><code>window.location.replace()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），因此您必须通过始终编写条件代码来手持Internet Explorer，以不同的方式访问它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您有可用的jQuery并已加载，则最好使用jQuery（位置），就像其他人提到的那样，因为它可以解决这些问题。</font><font style="vertical-align: inherit;">但是，如果您正在做一个示例-通过JavaScript进行客户端地理定位重定向（即使用Google Maps API和location对象方法），那么您可能不想加载整个jQuery库并编写条件代码，检查Internet Explorer / Firefox / etc等的每个版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer使前端编码的猫感到不高兴，但是jQuery却是一堆牛奶。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在JavaScript中添加此函数，它将返回当前路径的绝对路径。</font></font></p>

<pre><code>function getAbsolutePath() {<font></font>
    var loc = window.location;<font></font>
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);<font></font>
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这个对你有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将要使用JavaScript的内置</font></font><a href="http://www.devguru.com/Technologies/ecmascript/quickref/location.html" rel="noreferrer"><code>window.location</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva猴子古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要URL中存在的哈希参数，则</font></font><code>window.location.href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是一个更好的选择。</font></font></p>

<pre><code>window.location.pathname<font></font>
=&gt; /search<font></font>
<font></font>
window.location.href <font></font>
 =&gt; www.website.com/search#race_type=1<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获取路径，可以使用：</font></font></p>

<pre><code>var pathname = window.location.pathname; // Returns path only (/path/example.html)<font></font>
var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)<font></font>
var origin   = window.location.origin;   // Returns base URL (https://example.com)<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
