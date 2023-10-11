---
layout: question
title:  如何将Laravel CSRF令牌值传递给vue
date:   2020-03-12T07:58:14.000Z
description: 我有这种形式，用户只应在文本区域内键入文本：            <form action="#" v-on submit="postStatus"...
img: 
author: 斯丁Davaid
category: question
answer: 0
tags: laravel Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这种形式，用户只应在文本区域内键入文本：</font></font></p>

<pre><code>            &lt;form action="#" v-on:submit="postStatus"&gt;{{-- Name of the method in Vue.js --}}<font></font>
                &lt;div class="form-group"&gt;<font></font>
                    &lt;textarea class="form-control" rows="5" maxlength="140" autofocus placeholder="What are you upto?" required v-model="post"&gt;&lt;/textarea&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;input type="submit" value="Post" class="form-control btn btn-info"&gt;<font></font>
<font></font>
                {{ csrf_field() }}<font></font>
<font></font>
            &lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我有以下脚本代码，在其中我将vue.js与ajax一起使用，以便将该文本传递到控制器中，并最终将其保存到数据库中：</font></font></p>

<pre><code>//when we actually submit the form, we want to catch the action<font></font>
    new Vue({<font></font>
        el      : '#timeline',<font></font>
        data    :   {<font></font>
            post    : '',<font></font>
        },<font></font>
        http    :   {<font></font>
            headers: {<font></font>
                'X-CSRF-Token': $('meta[name=_token]').attr('content')<font></font>
            }<font></font>
        },<font></font>
        methods : {<font></font>
            postStatus : function (e) {<font></font>
                e.preventDefault();<font></font>
                console.log('Posted: '+this.post+ '. Token: '+this.token);<font></font>
                $.ajax({<font></font>
                    url         :   '/posts',<font></font>
                    type        :   'post',<font></font>
                    dataType    :   'json',<font></font>
                    data        :   {<font></font>
                        'body'  :   this.post,<font></font>
                    }<font></font>
                });<font></font>
            }<font></font>
        },<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，到目前为止，这还行不通，因为存在此令牌不匹配异常。</font><font style="vertical-align: inherit;">我不知道如何使它工作。</font><font style="vertical-align: inherit;">如何将此令牌值传递给控制器​​。</font><font style="vertical-align: inherit;">我尝试了以下方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）在表单内，我向令牌添加了vue名称：</font></font></p>

<pre><code>&lt;input type="hidden" name="_token" value="YzXAnwBñC7qPK9kg7MGGIUzznEOCi2dTnG9h9çpB" v-model="token"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）我试图将此令牌值传递给vue： </font></font></p>

<pre><code>//when we actually submit the form, we want to catch the action<font></font>
    new Vue({<font></font>
        el      : '#timeline',<font></font>
        data    :   {<font></font>
            post    : '',<font></font>
            token   : '',<font></font>
        },<font></font>
        methods : {<font></font>
            postStatus : function (e) {<font></font>
                e.preventDefault();<font></font>
                console.log('Posted: '+this.post+ '. Token: '+this.token);<font></font>
                $.ajax({<font></font>
                    url         :   '/posts',<font></font>
                    type        :   'post',<font></font>
                    dataType    :   'json',<font></font>
                    data        :   {<font></font>
                        'body'  :   this.post,<font></font>
                        '_token':   this.token,<font></font>
                    }<font></font>
                });<font></font>
            }<font></font>
        },<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...但是在控制台中，vue甚至没有捕获它:(</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这导致我出现以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VerifyCsrfToken.php第68行中的TokenMismatchException：</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何解决它？</font><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1104篇《如何将Laravel CSRF令牌值传递给vue》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
