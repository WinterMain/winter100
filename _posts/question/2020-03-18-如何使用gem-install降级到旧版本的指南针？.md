---
layout: question
title:  如何使用gem install降级到旧版本的指南针？
date:   2020-03-18T10:29:07.000Z
description: 我一直在使用http //compass-style.org/中的罗盘来管理网站CSS。我刚刚安装了最新版本，但收到一个令人不愉快的错误，其副作用是损坏了...
img: 
author: AHarry
category: question
answer: 2
tags: 红宝石 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用</font></font><a href="http://compass-style.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://compass-style.org/中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">罗盘</font><font style="vertical-align: inherit;">来管理网站CSS。</font><font style="vertical-align: inherit;">我刚刚安装了最新版本，但收到一个令人不愉快的错误，其副作用是损坏了我所有的CSS文件。</font><font style="vertical-align: inherit;">如何降级为此版本？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢，马特</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿AJim</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是有类似的情况，@ corroded答案中还缺少其他内容。</font><font style="vertical-align: inherit;">由于@Matt Lynn正在降级，因此他需要卸载罗盘的现有版本。</font></font></p>

<pre><code>$ sudo gem uninstall compass<font></font>
<font></font>
$ sudo gem install compass --version versionnumber<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，您将得到两种不同版本的指南针。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>sudo gem install compass --version versionnumber
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
