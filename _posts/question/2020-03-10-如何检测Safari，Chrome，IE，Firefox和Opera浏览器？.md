---
layout: question
title:  如何检测Safari，Chrome，IE，Firefox和Opera浏览器？
date:   2020-03-10T13:51:50.000Z
description: 我有5个FF，Chrome，IE，Opera和Safari插件/扩展程序。 如何识别用户浏览器并重定向（一旦单击安装按钮）下载相应的插件？...
img: 
author: 伽罗
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有5个FF，Chrome，IE，Opera和Safari插件/扩展程序。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何识别用户浏览器并重定向（一旦单击安装按钮）下载相应的插件？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第511篇《如何检测Safari，Chrome，IE，Firefox和Opera浏览器？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Simple, single line of JavaScript code will give you the name of browser:</p>

<pre><code>function GetBrowser()<font></font>
{<font></font>
    return  navigator ? navigator.userAgent.toLowerCase() : "other";<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/faisalman/ua-parser-js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UAParser</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是轻量级JavaScript库之一，可从userAgent字符串识别浏览器，引擎，操作系统，CPU和设备类型/模型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有可用的CDN。</font><font style="vertical-align: inherit;">在这里，我提供了一个示例代码来使用UAParser检测浏览器。</font></font></p>

<pre><code>&lt;!doctype html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;script src="https://cdn.jsdelivr.net/npm/ua-parser-js@0/dist/ua-parser.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    var parser = new UAParser();<font></font>
    var result = parser.getResult();<font></font>
    console.log(result.browser);     // {name: "Chromium", version: "15.0.874.106"}<font></font>
&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以使用的值对</font></font><code>result.browser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面进行有条件的编程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源教程：</font></font><a href="https://justcode.me/how-to/detect-browser-engine-os-cpu-and-device-using-javascript/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript检测浏览器，引擎，操作系统，CPU和设备？</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天A前端</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一种不太“ hacky”的方法适用于所有流行的浏览器。</font><font style="vertical-align: inherit;">Google在其</font></font><a href="https://developers.google.com/closure/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Closure Library中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含了一个浏览器检查</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">特别要看一下</font></font><a href="https://google.github.io/closure-library/api/goog.userAgent.html" rel="nofollow noreferrer"><code>goog.userAgent</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://google.github.io/closure-library/api/goog.userAgent.product.html" rel="nofollow noreferrer"><code>goog.userAgent.product</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样，如果浏览器显示的方式发生了某些变化，您也可以保持最新（假设您始终运行最新版本的闭包编译器。）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要了解某些特定浏览器的数字版本，可以使用以下代码段。</font><font style="vertical-align: inherit;">目前，它将告诉您Chrome / Chromium / Firefox的版本：</font></font></p>

<pre><code>var match = $window.navigator.userAgent.match(/(?:Chrom(?:e|ium)|Firefox)\/([0-9]+)\./);<font></font>
var ver = match ? parseInt(match[1], 10) : 0;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>const isChrome = /Chrome/.test(navigator.userAgent)<font></font>
const isFirefox = /Firefox/.test(navigator.userAgent)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短的变体</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var browser = (function() {<font></font>
    var test = function(regexp) {<font></font>
        return regexp.test(window.navigator.userAgent);<font></font>
    }<font></font>
    switch (true) {<font></font>
        case test(/edg/i): return "edge";<font></font>
        case test(/opr/i) &amp;&amp; (!!window.opr || !!window.opera): return "opera";<font></font>
        case test(/chrome/i) &amp;&amp; !!window.chrome: return "chrome";<font></font>
        case test(/trident/i): return "ie";<font></font>
        case test(/firefox/i): return "firefox";<font></font>
        case test(/safari/i): return "safari";<font></font>
        default: return "other";<font></font>
    }<font></font>
})();<font></font>
console.log(browser)</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西里神无</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2019年12月，这是几个处理浏览器检测的著名库。</font></font></p>

<h3><a href="https://github.com/lancedikson/bowser" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lancedikson开发的</font><a href="https://github.com/lancedikson/bowser" rel="noreferrer"><font style="vertical-align: inherit;">Bowser-</font></a><font style="vertical-align: inherit;"> 4,065★s-最近更新-2019年10月2日-4.8KB</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var result = bowser.getParser(window.navigator.userAgent);<font></font>
console.log(result);<font></font>
document.write("You are using " + result.parsedResult.browser.name +<font></font>
               " v" + result.parsedResult.browser.version + <font></font>
               " on " + result.parsedResult.os.name);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://unpkg.com/bowser@2.7.0/es5.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<p><i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*支持基于Chromium的Edge</font></font></i></p>

<hr>

<h3><a href="https://github.com/bestiejs/platform.js/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bestiejs编写的</font><a href="https://github.com/bestiejs/platform.js/" rel="noreferrer"><font style="vertical-align: inherit;">Platform.js</font></a><font style="vertical-align: inherit;"> -2,550★s-最近更新于2019年4月14日-5.9KB</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(platform);<font></font>
document.write("You are using " + platform.name +<font></font>
               " v" + platform.version + <font></font>
               " on " + platform.os);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.5/platform.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<h3><a href="https://github.com/gabceb/jquery-browser-plugin" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gabceb的</font><a href="https://github.com/gabceb/jquery-browser-plugin" rel="noreferrer"><font style="vertical-align: inherit;">jQuery浏览器</font></a><font style="vertical-align: inherit;"> -504★s-最近更新，2015年11月23日-1.3KB</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log($.browser)<font></font>
document.write("You are using " + $.browser.name +<font></font>
               " v" + $.browser.versionNumber + <font></font>
               " on " + $.browser.platform);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<h3><a href="https://github.com/darcyclarke/Detect.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">darcyclarke编写的Detect.js（已存档）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -522★s-最近更新，2015年10月26日-2.9KB</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var result = detect.parse(navigator.userAgent);<font></font>
console.log(result);<font></font>
document.write("You are using " + result.browser.family +<font></font>
               " v" + result.browser.version + <font></font>
               " on " + result.os.family);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/Detect.js/2.2.2/detect.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<h3><a href="https://web.archive.org/web/20131114025336/http://www.quirksmode.org:80/js/detect.html" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由QuirksMode </font><a href="https://web.archive.org/web/20131114025336/http://www.quirksmode.org:80/js/detect.html" rel="noreferrer"><font style="vertical-align: inherit;">浏览器检测（存档）</font></a><font style="vertical-align: inherit;"> -最近更新时间2013年11月14日-884B</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(BrowserDetect)<font></font>
document.write("You are using " + BrowserDetect.browser +<font></font>
               " v" + BrowserDetect.version + <font></font>
               " on " + BrowserDetect.OS);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://kylemit.github.io/libraries/libraries/BrowserDetect.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要说明：</font></font></h2>

<ul>
<li><a href="https://github.com/WhichBrowser/Parser-PHP" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">whichBrowser</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -1,355★s-最后更新于2018年10月2日</font></font></li>
<li><a href="https://github.com/Modernizr/Modernizr" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Modernizr</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -23,397★s-最后更新于2019年1月12日-要喂饱一匹马，特征检测应该会</font></font><a href="https://caniuse.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引发</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何</font><a href="https://caniuse.com/" rel="noreferrer"><font style="vertical-align: inherit;">canIuse</font></a><font style="vertical-align: inherit;">风格的问题。</font><font style="vertical-align: inherit;">浏览器检测实际上仅用于为各个浏览器提供自定义图像，下载文件或说明。</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步阅读</font></font></h2>

<ul>
<li><a href="https://stackoverflow.com/q/2400935/1366033"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆栈溢出-JavaScript中的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器检测？</font></font></a></li>
<li><a href="https://stackoverflow.com/a/49582577/1366033"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆栈溢出</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -如何检测浏览器的版本？</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Jim梅</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道为此使用lib可能会</font></font><a href="http://arasatasaygin.github.io/is.js/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">矫kill过</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正，但是只是为了丰富线程，您可以检查</font><a href="http://arasatasaygin.github.io/is.js/"><font style="vertical-align: inherit;">is.js</font></a><font style="vertical-align: inherit;">的执行方式：</font></font></p>

<pre><code>is.firefox();<font></font>
is.ie(6);<font></font>
is.not.safari();<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
