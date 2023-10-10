---
layout: question
title:  Rails：对资产管道使用livereload
date:   2020-04-03T02:44:45.000Z
description: Rails专家的快速提问...使用Rails 3.0.x应用程序时，我经常使用Guard和LiveReload。但是，似乎在Rails 3.1中使用资...
img: 
author: 凯西里
category: question
answer: 2
tags: ruby-on-rails- CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rails专家的快速提问...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Rails 3.0.x应用程序时，我经常使用Guard和LiveReload。</font><font style="vertical-align: inherit;">但是，似乎在Rails 3.1中使用资产管道时，livereload守护程序不知道对Sass文件的更改应触发向浏览器发送新的CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有人在资产管道中使用LiveReload？</font><font style="vertical-align: inherit;">如果是这样，您如何使其工作？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom理查德逆天</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现以下内容也可以很好地工作：</font></font></p>

<pre><code>guard :livereload do<font></font>
  watch(%r{^app/.+\.(erb|haml|js|css|scss|sass|coffee|eco|png|gif|jpg)})<font></font>
  watch(%r{^app/helpers/.+\.rb})<font></font>
  watch(%r{^public/.+\.html})<font></font>
  watch(%r{^config/locales/.+\.yml})<font></font>
end<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是您运行时生成的默认代码，</font></font><code>guard init livereload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为某些原因无法与sass导入一起正常运行。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@mirko在其评论中提到的那样，不赞成在scss文件上使用额外的.css。</font><font style="vertical-align: inherit;">因此，添加该方法不是一个很好的解决方案，而且我已经体验到，简单地添加scss扩展名会强制重新加载页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我发现这可行：</font></font></p>

<pre><code>watch(%r{(app|vendor)(/assets/\w+/(.+)\.(scss))}) { |m| "/assets/#{m[3]}.css" }`
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解是，这会将scss文件映射到已编译的css文件。</font><font style="vertical-align: inherit;">我希望它也适用于无礼。</font></font></p>

<p><a href="https://github.com/guard/guard-livereload/issues/126#issuecomment-72420391" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：Github Issue</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
