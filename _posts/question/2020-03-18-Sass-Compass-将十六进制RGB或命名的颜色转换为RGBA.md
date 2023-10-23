---
layout: question
title:  Sass / Compass-将十六进制，RGB或命名的颜色转换为RGBA
date:   2020-03-18T07:41:52.000Z
description: 可能是Compass 101，但是有人写过mixin来设置颜色的alpha值吗？理想情况下，我希望mixin采取任何形式的颜色定义并应用透明度：\`in...
img: 
author: 蛋蛋Davaid
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是Compass 101，但是有人写过mixin来设置颜色的alpha值吗？</font><font style="vertical-align: inherit;">理想情况下，我希望mixin采取任何形式的颜色定义并应用透明度：</font></font></p>

<pre><code>@include set-alpha( red, 0.5 );          //prints rgba(255, 0, 0, 0.5);<font></font>
@include set-alpha( #ff0000, 0.5 );      //prints rgba(255, 0, 0, 0.5);<font></font>
@include set-alpha( rgb(255,0,0), 0.5 ); //prints rgba(255, 0, 0, 0.5);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2024篇《Sass / Compass-将十六进制，RGB或命名的颜色转换为RGBA》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Harry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rgba函数不适用于没有透明度的颜色，它将再次返回十六进制。</font><font style="vertical-align: inherit;">毕竟，这并不意味着要将十六进制转换为rgba，我们只是从十六进制中获利而不允许使用alpha（尚未）。</font></font></p>

<pre><code>rgba(#fff, 1) // returns #fff
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我做了一些小功能来构建rgb字符串。</font><font style="vertical-align: inherit;">我现在不需要处理透明胶片。</font></font></p>

<pre><code>@function toRGB ($color) {<font></font>
    @return "rgb(" + red($color) + ", " + green($color) + ", " + blue($color)+ ")";<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#rgba-instance_method"><font style="vertical-align: inherit;">Sass内置</font></a><font style="vertical-align: inherit;">的</font></font><a href="http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#rgba-instance_method"><code>rgba</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置颜色的不透明度。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rgba（＃102030，0.5）=&gt; rgba（16，32，48，0.5）</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  rgba（蓝色，0.2）=&gt; rgba（0，0，255，0.2）  </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数：（</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  颜色）颜色</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  （数字）alpha —一个介于0和1之间的数字  </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回：（</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  颜色）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码：</font></font></p>

<pre><code>rgba(#ff0000, 0.5); // Output is rgba(255,0,0,0.5);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>from_hex(hex_string, alpha = nil);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://sass-lang.com/documentation/Sass/Script/Value/Color.html#from_hex-class_method" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从有效的CSS十六进制字符串创建新的颜色。</font><font style="vertical-align: inherit;">前导哈希是可选的。</font></font></p>
</blockquote></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
