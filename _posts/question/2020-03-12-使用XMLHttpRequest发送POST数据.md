---
layout: question
title:  使用XMLHttpRequest发送POST数据
date:   2020-03-12T09:23:23.000Z
description: 我想使用JavaScript中的XMLHttpRequest发送一些数据。说我的HTML形式如下：<form name="inputform" a...
img: 
author: GO
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用JavaScript中的XMLHttpRequest发送一些数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说我的HTML形式如下：</font></font></p>

<pre><code>&lt;form name="inputform" action="somewhere" method="post"&gt;<font></font>
    &lt;input type="hidden" value="person" name="user"&gt;<font></font>
    &lt;input type="hidden" value="password" name="pwd"&gt;<font></font>
    &lt;input type="hidden" value="place" name="organization"&gt;<font></font>
    &lt;input type="hidden" value="key" name="requiredkey"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中使用XMLHttpRequest编写等效项？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1204篇《使用XMLHttpRequest发送POST数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最少使用</font></font><code>FormData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提交AJAX请求</font></font></h2>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1"/&gt;<font></font>
&lt;script&gt;<font></font>
"use strict";<font></font>
function submitForm(oFormElement)<font></font>
{<font></font>
  var xhr = new XMLHttpRequest();<font></font>
  xhr.onload = function(){ alert (xhr.responseText); } // success case<font></font>
  xhr.onerror = function(){ alert (xhr.responseText); } // failure case<font></font>
  xhr.open (oFormElement.method, oFormElement.action, true);<font></font>
  xhr.send (new FormData (oFormElement));<font></font>
  return false;<font></font>
}<font></font>
&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
&lt;form method="post" action="somewhere" onsubmit="return submitForm(this);"&gt;<font></font>
  &lt;input type="hidden" value="person"   name="user" /&gt;<font></font>
  &lt;input type="hidden" value="password" name="pwd" /&gt;<font></font>
  &lt;input type="hidden" value="place"    name="organization" /&gt;<font></font>
  &lt;input type="hidden" value="key"      name="requiredkey" /&gt;<font></font>
  &lt;input type="submit" value="post request"/&gt;<font></font>
&lt;/form&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备注</font></font></h2>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这并不能完全回答OP问题，因为它要求用户单击才能提交​​请求。</font><font style="vertical-align: inherit;">但这对于寻找这种简单解决方案的人们可能有用。  </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本示例非常简单，不支持该</font></font><code>GET</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">如果您对更复杂的示例感兴趣，请查看出色的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Using_FormData_objects" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另请参见</font></font><a href="https://stackoverflow.com/a/19836927/938111"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XMLHttpRequest到HTML表单的</font></font></em></a><font style="vertical-align: inherit;"><a href="https://stackoverflow.com/a/19836927/938111"><font style="vertical-align: inherit;">类似答案</font></a><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案的局限性：正如</font></font><a href="https://stackoverflow.com/u/802500"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Justin Blank</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/u/1168754"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thomas Munk</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅他们的评论）</font><font style="vertical-align: inherit;">所指出的那样，</font></font><code>FormData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE9及更低版本以及Android 2.3上的默认浏览器均不支持</font><font style="vertical-align: inherit;">该解决方案</font><font style="vertical-align: inherit;">。</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需插件！</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择以下代码，并将其拖到“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">书签栏”中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果看不到，请从“浏览器设置”中启用</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该链接：</font></font></p>

<p><a href="https://i.stack.imgur.com/tjilm.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/tjilm.png" alt="在此处输入图片说明"></a></p>

<pre><code>javascript:var my_params = prompt("Enter your parameters", "var1=aaaa&amp;var2=bbbbb"); var Target_LINK = prompt("Enter destination", location.href); function post(path, params) { var xForm = document.createElement("form"); xForm.setAttribute("method", "post"); xForm.setAttribute("action", path); for (var key in params) { if (params.hasOwnProperty(key)) { var hiddenField = document.createElement("input"); hiddenField.setAttribute("name", key); hiddenField.setAttribute("value", params[key]); xForm.appendChild(hiddenField); } } var xhr = new XMLHttpRequest(); xhr.onload = function () { alert(xhr.responseText); }; xhr.open(xForm.method, xForm.action, true); xhr.send(new FormData(xForm)); return false; } parsed_params = {}; my_params.split("&amp;").forEach(function (item) { var s = item.split("="), k = s[0], v = s[1]; parsed_params[k] = v; }); post(Target_LINK, parsed_params); void(0);
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就这样！</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以访问任何网站，然后在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BOOKMARK BAR中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击该按钮</font><font style="vertical-align: inherit;">！</font></font></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的方法使用方法发送数据</font></font><code>XMLHttpRequest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此，触发脚本时您必须位于同一域中。</font><font style="vertical-align: inherit;">这就是为什么我更喜欢使用模拟的FORM SUBMITTING发送数据，该表单可以将代码发送到任何域-这是该代码：</font></font></p>

<pre><code> javascript:var my_params=prompt("Enter your parameters","var1=aaaa&amp;var2=bbbbb"); var Target_LINK=prompt("Enter destination", location.href); function post(path, params) {   var xForm= document.createElement("form");   xForm.setAttribute("method", "post");   xForm.setAttribute("action", path); xForm.setAttribute("target", "_blank");   for(var key in params) {   if(params.hasOwnProperty(key)) {        var hiddenField = document.createElement("input");      hiddenField.setAttribute("name", key);      hiddenField.setAttribute("value", params[key]);         xForm.appendChild(hiddenField);     }   }   document.body.appendChild(xForm);  xForm.submit(); }   parsed_params={}; my_params.split("&amp;").forEach(function(item) {var s = item.split("="), k=s[0], v=s[1]; parsed_params[k] = v;}); post(Target_LINK, parsed_params); void(0); 
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
