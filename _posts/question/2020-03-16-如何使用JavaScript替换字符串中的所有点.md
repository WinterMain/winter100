---
layout: question
title:  如何使用JavaScript替换字符串中的所有点
date:   2020-03-16T04:03:37.000Z
description: 我想替换.JavaScript字符串中所有出现的dot（）例如，我有：var mystring = 'okay.this.is.a.string'...
img: 
author: 泡芙猪猪
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想替换</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript字符串中</font><font style="vertical-align: inherit;">所有出现的dot（</font><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我有：</font></font></p>

<pre><code>var mystring = 'okay.this.is.a.string';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想得到：</font></font><code>okay this is a string</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我尝试了：</font></font></p>

<pre><code>mystring.replace(/./g,' ')
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这最终将所有字符串替换为空格。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1705篇《如何使用JavaScript替换字符串中的所有点》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinEva</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>String.prototype.replaceAll = function(character,replaceChar){<font></font>
    var word = this.valueOf();<font></font>
<font></font>
    while(word.indexOf(character) != -1)<font></font>
        word = word.replace(character,replaceChar);<font></font>
<font></font>
    return word;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>str.replace(new RegExp(".","gm")," ")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near村村</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在点上添加双反斜杠以使其起作用。</font><font style="vertical-align: inherit;">欢呼。</font></font></p>

<pre><code>var st = "okay.this.is.a.string";<font></font>
var Re = new RegExp("\\.","g");<font></font>
st = st.replace(Re," ");<font></font>
alert(st);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易斯丁神奇</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这种简单的情况，我还建议使用javascript内置的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试这样：</font></font></p>

<pre><code>"okay.this.is.a.string".split(".").join("")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要对进行转义，</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它在正则表达式中具有“任意字符”的含义。</font></font></p>

<pre><code>mystring = mystring.replace(/\./g,' ')
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
