---
layout: question
title:  img onload事件绑定，在IE或者Safari中不会执行onload事件
date:   2018-06-24T17:12:25.000Z
description: 一般来说绑定事件都是如下这样<\!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "ht...
img: 
author: Winter
category: question
answer: 1
tags: 前端的一些坑
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>一般来说绑定事件都是如下这样</p>

<p>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</p>

<p>&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;</p>

<p>&lt;head&gt;</p>

<p>&nbsp; &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;</p>

<p>&nbsp; &lt;title&gt;img onload事件绑定（错误用法）&lt;/title&gt;</p>

<p>&lt;/head&gt;</p>

<p>&lt;body&gt;</p>

<p>&nbsp; &lt;img src=&#39;images/06.jpg&#39; id=&#39;imgId&#39;/&gt;</p>

<p>&lt;/body&gt;</p>

<p>&lt;script type=&#39;text/javascript&#39;&gt;</p>

<p>&nbsp; var img = document.getElementById(&#39;imgId&#39;);</p>

<p>&nbsp; img.onload = function(){</p>

<p>&nbsp; &nbsp; &nbsp; alert(1);</p>

<p>&nbsp; };</p>

<p>&lt;/script&gt;</p>

<p>&lt;/html&gt;</p>

<p>发现alert(1)并没有执行，特别是在ie和ff浏览器下。而且在用到jquery插件库的时候会发现，alert除了在ie和Opera浏览器不弹出来外，其他浏览器均弹出来，这是为什么呢？！</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第60篇《img onload事件绑定，在IE或者Safari中不会执行onload事件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.06.25</span>
          </div>
          <div class="discuss-comment">主要是window.onload事件是在页面dom元素加载完后执行，也就包括了img图片中src加载完成。那么img.onload 就不会执行了，
<br/>
因为其是监听img的src是否加载完成。
<br/>
我们可以改成如下这样<br/>
        var img = document.getElementById('imgId');   <br/>
        var src = img.getAttribute('src');  <br/>
        img.setAttribute('src','');  <br/>
        img.onload = function(){  <br/>
            alert(1);  <br/>
        };  <br/>
        img.setAttribute('src',src); <br/>
这种方法，在各浏览器下均执行alert(1)。<br/>
也就是在页面dom元素加载完成后，获得img的dom对象，获得其src属性，再将其src设置为‘’空，然后监听img的onload事件，最后再设置img的src属性即可。</div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
