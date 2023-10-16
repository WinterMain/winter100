---
layout: question
title:  JavaScript中的“提交不是函数”错误
date:   2020-04-07T03:27:33.000Z
description: 谁能告诉我这段代码出了什么问题？我尝试使用JavaScript提交表单，但显示错误“ .submit不是函数”。请参阅以下代码的更多详细信息：<for...
img: 
author: 斯丁前端
category: question
answer: 12
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能告诉我这段代码出了什么问题？</font><font style="vertical-align: inherit;">我尝试使用JavaScript提交表单，但显示错误“ .submit不是函数”。</font><font style="vertical-align: inherit;">请参阅以下代码的更多详细信息：</font></font></p>

<pre><code>&lt;form action="product.php" method="get" name="frmProduct" id="frmProduct" enctype="multipart/form-data"&gt;<font></font>
<font></font>
&lt;input onclick="submitAction()" id="submit_value" type="button" name="submit_value" value=""&gt;<font></font>
<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    function submitAction()<font></font>
    {<font></font>
        document.frmProduct.submit();<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试过这个：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
    function submitAction()<font></font>
    {<font></font>
        document.forms["frmProduct"].submit();<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都显示相同的错误:(</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4075篇《JavaScript中的“提交不是函数”错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以试试 </font></font></p>

<pre><code>&lt;form action="product.php" method="get" name="frmProduct" id="frmProduct" enctype="multipart/form-data"&gt;<font></font>
<font></font>
&lt;input onclick="submitAction(this)" id="submit_value" type="button" name="submit_value" value=""&gt;<font></font>
<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;script type="text/javascript"&gt;<font></font>
function submitAction(element)<font></font>
{<font></font>
    element.form.submit();<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否有多个同名表格？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的解决方案-1. </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
确保您没有其他名称/ id为提交的元素。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2.尝试将函数调用为</font></font><code>onClick = "return submitAction();"</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
3。</font></font><code>document.getElementById("form-name").submit();</code>  </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案是设置按钮的“表单”属性</font></font></p>

<pre><code>&lt;form id="form_id_name"&gt;&lt;button name="btnSubmit" form="form_id_name" /&gt;&lt;/form&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是js：</font></font></p>

<pre><code>YOURFORMOBJ.getElementsByTagName("button")[0].setAttribute("form", "form_id_name");<font></font>
YOURFORMOBJ.submit();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用的是 </font></font></p>

<pre><code>var enviar = document.getElementById("enviar");<font></font>
enviar.type = "submit"; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅仅因为其他一切都没有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，解决方案非常简单...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原版的：</font></font></p>

<pre><code>    &lt;form action="product.php" method="get" name="frmProduct" id="frmProduct"<font></font>
enctype="multipart/form-data"&gt;<font></font>
    &lt;input onclick="submitAction()" id="submit_value" type="button" <font></font>
    name="submit_value" value=""&gt;<font></font>
&lt;/form&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    function submitAction()<font></font>
    {<font></font>
        document.frmProduct.submit();<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解：</font></font></p>

<pre><code>    &lt;form action="product.php" method="get" name="frmProduct" id="frmProduct" <font></font>
enctype="multipart/form-data"&gt;<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;!-- Place the button here --&gt;<font></font>
&lt;input onclick="submitAction()" id="submit_value" type="button" <font></font>
    name="submit_value" value=""&gt;<font></font>
<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    function submitAction()<font></font>
    {<font></font>
        document.frmProduct.submit();<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该使用以下代码：
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$(document).on("ready", function () {<font></font>
       <font></font>
        document.frmProduct.submit();<font></font>
    });</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给表单元素一个提交的名字将简单地遮盖提交属性。</font><font style="vertical-align: inherit;">确保没有名称提交的表单元素，并且您应该可以很好地访问提交函数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用母版页创建MVC应用程序时遇到相同的问题。</font><font style="vertical-align: inherit;">尝试如上所述查找带有“提交”作为名称的元素，但事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，它在我的页面上创建了多个标签，因此存在一些引用正确表单的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，我将让按钮处理要使用的表单对象：</font></font></p>

<pre><code>onclick="return SubmitForm(this.form)"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并与js：</font></font></p>

<pre><code>function SubmitForm(frm) {<font></font>
    frm.submit();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保没有其他同名表单，并且表单中没有name =“ submit”或id =“ submit”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;form action="product.php" method="post" name="frmProduct" id="frmProduct" enctype="multipart/form-data"&gt;<font></font>
<font></font>
&lt;input id="submit_value" type="button" name="submit_value" value=""&gt;<font></font>
<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;script type="text/javascript"&gt;<font></font>
<font></font>
document.getElementById("submit_value").onclick = submitAction;<font></font>
<font></font>
function submitAction()<font></font>
{<font></font>
    document.getElementById("frmProduct").submit();<font></font>
    return false;<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我不小心交换了ID的周围</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您没有机会进行更改，</font></font><code>name="submit"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以通过以下方式提交表格：</font></font></p>

<pre><code>function submitForm(form) {<font></font>
    var submitFormFunction = Object.getPrototypeOf(form).submit;<font></font>
    submitFormFunction.call(form);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提交不是功能</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示您已将自己的提交按钮或其他元素命名为</font></font><code>submit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">将按钮重命名为</font></font><code>btnSubmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您的呼叫将神奇地工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将按钮命名为Submit时，将覆盖</font></font><code>submit()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单上的功能。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
