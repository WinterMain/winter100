---
layout: question
title:  在Vue JS中处理Bootstrap模式隐藏事件
date:   2020-04-07T03:16:55.000Z
description: Vue（2）中是否有适当的方式来处理Bootstrap（3）模态隐藏事件？我发现这是一种JQuery方式，但是我不知道如何在Vue中捕获此事件：$...
img: 
author: 米亚
category: question
answer: 3
tags: twitter-bootstrap-3 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue（2）中是否有适当的方式来处理Bootstrap（3）模态隐藏事件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这是一种JQuery方式，但是我不知道如何在Vue中捕获此事件：</font></font></p>

<pre><code>$('#myModal').on('hidden.bs.modal', function () {<font></font>
  // do something…<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加类似的东西</font></font><code>v-on:hide.bs.modal="alert('hide')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4059篇《在Vue JS中处理Bootstrap模式隐藏事件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="https://bootstrap-vue.js.org/docs/components/modal#overview" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://bootstrap-vue.js.org/docs/components/modal#overview</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
在这里您可以找到事件“隐藏”或“隐藏”，因此可以绑定此事件：</font></font></p>

<pre><code>&lt;b-modal ref="someModal" @hide="doSometing"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种选择是将其绑定到变量： </font></font></p>

<pre><code>data: function(){<font></font>
  return {<font></font>
       showModal: false<font></font>
        //starts as false.  Set as true when modal opens. Set as false on close, which triggers the watch function.<font></font>
},<font></font>
watch: {<font></font>
  showModal: function(){<font></font>
    if(this.showModal == false){<font></font>
     // do something<font></font>
  },<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></p>

<pre><code>&lt;button id="show-modal" @click="showModal = true"&gt;Show Modal&lt;/button&gt;<font></font>
<font></font>
 //later if using a component<font></font>
&lt;modal v-if="showModal" @close="showModal = false"&gt;<font></font>
<font></font>
 // or alternatively in the bootstrap structure<font></font>
&lt;div class="modal-footer"&gt;<font></font>
     &lt;button type="button" class="btn btn-default" data-dismiss="modal" @click="showModal = false"&gt;Close&lt;/button&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap使用JQuery触发自定义事件，</font></font><code>hidden.bs.modal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此它不容易被Vue捕获（我相信它会在后台使用本机事件）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于必须在页面上使用JQuery才能使用Bootstrap的本机模式，因此只需使用JQuery即可捕获它。</font><font style="vertical-align: inherit;">假设您</font></font><code>ref="vuemodal"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap模式中</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">，您可以执行以下操作。</font></font></p>

<pre><code>new Vue({<font></font>
  el:"#app",<font></font>
  data:{<font></font>
  },<font></font>
  methods:{<font></font>
    doSomethingOnHidden(){<font></font>
      //do something<font></font>
    }<font></font>
  },<font></font>
  mounted(){<font></font>
    $(this.$refs.vuemodal).on("hidden.bs.modal", this.doSomethingOnHidden)<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><a href="http://codepen.io/Kradek/pen/VpvzGO?editors=1010" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
