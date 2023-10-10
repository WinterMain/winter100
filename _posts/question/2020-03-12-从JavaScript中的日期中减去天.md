---
layout: question
title:  从JavaScript中的日期中减去天
date:   2020-03-12T03:24:23.000Z
description:                                                                          ...
img: 
author: 老丝
category: question
answer: 19
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
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想要改善这篇文章吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供此问题的详细答案，包括引文和答案正确的解释。</font><font style="vertical-align: inherit;">答案不够详细的答案可能会被编辑或删除。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道约会（例如今天）和回溯X天的简单方法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，例如，如果我想计算今天之前5天的日期。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第939篇《从JavaScript中的日期中减去天》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村A小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Try something like this</p>

<pre><code>dateLimit = (curDate, limit) =&gt; {<font></font>
    offset  = curDate.getDate() + limit<font></font>
    return new Date( curDate.setDate( offset) )<font></font>
}<font></font>
</code></pre>

<p><strong>currDate</strong> could be any date</p>

<p><strong>limit</strong> could be the difference in number of day (positive for future and negative for past)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Using Modern JavaScript function syntax</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const getDaysPastDate = (daysBefore, date = new Date) =&gt; new Date(date - (1000 * 60 * 60 * 24 * daysBefore));<font></font>
<font></font>
console.log(getDaysPastDate(1)); // yesterday</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">さ恋旧る</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If you want to both subtract a number of days and format your date in a human readable format, you should consider creating a custom <code>DateHelper</code> object that looks something like this :</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var DateHelper = {<font></font>
    addDays : function(aDate, numberOfDays) {<font></font>
        aDate.setDate(aDate.getDate() + numberOfDays); // Add numberOfDays<font></font>
        return aDate;                                  // Return the date<font></font>
    },<font></font>
    format : function format(date) {<font></font>
        return [<font></font>
           ("0" + date.getDate()).slice(-2),           // Get day and pad it with zeroes<font></font>
           ("0" + (date.getMonth()+1)).slice(-2),      // Get month and pad it with zeroes<font></font>
           date.getFullYear()                          // Get full year<font></font>
        ].join('/');                                   // Glue the pieces together<font></font>
    }<font></font>
}<font></font>
<font></font>
// With this helper, you can now just use one line of readable code to :<font></font>
// ---------------------------------------------------------------------<font></font>
// 1. Get the current date<font></font>
// 2. Subtract 5 days<font></font>
// 3. Format it<font></font>
// 4. Output it<font></font>
// ---------------------------------------------------------------------<font></font>
document.body.innerHTML = DateHelper.format(DateHelper.addDays(new Date(), -5));</code></pre>
</div>
</div>
<p></p>

<p>(see also <a href="https://jsfiddle.net/9fpzcghg/24/" rel="nofollow noreferrer"><strong>this Fiddle</strong></a>)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I get good mileage out of date.js:</p>

<p><a href="http://www.datejs.com/" rel="nofollow noreferrer">http://www.datejs.com/</a></p>

<pre><code>d = new Date();<font></font>
d.add(-10).days();  // subtract 10 days<font></font>
</code></pre>

<p>Nice!</p>

<p>Website includes this beauty:</p>

<blockquote>
  <p>Datejs doesn’t just parse strings, it slices them cleanly in two</p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>See the following code, subtract the days from the current date. Also, set the month according to substracted date.</p>

<pre><code>var today = new Date();<font></font>
var substract_no_of_days = 25;<font></font>
<font></font>
today.setTime(today.getTime() - substract_no_of_days* 24 * 60 * 60 * 1000);<font></font>
var substracted_date = (today.getMonth()+1) + "/" +today.getDate() + "/" + today.getFullYear();<font></font>
<font></font>
alert(substracted_date);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>When setting the date, the date converts to milliseconds, so you need to convert it back to a date:</p>

<p>This method also take into consideration, new year change etc.</p>

<pre><code>function addDays( date, days ) {<font></font>
    var dateInMs = date.setDate(date.getDate() - days);<font></font>
    return new Date(dateInMs);<font></font>
}<font></font>
<font></font>
var date_from = new Date();<font></font>
var date_to = addDays( new Date(), parseInt(days) );<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>for me all the combinations worked fine with below code snipplet , 
 the snippet is for Angular-2 implementation , 
if you need to add days , pass positive numberofDays , if you need to substract pass negative numberofDays</p>

<pre><code>function addSubstractDays(date: Date, numberofDays: number): Date {<font></font>
let d = new Date(date);<font></font>
return new Date(<font></font>
    d.getFullYear(),<font></font>
    d.getMonth(),<font></font>
    (d.getDate() + numberofDays)<font></font>
);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳答案导致我的代码出现错误，该错误将在本月的第一天设置当前月份的将来日期。</font><font style="vertical-align: inherit;">这就是我所做的</font></font></p>

<pre><code>curDate = new Date(); // Took current date as an example<font></font>
prvDate = new Date(0); // Date set to epoch 0<font></font>
prvDate.setUTCMilliseconds((curDate - (5 * 24 * 60 * 60 * 1000))); //Set epoch time<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryLEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I like the following because it is one line.  Not perfect with DST changes but usually good enough for my needs.</p>

<pre><code>var fiveDaysAgo = new Date(new Date() - (1000*60*60*24*5));
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个用于日期操作的函数。</font><font style="vertical-align: inherit;">您可以添加或减去任何天数，小时数，分钟数。</font></font></p>

<pre><code>function dateManipulation(date, days, hrs, mins, operator) {<font></font>
   date = new Date(date);<font></font>
   if (operator == "-") {<font></font>
      var durationInMs = (((24 * days) * 60) + (hrs * 60) + mins) * 60000;<font></font>
      var newDate = new Date(date.getTime() - durationInMs);<font></font>
   } else {<font></font>
      var durationInMs = (((24 * days) * 60) + (hrs * 60) + mins) * 60000;<font></font>
      var newDate = new Date(date.getTime() + durationInMs);<font></font>
   }<font></font>
   return newDate;<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，通过传递参数来调用此函数。</font><font style="vertical-align: inherit;">例如，这是一个函数调用，用于获取从今天起3天之前的日期。</font></font></p>

<pre><code>var today = new Date();<font></font>
var newDate = dateManipulation(today, 3, 0, 0, "-");<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function addDays (date, daysToAdd) {<font></font>
  var _24HoursInMilliseconds = 86400000;<font></font>
  return new Date(date.getTime() + daysToAdd * _24HoursInMilliseconds);<font></font>
};<font></font>
<font></font>
var now = new Date();<font></font>
<font></font>
var yesterday = addDays(now, - 1);<font></font>
<font></font>
var tomorrow = addDays(now, 1);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需使用第二个变量，您可以将x替换为x天：</font></font></p>

<pre><code>let d=new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000))
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现getDate（）/ setDate（）方法存在一个问题，即它太容易将所有内容转换为毫秒，并且有时语法难以理解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，我想解决一个事实，即1天= 86,400,000毫秒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对于您的特定问题：</font></font></p>

<pre><code>today = new Date()<font></font>
days = 86400000 //number of milliseconds in a day<font></font>
fiveDaysAgo = new Date(today - (5*days))<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇迹般有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用这种方法进行30/60/365天的滚动计算。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以轻松地对此进行推断，以创建几个月，几年等的时间单位。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些现有的解决方案已经接近，但与我想要的不完全相同。</font><font style="vertical-align: inherit;">此函数可使用正值或负值，并处理边界情况。</font></font></p>

<pre><code>function addDays(date, days) {<font></font>
    return new Date(<font></font>
        date.getFullYear(),<font></font>
        date.getMonth(),<font></font>
        date.getDate() + days,<font></font>
        date.getHours(),<font></font>
        date.getMinutes(),<font></font>
        date.getSeconds(),<font></font>
        date.getMilliseconds()<font></font>
    );<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西里神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢以毫秒为单位进行数学运算。</font><font style="vertical-align: inherit;">所以用</font></font><code>Date.now()</code></p>

<pre><code>var newDate = Date.now() + -5*24*3600*1000; // date 5 days ago in milliseconds
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您喜欢它的格式</font></font></p>

<pre><code>new Date(newDate).toString(); // or .toUTCString or .toISOString ...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font><code>Date.now()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在较旧的浏览器（例如我认为的IE8）中不起作用。</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Polyfill在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2015年6月更新</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@socketpair指出了我的草率。</font><font style="vertical-align: inherit;">正如他/她所说：“由于时区规则，一年中的某天有23个小时，有25个小时”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步来说，如果您想计算夏令时更改的时区中的5天前的本地日，并且上面的答案存在夏令时错误，并且您 </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设（错误地）</font></font><code>Date.now()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您提供了当前的本地时间，或者</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用途</font></font><code>.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它返回本地日期，因此与</font></font><code>Date.now()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UTC中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">基准日期</font><font style="vertical-align: inherit;">不兼容</font><font style="vertical-align: inherit;">。  </font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您全部使用UTC进行数学运算，则可以使用它，例如</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答：您希望UTC日期从NOW（UTC）5天前开始</font></font></p>

<pre><code>var newDate = Date.now() + -5*24*3600*1000; // date 5 days ago in milliseconds UTC<font></font>
new Date(newDate).toUTCString(); // or .toISOString(), BUT NOT toString<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">B.您使用UTC基准日期（不是“现在”）开始，使用 </font></font><code>Date.UTC()</code></p>

<pre><code>newDate = new Date(Date.UTC(2015, 3, 1)).getTime() + -5*24*3600000;<font></font>
new Date(newDate).toUTCString(); // or .toISOString BUT NOT toString<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天AGreen</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到getDays + X在日期/月份范围内不起作用。</font><font style="vertical-align: inherit;">只要您的日期不早于1970，就可以使用getTime。</font></font></p>

<pre><code>var todayDate = new Date(), weekDate = new Date();<font></font>
weekDate.setTime(todayDate.getTime()-(7*24*3600000));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为Date创建了此原型，以便可以传递负值减去天数，传递正值添加天数。</font></font></p>

<pre><code>if(!Date.prototype.adjustDate){<font></font>
    Date.prototype.adjustDate = function(days){<font></font>
        var date;<font></font>
<font></font>
        days = days || 0;<font></font>
<font></font>
        if(days === 0){<font></font>
            date = new Date( this.getTime() );<font></font>
        } else if(days &gt; 0) {<font></font>
            date = new Date( this.getTime() );<font></font>
<font></font>
            date.setDate(date.getDate() + days);<font></font>
        } else {<font></font>
            date = new Date(<font></font>
                this.getFullYear(),<font></font>
                this.getMonth(),<font></font>
                this.getDate() - Math.abs(days),<font></font>
                this.getHours(),<font></font>
                this.getMinutes(),<font></font>
                this.getSeconds(),<font></font>
                this.getMilliseconds()<font></font>
            );<font></font>
        }<font></font>
<font></font>
        this.setTime(date.getTime());<font></font>
<font></font>
        return this;<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，要使用它，我可以简单地写：</font></font></p>

<pre><code>var date_subtract = new Date().adjustDate(-4),<font></font>
    date_add = new Date().adjustDate(4);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Tom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是这样的：</font></font></p>

<pre><code>var d = new Date(); // today!<font></font>
var x = 5; // go back 5 days!<font></font>
d.setDate(d.getDate() - x);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三飞云斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var dateOffset = (24*60*60*1000) * 5; //5 days<font></font>
var myDate = new Date();<font></font>
myDate.setTime(myDate.getTime() - dateOffset);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要在整个Web应用程序中执行很多头痛检查日期操作，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DateJS</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将使您的生活更加轻松：</font></font></p>

<p><a href="http://simonwillison.net/2007/Dec/3/datejs/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://simonwillison.net/2007/Dec/3/datejs/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
