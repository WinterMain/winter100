---
layout: question
title:  如何在JavaScript中获取当前日期？
date:   2020-03-09T10:13:33.000Z
description: 如何在JavaScript中获取当前日期？...
img: 
author: ASamJim
category: question
answer: 23
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中获取当前日期？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第199篇《如何在JavaScript中获取当前日期？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var dateTimeToday = new Date();<font></font>
var dateToday = new Date(<font></font>
    dateTimeToday.getFullYear(), <font></font>
    (dateTimeToday.getMonth() + 1) /*Jan = 0! */, <font></font>
    dateTimeToday.getDate(), <font></font>
    0, <font></font>
    0, <font></font>
    0, <font></font>
    0);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是一个古老的问题，但是最简单的方法如下：</font></font></p>

<pre><code>var date = new Date();<font></font>
var TimeStamp = date.toLocaleString();<font></font>
<font></font>
function CurrentTime(){<font></font>
  alert(TimeStamp);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将获取当前时间，并根据位置将其传递给字符串，然后您可以调用函数CurrentTime来显示时间。</font><font style="vertical-align: inherit;">对我来说，这是为某事获取时间戳的最有效方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是获取格式化日期的好方法 </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let date = new Date().toLocaleDateString("en", {year:"numeric", day:"2-digit", month:"2-digit"});<font></font>
console.log(date);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能对您有帮助</font></font></p>

<pre><code>var date = new Date();<font></font>
console.log(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将以dd / MM / yyyy格式打印当前日期</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有什么大不了的。最干净的方法是 </font></font></p>

<p><code>var currentDate=new Date().toLocaleString().slice(0,10);</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三千曜米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以结帐</font></font></p>

<pre><code>var today = new Date();<font></font>
today = parseInt(today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()+"\nTime : "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();<font></font>
document.write(today);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并参阅Date（）构造函数的文档。
</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>new Date().toISOString().slice(0,10); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也会工作</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想要一种简单的</font></font><code>DD/MM/YYYY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式，尽管它没有为缺失的零添加前缀，但我只是想出了一种简单的解决方案。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var d = new Date();<font></font>
document.write( [d.getDate(), d.getMonth()+1, d.getFullYear()].join('/') );</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYTom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>new Date().toDateString();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ 2016年2月3日星期三”</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的答案是： </font></font><code>new Date().toJSON().slice(0,10)</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JimDavaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://stackoverflow.com/a/19079030/1338062"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Varun的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不考虑</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TimezoneOffset</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是一个做的版本：</font></font></p>

<pre><code>var d = new Date()<font></font>
new Date(d.getTime() - d.getTimezoneOffset() * 60000).toJSON().slice(0, 10) // 2015-08-11<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>TimezoneOffset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是分钟，而Date构造函数采用毫秒，因此乘以</font></font><code>60000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像下面这样通过静态方法获取当前日期：</font></font></p>

<pre><code>var now = Date.now()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font></p>

<p><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://www.datejs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Date对象的</font><a href="http://www.datejs.com/" rel="noreferrer"><font style="vertical-align: inherit;">Date.js</font></a><font style="vertical-align: inherit;">库，从而可以使用.today（）方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猿理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更干净，更简单的版本：</font></font></p>

<pre><code>new Date().toLocaleString();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果</font><font style="vertical-align: inherit;">根据用户的</font><strong><font style="vertical-align: inherit;">区域设置</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而异</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2017/2/27上午9:15:41</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var date = new Date().toLocaleDateString("en-US");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以</font></font><code>toLocaleDateString</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用两个参数</font><font style="vertical-align: inherit;">来调用method </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var date = new Date().toLocaleDateString("en-US", {<font></font>
    "year": "numeric",<font></font>
    "month": "numeric"<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于</font></font><a href="http://msdn.microsoft.com/en-US/library/kecw102f"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MSDN的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上此方法的更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光樱前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次都有效：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>    var now = new Date();<font></font>
    var day = ("0" + now.getDate()).slice(-2);<font></font>
    var month = ("0" + (now.getMonth() + 1)).slice(-2);<font></font>
    var today = now.getFullYear() + "-" + (month) + "-" + (day);<font></font>
    <font></font>
    console.log(today);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JimDavaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var d = (new Date()).toString().split(' ').splice(1,3).join(' ');<font></font>
<font></font>
document.write(d)</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将其分解为步骤：</font></font></p>

<ol>
<li><p><code>(new Date()).toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 给出“ 2013年6月28日星期五15:30:18 GMT-0700（PDT）”</font></font></p></li>
<li><p><code>(new Date()).toString().split(' ')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在每个空格上分割上述字符串，并返回如下数组：[“ Fri”，“ Jun”，“ 28”，“ 2013”​​，“ 15:31:14”，“ GMT-0700”，“（PDT）” ]</font></font></p></li>
<li><p><code>(new Date()).toString().split(' ').splice(1,3).join(' ')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 从上面的数组中获取第二个，第三个和第四个值，将它们与空格连接，然后返回字符串“ Jun 28 2013”</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用moment.js：</font><a href="http://momentjs.com/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：//momentjs.com/</font></font><a href="http://momentjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var m = moment().format("DD/MM/YYYY");<font></font>
<font></font>
document.write(m);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要对日期格式进行更多的粒度控制，我强烈建议您查看一下momentjs。</font><font style="vertical-align: inherit;">很棒的图书馆-只有5KB。
</font></font><a href="http://momentjs.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://momentjs.com/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var currentDate = new Date()<font></font>
var day = currentDate.getDate()<font></font>
var month = currentDate.getMonth() + 1<font></font>
var year = currentDate.getFullYear()<font></font>
document.write("&lt;b&gt;" + day + "/" + month + "/" + year + "&lt;/b&gt;")</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果会像</font></font></p>

<pre><code>15/2/2012
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小胖小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想要没有时间信息的日期，请使用：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var today = new Date();<font></font>
    today.setHours(0, 0, 0, 0);<font></font>
<font></font>
document.write(today);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最短的时间。</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获取类似“ 2018-08-03”的格式，请执行以下操作：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let today = new Date().toISOString().slice(0, 10)<font></font>
<font></font>
console.log(today)</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获取类似“ 8/3/2018”的格式：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let today = new Date().toLocaleDateString()<font></font>
<font></font>
console.log(today)</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以将</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#Using_locales" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语言环境</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为参数</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">，例如</font></font><code>toLocaleDateString("sr")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，等等。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');<font></font>
document.write(utc);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"></font><code>replace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要重用</font></font><code>utc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量，</font><font style="vertical-align: inherit;">请使用</font><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">，例如</font></font><code>new Date(utc)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为Firefox和Safari无法识别带短划线的日期。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
