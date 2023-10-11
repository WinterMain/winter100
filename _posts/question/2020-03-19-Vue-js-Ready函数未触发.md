---
layout: question
title:  Vue js Ready函数未触发
date:   2020-03-19T03:51:58.000Z
description: 我有这个Vue函数，其中基本上有两种方法。第一个postStatus用于在用户单击“保存”按钮后立即保存帖子，而另一个getPosts用于从数据库中检索该...
img: 
author: 斯丁Davaid
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这个Vue函数，其中基本上有两种方法。</font><font style="vertical-align: inherit;">第一个</font></font><code>postStatus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于在用户单击“保存”按钮后立即保存帖子，而另一个</font></font><code>getPosts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于从数据库中检索该用户的所有先前帖子。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是vue.js，其中有一个对控制器的ajax调用（在Laravel 5.3中）</font></font></p>

<pre><code>$(document).ready(function () {<font></font>
<font></font>
    var csrf_token = $('meta[name="csrf-token"]').attr('content');<font></font>
    /*Event handling within vue*/<font></font>
    //when we actually submit the form, we want to catch the action<font></font>
    new Vue({<font></font>
        el      : '#timeline',<font></font>
        data    :   {<font></font>
            post    : '',<font></font>
            posts   : [],<font></font>
            token   : csrf_token,<font></font>
            limit   : 20,<font></font>
        },<font></font>
        methods : {<font></font>
            postStatus : function (e) {<font></font>
                e.preventDefault();<font></font>
                //console.log('Posted: '+this.post+ '. Token: '+this.token);<font></font>
                var request = $.ajax({<font></font>
                    url         :   '/posts',<font></font>
                    method      :   "POST",<font></font>
                    dataType    :   'json',<font></font>
                    data        :   {<font></font>
                        'body'  :   this.post,<font></font>
                        '_token':   this.token,<font></font>
                    }<font></font>
                }).done(function (data) {<font></font>
                    //console.log('Data saved successfully. Response: '+data);<font></font>
                    this.post = '';<font></font>
                    this.posts.unshift(data); //Push it to the top of the array and pass the data that we get back<font></font>
                }.bind(this));/*http://stackoverflow.com/a/26479602/1883256  and  http://stackoverflow.com/a/39945594/1883256 */<font></font>
<font></font>
                /*request.done(function( msg ) {<font></font>
                    console.log('The tweet has been saved: '+msg+'. Outside ...');<font></font>
                    //$( "#log" ).html( msg );<font></font>
                });*/<font></font>
<font></font>
                request.fail(function( jqXHR, textStatus ) {<font></font>
                    console.log( "Request failed: " + textStatus );<font></font>
                });<font></font>
            },<font></font>
            getPosts : function () {<font></font>
                //Ajax request to retrieve all posts<font></font>
                $.ajax({<font></font>
                    url         :   '/posts',<font></font>
                    method      :   "GET",<font></font>
                    dataType    :   'json',<font></font>
                    data        :   {<font></font>
                        limit   :   this.limit,<font></font>
                    }<font></font>
<font></font>
                }).done(function (data) {<font></font>
                    this.posts = data.posts;<font></font>
                }.bind(this));<font></font>
<font></font>
            }<font></font>
        },<font></font>
        //the following will be run when everything is booted up<font></font>
        ready : function () {<font></font>
            console.log('Attempting to get the previous posts ...');<font></font>
            this.getPosts();<font></font>
        }<font></font>
    });<font></font>
<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，第一种方法</font></font><code>postStatus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行良好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个函数应该在ready函数处被调用或触发，但是什么也没发生。</font><font style="vertical-align: inherit;">我什至没有收到console.log消息</font></font><code>Attempting to get the previous posts ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">看来它从未被解雇。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么问题 </font><font style="vertical-align: inherit;">我如何解决它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我正在使用jQuery 3.1.1，Vue.js 2.0.1</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2336篇《Vue js Ready函数未触发》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ㄏ囧囧ㄟ</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到您正在使用Vue 2.0.1。</font></font><code>ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue 2.0及更高版本中</font><font style="vertical-align: inherit;">没有任何</font><font style="vertical-align: inherit;">方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是所有Vue 2.0更改列表的链接：</font><a href="https://github.com/vuejs/vue/issues/2873" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/vuejs/vue/issues/2873" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/vuejs/vue/issues/2873</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如上一页所述，您可以使用</font></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是问题，只是一个注释：您正在广泛混合使用jQuery和Vue。</font><font style="vertical-align: inherit;">如果只需要jQuery用于与HTTP相关的功能，则可以改用-https </font></font><code>vue-resource</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">: </font></font><a href="https://github.com/vuejs/vue-resource" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/vuejs/vue-resource</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：更新 </font></font><code>vue-resource</code></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@EmileBergeron在评论中指出的那样，vue-resource早在2016年11月就已经退休（在我的最后一段提供这个答案后的几周之内</font></font><code>vue-resource</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">这是有关同一内容的更多信息：</font></font></p>

<p><a href="https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三古一</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Mani建议使用</font></font><code>mounted(){}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未隐藏的组件。</font><font style="vertical-align: inherit;">如果您希望在组件可见时运行该功能，而使用诸如</font></font><code>v-if=""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或的</font><font style="vertical-align: inherit;">条件将其隐藏</font><font style="vertical-align: inherit;">，</font></font><code>v-show=""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则使用</font></font><code>updated(){}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
