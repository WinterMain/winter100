---
layout: question
title:  $（document）.ready等同于没有jQuery
date:   2020-03-09T11:06:22.000Z
description: 我有一个使用的脚本$(document).ready，但没有使用jQuery中的其他任何脚本。我想通过删除jQuery依赖项来减轻它的负担。如何在$(...
img: 
author: 神无Green
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用的脚本</font></font><code>$(document).ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但没有使用jQuery中的其他任何</font><font style="vertical-align: inherit;">脚本</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我想通过删除jQuery依赖项来减轻它的负担。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在</font></font><code>$(document).ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不使用jQuery的情况下</font><font style="vertical-align: inherit;">实现自己的</font><font style="vertical-align: inherit;">功能？</font><font style="vertical-align: inherit;">我知道使用</font></font><code>window.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会有所不同，因为</font></font><code>window.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在加载所有图像，帧等之后</font><font style="vertical-align: inherit;">会</font><font style="vertical-align: inherit;">触发。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第213篇《$（document）.ready等同于没有jQuery》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOL蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>(function(f){<font></font>
  if(document.readyState != "loading") f();<font></font>
  else document.addEventListener("DOMContentLoaded", f);<font></font>
})(function(){<font></font>
  console.log("The Document is ready");<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOHarry猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在BODY底部附近加载jQuery，但是在写出jQuery（&lt;func&gt;）或jQuery（document）.ready（&lt;func&gt;）的代码上遇到麻烦，请</font><font style="vertical-align: inherit;">在Github上</font><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/withjam/jqshim-head" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jqShim</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其重新创建自己的文档就绪功能，不如直接保留这些功能，直到jQuery可用，然后按预期使用jQuery。</font><font style="vertical-align: inherit;">将jQuery移到正文底部的目的是加快页面加载速度，您仍然可以通过在模板头部内联jqShim.min.js来实现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最终编写了这段代码，以使</font></font><a href="http://en.wikipedia.org/wiki/WordPress" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WordPress</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">所有脚本都</font><font style="vertical-align: inherit;">移到页脚，而现在，此填充代码直接位于页眉中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO路易西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>function ready(callback){<font></font>
    if(typeof callback === "function"){<font></font>
        document.addEventListener("DOMContentLoaded", callback);<font></font>
        window.addEventListener("load", callback);<font></font>
    }else{<font></font>
        throw new Error("Sorry, I can not run this!");<font></font>
    }<font></font>
}<font></font>
ready(function(){<font></font>
    console.log("It worked!");<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不必支持非常老的浏览器，即使您的外部脚本加载了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">async</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，也可以使用以下方法：</font></font></p>

<pre><code>HTMLDocument.prototype.ready = new Promise(function(resolve) {<font></font>
   if(document.readyState != "loading")<font></font>
      resolve();<font></font>
   else<font></font>
      document.addEventListener("DOMContentLoaded", function() {<font></font>
         resolve();<font></font>
      });<font></font>
});<font></font>
<font></font>
document.ready.then(function() {<font></font>
   console.log("document.ready");<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁ProJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们发现我们的快速跨浏览器实现可以在最简单的情况下以最少的实现实现成功：</font></font></p>

<pre><code>window.onReady = function onReady(fn){<font></font>
    document.body ? fn() : setTimeout(function(){ onReady(fn);},50);<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里介绍的setTimeout / setInterval解决方案仅在特定情况下有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尤其是在Internet Explorer 8以前的版本中，尤其是在出现此问题时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">影响这些setTimeout / setInterval解决方案成功的变量是：</font></font></p>

<pre><code>1) dynamic or static HTML<font></font>
2) cached or non cached requests<font></font>
3) size of the complete HTML document<font></font>
4) chunked or non chunked transfer encoding<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此特定问题的原始（本地Javascript）代码如下：</font></font></p>

<pre><code>https://github.com/dperini/ContentLoaded<font></font>
http://javascript.nwbox.com/ContentLoaded (test)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是jQuery团队用来构建其实现的代码。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将其添加到HTML页面的底部...</font></font></p>

<pre><code>&lt;script&gt;<font></font>
    Your_Function();<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为，HTML文档是由上至下解析的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery答案对我来说非常有用。</font><font style="vertical-align: inherit;">有了一点重构，就很好地满足了我的需求。</font><font style="vertical-align: inherit;">希望对其他人有帮助。</font></font></p>

<pre><code>function onReady ( callback ){<font></font>
    var addListener = document.addEventListener || document.attachEvent,<font></font>
        removeListener =  document.removeEventListener || document.detachEvent<font></font>
        eventName = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange"<font></font>
<font></font>
    addListener.call(document, eventName, function(){<font></font>
        removeListener( eventName, arguments.callee, false )<font></font>
        callback()<font></font>
    }, false )<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近在移动网站上使用了它。</font><font style="vertical-align: inherit;">这是John Resig的“ Pro JavaScript Techniques”的简化版本。</font><font style="vertical-align: inherit;">这取决于addEvent。</font></font></p>

<pre><code>var ready = ( function () {<font></font>
  function ready( f ) {<font></font>
    if( ready.done ) return f();<font></font>
<font></font>
    if( ready.timer ) {<font></font>
      ready.ready.push(f);<font></font>
    } else {<font></font>
      addEvent( window, "load", isDOMReady );<font></font>
      ready.ready = [ f ];<font></font>
      ready.timer = setInterval(isDOMReady, 13);<font></font>
    }<font></font>
  };<font></font>
<font></font>
  function isDOMReady() {<font></font>
    if( ready.done ) return false;<font></font>
<font></font>
    if( document &amp;&amp; document.getElementsByTagName &amp;&amp; document.getElementById &amp;&amp; document.body ) {<font></font>
      clearInterval( ready.timer );<font></font>
      ready.timer = null;<font></font>
      for( var i = 0; i &lt; ready.ready.length; i++ ) {<font></font>
        ready.ready[i]();<font></font>
      }<font></font>
      ready.ready = null;<font></font>
      ready.done = true;<font></font>
    }<font></font>
  }<font></font>
<font></font>
  return ready;<font></font>
})();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨浏览器（也是旧的浏览器）和一个简单的解决方案：</font></font></p>

<pre><code>var docLoaded = setInterval(function () {<font></font>
    if(document.readyState !== "complete") return;<font></font>
    clearInterval(docLoaded);<font></font>
<font></font>
    /*<font></font>
        Your code goes here i.e. init()<font></font>
    */<font></font>
}, 30);<font></font>
</code></pre>

<p><a href="https://jsfiddle.net/z6Lq6oxg/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jsfiddle中显示警报</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">穷人的解决方案：</font></font></p>

<pre><code>var checkLoad = function() {   <font></font>
    document.readyState !== "complete" ? setTimeout(checkLoad, 11) : alert("loaded!");   <font></font>
};  <font></font>
<font></font>
checkLoad();  <font></font>
</code></pre>

<p><a href="http://jsfiddle.net/squadjot/s4EzY/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看小提琴</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了这一点，我想更好一点，自己的范围，并且非递归</font></font></p>

<pre><code>(function(){<font></font>
    var tId = setInterval(function() {<font></font>
        if (document.readyState == "complete") onComplete()<font></font>
    }, 11);<font></font>
    function onComplete(){<font></font>
        clearInterval(tId);    <font></font>
        alert("loaded!");    <font></font>
    };<font></font>
})()<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/squadjot/XD7ZF/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看小提琴</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaGO樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这个：</font></font></p>

<pre><code>document.addEventListener("DOMContentLoaded", function(event) { <font></font>
    //Do work<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这可能仅适用于较新的浏览器，尤其是以下浏览器：</font><a href="http://caniuse.com/#feat=domcontentloaded"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://caniuse.com/#feat=domcontentloaded"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//caniuse.com/#feat=domcontentloaded</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Stafan小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实，如果</font><font style="vertical-align: inherit;">仅</font><font style="vertical-align: inherit;">关心</font></font><strong><a href="http://en.wikipedia.org/wiki/Internet_Explorer_9" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 9+</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么此代码足以替换</font></font><code>jQuery.ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    document.addEventListener("DOMContentLoaded", callback);
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您担心</font></font><a href="http://en.wikipedia.org/wiki/Internet_Explorer_6" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 6</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和某些真正奇怪且稀有的浏览器，则可以使用：</font></font></p>

<pre><code>domReady: function (callback) {<font></font>
    // Mozilla, Opera and WebKit<font></font>
    if (document.addEventListener) {<font></font>
        document.addEventListener("DOMContentLoaded", callback, false);<font></font>
        // If Internet Explorer, the event model is used<font></font>
    } else if (document.attachEvent) {<font></font>
        document.attachEvent("onreadystatechange", function() {<font></font>
            if (document.readyState === "complete" ) {<font></font>
                callback();<font></font>
            }<font></font>
        });<font></font>
        // A fallback to window.onload, that will always work<font></font>
    } else {<font></font>
        var oldOnload = window.onload;<font></font>
        window.onload = function () {<font></font>
            oldOnload &amp;&amp; oldOnload();<font></font>
            callback();<font></font>
        }<font></font>
    }<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的</font></font><code>&lt;script&gt;/*JavaScript code*/&lt;/script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">权利</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在结束</font></font></strong> <code>&lt;/body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><strong><font style="vertical-align: inherit;">之前</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诚然，这可能不适合每个人的目的，因为它需要更改HTML文件，而不是仅在JavaScript文件中做一些事情</font></font><code>document.ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是仍然...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个基于标准的替代品</font><font style="vertical-align: inherit;">，尽管IE8不</font></font><code>DOMContentLoaded</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font><font style="vertical-align: inherit;">，但</font><font style="vertical-align: inherit;">超过</font></font><a href="http://caniuse.com/#search=DOMContentLoaded" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">98％的浏览器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都支持它</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>document.addEventListener("DOMContentLoaded", function(event) { <font></font>
  //do work<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的本机功能比window.onload复杂得多，如下所示。  </font></font></p>

<pre><code>function bindReady(){<font></font>
    if ( readyBound ) return;<font></font>
    readyBound = true;<font></font>
<font></font>
    // Mozilla, Opera and webkit nightlies currently support this event<font></font>
    if ( document.addEventListener ) {<font></font>
        // Use the handy event callback<font></font>
        document.addEventListener( "DOMContentLoaded", function(){<font></font>
            document.removeEventListener( "DOMContentLoaded", arguments.callee, false );<font></font>
            jQuery.ready();<font></font>
        }, false );<font></font>
<font></font>
    // If IE event model is used<font></font>
    } else if ( document.attachEvent ) {<font></font>
        // ensure firing before onload,<font></font>
        // maybe late but safe also for iframes<font></font>
        document.attachEvent("onreadystatechange", function(){<font></font>
            if ( document.readyState === "complete" ) {<font></font>
                document.detachEvent( "onreadystatechange", arguments.callee );<font></font>
                jQuery.ready();<font></font>
            }<font></font>
        });<font></font>
<font></font>
        // If IE and not an iframe<font></font>
        // continually check to see if the document is ready<font></font>
        if ( document.documentElement.doScroll &amp;&amp; window == window.top ) (function(){<font></font>
            if ( jQuery.isReady ) return;<font></font>
<font></font>
            try {<font></font>
                // If IE is used, use the trick by Diego Perini<font></font>
                // http://javascript.nwbox.com/IEContentLoaded/<font></font>
                document.documentElement.doScroll("left");<font></font>
            } catch( error ) {<font></font>
                setTimeout( arguments.callee, 0 );<font></font>
                return;<font></font>
            }<font></font>
<font></font>
            // and execute any waiting functions<font></font>
            jQuery.ready();<font></font>
        })();<font></font>
    }<font></font>
<font></font>
    // A fallback to window.onload, that will always work<font></font>
    jQuery.event.add( window, "load", jQuery.ready );<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
