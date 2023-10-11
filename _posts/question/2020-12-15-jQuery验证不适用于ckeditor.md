---
layout: question
title:  jQuery验证不适用于ckeditor
date:   2020-12-15T12:44:48.000Z
description: 我正在使用jQuery来验证表单..但是当我使用CKeditor并尝试使用jQuery来验证它时，它不起作用。这是HTML代码段  <form c...
img: 
author: Gil伽罗小宇宙
category: question
answer: 3
tags: jQuery的 Ckeditor
topic: Ckeditor
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用jQuery来验证表单..但是当我使用CKeditor并尝试使用jQuery来验证它时，它不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是HTML代码段</font></font></p>

<pre class="default s-code-block hljs scala"><code>  &lt;form <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"form-horizontal"</span> role=<span class="hljs-string">"form"</span> name=<span class="hljs-string">"f3"</span> id=<span class="hljs-string">"f3"</span> &gt;<font></font>
   &lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"col-xs-8"</span>&gt;<font></font>
       &lt;textarea <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"ckeditor"</span> name=<span class="hljs-string">"cktext"</span> id=<span class="hljs-string">"cktext"</span>&gt;&lt;/textarea&gt;<font></font>
   &lt;/div&gt;<font></font>
    &lt;button <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"submit"</span> <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"btn btn-default btn-success"</span>&gt;<span class="hljs-type">Submit</span>&lt;/button&gt;<font></font>
  &lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是表单验证代码</font></font></p>

<pre class="default s-code-block hljs xml"><code>    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
           $(<span class="hljs-built_in">document</span>).ready(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
           $(<span class="hljs-string">"#f3"</span>).validate(
            {
              <span class="hljs-attr">debug</span>: <span class="hljs-literal">false</span>,
                <span class="hljs-attr">rules</span>: { 
                    <span class="hljs-attr">cktext</span>: {                         
                     <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
                     <span class="hljs-attr">minlength</span>: <span class="hljs-number">10</span>
                    }
                 }
            });
        });
      </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考：适用于其他表单字段的jQuery验证需要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ckeditor textarea</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何建议..摆脱这个问题..</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4276篇《jQuery验证不适用于ckeditor》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">王者一打九</span>
            <span class="discuss-time">2020.12.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要在表单中放置一个提交按钮：</font></font></p>

<pre class="default s-code-block hljs lua"><code>&lt;<span class="hljs-built_in">input</span> <span class="hljs-built_in">type</span>=<span class="hljs-string">"submit"</span>/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该表单仅在提交时验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此提琴上检查示例：</font><a href="http://jsfiddle.net/5RrGa/800/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/5RrGa/800/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/5RrGa/800/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2020.12.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以通过以下代码使用jquery验证来验证ckeditor。</font></font></p>

<pre class="default s-code-block hljs javascript"><code>&lt;input type=<span class="hljs-string">"text"</span> name=<span class="hljs-string">"firstname"</span> id=<span class="hljs-string">"firstname"</span>/&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"editor1"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"editor1"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">cols</span>=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span></span><font></font>
<font></font>
$(<span class="hljs-string">"#myForm"</span>).validate({
   <span class="hljs-attr">ignore</span>: [],<font></font>
<font></font>
     <span class="hljs-attr">rules</span>:{
            <span class="hljs-attr">firstname</span>:{
            <span class="hljs-attr">required</span>:<span class="hljs-literal">true</span><font></font>
        },<font></font>
    <span class="hljs-attr">editor1</span>: {
       <span class="hljs-attr">required</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">textarea</span>) </span>{<font></font>
       CKEDITOR.instances[textarea.id].updateElement();<font></font>
       <span class="hljs-keyword">var</span> editorcontent = textarea.value.replace(<span class="hljs-regexp">/&lt;[^&gt;]*&gt;/gi</span>, <span class="hljs-string">''</span>);
       <span class="hljs-keyword">return</span> editorcontent.length === <span class="hljs-number">0</span>;<font></font>
     }<font></font>
               }<font></font>
     },<span class="hljs-attr">messages</span>:{
            <span class="hljs-attr">firstname</span>:{
            <span class="hljs-attr">required</span>:<span class="hljs-string">"Enter first name"</span><font></font>
        }<font></font>
<font></font>
     }<font></font>
   });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关验证的更多信息，请单击此处</font></font><a href="http://www.dotnetqueries.com/Article/129/validate-ckeditor-using-jquery-form-validation" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.dotnetqueries.com/Article/129/validate-ckeditor-using-jquery-form-validation</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌</span>
            <span class="discuss-time">2020.12.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">终于我找到了问题的答案...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更改了ignore属性的值，该属性默认情况下包含：hidden值。</font><font style="vertical-align: inherit;">因为CKEDITOR隐藏了textarea，所以jQuery验证不会验证元素：</font></font></p>

<pre class="default s-code-block hljs css"><code>   <span class="hljs-selector-tag">ignore</span>: <span class="hljs-selector-attr">[]</span>  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是我更改了验证脚本，如下所示。</font></font></p>

<pre class="default s-code-block hljs javascript"><code>     $(<span class="hljs-built_in">document</span>).ready(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<font></font>
<font></font>
            $(<span class="hljs-string">"#f3"</span>).validate(<font></font>
            {<font></font>
                <span class="hljs-attr">ignore</span>: [],
              <span class="hljs-attr">debug</span>: <span class="hljs-literal">false</span>,
                <span class="hljs-attr">rules</span>: { <font></font>
<font></font>
                    <span class="hljs-attr">cktext</span>:{
                         <span class="hljs-attr">required</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) 
                        </span>{<font></font>
                         CKEDITOR.instances.cktext.updateElement();<font></font>
                        },<font></font>
<font></font>
                         <span class="hljs-attr">minlength</span>:<span class="hljs-number">10</span><font></font>
                    }<font></font>
                },<font></font>
                <span class="hljs-attr">messages</span>:<font></font>
                    {<font></font>
<font></font>
                    <span class="hljs-attr">cktext</span>:{
                        <span class="hljs-attr">required</span>:<span class="hljs-string">"Please enter Text"</span>,
                        <span class="hljs-attr">minlength</span>:<span class="hljs-string">"Please enter 10 characters"</span><font></font>
<font></font>
<font></font>
                    }<font></font>
                }<font></font>
            });<font></font>
        });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML代码段现为</font></font></p>

<pre class="default s-code-block hljs scala"><code>   &lt;form <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"form-horizontal"</span> role=<span class="hljs-string">"form"</span> name=<span class="hljs-string">"f3"</span> id=<span class="hljs-string">"f3"</span> &gt;<font></font>
     &lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"col-xs-8"</span>&gt;<font></font>
        &lt;textarea <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"ckeditor"</span> name=<span class="hljs-string">"cktext"</span> id=<span class="hljs-string">"cktext"</span>&gt;&lt;/textarea&gt;<font></font>
    &lt;/div&gt;<font></font>
     &lt;button <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"submit"</span> <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"btn btn-default btn-success"</span>&gt;<span class="hljs-type">Submit</span>&lt;/button&gt;<font></font>
   &lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在</font><a href="https://stackoverflow.com/questions/20763216/ckeditor-data-not-being-validated-by-jquery-validation"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">找到这个答案</font></font><a href="https://stackoverflow.com/questions/20763216/ckeditor-data-not-being-validated-by-jquery-validation"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢大家...</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
