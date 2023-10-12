---
layout: question
title:  如何优雅地检测JavaScript中的空闲时间？
date:   2020-03-13T07:19:06.000Z
description: 是否可以在JavaScript中检测“ 空闲 ”时间？我的主要用例可能是预取或预加载内容。空闲时间：用户不活动或没有使用CPU的时间...
img: 
author: 逆天AGreen
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以</font><font style="vertical-align: inherit;">在JavaScript中</font><font style="vertical-align: inherit;">检测“ </font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空闲</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”时间？</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我的主要用例可能是预取或预加载内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空闲时间：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户不活动或没有使用CPU的时间</font></font></em></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1372篇《如何优雅地检测JavaScript中的空闲时间？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">成天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，您可以将click或mousemove事件附加到文档主体，以重置计时器。</font><font style="vertical-align: inherit;">有一个您可以按时间间隔调用的函数，该函数可以检查计时器是否超过指定的时间（例如1000毫秒），然后开始预加载。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GONear</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用这种方法，因为您不需要在事件触发时不断重置时间，而是只记录时间，这会生成空闲开始点。</font></font></p>

<pre><code>           function idle(WAIT_FOR_MINS, cb_isIdle) {<font></font>
            var self = this, <font></font>
                idle,<font></font>
                ms = (WAIT_FOR_MINS || 1) * 60000,<font></font>
                lastDigest = new Date(),<font></font>
                watch;<font></font>
            //document.onmousemove = digest;<font></font>
            document.onkeypress = digest;<font></font>
            document.onclick = digest;<font></font>
<font></font>
            function digest() {<font></font>
               lastDigest = new Date(); <font></font>
            }<font></font>
            // 1000 milisec = 1 sec<font></font>
            watch = setInterval(function(){<font></font>
                if (new Date() - lastDigest &gt; ms &amp;&amp; cb_isIdel) {<font></font>
                    clearInterval(watch);<font></font>
                    cb_isIdle();<font></font>
                }<font></font>
<font></font>
            }, 1000*60);    <font></font>
        },<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会使用列出的mousemove技巧检测到网页上的不活动状态，但这并不能告诉您该用户不在另一个窗口或选项卡的另一个页面上，或者该用户不在Word或Photoshop中，或者在WOW和只是目前不在看您的页面。</font><font style="vertical-align: inherit;">通常，我只是做预取并依靠客户端的多任务处理。</font><font style="vertical-align: inherit;">如果您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要此功能，则可以在Windows中使用Activex控件来做一些事情，但这充其量是丑陋的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里泡芙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一个简单的jQuery插件，可以完成您想要的工作。</font></font></p>

<p><a href="https://github.com/afklondon/jquery.inactivity" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/afklondon/jquery.inactivity</font></font></a></p>

<pre><code>$(document).inactivity( {<font></font>
    interval: 1000, // the timeout until the inactivity event fire [default: 3000]<font></font>
    mouse: true, // listen for mouse inactivity [default: true]<font></font>
    keyboard: false, // listen for keyboard inactivity [default: true]<font></font>
    touch: false, // listen for touch inactivity [default: true]<font></font>
    customEvents: "customEventName", // listen for custom events [default: ""]<font></font>
    triggerAll: true, // if set to false only the first "activity" event will be fired [default: false]<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该脚本将侦听鼠标，键盘，触摸和其他自定义事件的不活动（空闲），并触发全局“活动”和“不活动”事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助 ：）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jnck</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一些想法，一两个探索的途径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以使函数每10秒运行一次，并检查“计数器”变量？</font><font style="vertical-align: inherit;">如果可以的话，您可以将鼠标悬停在页面上，可以吗？</font><font style="vertical-align: inherit;">如果是这样，请使用mouseover事件重置“计数器”变量。</font><font style="vertical-align: inherit;">如果调用了函数，并且计数器在您预定的范围之上，请执行操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再说一遍，只是一些想法...希望能有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些解决方案的问题，尽管是正确的，但考虑到会话超时有价值的设置（使用PHP，.NET或Coldfusion开发人员的Application.cfc文件）时，都是不切实际的。</font><font style="vertical-align: inherit;">上述解决方案设置的时间需要与服务器端会话超时同步。</font><font style="vertical-align: inherit;">如果两者不同步，您可能会遇到问题，这些问题只会使您的用户感到沮丧和困惑。</font><font style="vertical-align: inherit;">例如，服务器端会话超时可能设置为60分钟，但用户可能认为他/她是安全的，因为JavaScript空闲时间捕获增加了用户可以花在单个页面上的总时间。</font><font style="vertical-align: inherit;">用户可能已经花了很长时间填写较长的表格，然后去提交。</font><font style="vertical-align: inherit;">会话超时可能在处理表单提交之前开始。</font><font style="vertical-align: inherit;">我倾向于给用户180分钟，</font><font style="vertical-align: inherit;">然后使用JavaScript自动将用户注销。</font><font style="vertical-align: inherit;">本质上，使用上面的一些代码来创建一个简单的计时器，但是没有捕获鼠标事件部分。</font><font style="vertical-align: inherit;">这样，我的客户端和服务器端时间可以完美同步。</font><font style="vertical-align: inherit;">如果您在用户界面中向用户显示时间，则不会造成混乱，因为这会减少时间。</font><font style="vertical-align: inherit;">每次在CMS中访问新页面时，服务器端会话和JavaScript计时器都会重置。</font><font style="vertical-align: inherit;">简单而优雅。</font><font style="vertical-align: inherit;">如果用户在一个页面上停留了180分钟以上，那么我认为该页面首先存在问题。</font><font style="vertical-align: inherit;">随着它减少。</font><font style="vertical-align: inherit;">每次在CMS中访问新页面时，服务器端会话和JavaScript计时器都会重置。</font><font style="vertical-align: inherit;">简单而优雅。</font><font style="vertical-align: inherit;">如果用户在一个页面上停留了180分钟以上，那么我认为该页面首先存在问题。</font><font style="vertical-align: inherit;">随着它减少。</font><font style="vertical-align: inherit;">每次在CMS中访问新页面时，服务器端会话和JavaScript计时器都会重置。</font><font style="vertical-align: inherit;">简单而优雅。</font><font style="vertical-align: inherit;">如果用户在一个页面上停留了180分钟以上，那么我认为该页面首先存在问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有正确设置的重置时间和绑定的纯JavaScript </font></font><code>addEventListener</code></p>

<pre><code>(function() {<font></font>
<font></font>
  var t,<font></font>
    timeout = 5000;<font></font>
<font></font>
  function resetTimer() {<font></font>
    console.log("reset: " + new Date().toLocaleString());<font></font>
    if (t) { <font></font>
      window.clearTimeout(t); <font></font>
    }<font></font>
    t = window.setTimeout(logout, timeout);<font></font>
  }<font></font>
<font></font>
  function logout() {<font></font>
    console.log("done: " + new Date().toLocaleString());<font></font>
  }<font></font>
  resetTimer();<font></font>
<font></font>
  //And bind the events to call `resetTimer()`<font></font>
  ["click", "mousemove", "keypress"].forEach(function(name) {<font></font>
    console.log(name);<font></font>
    document.addEventListener(name, resetTimer);<font></font>
  });<font></font>
<font></font>
}());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（部分受此线程前面的Equiman良好的核心逻辑的启发。）</font></font></em></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sessionExpiration.js</font></font></h2>

<hr>

<p><a href="https://github.com/Fomtriok/sessionExpiration.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sessionExpiration.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻巧但有效且可自定义。</font><font style="vertical-align: inherit;">实施后，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需一行即可使用：</font></font></strong></p>

<pre><code>sessionExpiration(idleMinutes, warningMinutes, logoutUrl);
</code></pre>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">影响</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器的</font><strong><font style="vertical-align: inherit;">所有标签</font></strong><font style="vertical-align: inherit;">，而不仅仅是一个。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纯JavaScript编写</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，没有依赖关系。</font><font style="vertical-align: inherit;">完全是客户端。</font></font></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果需要的话。）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告标语</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">倒计时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时钟，可通过用户交互来取消。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需包含</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sessionExpiration.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并使用以下参数调用函数：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[1]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空闲分钟数（在所有选项卡上），直到用户注销为止；</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[2]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空闲分钟数，直到显示警告和倒数，以及</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[3]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注销网址。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将CSS放入样式表中。</font><font style="vertical-align: inherit;">如果愿意，可以自定义它。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或者，如果不需要，请跳过并删除横幅。）</font></font></em></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font><font style="vertical-align: inherit;">如果您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想要警告横幅，则必须</font><font style="vertical-align: inherit;">在页面上</font><font style="vertical-align: inherit;">放置一个ID为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sessExpirDiv</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的空div </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（建议将其放在页脚中）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，如果在给定的时间内所有选项卡都处于非活动状态，则用户将自动注销。</font></font></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可选：您可以向函数提供第四个参数（URL serverRefresh），以便在与页面交互时也刷新服务器端会话计时器。</font></font></em></li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不更改CSS，这就是实际操作的示例。</font></font></p>

<p><a href="https://i.stack.imgur.com/z0d2n.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/z0d2n.png" alt="demo_image"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试此代码，它可以完美地工作。</font></font></p>

<pre><code>var IDLE_TIMEOUT = 10; //seconds<font></font>
var _idleSecondsCounter = 0;<font></font>
<font></font>
document.onclick = function () {<font></font>
    _idleSecondsCounter = 0;<font></font>
};<font></font>
<font></font>
document.onmousemove = function () {<font></font>
    _idleSecondsCounter = 0;<font></font>
};<font></font>
<font></font>
document.onkeypress = function () {<font></font>
    _idleSecondsCounter = 0;<font></font>
};<font></font>
<font></font>
window.setInterval(CheckIdleTime, 1000);<font></font>
<font></font>
function CheckIdleTime() {<font></font>
    _idleSecondsCounter++;<font></font>
    var oPanel = document.getElementById("SecondsUntilExpire");<font></font>
    if (oPanel)<font></font>
        oPanel.innerHTML = (IDLE_TIMEOUT - _idleSecondsCounter) + "";<font></font>
    if (_idleSecondsCounter &gt;= IDLE_TIMEOUT) {<font></font>
        alert("Time expired!");<font></font>
        document.location.href = "SessionExpired.aspx";<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要定位</font></font><a href="https://caniuse.com/#feat=requestidlecallback" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">受支持的浏览器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（截至2018年12月为Chrome或Firefox），则可以尝试使用</font></font><a href="https://developers.google.com/web/updates/2015/08/using-requestidlecallback?hl=en" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">requestIdleCallback，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font><font style="vertical-align: inherit;">为不受支持的浏览器</font><font style="vertical-align: inherit;">添加</font></font><a href="https://gist.github.com/paullewis/55efe5d6f05434a96c36" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">requestIdleCallback填充</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过检测鼠标在表单主体上的移动并在最后一次移动时间更新全局变量，您可能会一起破解某些东西。</font><font style="vertical-align: inherit;">然后，您需要运行一个间隔计时器，该计时器会定期检查上一次移动时间，并且如果自检测到上一次鼠标移动以来时间足够长，则应执行一些操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先前的所有答案都有一个始终处于活动状态的mousemove处理程序。</font><font style="vertical-align: inherit;">如果处理程序是jQuery，则jQuery所执行的其他处理可以累加起来。</font><font style="vertical-align: inherit;">特别是如果用户使用游戏鼠标，则每秒最多可能发生500个事件。</font></font></p>

<p>This solution avoids handling every mousemove event.  This result in a small timing error, but which you can adjust to your need.</p>

<pre><code>function setIdleTimeout(millis, onIdle, onUnidle) {<font></font>
    var timeout = 0;<font></font>
    startTimer();<font></font>
<font></font>
    function startTimer() {<font></font>
        timeout = setTimeout(onExpires, millis);<font></font>
        document.addEventListener("mousemove", onActivity);<font></font>
        document.addEventListener("keydown", onActivity);<font></font>
    }<font></font>
<font></font>
    function onExpires() {<font></font>
        timeout = 0;<font></font>
        onIdle();<font></font>
    }<font></font>
<font></font>
    function onActivity() {<font></font>
        if (timeout) clearTimeout(timeout);<font></font>
        else onUnidle();<font></font>
        //since the mouse is moving, we turn off our event hooks for 1 second<font></font>
        document.removeEventListener("mousemove", onActivity);<font></font>
        document.removeEventListener("keydown", onActivity);<font></font>
        setTimeout(startTimer, 1000);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/jndxq51o/" rel="noreferrer">http://jsfiddle.net/jndxq51o/</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是tvanfosson想法的jQuery粗略实现：</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
<font></font>
   idleTime = 0;<font></font>
<font></font>
   //Increment the idle time counter every second.<font></font>
   var idleInterval = setInterval(timerIncrement, 1000);<font></font>
<font></font>
   function timerIncrement()<font></font>
   {<font></font>
     idleTime++;<font></font>
     if (idleTime &gt; 2)<font></font>
     {<font></font>
       doPreload();<font></font>
     }<font></font>
   }<font></font>
<font></font>
   //Zero the idle timer on mouse movement.<font></font>
   $(this).mousemove(function(e){<font></font>
      idleTime = 0;<font></font>
   });<font></font>
<font></font>
   function doPreload()<font></font>
   {<font></font>
     //Preload images, etc.<font></font>
   }<font></font>
<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一年前创建了一个小库：</font></font></p>

<p><a href="https://github.com/shawnmclean/Idle.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/shawnmclean/Idle.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型的javascript库，用于报告用户在浏览器中的活动（离开，空闲，不查看网页，在其他标签中等）。</font><font style="vertical-align: inherit;">与其他任何JavaScript库（例如jquery）无关。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio用户可以通过以下方式从NuGet中获取它： </font></font><code>PM&gt; Install-Package Idle.js</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GIZO-俊宏</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个使用JQuery的简单脚本，用于处理mousemove和keypress事件。</font><font style="vertical-align: inherit;">如果时间到了，页面将重新加载。</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
var idleTime = 0;<font></font>
$(document).ready(function () {<font></font>
    //Increment the idle time counter every minute.<font></font>
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute<font></font>
<font></font>
    //Zero the idle timer on mouse movement.<font></font>
    $(this).mousemove(function (e) {<font></font>
        idleTime = 0;<font></font>
    });<font></font>
    $(this).keypress(function (e) {<font></font>
        idleTime = 0;<font></font>
    });<font></font>
});<font></font>
<font></font>
function timerIncrement() {<font></font>
    idleTime = idleTime + 1;<font></font>
    if (idleTime &gt; 19) { // 20 minutes<font></font>
        window.location.reload();<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;   <font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
