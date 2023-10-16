---
layout: question
title:  如何将url参数（查询字符串）传递给Angular上的HTTP请求？
date:   2020-05-28T06:57:02.000Z
description: 我正在Angular上创建一个HTTP请求，但是我不知道如何向其添加url参数（查询字符串）。this.http.get(StaticSettings...
img: 
author: 伽罗理查德
category: question
answer: 1
tags: http TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在Angular上创建一个HTTP请求，但是我不知道如何向其添加url参数（查询字符串）。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">http</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="typ">StaticSettings</span><span class="pun">.</span><span class="pln">BASE_URL</span><span class="pun">).</span><span class="pln">subscribe</span><span class="pun">(</span><span class="pln">
  </span><span class="pun">(</span><span class="pln">response</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onGetForecastResult</span><span class="pun">(</span><span class="pln">response</span><span class="pun">.</span><span class="pln">json</span><span class="pun">()),</span><span class="pln">
  </span><span class="pun">(</span><span class="pln">error</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onGetForecastError</span><span class="pun">(</span><span class="pln">error</span><span class="pun">.</span><span class="pln">json</span><span class="pun">()),</span><span class="pln">
  </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">onGetForecastComplete</span><span class="pun">()</span><span class="pln">
</span><span class="pun">);</span></code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我的StaticSettings.BASE_URL类似于没有查询字符串的url，例如：</font></font><a href="http://atsomeplace.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ://atsomeplace.com/，</font><font style="vertical-align: inherit;">但我希望它成为</font></font><a href="http://atsomeplace.com/?var1=val1&amp;var2=val2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://atsomeplace.com/?var1=val1&amp;var2=val2</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里var1和var2适合我的Http请求对象？</font><font style="vertical-align: inherit;">我想像一个对象一样添加它们。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">{</span><span class="pln">
  query</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    var1</span><span class="pun">:</span><span class="pln"> val1</span><span class="pun">,</span><span class="pln">
    var2</span><span class="pun">:</span><span class="pln"> val2
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后只有Http模块完成将其解析为URL查询字符串的工作。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4205篇《如何将url参数（查询字符串）传递给Angular上的HTTP请求？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">...</span><span class="pln">
declare </span><span class="kwd">var</span><span class="pln"> $</span><span class="pun">:</span><span class="pln">any</span><span class="pun">;</span><span class="pln">
</span><span class="pun">...</span><span class="pln">
getSomeEndPoint</span><span class="pun">(</span><span class="pln">params</span><span class="pun">:</span><span class="pln">any</span><span class="pun">):</span><span class="pln"> </span><span class="typ">Observable</span><span class="pun">&lt;</span><span class="pln">any</span><span class="pun">[]&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> qStr </span><span class="pun">=</span><span class="pln"> $</span><span class="pun">.</span><span class="pln">param</span><span class="pun">(</span><span class="pln">params</span><span class="pun">);</span><span class="pln"> </span><span class="com">//&lt;---YOUR GUY</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_http</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_adUrl</span><span class="pun">+</span><span class="str">"?"</span><span class="pun">+</span><span class="pln">qStr</span><span class="pun">)</span><span class="pln">
      </span><span class="pun">.</span><span class="pln">map</span><span class="pun">((</span><span class="pln">response</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Response</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">any</span><span class="pun">[]&gt;</span><span class="pln"> response</span><span class="pun">.</span><span class="pln">json</span><span class="pun">())</span><span class="pln">
      </span><span class="pun">.</span><span class="kwd">catch</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleError</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前提是您已经</font></font><a href="https://github.com/angular/angular-cli#3rd-party-library-installation" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装了jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我这样做</font></font><code>npm i jquery --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并包含</font></font><code>apps.scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>angular-cli.json</code></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
