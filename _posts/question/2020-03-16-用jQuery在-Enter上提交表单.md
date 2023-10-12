---
layout: question
title:  用jQuery在“ Enter”上提交表单？
date:   2020-03-16T03:58:55.000Z
description: 我有一个沼泽标准的登录表单-使用HTML / jQuery的AIR项目上的电子邮件文本字段，密码字段和提交按钮。当我在表单上按Enter键时，整个表单的内...
img: 
author: 猪猪飞云宝儿
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个沼泽标准的登录表单-使用HTML / jQuery的AIR项目上的电子邮件文本字段，密码字段和提交按钮。</font><font style="vertical-align: inherit;">当我在表单上按Enter键时，整个表单的内容消失了，但是表单没有提交。</font><font style="vertical-align: inherit;">有谁知道这是Webkit的问题（Adobe AIR使用Webkit的HTML）还是我捆绑了东西？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了： </font></font></p>

<pre><code>$('.input').keypress(function (e) {<font></font>
  if (e.which == 13) {<font></font>
    $('form#login').submit();<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这既没有停止清算行为，也没有提交表格。</font><font style="vertical-align: inherit;">没有与表单相关的操作-可能是问题吗？</font><font style="vertical-align: inherit;">我可以在动作中添加JavaScript函数吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1702篇《用jQuery在“ Enter”上提交表单？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>var form = document.formname;<font></font>
<font></font>
if($(form).length &gt; 0)<font></font>
{<font></font>
    $(form).keypress(function (e){<font></font>
        code = e.keyCode ? e.keyCode : e.which;<font></font>
        if(code.toString() == 13) <font></font>
        {<font></font>
             formsubmit();<font></font>
        }<font></font>
    })<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小宇宙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML代码中：</font></font></p>

<pre><code>&lt;form action="POST" onsubmit="ajax_submit();return false;"&gt;<font></font>
    &lt;b&gt;First Name:&lt;/b&gt; &lt;input type="text" name="firstname" id="firstname"&gt;<font></font>
    &lt;br&gt;<font></font>
    &lt;b&gt;Last Name:&lt;/b&gt; &lt;input type="text" name="lastname" id="lastname"&gt;<font></font>
    &lt;br&gt;<font></font>
    &lt;input type="submit" name="send" onclick="ajax_submit();"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Js代码中：</font></font></p>

<pre><code>function ajax_submit()<font></font>
{<font></font>
    $.ajax({<font></font>
        url: "submit.php",<font></font>
        type: "POST",<font></font>
        data: {<font></font>
            firstname: $("#firstname").val(),<font></font>
            lastname: $("#lastname").val()<font></font>
        },<font></font>
        dataType: "JSON",<font></font>
        success: function (jsonStr) {<font></font>
            // another codes when result is success<font></font>
        }<font></font>
    });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐神奇</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在用 </font></font></p>

<pre><code>$("form").submit(function(event){<font></font>
...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我在提交按钮上添加了一个事件处理程序，这对我产生了错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加即可轻松实现。</font><font style="vertical-align: inherit;">您可以简单地创建一个表单，然后将“提交”按钮隐藏起来：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;form action="submit.php" method="post"&gt;<font></font>
Name : &lt;input type="text" name="test"&gt;<font></font>
&lt;input type="submit" style="display: none;"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>  $("#txtMessage").on( "keypress", function(event) {<font></font>
    if (event.which == 13 &amp;&amp; !event.shiftKey) {<font></font>
        event.preventDefault();<font></font>
        $("#frSendMessage").submit();<font></font>
    }<font></font>
    });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅小胖</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，为了保持可访问性，您应该使用以下代码来确定您的密钥代码：</font></font></p>

<pre><code>c = e.which ? e.which : e.keyCode;<font></font>
<font></font>
if (c == 13) ...<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德泡芙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以防止继续击键。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否有任何原因需要挂接并测试Enter键？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能简单地添加一个      </font></font></p>

<pre><code>&lt;input type="submit" /&gt; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您的表单，并在按下Enter键时自然提交了吗？</font><font style="vertical-align: inherit;">如果需要，您甚至可以钩住表单的</font></font><code>onsubmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动作并从那里调用验证函数...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您甚至可以将</font></font><code>onsubmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作测试来查看您的表单是否正在提交，但是如果您致电，它将无法正常工作</font></font><code>form.submit()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Pro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如Jason Cohen所提到的，除返回假外。</font><font style="vertical-align: inherit;">您可能还必须防止Default</font></font></p>

<pre><code>e.preventDefault();
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
