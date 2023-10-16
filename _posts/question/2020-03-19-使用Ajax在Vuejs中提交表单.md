---
layout: question
title:  使用Ajax在Vue.js中提交表单
date:   2020-03-19T02:13:43.000Z
description: 我真的对如何使用Vue.js和vue-resource提交一个提出ajax请求的表单，然后使用响应来填充div的工作方式感到困惑。我使用js / jQ...
img: 
author: 猿米亚
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我真的对如何使用Vue.js和vue-resource提交一个提出ajax请求的表单，然后使用响应来填充div的工作方式感到困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用js / jQuery从一个项目到另一个项目都这样做，如下所示：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在刀片中查看</font></font></strong></p>

<pre><code>{!! Form::open(['route' =&gt; 'formRoute', 'id' =&gt; 'searchForm', 'class' =&gt; 'form-inline']) !!}<font></font>
    &lt;div class="form-group"&gt;<font></font>
        &lt;input type="text" name="id" class="form-control" placeholder="id" required="required"&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;button type="submit" class="btn btn-default"&gt;Search&lt;/button&gt;<font></font>
{!! Form::close() !!}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">js / jquery</font></font></strong></p>

<pre><code>var $searchForm = $('#searchForm');<font></font>
var $searchResult = $('#searchResult');<font></font>
<font></font>
$searchForm.submit(function(e) {<font></font>
    e.preventDefault() ;<font></font>
<font></font>
    $.get(<font></font>
        $searchForm.attr('action'),<font></font>
        $searchForm.serialize(),<font></font>
        function(data) {<font></font>
            $searchResult.html(data['status']);<font></font>
        }<font></font>
    );<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我在Vue.js中已经完成/尝试过的工作：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在刀片中查看</font></font></strong></p>

<pre><code>{!! Form::open(['route' =&gt; 'formRoute', 'id' =&gt; 'searchForm', 'class' =&gt; 'form-inline']) !!}<font></font>
    &lt;div class="form-group"&gt;<font></font>
        &lt;input type="text" name="id" class="form-control" placeholder="id" required="required"&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;button type="submit" class="btn btn-default" v-on="click: search"&gt;Search&lt;/button&gt;<font></font>
{!! Form::close() !!}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue / js</font></font></strong></p>

<pre><code>    Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');<font></font>
<font></font>
    new Vue({<font></font>
        el: '#someId',<font></font>
<font></font>
        data: {<font></font>
<font></font>
        },<font></font>
<font></font>
        methods: {<font></font>
            search: function(e) {<font></font>
                e.preventDefault();<font></font>
<font></font>
                var req = this.$http.get(<font></font>
                    // ???, // url<font></font>
                    // ???, // data<font></font>
                    function (data, status, request) {<font></font>
                        console.log(data);<font></font>
                    }<font></font>
                );<font></font>
            }<font></font>
        }<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道在处理响应时是否可以使用组件将响应数据输出到div？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是总结一下一切：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用vue js和vue-resource而不是通常的jQuery方式提交表单？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ajax的响应，如何最好使用组件将数据输出到div中？</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此方面的任何帮助将不胜感激，谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2261篇《使用Ajax在Vue.js中提交表单》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Near</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了这种方法，并像魅力一样工作：</font></font></p>

<pre><code>event.preventDefault();<font></font>
<font></font>
let formData = new FormData(event.target);<font></font>
<font></font>
formData.forEach((key, value) =&gt; console.log(value, key));<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
