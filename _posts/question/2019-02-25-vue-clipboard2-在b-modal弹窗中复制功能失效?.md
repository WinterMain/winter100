---
layout: question
title:  vue-clipboard2 在b-modal弹窗中复制功能失效?
date:   2019-02-25T03:10:50.000Z
description: vue-clipboard2是vue中比较常用的复制组件，但是在bootstrap的弹窗组件b-modal中却无法正常使用，相同的在其他的动态内容中也是无法使用...
img: 
author: Winter
category: question
answer: 2
tags: 前端的一些坑
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre>
vue-clipboard2是vue中比较常用的复制组件，但是在bootstrap的弹窗组件b-modal中却无法正常使用，相同的在其他的动态内容中也是无法使用的。
</pre>

<p>&lt;b-modal&gt;</p>

<p>&nbsp; &lt;div&gt;</p>

<p>&nbsp; &nbsp; &lt;div&gt;</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp;&lt;b-tooltip content=&quot;已复制到剪贴板&quot; target=&quot;asa-copy-successed&quot; style=&quot;display:inline&quot; :show=&quot;copyed&quot; :triggers=&quot;&#39;false&#39;&quot;&gt;</p>

<p>已复制到剪贴板</p>

<p>&nbsp; &nbsp; &nbsp; &lt;/b-tooltip&gt;</p>

<p>&nbsp; &nbsp; &lt;/div&gt;</p>

<p>&nbsp; &nbsp;&nbsp;&lt;a href=&quot;javascript:void(0);&quot; id=&quot;asa-copy-successed&quot;</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;v-clipboard:copy=&quot;loginDomain&quot;</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;v-clipboard:error=&quot;handleError&quot;</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;v-clipboard:success=&quot;copySuccess&quot;&gt;复制&lt;/a&gt;</p>

<p>&nbsp; &lt;/div&gt;</p>

<p>&lt;/b-modal&gt;</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第113篇《vue-clipboard2 在b-modal弹窗中复制功能失效?》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2019.02.25</span>
          </div>
          <div class="discuss-comment"><p>参考clipboard.js：https://clipboardjs.com/#advanced-usage</p>
</div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2019.02.25</span>
          </div>
          <div class="discuss-comment"><p>对于该问题vue-clipboard2作者提供了对应的解决方案，引入了container元素，对于动态内容需要传入container。</p>

<p>所以需要在代码中加入如下</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1551064547552.png" style="max-width:100%" /></p>

<p>JS，增加doCopy方法</p>

<pre>
<code>
    doCopy() {
      this.$copyText(&#39;samyoc.com&#39;, this.$refs.loginDomainArea);
    },
</code></pre>

<p>&nbsp;</p>
</div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
