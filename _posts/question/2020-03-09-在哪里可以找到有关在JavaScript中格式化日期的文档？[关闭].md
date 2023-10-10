---
layout: question
title:  在哪里可以找到有关在JavaScript中格式化日期的文档？\[关闭\]
date:   2020-03-09T13:00:53.000Z
description:                                                                          ...
img: 
author: 樱小胖Mandy
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭。</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">题外话</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b> <a href="/posts/1056728/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使其</font><font style="vertical-align: inherit;">成为Stack Overflow </font></font><a href="/help/on-topic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2018-04-23 12：52：53Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到JavaScript的</font></font><code>new Date()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能非常聪明，可以接受多种格式的日期。</font></font></p>

<pre><code>Xmas95 = new Date("25 Dec, 1995 23:15:00")<font></font>
Xmas95 = new Date("2009 06 12,12:52:39")<font></font>
Xmas95 = new Date("20 09 2006,12:52:39")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在调用</font></font><code>new Date()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数时，</font><font style="vertical-align: inherit;">我找不到任何显示所有有效字符串格式的文档</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是用于将字符串转换为日期。</font><font style="vertical-align: inherit;">如果我们从相反的角度看，也就是将日期对象转换为字符串，直到现在，我仍然觉得JavaScript没有内置的API将日期对象格式化为字符串。</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编者注：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方法是提问者的企图是工作在一个特定的浏览器，但确实</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一般的工作; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅本页上的答案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以查看一些实际解决方案。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天，我在</font></font><code>toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">date对象上</font><font style="vertical-align: inherit;">使用了该</font><font style="vertical-align: inherit;">方法，令人惊讶的是，它用于将date格式化为字符串的目的。</font></font></p>

<pre><code>var d1 = new Date();<font></font>
d1.toString('yyyy-MM-dd');       //Returns "2009-06-29" in Internet Explorer, but not Firefox or Chrome<font></font>
d1.toString('dddd, MMMM ,yyyy')  //Returns "Monday, June 29,2009" in Internet Explorer, but not Firefox or Chrome<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样在这里，我找不到关于将日期对象格式化为字符串的所有方式的任何文档。</font></font></p>

<p>Where is the documentation which lists the format specifiers supported by the <code>Date()</code> object?</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第266篇《在哪里可以找到有关在JavaScript中格式化日期的文档？[关闭]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖A</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多框架（您可能已经在使用）具有您可能不知道的日期格式。</font><font style="vertical-align: inherit;">已经提到jQueryUI，但是</font></font><a href="http://docs.kendoui.com/getting-started/framework/globalization/dateformatting" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kendo UI（全球化）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://developer.yahoo.com/yui/docs/YAHOO.util.Date.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yahoo UI（Util）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://docs.angularjs.org/api/ng.filter%3adate" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等其他框架</font><font style="vertical-align: inherit;">也有它们。</font></font></p>

<pre><code>// 11/6/2000<font></font>
kendo.toString(new Date(value), "d")<font></font>
<font></font>
// Monday, November 06, 2000<font></font>
kendo.toString(new Date(2000, 10, 6), "D")<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案是“无处”，因为日期格式是专有功能。</font><font style="vertical-align: inherit;">我不认为toString函数旨在符合特定格式。</font><font style="vertical-align: inherit;">例如，在ECMAScript 5.1规范（</font></font><a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf，2013年2月8</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日，第173页）中，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toString</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数的说明如下： ：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“字符串的内容取决于实现”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诸如下面的示例之类的功能可用于相当轻松地完成格式化。</font></font></p>

<pre><code>function pad(toPad, padWith) {<font></font>
    return (String(padWith) + String(toPad)).slice(-1 * padWith.length);<font></font>
}<font></font>
<font></font>
function dateAsInputValue(toFormat) {<font></font>
    if(!(toFormat instanceof Date)) return null;<font></font>
    return toFormat.getFullYear() + "-" + pad(toFormat.getMonth() + 1, "00") + "-" + pad(toFormat.getDate(), "00");<font></font>
}<font></font>
<font></font>
function timeAsInputValue(toFormat) {<font></font>
    if(!(toFormat instanceof Date)) return null;        <font></font>
    return pad(toFormat.getHours(), "00") + ":" + pad(toFormat.getMinutes(), "00") + ":" + pad(toFormat.getSeconds(), "00");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阿飞古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写的另一种选择是：</font></font></p>

<p><a href="http://depressedpress.com/javascript-extensions/dp_dateextensions/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DP_DateExtensions库</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不确定是否会有所帮助，但是我发现它在几个项目中很有用-看起来它将满足您的需求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持日期/时间格式，日期数学（添加/减去日期部分），日期比较，日期解析等。它是开源的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经在使用框架（它们都有能力），则没有理由考虑它，但是如果您只需要快速将日期操作添加到项目中，则可以给它一个机会。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此功能</font></font></p>

<pre><code>toTimeString() and toLocaleDateString()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅下面的链接以获取更多详细信息
 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.javascriptsource.com/repository/javascripts/2009/03/880961/JS_Simple_Date_Format.zip" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JsSimpleDateFormat</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个库，可以格式化日期对象并将已格式化的字符串解析回Date对象。</font><font style="vertical-align: inherit;">它使用Java格式（SimpleDateFormat类）。</font><font style="vertical-align: inherit;">月份和日期的名称可以本地化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var sdf = new JsSimpleDateFormat("EEEE, MMMM dd, yyyy");<font></font>
var formattedString = sdf.format(new Date());<font></font>
var dateObject = sdf.parse("Monday, June 29, 2009");<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例代码：</font></font></p>

<pre><code>var d = new Date();<font></font>
var time = d.toISOString().replace(/.*?T(\d+:\d+:\d+).*/, "$1");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ 13:45:20”</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了继续恭敬待议的可靠答案-这可以处理AM / PM</font></font></p>

<pre><code> Date.prototype.format = function (format) //author: meizz<font></font>
{<font></font>
    var hours = this.getHours();<font></font>
    var ttime = "AM";<font></font>
    if(format.indexOf("t") &gt; -1 &amp;&amp; hours &gt; 12)<font></font>
    {<font></font>
        hours = hours - 12;<font></font>
        ttime = "PM";<font></font>
     }<font></font>
<font></font>
var o = {<font></font>
    "M+": this.getMonth() + 1, //month<font></font>
    "d+": this.getDate(),    //day<font></font>
    "h+": hours,   //hour<font></font>
    "m+": this.getMinutes(), //minute<font></font>
    "s+": this.getSeconds(), //second<font></font>
    "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter<font></font>
    "S": this.getMilliseconds(), //millisecond,<font></font>
    "t+": ttime<font></font>
}<font></font>
<font></font>
if (/(y+)/.test(format)) format = format.replace(RegExp.$1,<font></font>
  (this.getFullYear() + "").substr(4 - RegExp.$1.length));<font></font>
for (var k in o) if (new RegExp("(" + k + ")").test(format))<font></font>
    format = format.replace(RegExp.$1,<font></font>
      RegExp.$1.length == 1 ? o[k] :<font></font>
        ("00" + o[k]).substr(("" + o[k]).length));<font></font>
return format;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中格式化日期（尤其是解析日期）可能会有些麻烦。</font><font style="vertical-align: inherit;">并非所有浏览器都以相同方式处理日期。</font><font style="vertical-align: inherit;">因此，虽然了解基本方法很有用，但使用帮助程序库更为实用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://arshaw.com/xdate/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XDate JavaScript库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由</font></font><a href="https://github.com/arshaw"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">亚当·肖</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自2011年中期已经出现，并仍在积极发展。</font><font style="vertical-align: inherit;">它具有出色的文档，出色的API，格式，试图保持向后兼容，甚至支持本地化字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接到更改区域设置字符串：</font><a href="https://gist.github.com/1221376"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://gist.github.com/1221376"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gist.github.com/1221376</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">成天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DateJS当然功能齐全，但是我建议使用</font></font><a href="http://blog.stevenlevithan.com/archives/date-time-format"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种更简单的lib（JavaScript日期格式）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我更喜欢它，因为它只有120行左右。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="http://huahun.iteye.com/blog/197367" rel="noreferrer"><font style="vertical-align: inherit;">meizz</font></a></font><code>format</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出</font><font style="vertical-align: inherit;">的新</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">来扩展</font><font style="vertical-align: inherit;">Object </font><font style="vertical-align: inherit;">，以下是作者提供的代码。</font><font style="vertical-align: inherit;">这是一个</font><a href="http://jsfiddle.net/gongzhitaao/G5kEQ/1/" rel="noreferrer"><font style="vertical-align: inherit;">jsfiddle</font></a><font style="vertical-align: inherit;">。</font></font><a href="http://huahun.iteye.com/blog/197367" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="http://jsfiddle.net/gongzhitaao/G5kEQ/1/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>Date.prototype.format = function(format) //author: meizz<font></font>
{<font></font>
  var o = {<font></font>
    "M+" : this.getMonth()+1, //month<font></font>
    "d+" : this.getDate(),    //day<font></font>
    "h+" : this.getHours(),   //hour<font></font>
    "m+" : this.getMinutes(), //minute<font></font>
    "s+" : this.getSeconds(), //second<font></font>
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter<font></font>
    "S" : this.getMilliseconds() //millisecond<font></font>
  }<font></font>
<font></font>
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,<font></font>
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));<font></font>
  for(var k in o)if(new RegExp("("+ k +")").test(format))<font></font>
    format = format.replace(RegExp.$1,<font></font>
      RegExp.$1.length==1 ? o[k] :<font></font>
        ("00"+ o[k]).substr((""+ o[k]).length));<font></font>
  return format;<font></font>
}<font></font>
<font></font>
alert(new Date().format("yyyy-MM-dd"));<font></font>
alert(new Date("january 12 2008 11:12:30").format("yyyy-MM-dd h:mm:ss"));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无框架，有限但轻巧</font></font></p>

<pre><code>var d = (new Date()+'').split(' ');<font></font>
// ["Tue", "Sep", "03", "2013", "21:54:52", "GMT-0500", "(Central", "Daylight", "Time)"]<font></font>
<font></font>
[d[3], d[1], d[2], d[4]].join(' ');<font></font>
// "2013 Sep 03 21:58:03"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙逆天Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您引用的功能不是标准Javascript，不太可能跨浏览器移植，因此不是很好的做法。</font><font style="vertical-align: inherit;">在</font></font><a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript的3规格</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">叶解析和输出格式功能到Javascript实现。  </font></font><a href="http://www.ecma-international.org/publications/files/drafts/tc39-2009-025.pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了一部分ISO8601支持。</font><font style="vertical-align: inherit;">我相信您提到的toString（）函数是一种浏览器（Mozilla？）的创新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些库提供了用于对此参数化的例程，其中一些具有广泛的本地化支持。</font><font style="vertical-align: inherit;">您也可以在</font></font><a href="http://dojotoolkit.org/api/?qs=1.3/dojo.date.locale" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dojo.date.locale中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检出方法</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保</font><font style="vertical-align: inherit;">在JavaScript中处理日期时</font><font style="vertical-align: inherit;">签出</font></font><a href="http://www.datejs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Datejs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><a href="http://code.google.com/p/datejs/wiki/APIDocumentation#toString" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toString函数的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况下，它令人印象深刻且有据可查</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：泰勒·福赛斯指出，datejs已过时。</font><font style="vertical-align: inherit;">我在当前项目中使用了它，但没有任何问题，但是您应该意识到这一点并考虑替代方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列出</font></font><code>Date()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">支持的格式说明符的文档在哪里</font><font style="vertical-align: inherit;">？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我今天偶然发现了这个问题，很惊讶没有人花时间回答这个简单的问题。</font><font style="vertical-align: inherit;">的确，有许多库可以帮助您进行日期操作。</font><font style="vertical-align: inherit;">有些比其他更好。</font><font style="vertical-align: inherit;">但这不是问的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AFAIK，纯JavaScript不支持</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定</font><strong><font style="vertical-align: inherit;">要使用的</font></strong><font style="vertical-align: inherit;">格式说明符</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但它支持的方法格式化日期和/或时间，如</font></font><code>.toLocaleDateString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.toLocaleTimeString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>.toUTCString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最常使用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">对象参考位于</font></font><a href="http://www.w3schools.com/jsref/jsref_obj_date.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">w3schools.com网站上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（但是</font></font><a href="https://www.google.com/search?q=javascript%20date%20object%20reference"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google的快速搜索</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将显示更多可以更好地满足您的需求的对象）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日期对象属性”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分提供了的链接</font></font><a href="http://www.w3schools.com/jsref/jsref_prototype_date.asp"><code>prototype</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">链接</font><font style="vertical-align: inherit;">说明了使用自定义方法扩展Date对象的一些方法。</font><font style="vertical-align: inherit;">多年来</font><font style="vertical-align: inherit;">，JavaScript社区</font><font style="vertical-align: inherit;">一直在</font></font><a href="http://perfectionkills.com/extending-built-in-native-objects-evil-or-not/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">争论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是否是最佳做法，我并不主张或反对它，只是指出它的存在。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><a href="http://momentjs.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Moment.js</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是一个（轻量级）* JavaScript日期库，用于解析，处理和格式化日期。</font></font></p>

<pre><code>var a = moment([2010, 1, 14, 15, 25, 50, 125]);<font></font>
a.format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"<font></font>
a.format("ddd, hA");                       // "Sun, 3PM"<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（*）轻巧，意味着在最小的设置中缩小了9.3KB并压缩了文件（2014年2月）</font></font></em> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢</font></font><em><a href="https://www.webdevelopersnotes.com/10-ways-to-format-time-and-date-using-javascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><a href="http://www.elated.com/articles/working-with-dates/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“使用日期” </font></font></a></em><font style="vertical-align: inherit;"><em><a href="https://www.webdevelopersnotes.com/10-ways-to-format-time-and-date-using-javascript" rel="noreferrer"><font style="vertical-align: inherit;">格式化时间和日期的10种方法</font></a></em><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，您有三种方法，必须自己组合字符串：</font></font></p>

<pre><code>getDate() // Returns the date<font></font>
getMonth() // Returns the month<font></font>
getFullYear() // Returns the year<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var d = new Date();<font></font>
var curr_date = d.getDate();<font></font>
var curr_month = d.getMonth() + 1; //Months are zero based<font></font>
var curr_year = d.getFullYear();<font></font>
console.log(curr_date + "-" + curr_month + "-" + curr_year);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
