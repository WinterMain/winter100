---
layout: question
title:  带有PHP的jQuery Ajax POST示例
date:   2020-03-11T07:16:13.000Z
description: 我正在尝试将数据从表单发送到数据库。这是我使用的表格：<form name="foo" action="form.php" method="POST"...
img: 
author: 逆天AGreen
category: question
answer: 2
tags: php PHP
topic: PHP
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将数据从表单发送到数据库。</font><font style="vertical-align: inherit;">这是我使用的表格：</font></font></p>

<pre><code>&lt;form name="foo" action="form.php" method="POST" id="foo"&gt;<font></font>
    &lt;label for="bar"&gt;A bar&lt;/label&gt;<font></font>
    &lt;input id="bar" name="bar" type="text" value="" /&gt;<font></font>
    &lt;input type="submit" value="Send" /&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">典型的方法是提交表单，但这会导致浏览器重定向。</font><font style="vertical-align: inherit;">使用jQuery和</font></font><a href="http://en.wikipedia.org/wiki/Ajax_%28programming%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ajax</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，是否可以捕获表单的所有数据并将其提交给PHP脚本（例如</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">form.php</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第725篇《带有PHP的jQuery Ajax POST示例》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AMandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>This is <a href="https://www.sanwebe.com/2016/07/ajax-form-submit-examples-using-jquery" rel="nofollow noreferrer">a very good article</a> that contains everything that you need to know about jQuery form submission.</p>

<p>Article summary:</p>

<p><strong>Simple HTML Form Submit</strong></p>

<p>HTML:</p>

<pre><code>&lt;form action="path/to/server/script" method="post" id="my_form"&gt;<font></font>
    &lt;label&gt;Name&lt;/label&gt;<font></font>
    &lt;input type="text" name="name" /&gt;<font></font>
    &lt;label&gt;Email&lt;/label&gt;<font></font>
    &lt;input type="email" name="email" /&gt;<font></font>
    &lt;label&gt;Website&lt;/label&gt;<font></font>
    &lt;input type="url" name="website" /&gt;<font></font>
    &lt;input type="submit" name="submit" value="Submit Form" /&gt;<font></font>
    &lt;div id="server-results"&gt;&lt;!-- For server results --&gt;&lt;/div&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p>JavaScript:</p>

<pre><code>$("#my_form").submit(function(event){<font></font>
    event.preventDefault(); // Prevent default action<font></font>
    var post_url = $(this).attr("action"); // Get the form action URL<font></font>
    var request_method = $(this).attr("method"); // Get form GET/POST method<font></font>
    var form_data = $(this).serialize(); // Encode form elements for submission<font></font>
<font></font>
    $.ajax({<font></font>
        url : post_url,<font></font>
        type: request_method,<font></font>
        data : form_data<font></font>
    }).done(function(response){ //<font></font>
        $("#server-results").html(response);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><strong>HTML Multipart/form-data Form Submit</strong></p>

<p>To upload files to the server, we can use FormData interface available to XMLHttpRequest2, which constructs a FormData object and can be sent to server easily using the jQuery Ajax.</p>

<p>HTML:</p>

<pre><code>&lt;form action="path/to/server/script" method="post" id="my_form"&gt;<font></font>
    &lt;label&gt;Name&lt;/label&gt;<font></font>
    &lt;input type="text" name="name" /&gt;<font></font>
    &lt;label&gt;Email&lt;/label&gt;<font></font>
    &lt;input type="email" name="email" /&gt;<font></font>
    &lt;label&gt;Website&lt;/label&gt;<font></font>
    &lt;input type="url" name="website" /&gt;<font></font>
    &lt;input type="file" name="my_file[]" /&gt; &lt;!-- File Field Added --&gt;<font></font>
    &lt;input type="submit" name="submit" value="Submit Form" /&gt;<font></font>
    &lt;div id="server-results"&gt;&lt;!-- For server results --&gt;&lt;/div&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p>JavaScript:</p>

<pre><code>$("#my_form").submit(function(event){<font></font>
    event.preventDefault(); // Prevent default action<font></font>
    var post_url = $(this).attr("action"); // Get form action URL<font></font>
    var request_method = $(this).attr("method"); // Get form GET/POST method<font></font>
    var form_data = new FormData(this); // Creates new FormData object<font></font>
    $.ajax({<font></font>
        url : post_url,<font></font>
        type: request_method,<font></font>
        data : form_data,<font></font>
        contentType: false,<font></font>
        cache: false,<font></font>
        processData: false<font></font>
    }).done(function(response){ //<font></font>
        $("#server-results").html(response);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p>I hope this helps.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    &lt;form name="foo" action="form.php" method="POST" id="foo"&gt;<font></font>
        &lt;label for="bar"&gt;A bar&lt;/label&gt;<font></font>
        &lt;input id="bar" class="inputs" name="bar" type="text" value="" /&gt;<font></font>
        &lt;input type="submit" value="Send" onclick="submitform(); return false;" /&gt;<font></font>
    &lt;/form&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>   function submitform()<font></font>
   {<font></font>
       var inputs = document.getElementsByClassName("inputs");<font></font>
       var formdata = new FormData();<font></font>
       for(var i=0; i&lt;inputs.length; i++)<font></font>
       {<font></font>
           formdata.append(inputs[i].name, inputs[i].value);<font></font>
       }<font></font>
       var xmlhttp;<font></font>
       if(window.XMLHttpRequest)<font></font>
       {<font></font>
           xmlhttp = new XMLHttpRequest;<font></font>
       }<font></font>
       else<font></font>
       {<font></font>
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");<font></font>
       }<font></font>
       xmlhttp.onreadystatechange = function()<font></font>
       {<font></font>
          if(xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200)<font></font>
          {<font></font>
<font></font>
          }<font></font>
       }<font></font>
       xmlhttp.open("POST", "insert.php");<font></font>
       xmlhttp.send(formdata);<font></font>
   }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
