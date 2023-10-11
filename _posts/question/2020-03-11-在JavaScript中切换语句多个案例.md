---
layout: question
title:  在JavaScript中切换语句多个案例
date:   2020-03-11T04:02:08.000Z
description: 我需要在JavaScript的switch语句中使用多种情况，例如：switch (varName){   case "afshin", "sae...
img: 
author: 梅神乐
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在JavaScript的switch语句中使用多种情况，例如：</font></font></p>

<pre><code>switch (varName)<font></font>
{<font></font>
   case "afshin", "saeed", "larry": <font></font>
       alert('Hey');<font></font>
       break;<font></font>
<font></font>
   default: <font></font>
       alert('Default case');<font></font>
       break;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎样才能做到这一点？</font><font style="vertical-align: inherit;">如果没有办法在JavaScript中执行类似的操作，我想知道一个也遵循</font></font><a href="http://c2.com/cgi/wiki?DontRepeatYourself" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DRY概念</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的替代解决方案</font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第637篇《在JavaScript中切换语句多个案例》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小TomNear</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在节点中，似乎可以执行此操作：</font></font></p>

<pre><code>data = "10";<font></font>
switch(data){<font></font>
case "1": case "2": case "3": //put multiple cases on the same line to save vertical space.<font></font>
   console.log("small"); break;<font></font>
case "10": case "11": case "12":<font></font>
   console.log("large"); break;<font></font>
default:<font></font>
   console.log("strange");<font></font>
   break;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，这使代码更紧凑。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这适用于常规JavaScript</font></font></p>

<pre><code>function theTest(val) {<font></font>
  var answer = "";<font></font>
  switch( val ) {<font></font>
    case 1: case 2: case 3:<font></font>
      answer = "Low";<font></font>
      break;<font></font>
    case 4: case 5: case 6:<font></font>
      answer = "Mid";<font></font>
      break;<font></font>
    case 7: case 8: case 9:<font></font>
      answer = "High";<font></font>
      break;<font></font>
    default:<font></font>
      answer = "Massive or Tiny?";<font></font>
  } <font></font>
  return answer;  <font></font>
}<font></font>
<font></font>
theTest(9);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
