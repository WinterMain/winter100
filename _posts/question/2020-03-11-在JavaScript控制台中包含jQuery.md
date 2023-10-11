---
layout: question
title:  在JavaScript控制台中包含jQuery
date:   2020-03-11T03:28:09.000Z
description: 对于不使用jQuery的网站，是否有简便的方法将jQuery包含在Chrome JavaScript控制台中？例如，在一个网站上，我想获取表中的行数。我知...
img: 
author: 伽罗乐
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于不使用jQuery的网站，是否有简便的方法将jQuery包含在Chrome JavaScript控制台中？</font><font style="vertical-align: inherit;">例如，在一个网站上，我想获取表中的行数。</font><font style="vertical-align: inherit;">我知道使用jQuery确实很容易。</font></font></p>

<pre><code>$('element').length;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该网站不使用jQuery。</font><font style="vertical-align: inherit;">我可以从命令行添加它吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第599篇《在JavaScript控制台中包含jQuery》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现代浏览器（在Chrome，Firefox，Safari上进行了测试）</font><font style="vertical-align: inherit;">使用美元符号</font></font><a href="https://stackoverflow.com/a/22244912/1476885"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现了一些辅助功能</font></font></a><font style="vertical-align: inherit;"></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这些</font><a href="https://stackoverflow.com/a/22244912/1476885"><font style="vertical-align: inherit;">功能</font></a><font style="vertical-align: inherit;">与jQuery非常相似（如果该网站未使用定义某些内容</font></font><code>window.$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p>Those utilities are quite useful for selecting elements in the DOM and modifying them.</p>

<p>Docs: <a href="https://developers.google.com/web/tools/chrome-devtools/console/utilities?utm_source=dcc&amp;utm_medium=redirect&amp;utm_campaign=2016q3#selector" rel="nofollow noreferrer">Chrome</a>, <a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Console/The_command_line_interpreter#Helper_commands" rel="nofollow noreferrer">Firefox</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要为用户脚本执行此操作，请编写以下代码：</font><a href="http://userscripts.org/scripts/show/123588" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://userscripts.org/scripts/show/123588</font></font><a href="http://userscripts.org/scripts/show/123588" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以让您包括jQuery，UI和所需的任何插件。</font><font style="vertical-align: inherit;">我在具有1.5.1和没有UI的网站上使用它；</font><font style="vertical-align: inherit;">这个脚本给了我1.7.1加上UI，在Chrome或FF中没有冲突。</font><font style="vertical-align: inherit;">我自己还没有测试过Opera，但是其他人告诉我，Opera也已经为他们工作过，因此，如果您需要这样做，那么它应该是一个完整的跨浏览器用户脚本解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">镜风Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要从控制台频繁使用jQuery，则可以轻松编写用户脚本。</font><font style="vertical-align: inherit;">首先，如果您使用的是Chrome，请安装Tampermonkey，如果您使用的是Firefox，请安装Greasemonkey。</font><font style="vertical-align: inherit;">使用如下使用功能编写一个简单的用户脚本：</font></font></p>

<pre><code>var scripts = [];<font></font>
<font></font>
function use(libname) {<font></font>
    var src;<font></font>
    if (scripts.indexOf(libname) == -1) {<font></font>
        switch (libname.toLowerCase()) {<font></font>
            case "jquery":<font></font>
                src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";<font></font>
                break;<font></font>
            case "angularjs":<font></font>
                src = "//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js";<font></font>
                break;<font></font>
        }<font></font>
    } else {<font></font>
        console.log("Library already in use.");<font></font>
        return;<font></font>
    }<font></font>
    if (src) {<font></font>
        scripts.append(libname);<font></font>
        var script = document.createElement("script");<font></font>
        script.src = src;<font></font>
        document.body.appendChild(scr);<font></font>
    } else {<font></font>
        console.log("Invalid Library.");<font></font>
        return;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动完成此操作非常容易，如其他答案所述。</font><font style="vertical-align: inherit;">但是，还有</font></font><a href="https://chrome.google.com/webstore/detail/gbmifchmngifmadobkcpijhhldeeelkc" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuerify插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FWIW，Firebug嵌入</font></font><code>include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特殊命令，默认情况下，jQuery为别名：</font><a href="https://getfirebug.com/wiki/index.php/Include" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="https://getfirebug.com/wiki/index.php/Include" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//getfirebug.com/wiki/index.php/Include</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在您的情况下，只需键入： </font></font></p>

<pre><code>include("jquery");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弗洛伦特</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚制作了一个带有错误处理功能的jQuery 3.2.1小书签（如果尚未加载，则仅加载；如果已经加载，则检测版本；如果加载时出错，则显示错误消息）。</font><font style="vertical-align: inherit;">已在Chrome 27中进行了测试。由于</font></font><a href="http://blog.jquery.com/2013/04/18/jquery-2-0-released/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery 2.0与1.9的API兼容，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此没有理由在Chrome浏览器上使用“旧的” jQuery 1.9.1 </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在Chrome开发者控制台中运行以下命令，或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其拖放到书签栏中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>javascript:((function(){if(typeof(jQuery)=="undefined"){window.jQuery="loading";var&nbsp;a=document.createElement("script");a.type="text/javascript";a.src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";a.onload=function(){console.log("jQuery&nbsp;"+jQuery.fn.jquery+"&nbsp;loaded&nbsp;successfully.")};a.onerror=function(){delete&nbsp;jQuery;alert("Error&nbsp;while&nbsp;loading&nbsp;jQuery!")};document.getElementsByTagName("head")[0].appendChild(a)}else{if(typeof(jQuery)=="function"){alert("jQuery&nbsp;("+jQuery.fn.jquery+")&nbsp;is&nbsp;already&nbsp;loaded!")}else{alert("jQuery&nbsp;is&nbsp;already&nbsp;loading...")}}})())
</code></pre>

<p><a href="https://fs.fnkr.net/UzyzudnA8l7d" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可读的源代码在这里</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制以下所有内容：</font><a href="https://code.jquery.com/jquery-3.4.1.min.js" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><br>
<a href="https://code.jquery.com/jquery-3.4.1.min.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.jquery.com/jquery-3.4.1.min.js</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其粘贴到控制台中。</font><font style="vertical-align: inherit;">完美运作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神无Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQueryify手册：</font></font></p>

<p><a href="http://marklets.com/jQuerify.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://marklets.com/jQuerify.aspx</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其复制粘贴代码到其他答案中，不如将其变成可点击的书签。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
