---
layout: question
title:  从API响应中读取响应标头-Angular 5 + TypeScript
date:   2020-05-28T06:53:54.000Z
description: 我正在触发HTTP请求，并且收到了有效的响应。响应中还有一个X-Token我希望阅读的标题。我正在尝试下面的代码来读取标题，但是，结果是nullthi...
img: 
author: 西门
category: question
answer: 0
tags: 角度的 TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在触发</font></font><code>HTTP</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求，并且收到了有效的响应。</font><font style="vertical-align: inherit;">响应中还有一个</font></font><code>X-Token</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望阅读</font><font style="vertical-align: inherit;">的标题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我正在尝试下面的代码来读取标题，但是，结果是null</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">currentlyExecuting</span><span class="pun">.</span><span class="pln">request </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">http</span><span class="pun">.</span><span class="pln">request</span><span class="pun">(</span><span class="pln">reqParams</span><span class="pun">.</span><span class="pln">type</span><span class="pun">,</span><span class="pln"> reqParams</span><span class="pun">.</span><span class="pln">url</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    body</span><span class="pun">:</span><span class="pln"> reqParams</span><span class="pun">.</span><span class="pln">body</span><span class="pun">,</span><span class="pln">
    responseType</span><span class="pun">:</span><span class="pln"> </span><span class="str">'json'</span><span class="pun">,</span><span class="pln">
    observe</span><span class="pun">:</span><span class="pln"> </span><span class="str">'response'</span><span class="pln">
</span><span class="pun">}).</span><span class="pln">subscribe</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">(</span><span class="pln">_response</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="com">// Also tried _response.headers.init();</span><span class="pln">
        </span><span class="kwd">const</span><span class="pln"> header </span><span class="pun">=</span><span class="pln"> _response</span><span class="pun">.</span><span class="pln">headers</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'X-Token'</span><span class="pun">);</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">header</span><span class="pun">);</span><span class="pln">
        onComplete</span><span class="pun">(</span><span class="pln">_response</span><span class="pun">.</span><span class="pln">body</span><span class="pun">);</span><span class="pln">
     </span><span class="pun">},</span><span class="pln">
    _error </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        onComplete</span><span class="pun">({</span><span class="pln">
            code</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">,</span><span class="pln">
            message</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Constants</span><span class="pun">.</span><span class="pln">WEBSERVICE_INTERNET_NOT_CONNNECTED
        </span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"></font><code>API</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome inspect中选中时，</font><font style="vertical-align: inherit;">的响应</font><font style="vertical-align: inherit;">表明标题存在。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24088/images/thumbnails/1590648707370.png" data-src="https://www.samyoc.com//uploads/users/24088/images/1590648707370.png" rel="noreferrer"><img src="https://i.stack.imgur.com/HCwZ8.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4200篇《从API响应中读取响应标头-Angular 5 + TypeScript》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
