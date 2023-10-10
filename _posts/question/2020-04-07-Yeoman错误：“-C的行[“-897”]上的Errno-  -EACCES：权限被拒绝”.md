---
layout: question
title:  Yeoman错误：“ C的行\[“ 897”\]上的Errno    EACCES：权限被拒绝”
date:   2020-04-07T03:38:26.000Z
description: 我昨天升级了硬件，并重新安装了Win 8.1。从那时起，这个错误就使我丧命。我已经失去了整整一天的工作，试图找出正在发生的事情。我从未在Mac或旧版Win...
img: 
author: 神无
category: question
answer: 2
tags: 上海社会科学院 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我昨天升级了硬件，并重新安装了Win 8.1。</font><font style="vertical-align: inherit;">从那时起，这个错误就使我丧命。</font><font style="vertical-align: inherit;">我已经失去了整整一天的工作，试图找出正在发生的事情。</font><font style="vertical-align: inherit;">我从未在Mac或旧版Win 7机器上遇到此问题。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>yo webapp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Modernizr</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置新项目</font><font style="vertical-align: inherit;">效果很好。</font><font style="vertical-align: inherit;">服务器将启动，我可以看到我的更新livereload。</font><font style="vertical-align: inherit;">但是，使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Compass和SASS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置新项目</font><font style="vertical-align: inherit;">将阻止我启动本地服务器并抛出此错误：</font></font></p>

<pre><code>D:\test&gt;grunt serve<font></font>
Running "serve" task<font></font>
<font></font>
Running "clean:server" (clean) task<font></font>
<font></font>
Running "concurrent:server" (concurrent) task<font></font>
<font></font>
Running "copy:styles" (copy) task<font></font>
<font></font>
Done, without errors.<font></font>
    Warning: Errno::EACCES on line ["897"] of C: Permission denied - (D:/test/.t<font></font>
mp/styles/main.css20140323-6060-d9r9eo, D:/test/.tmp/styles/main.css)<font></font>
    Run with --trace to see the full backtrace Use --force to continue.<font></font>
<font></font>
    Aborted due to warnings.<font></font>
<font></font>
<font></font>
Execution Time (2014-03-23 20:05:00 UTC)<font></font>
concurrent:server  4.8s  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 100%<font></font>
Total 4.8s<font></font>
<font></font>
D:\test&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将Compass和SASS更新到最新版本，重新安装了Yeoman＆Ruby，并尝试了一堆其他小的调整。</font><font style="vertical-align: inherit;">没事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有什么我可以尝试的想法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经找到解决此问题的方法。</font><font style="vertical-align: inherit;">我想这可能有助于解决运行grunt服务器的其他类似问题。</font><font style="vertical-align: inherit;">这就是为我做的：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载SASS</font></font></p>

<pre><code>gem uninstall sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载COMPASS</font></font></p>

<pre><code>gem uninstall compass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装--pre COMPASS版本</font></font></p>

<pre><code>gem install compass --pre
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装--pre SASS版本</font></font></p>

<pre><code>gem install sass --pre
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，只有按此顺序运行任务才对我有用。</font><font style="vertical-align: inherit;">我希望这有帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS 3.2.19试用中已解决问题 </font></font><code>gem update compass</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
