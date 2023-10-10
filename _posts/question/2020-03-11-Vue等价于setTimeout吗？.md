---
layout: question
title:  Vue等价于setTimeout吗？
date:   2020-03-11T02:24:42.000Z
description: 我正在使用Laravel和Vue构建购物车系统。当我将商品添加到购物篮中时，我会通过切换由v-if监视的Vue变量来显示确认消息：<div class...
img: 
author: 伽罗西门小胖
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Laravel和Vue构建购物车系统。</font><font style="vertical-align: inherit;">当我将商品添加到购物篮中时，我会通过切换由v-if监视的Vue变量来显示确认消息：</font></font></p>

<pre><code>&lt;div class="alert alert-success" v-if="basketAddSuccess" transition="expand"&gt;Added to the basket&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和JS：</font></font></p>

<pre><code>addToBasket: function(){<font></font>
                item = this.product;<font></font>
                this.$http.post('/api/buy/addToBasket', item);<font></font>
                this.basketAddSuccess = true;<font></font>
            }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（是的，我很快就会在随后的内容中添加它）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以正常工作，并显示该消息。</font><font style="vertical-align: inherit;">但是，我希望该消息在一定时间（例如几秒钟）后再次消失。</font><font style="vertical-align: inherit;">我该如何使用Vue？</font><font style="vertical-align: inherit;">我已经尝试过，</font></font><code>setTimeOut</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是Vue似乎不喜欢它，说它是不确定的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我拼错</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像个白痴。</font><font style="vertical-align: inherit;">但是，它仍然不起作用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的功能现在是：</font></font></p>

<pre><code>addToBasket: function(){<font></font>
                item = this.photo;<font></font>
                this.$http.post('/api/buy/addToBasket', item);<font></font>
                this.basketAddSuccess = true;<font></font>
                setTimeout(function(){<font></font>
                    this.basketAddSuccess = false;<font></font>
                }, 2000);<font></font>
            }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第534篇《Vue等价于setTimeout吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小宇宙十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>this.animationStop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，不使用this.animationStop </font></font><s><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（）</font></font></strong></s></p>

<pre><code>animationRun(){<font></font>
    this.sliderClass.anim = true;<font></font>
    setTimeout(this.animationStop, 500);<font></font>
},<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Harry小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在函数中使用this关键字，则需要在ES6中编写setTimeout函数</font></font></p>

<pre><code>setTimeout(() =&gt; {<font></font>
   this.filters.max_budget_gt_eq = this.budgetHigherValue;<font></font>
}, 1000);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小宇宙Gil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>bind(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用箭头功能时</font><font style="vertical-align: inherit;">不需要</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>  setTimeout( ()=&gt; {<font></font>
    // some code<font></font>
   }, 500)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuejs 2</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先将此添加到方法</font></font></p>

<pre><code>methods:{<font></font>
    sayHi: function () {<font></font>
      var v = this;<font></font>
      setTimeout(function () {<font></font>
        v.message = "Hi Vue!";<font></font>
    }, 3000);<font></font>
   }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，在挂载上调用此方法</font></font></p>

<pre><code>mounted () {<font></font>
  this.sayHi()<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6可以绑定“ this”</font></font></p>

<pre><code>setTimeout(() =&gt; {<font></font>
<font></font>
 },5000);<font></font>
<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYTony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将bind（this）添加到您的setTimeout回调函数中</font></font></p>

<pre><code>setTimeout(function () {<font></font>
    this.basketAddSuccess = false<font></font>
}.bind(this), 2000)<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
