---
layout: question
title:  在JavaScript中获取客户端的时区偏移量
date:   2020-03-12T02:38:45.000Z
description: 如何收集访问者的时区信息？我需要时区以及GMT偏移时间。...
img: 
author: 米亚十三Harry
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何收集访问者的时区信息？</font><font style="vertical-align: inherit;">我需要时区以及GMT偏移时间。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就可以了。</font></font></p>

<hr>

<pre><code>var time = new Date(),<font></font>
timestamp = Date(1000 + time.getTime());<font></font>
console.log(timestamp);<font></font>
</code></pre>

<hr>

<pre><code>Thu May 25 2017 21:35:14 GMT+0300 (IDT)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试一下。</font><font style="vertical-align: inherit;">它将返回您当前的机器时间</font></font></p>

<blockquote>
  <p><code>var _d = new Date(),
  t = 0,
  d = new Date(t*1000 + _d.getTime())</code></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我来说是非常好的工作：</font></font></p>

<pre><code>// Translation to offset in Unix Timestamp<font></font>
let timeZoneOffset = ((new Date().getTimezoneOffset())/60)*3600;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猪猪GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要包含moment.js和jstz.js </font></font></p>

<pre><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.6/jstz.min.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那之后</font></font></p>

<pre><code>&lt;script&gt;<font></font>
$(function(){<font></font>
 var currentTimezone = jstz.determine();<font></font>
 var timezone = currentTimezone.name();<font></font>
 alert(timezone);<font></font>
});<font></font>
<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是在寻找3个字母的字符串（例如“ PDT”），并尝试了Marquez的答案，但为了进行跨浏览器支持，不得不对其进行一些调整。</font><font style="vertical-align: inherit;">幸运的是，字符串是最后的潜在匹配项：)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在CoffeeScript中所做的：</font></font></p>

<pre><code>browserTimezone = -&gt;<font></font>
  userDate = new Date()<font></font>
  zoneMatches = userDate.toString().match(/([A-Z][A-Z][A-Z])/g)<font></font>
  userZone = zoneMatches[zoneMatches.length - 1]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可在IE8，IE9，Safari 9，Firefox 44和Chrome 48中使用</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的解决方案：</font></font></p>

<pre><code>
<div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>    // For time zone:
    const timeZone = /\((.*)\)/.exec(new Date().toString())[1];
    
    // Offset hours:
    const offsetHours = new Date().getTimezoneOffset() / 60;
    
    console.log(`${timeZone}, ${offsetHours}hrs`);</code></pre>
</div>
</div><font></font>
<font></font>
<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此将OffSet转换为正值：</font></font></p>

<pre><code>var offset = new Date().getTimezoneOffset();<font></font>
console.log(offset);<font></font>
this.timeOffSet = offset + (-2*offset);<font></font>
console.log(this.timeOffSet);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个，</font></font></p>

<pre><code>new Date().toString().split("GMT")[1].split(" (")[0]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryTom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function getLocalTimeZone() {<font></font>
    var dd = new Date();<font></font>
    var ddStr = dd.toString();<font></font>
    var ddArr = ddStr.split(' ');<font></font>
    var tmznSTr = ddArr[5];<font></font>
    tmznSTr = tmznSTr.substring(3, tmznSTr.length);<font></font>
    return tmznSTr;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范例：2018年6月21日星期四18:12:50 GMT + 0530（印度标准时间） </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O / P：+0530</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时区（以小时为单位）</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var offset = new Date().getTimezoneOffset();<font></font>
if(offset&lt;0)<font></font>
    console.log( "Your timezone is- GMT+" + (offset/-60));<font></font>
else<font></font>
    console.log( "Your timezone is- GMT-" + offset/60);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想像评论中所说的那样精确，那么您应该尝试这样-</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var offset = new Date().getTimezoneOffset();<font></font>
<font></font>
if(offset&lt;0)<font></font>
{<font></font>
    var extraZero = "";<font></font>
    if(-offset%60&lt;10)<font></font>
      extraZero="0";<font></font>
<font></font>
    console.log( "Your timezone is- GMT+" + Math.ceil(offset/-60)+":"+extraZero+(-offset%60));<font></font>
}<font></font>
else<font></font>
{<font></font>
    var extraZero = "";<font></font>
    if(offset%60&lt;10)<font></font>
      extraZero="0";<font></font>
<font></font>
    console.log( "Your timezone is- GMT-" + Math.floor(offset/60)+":"+extraZero+(offset%60));<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>With <a href="/questions/tagged/momentjs" class="post-tag" title="显示标记为“ momentjs”的问题" rel="tag">momentjs</a>, you can find current timezone as </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(moment().utcOffset()); // (-240, -120, -60, 0, 60, 120, 240, etc.)</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdn.jsdelivr.net/momentjs/2.13.0/moment.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<hr>

<p>With <a href="/questions/tagged/dayjs" class="post-tag" title="显示标记为“ dayjs”的问题" rel="tag">dayjs</a>, you can find current timezone as </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(dayjs().utcOffset()); // (-240, -120, -60, 0, 60, 120, 240, etc.)</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://unpkg.com/dayjs@1.8.10/dayjs.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<p>Both API returns utc offset in minutes.</p>

<ul>
<li><a href="http://momentjs.com/docs/#/manipulating/utc-offset/" rel="nofollow noreferrer">moment Doc</a></li>
<li><a href="https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#utc-offset-minutes-utcoffset" rel="nofollow noreferrer">Dayjs Doc</a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var d = new Date();<font></font>
var n = d.getTimezoneOffset();<font></font>
var timezone = n / -60;<font></font>
console.log(timezone);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供偏移量和时区的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单线</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是简单地</font><font style="vertical-align: inherit;">在新的Date对象上</font><font style="vertical-align: inherit;">调用</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString" rel="noreferrer"><font style="vertical-align: inherit;">toTimeString（）</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从MDN：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>toTimeString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法以美国可读的形式返回Date对象的时间部分。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是时区不是标准的IANA格式。</font><font style="vertical-align: inherit;">它比“洲/城市” </font></font><a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IANA</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式</font><font style="vertical-align: inherit;">更加人性化</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">试试看：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(new Date().toTimeString().slice(9));<font></font>
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);<font></font>
console.log(new Date().getTimezoneOffset() / -60);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在在加利福尼亚州，</font></font><code>toTimeString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>Pacific Daylight Time</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，Intl API返回</font></font><code>America/Los_Angeles</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在哥伦比亚，你会得到</font></font><code>Colombia Standard Time</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，主场迎战</font></font><code>America/Bogota</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，此问题的许多其他答案尝试通过调用Date.toString（）获得相同的信息。</font><font style="vertical-align: inherit;">正如</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString#Description" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN解释的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那样，这种方法并不可靠</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日期实例是指特定的时间点。</font><font style="vertical-align: inherit;">调用toString（）将以人类可读的格式返回使用美国英语格式的日期。</font><font style="vertical-align: inherit;">[...]有时需要获取时间部分的字符串；</font><font style="vertical-align: inherit;">用这种</font></font><code>toTimeString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">可以完成这样的事情</font><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>toTimeString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法是特别有用的，因为实现ECMA-262标准的发动机可以从所获得的字符串中不同</font></font><code>toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，该格式是与实现有关的; </font><font style="vertical-align: inherit;">简单的字符串切片方法可能无法在多个引擎上产生一致的结果。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>getTimezoneOffset()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象：</font></font></p>

<pre><code>var curdate = new Date()<font></font>
var offset = curdate.getTimezoneOffset()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法返回以分钟为单位的时区偏移量，这是GMT与本地时间（以分钟为单位）之间的差。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在项目中编写了一个函数，该函数以</font></font><code>hh:mm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式</font><font style="vertical-align: inherit;">返回时区</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我希望这可以帮助某人：</font></font></p>

<pre><code>function getTimeZone() {<font></font>
    var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);<font></font>
    return (offset &lt; 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);<font></font>
}<font></font>
</code></pre>

<hr>

<pre><code>// Outputs: +5:00
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function getTimeZone() {<font></font>
  var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);<font></font>
  return (offset &lt; 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);<font></font>
}<font></font>
<font></font>
<font></font>
// See output<font></font>
document.write(getTimeZone());</code></pre>
</div>
</div>
<p></p>

<p><strong><a href="http://jsfiddle.net/agzknz9L/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作小提琴</font></font></a></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿飞云斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用：</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时区</font></font></h1>

<pre><code>&lt;script src="moment.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="moment-timezone-with-data.js"&gt;&lt;/script&gt;<font></font>
<font></font>
// retrieve timezone by name (i.e. "America/Chicago")<font></font>
moment.tz.guess();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器时区检测很难正确完成，因为浏览器提供的信息很少。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那一刻时区使用</font></font><code>Date.getTimezoneOffset()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>Date.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">围绕本年度时刻屈指可数收集尽可能有关浏览器的环境中尽可能多的信息。</font><font style="vertical-align: inherit;">然后，它将该信息与所有加载的时区数据进行比较，并返回最接近的匹配项。</font><font style="vertical-align: inherit;">如果有联系，则返回人口最多的城市所在的时区。</font></font></p>

<pre><code>console.log(moment.tz.guess()); // America/Chicago
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomProSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到这个答案有点离题，但我想我们中许多人正在寻找一个答案，他们也想格式化显示的时区，也许还要获得时区缩写。</font><font style="vertical-align: inherit;">所以就这样...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望客户端时区的格式正确，则可以依靠JavaScript Date.toString方法并执行以下操作：</font></font></p>

<pre><code>var split = new Date().toString().split(" ");<font></font>
var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，这将为您提供“ GMT-0400（EST）”，包括时区分钟（如适用）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，使用正则表达式，您可以提取任何所需的部分：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于“ GMT-0400（EDT）”：</font></font></p>

<pre><code>new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于“ GMT-0400”：</font></font></p>

<pre><code>new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅针对“ EDT”：</font></font></p>

<pre><code>new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于“ -0400”：</font></font></p>

<pre><code>new Date().toString().match(/([-\+][0-9]+)\s/)[1]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date.toString参考：</font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toString"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toString"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toString</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门村村古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var offset = new Date().getTimezoneOffset();<font></font>
console.log(offset);</code></pre>
</div>
</div>
<p></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时区偏移量是UTC与本地时间之间的差（以分钟为单位）。</font><font style="vertical-align: inherit;">请注意，这意味着如果本地时区在UTC之后，则偏移量为正；如果在本地时区之前，则偏移量为负。</font><font style="vertical-align: inherit;">例如，如果您的时区是UTC + 10（澳大利亚东部标准时间），则将返回-600。</font><font style="vertical-align: inherit;">夏时制即使在给定的语言环境下也可以防止该值保持恒定</font></font></p>
</blockquote>

<ul>
<li><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/getTimezoneOffset" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla日期对象参考</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，并非所有时区都被整个小时抵消：例如，纽芬兰是UTC减去3h 30m（将夏令时排除在外）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
