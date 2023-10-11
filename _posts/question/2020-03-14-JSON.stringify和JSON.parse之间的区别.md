---
layout: question
title:  JSON.stringify和JSON.parse之间的区别
date:   2020-03-14T09:56:07.000Z
description: 我对于何时使用这两种解析方法感到困惑。在回显我的json_encoded数据并通过ajax将其检索回去之后，我常常会困惑何时应该使用JSON.stri...
img: 
author: 伽罗Tony
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对于何时使用这两种解析方法感到困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在回显我的json_encoded数据并通过ajax将其检索回去之后，我常常会困惑何时应该使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON.stringify</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON.parse</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到</font></font><code>[object,object]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的console.log</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串化时解析和JavaScript对象时。</font></font></p>

<pre><code>$.ajax({<font></font>
url: "demo_test.txt",<font></font>
success: function(data) {<font></font>
         console.log(JSON.stringify(data))<font></font>
                     /* OR */<font></font>
         console.log(JSON.parse(data))<font></font>
        //this is what I am unsure about?<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1584篇《JSON.stringify和JSON.parse之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅古一小卤蛋</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><code>JSON.parse()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于将String转换为Object。</font></font><br>
<code>JSON.stringify()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于将对象转换为字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你也可以参考这个...</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
<font></font>
function ajax_get_json(){<font></font>
<font></font>
    var hr = new XMLHttpRequest();<font></font>
    hr.open("GET", "JSON/mylist.json", true);<font></font>
    hr.setRequestHeader("Content-type", "application/json",true);<font></font>
    hr.onreadystatechange = function() {<font></font>
        if(hr.readyState == 4 &amp;&amp; hr.status == 200) {<font></font>
           /*  var return_data = hr.responseText; */<font></font>
<font></font>
           var data=JSON.parse(hr.responseText);<font></font>
           var status=document.getElementById("status");<font></font>
           status.innerHTML = "";<font></font>
           /* status.innerHTML=data.u1.country;  */<font></font>
           for(var obj in data)<font></font>
               {<font></font>
               status.innerHTML+=data[obj].uname+" is in "+data[obj].country+"&lt;br/&gt;";<font></font>
               }<font></font>
<font></font>
        }<font></font>
    }<font></font>
    hr.send(null);<font></font>
    status.innerHTML = "requesting...";<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们彼此对立。
</font></font><code>JSON.Stringify()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将JSON转换为字符串，然后</font></font><code>JSON.Parse()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将字符串解析为JSON。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro番长</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><code>JSON.stringify(obj [, replacer [, space]])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -接受任何可序列化的对象，并以字符串形式返回JSON表示形式。</font></font></p>

<p><code>JSON.parse(string)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -采取格式正确的JSON字符串并返回相应的JavaScript对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天十三蛋蛋</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道是否有人提到它，但是JSON.parse（JSON.stringify（myObject））的用途之一是创建原始对象的克隆。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您想要在不影响原始对象的情况下处理一些数据时，这非常方便。</font><font style="vertical-align: inherit;">对于不是很复杂的对象，可能不是最干净/最快的方法，但肯定是最简单的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Tom</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们是彼此完全相反的。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse" rel="nofollow"><strong><code>JSON.parse()</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON形式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收的数据</font><font style="vertical-align: inherit;">; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反序列化</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON字符串</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变成一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript对象</font></font></strong></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="nofollow"><strong><code>JSON.stringify()</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面用于</font><font style="vertical-align: inherit;">从</font><strong><font style="vertical-align: inherit;">对象</font></strong><font style="vertical-align: inherit;">或</font><strong><font style="vertical-align: inherit;">数组中</font></strong><font style="vertical-align: inherit;">创建</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON字符串</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ; </font><em><font style="vertical-align: inherit;">它</font></em><em><strong><font style="vertical-align: inherit;">序列化</font></strong></em><em><font style="vertical-align: inherit;">一个</font></em><em><strong><font style="vertical-align: inherit;">JavaScript对象</font></strong></em><em><font style="vertical-align: inherit;">成</font></em><em><strong><font style="vertical-align: inherit;">JSON字符串</font></strong></em><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong></em><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Pro</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><code>JSON.stringify()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将对象转换为字符串。</font></font></p>

<p><code>JSON.parse()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将JSON字符串转换为对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Tom小宇宙</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们彼此相反。</font></font><code>JSON.stringify()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将JS对象序列化为JSON字符串，而</font></font><code>JSON.parse()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将JSON字符串反序列化为JS对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将JavaScript对象转换为JSON文本并将该JSON文本存储在字符串中，例如：</font></font></p>

<pre><code>var my_object = { key_1: "some text", key_2: true, key_3: 5 };<font></font>
<font></font>
var object_as_string = JSON.stringify(my_object);  <font></font>
// "{"key_1":"some text","key_2":true,"key_3":5}"  <font></font>
<font></font>
typeof(object_as_string);  <font></font>
// "string"  <font></font>
</code></pre>

<p><code>JSON.parse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将JSON文本字符串转换为JavaScript对象，例如：</font></font></p>

<pre><code>var object_as_string_as_object = JSON.parse(object_as_string);  <font></font>
// {key_1: "some text", key_2: true, key_3: 5} <font></font>
<font></font>
typeof(object_as_string_as_object);  <font></font>
// "object" <font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
