---
layout: question
title:  如何在没有jQuery的情况下进行AJAX调用？
date:   2020-03-11T02:37:40.000Z
description: 如何在不使用jQuery的情况下使用JavaScript进行AJAX调用？ ...
img: 
author: 猿村村
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在不使用jQuery的情况下使用JavaScript进行AJAX调用？ </font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>HTML :</p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
    &lt;html&gt;<font></font>
    &lt;head&gt;<font></font>
    &lt;script&gt;<font></font>
    function loadXMLDoc()<font></font>
    {<font></font>
    var xmlhttp;<font></font>
    if (window.XMLHttpRequest)<font></font>
      {// code for IE7+, Firefox, Chrome, Opera, Safari<font></font>
      xmlhttp=new XMLHttpRequest();<font></font>
      }<font></font>
    else<font></font>
      {// code for IE6, IE5<font></font>
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");<font></font>
      }<font></font>
    xmlhttp.onreadystatechange=function()<font></font>
      {<font></font>
      if (xmlhttp.readyState==4 &amp;&amp; xmlhttp.status==200)<font></font>
        {<font></font>
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;<font></font>
        }<font></font>
      }<font></font>
    xmlhttp.open("GET","1.php?id=99freebies.blogspot.com",true);<font></font>
    xmlhttp.send();<font></font>
    }<font></font>
    &lt;/script&gt;<font></font>
    &lt;/head&gt;<font></font>
    &lt;body&gt;<font></font>
<font></font>
    &lt;div id="myDiv"&gt;&lt;h2&gt;Let AJAX change this text&lt;/h2&gt;&lt;/div&gt;<font></font>
    &lt;button type="button" onclick="loadXMLDoc()"&gt;Change Content&lt;/button&gt;<font></font>
<font></font>
    &lt;/body&gt;<font></font>
    &lt;/html&gt;<font></font>
</code></pre>

<p>PHP:</p>

<pre><code>&lt;?php<font></font>
<font></font>
$id = $_GET[id];<font></font>
print "$id";<font></font>
<font></font>
?&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>This may help:</p>

<pre><code>function doAjax(url, callback) {<font></font>
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");<font></font>
<font></font>
    xmlhttp.onreadystatechange = function() {<font></font>
        if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200) {<font></font>
            callback(xmlhttp.responseText);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    xmlhttp.open("GET", url, true);<font></font>
    xmlhttp.send();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code> var xhReq = new XMLHttpRequest();<font></font>
 xhReq.open("GET", "sumGet.phtml?figure1=5&amp;figure2=10", false);<font></font>
 xhReq.send(null);<font></font>
 var serverResponse = xhReq.responseText;<font></font>
 alert(serverResponse); // Shows "15"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin神奇宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下功能：</font></font></p>

<pre><code>function callAjax(url, callback){<font></font>
    var xmlhttp;<font></font>
    // compatible with IE7+, Firefox, Chrome, Opera, Safari<font></font>
    xmlhttp = new XMLHttpRequest();<font></font>
    xmlhttp.onreadystatechange = function(){<font></font>
        if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200){<font></font>
            callback(xmlhttp.responseText);<font></font>
        }<font></font>
    }<font></font>
    xmlhttp.open("GET", url, true);<font></font>
    xmlhttp.send();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过以下链接在线尝试类似的解决方案：</font></font></p>

<ul>
<li><a href="https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first</font></font></a></li>
<li><a href="https://www.w3schools.com/xml/tryit.asp?filename=tryajax_callback" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.w3schools.com/xml/tryit.asp?filename=tryajax_callback</font></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
