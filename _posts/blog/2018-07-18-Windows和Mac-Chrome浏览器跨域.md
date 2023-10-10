---
layout: post
title:  Windows和Mac Chrome浏览器跨域
date:   2018-07-18T15:07:19.000Z
description: 有时候特别懒不想为项目做配置，或者只想做一个静态页面，又想要请求服务器数据的话，我们就会遇到跨域问题，那么这个时候，设置浏览器跨域是极好的行为。这里主要说明Ch...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1531926393972.jpg
author: Winter
category: blog
answer: 0
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>有时候特别懒不想为项目做配置，或者只想做一个静态页面，又想要请求服务器数据的话，我们就会遇到跨域问题，</p>

<p>那么这个时候，设置浏览器跨域是极好的行为。</p>

<p>这里主要说明Chrome浏览器是怎么做到跨域的。</p>

<h1>1. Windows上设置浏览器可跨域。</h1>

<p>首先找到你的谷歌浏览器的快捷方式，右键快捷方式选择属性，进入属性设置。</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1531925117170.png" style="max-width:100%" /></p>

<p>在&ldquo;目标&rdquo;输入框的后面追加 ，<strong>记住一定要在追加前加上空格</strong>。</p>

<pre>
<code>
 --disable-web-security --user-data-dir=&quot;&quot;，--user-data-dir 
</code></pre>

<p>Chrome49版本之后，如果设置chrome浏览器为支持跨域模式，需要指定出一个个人信息目录，而不能使用默认的目录。</p>

<p>那么你可以按照以下操作来设置。</p>

<p>1.在电脑上新建一个目录，例如：C:\SamyocDevChromeData</p>

<p>2.修改刚才的追加信息为</p>

<pre>
<code>
 --disable-web-security --user-data-dir=C:\SamyocDevChromeData，--user-data-dir 
</code></pre>

<p>&nbsp;</p>

<p>最后很重要：关掉所有的Chrome页面，退出Chrome，同时也要关掉Chrome插件，比如Postman等等！！！然后再点击<strong>修改过后的快捷方式</strong>打开Chrome！！！</p>

<p>出现以下提示时说明，跨域成功了。</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1531925754594.jpg" style="max-width:100%" /></p>

<h1>2.MacOS上设置浏览器可跨域。</h1>

<p>MacOS上设置Chome跨域就很简单了。</p>

<p>在这之前很重要：关掉所有的Chrome页面，退出Chrome，同时也要关掉Chrome插件，比如Postman等等！！！然后打开终端执行以下命令。</p>

<pre>
<code>
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=&quot;&quot; 
</code></pre>

<p>出现以下提示时说明，跨域成功了。</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1531925754594.jpg" style="max-width:100%" /></p>
</div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
