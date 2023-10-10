---
layout: question
title:  Vue将input \[type = number\]转换为字符串值
date:   2020-03-12T06:43:46.000Z
description: 我遇到了问题，Vue将类型为number的输入字段的值转换为字符串，而我只是想不通为什么。我遵循的指南没有遇到这个问题，并且按预期方式将值设为数字。v...
img: 
author: Tom阳光达蒙
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了问题，Vue将类型为number的输入字段的值转换为字符串，而我只是想不通为什么。</font><font style="vertical-align: inherit;">我遵循的指南没有遇到这个问题，并且按预期方式将值设为数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue文档指出，如果输入的类型是数字，则Vue会将值转换为数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码源自组件，但我对其进行了调整以使其可在JSFiddle中运行：</font><a href="https://jsfiddle.net/d5wLsnvp/3/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://jsfiddle.net/d5wLsnvp/3/</font></font><a href="https://jsfiddle.net/d5wLsnvp/3/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div class="col-sm-6 col-md-4"&gt;<font></font>
        &lt;div class="panel panel-success"&gt;<font></font>
            &lt;div class="panel-heading"&gt;<font></font>
                &lt;h3 class="panel-title"&gt;<font></font>
                    {{ stock.name }}<font></font>
                    &lt;small&gt;(Price: {{ stock.price }})&lt;/small&gt;<font></font>
                &lt;/h3&gt;<font></font>
            &lt;/div&gt;<font></font>
            &lt;div class="panel-body"&gt;<font></font>
                &lt;div class="pull-left"&gt;<font></font>
                    &lt;input type="number" class="form-control" placeholder="Quantity" v-model="quantity"/&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div class="pull-right"&gt;<font></font>
                    &lt;button class="btn btn-success" @click="buyStock"&gt;Buy&lt;/button&gt;<font></font>
                &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
        props: ['stock'],<font></font>
        data() {<font></font>
            return {<font></font>
                quantity: 0 // Init with 0 stays a number<font></font>
            };<font></font>
        },<font></font>
        methods: {<font></font>
            buyStock() {<font></font>
                const order = {<font></font>
                    stockId: this.stock.id,<font></font>
                    stockPrice: this.stock.price,<font></font>
                    quantity: this.quantity<font></font>
                };<font></font>
                console.log(order);<font></font>
                this.quantity = 0; // Reset to 0 is a number<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数量是问题。</font><font style="vertical-align: inherit;">它用0初始化，当我只按“购买”按钮时，控制台显示：</font></font></p>

<pre><code>Object { stockId: 1, stockPrice: 110, quantity: 0 }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，一旦我通过使用微调器或仅输入新值来更改值，控制台就会显示：</font></font></p>

<pre><code>Object { stockId: 1, stockPrice: 110, quantity: "1" }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过Firefox 59.0.2和Chrome 65.0.3325.181的测试。</font><font style="vertical-align: inherit;">两者都声明它们是最新的。</font><font style="vertical-align: inherit;">我实际上也在Microsoft Edge中尝试过，结果相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那我在这里想念什么？</font><font style="vertical-align: inherit;">Vue为什么不将值转换为数字？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1010篇《Vue将input [type = number]转换为字符串值》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将订单对象更改为：</font></font></p>

<pre><code>            const order = {<font></font>
                stockId: this.stock.id,<font></font>
                stockPrice: this.stock.price,<font></font>
                quantity: +this.quantity<font></font>
            };<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将自动将字符串解析为数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，来自HTML输入的数据是字符串。</font><font style="vertical-align: inherit;">输入类型仅检查字段中是否提供了有效的字符串。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用的</font></font><a href="https://vuejs.org/v2/guide/forms.html#number" rel="noreferrer"><code>.number</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修饰符</font></font><code>v-model</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>&lt;input v-model.number="quantity" type="number"&gt;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
