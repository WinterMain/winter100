---
layout: question
title:  将JavaScript日期初始化为午夜的最佳方法是什么？
date:   2020-03-16T07:07:20.000Z
description: 获取新Date（）实例但将时间设置为午夜的最简单方法是什么？...
img: 
author: 阿飞JinJin
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取新Date（）实例但将时间设置为午夜的最简单方法是什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经在项目中将d3.js作为依赖项，或者不介意将其引入，则</font></font><a href="https://github.com/d3/d3-time" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d3-time</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/d3/d3/releases/tag/v4.0.0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d3.js库从v4.0.0开始是模块化的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）具有</font></font><a href="https://github.com/d3/d3-time#intervals" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Intervals</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当将日期设置为“默认”值（例如午夜，0.00秒，每月的第一天等）时，它们可能会有用。 </font></font></p>

<pre><code>var d = new Date(); // Wed Aug 02 2017 15:01:07 GMT+0200 (CEST)<font></font>
d3.timeHour(d) // Wed Aug 02 2017 00:00:00 GMT+0200 (CEST)<font></font>
d3.timeMonth(d) // Tue Aug 01 2017 00:00:00 GMT+0200 (CEST)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果计算日期，夏季通常会比午夜（CEST）多造成1欧元或少1小时。</font><font style="vertical-align: inherit;">日期返回时，这会导致1天的差异。</font><font style="vertical-align: inherit;">因此，日期必须四舍五入到最近的午夜。</font><font style="vertical-align: inherit;">因此，代码将是（thamisOn）：</font></font></p>

<pre><code>    var d = new Date();<font></font>
    if(d.getHours() &lt; 12) {<font></font>
    d.setHours(0,0,0,0); // previous midnight day<font></font>
    } else {<font></font>
    d.setHours(24,0,0,0); // next midnight day<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Tony</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能可以使用 </font></font></p>

<pre><code>new Date().setUTCHours(0,0,0,0)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只需要一次该值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Harry泡芙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours" rel="noreferrer"><code>setHours</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法可以采取可选的</font></font><code>minutes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>seconds</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>ms</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数，例如：</font></font></p>

<pre><code>var d = new Date();<font></font>
d.setHours(0,0,0,0);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样会将时间设置</font></font><code>00:00:00.000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前时区</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果您想使用UTC时间，则可以使用该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours" rel="noreferrer"><code>setUTCHours</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOTom</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为@Dan的示例添加有用性，我需要查找下一个午夜或午夜。</font></font></p>

<pre><code>var d = new Date();<font></font>
if(d.getHours() &lt; 12) {<font></font>
   d.setHours(12,0,0,0); // next midnight/midday is midday<font></font>
} else {<font></font>
   d.setHours(24,0,0,0); // next midnight/midday is midnight<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使我可以为某个事件设置频率上限，只允许该站点的任何访问者在早上一次和下午一次发生。</font><font style="vertical-align: inherit;">捕获的日期用于设置cookie的过期时间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅小胖</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象配置的一线式：</font></font></p>

<pre><code>new Date(new Date().setHours(0,0,0,0));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建元素时：</font></font></p>

<pre><code>dateFieldConfig = {<font></font>
      name: "mydate",<font></font>
      value: new Date(new Date().setHours(0, 0, 0, 0)),<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是想说明一下，已接受答案的摘录给出</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了过去最近的午夜</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var d = new Date();<font></font>
d.setHours(0,0,0,0); // last midnight<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在将来</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得</font><strong><font style="vertical-align: inherit;">最近的午夜</font></strong><font style="vertical-align: inherit;">，请使用以下代码：</font></font></p>

<pre><code>var d = new Date();<font></font>
d.setHours(24,0,0,0); // next midnight<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
