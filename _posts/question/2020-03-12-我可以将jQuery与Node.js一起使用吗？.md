---
layout: question
title:  我可以将jQuery与Node.js一起使用吗？
date:   2020-03-12T06:29:46.000Z
description: 是否可以使用Node.js在服务器端使用jQuery选择器/ DOM操作？...
img: 
author: 老丝番长
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以使用Node.js在服务器端使用jQuery选择器/ DOM操作？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第988篇《我可以将jQuery与Node.js一起使用吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是使用</font></font><a href="http://underscorejs.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它应该提供您可能希望从JQuery的服务器端获得的东西。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从来没听说过。</font><font style="vertical-align: inherit;">DOM是客户端的东西（jQuery不会解析HTML，而是DOM）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些当前的Node.js项目：</font></font></p>

<p><a href="https://github.com/ry/node/wiki" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ry/node/wiki</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/nodejs/node" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nodejs/node</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且SimonW的</font></font><a href="http://github.com/simonw/djangode" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">djangode</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常酷...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://electron.atom.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Electron</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它允许混合使用browserjs和nodejs。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前，我尝试在nodejs中使用canvas2d，但最终我放弃了。</font><font style="vertical-align: inherit;">默认情况下，nodejs不支持它，并且安装起来太困难了（很多... dependeces）。</font><font style="vertical-align: inherit;">在使用Electron之前，我可以轻松地使用所有以前的browserjs代码，甚至是WebGL，并将结果值（例如，结果base64图像数据）传递给nodejs代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否。将浏览器环境移植到节点将是一项巨大的工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在研究单元测试的另一种方法是创建jQuery的“模拟”版本，该版本在调用选择器时提供回调。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您就可以在没有DOM的情况下对jQuery插件进行单元测试。</font><font style="vertical-align: inherit;">您仍然必须在真实的​​浏览器中进行测试，以查看您的代码是否可以正常运行，但是，如果您发现浏览器特定的问题，则也可以轻松地“模拟”单元测试中的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">准备好显示后，我将其推送到github.com/felixge。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://github.com/tmpvar/jsdom" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsdom</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">是一个很棒的工具。</font><font style="vertical-align: inherit;">但是，如果您要评估整个页面并在服务器端对它们进行一些时髦的设计，建议您在各自的上下文中运行它们：</font></font></p>

<pre><code>vm.runInContext
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，诸如</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>CommonJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场之</font><font style="vertical-align: inherit;">类的事情</font><font style="vertical-align: inherit;">不会破坏Node进程本身。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="http://nodejs.org/api/vm.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到文档</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">干杯!</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用新的JSDOM API来获取窗口。</font></font></p>

<pre><code>const jsdom = require("jsdom");<font></font>
const { window } = new jsdom.JSDOM(`...`);<font></font>
var $ = require("jquery")(window);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信现在的答案是肯定的。</font></font><br>
<a href="https://github.com/tmpvar/jsdom" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/tmpvar/jsdom</font></font></a></p>

<pre><code>var navigator = { userAgent: "node-js" };  <font></font>
var jQuery = require("./node-jquery").jQueryInit(window, navigator);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以</font><font style="vertical-align: inherit;">使用</font></font><a href="http://github.com/tmpvar/jsdom" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsdom</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需在示例目录中查看其jquery示例即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在撰写本文时，还保留了</font></font><a href="https://github.com/MatthewMueller/cheerio"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cheerio</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">专为服务器设计的核心jQuery的快速，灵活和精益实现。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
