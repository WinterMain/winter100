---
layout: question
title:  指南针手表“ Errno    EACCESS…权限被拒绝”
date:   2020-04-03T06:50:33.000Z
description: 我只是将项目文件迁移到D 驱动器上的新PC上，而程序（Git，Node Js，Ruby等）却位于C 驱动器上。我尝试compass watch在编辑S...
img: 
author: 村村
category: question
answer: 8
tags: ruby CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是将项目文件迁移到</font></font><code>D:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">驱动器</font><font style="vertical-align: inherit;">上的新PC上，</font><font style="vertical-align: inherit;">而程序（Git，Node Js，Ruby等）却位于</font></font><code>C:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">驱动器上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试</font></font><code>compass watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在编辑SASS文件后</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，但是遇到此错误：</font></font></p>

<pre><code>Errno::EACCES on line ["897"] of C: Permission denied - &lt;D:/project_dir/stylesheets/app.css20140323-10532-gziux, D:/project_dir/stylesheets/app.css&gt;<font></font>
Run with --trace to see the full backtrace<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Ruby命令行的新手（因为我仅将其用于Web开发）。</font><font style="vertical-align: inherit;">我需要做什么才能允许这些权限？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可以提供更多信息，请告诉我。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这是运行后返回的内容</font></font><code>compass watch --trace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>D:\project_dir&gt;compass watch --trace<font></font>
&gt;&gt;&gt; Change detected at 21:53:53 to: app.scss<font></font>
overwrite stylesheets/app.css<font></font>
Errno::EACCES on line ["897"] of C: Permission denied - (D:/project_dir/stylesheets/app.css20140323-14712-11v62k7, D:/project_dir/stylesheets/app.css)<font></font>
C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/sass-3.2.18/lib/sass/util.rb:897:in `atomic_create_and_write_file'<font></font>
C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/actions.rb:58:in `write_file'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/compiler.rb:143:in `compile'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/compiler.rb:118:in `compile_if_required'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/compiler.rb:103:in `block (2 levels) in run'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/compiler.rb:101:in `each'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/compiler.rb:101:in `block in run'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/compiler.rb:126:in `timed'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/compiler.rb:100:in `run'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/commands/watch_project.rb:147:in `recompile'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/commands/watch_project.rb:68:in `perform'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/commands/base.rb:18:in `execute'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/commands/project_base.rb:19:in `execute'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/exec/sub_command_ui.rb:43:in `perform!'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/lib/compass/exec/sub_command_ui.rb:15:in `run!'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/bin/compass:30:in `block in &lt;top (required)&gt;'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/bin/compass:44:in `call'<font></font>
    C:/Ruby200-x64/lib/ruby/gems/2.0.0/gems/compass-0.12.4/bin/compass:44:in `&lt;top (required)&gt;'<font></font>
    C:/Ruby200-x64/bin/compass:23:in `load'<font></font>
    C:/Ruby200-x64/bin/compass:23:in `&lt;main&gt;'<font></font>
&gt;&gt;&gt; Compass is polling for changes. Press Ctrl-C to Stop.<font></font>
</code></pre>

<p>I don't know what to make from that though.</p>

<p>From doing some reading (<a href="https://github.com/chriseppstein/compass/issues/1406" rel="nofollow noreferrer">https://github.com/chriseppstein/compass/issues/1406</a>) I believe it's something to do with <strong>the permissions or PATH for 'Ruby' &amp; 'Ruby Gems'</strong> but I don't know what to do to resolve this.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4032篇《指南针手表“ Errno    EACCESS…权限被拒绝”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我以管理员身份运行cygwin命令提示符窗口时，问题已为我解决。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题，可以通过卸载指南针和sass来解决此问题：</font></font></p>

<pre><code>gem uninstall compass <font></font>
gem uninstall sass<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您需要做的就是安装指南针：</font></font></p>

<pre><code>gem install compass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南针安装过程中需要使用sass，因此不需要单独安装它。</font><font style="vertical-align: inherit;">看来我面临的问题是作为指南针安装的一部分安装的版本与我手动安装的版本之间存在冲突。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载SASS： </font></font><code>gem uninstall sass</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载COMPASS： </font></font><code>gem uninstall compass</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装--pre COMPASS版本： </font></font><code>gem install compass --pre</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装--pre SASS版本： </font></font><code>gem install sass --pre</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来问题已在SASS 3.2.19中解决</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以你只需要  </font></font><code>gem update compass</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的错误，但是解决方案却完全不同，所以我认为值得分享，以防其他人遇到我的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，我被拒绝权限是因为我的源代码控制使我的.css文件变为只读文件。</font><font style="vertical-align: inherit;">解决方案非常简单，只需签出css文件，一切便恢复正常。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它看起来像最新版本的Sass中的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载Sass和Compass并安装旧版本可解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会有更新的版本可以使用，但是这是我已经测试并知道可以使用的版本。</font></font></p>

<pre><code>gem uninstall compass<font></font>
gem uninstall sass<font></font>
<font></font>
gem install compass -v "0.12.2"<font></font>
gem install sass -v "3.2.13"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">我做了建议-用--pre卸载并安装，但是并不能解决我的问题。</font><font style="vertical-align: inherit;">之后，我遇到了另一个问题。</font><font style="vertical-align: inherit;">好吧，我当时要做的是：我再次卸载了指南针和无礼的宝石。</font><font style="vertical-align: inherit;">我删除了ruby / gems / ruby​​1.9.1 / gems文件夹中的所有与罗盘相关的宝石（可能没有必要，不确定），然后我安装了：gem install guide --version“ 0.12.2”和gem install sass-版本“ 3.2.10”。</font><font style="vertical-align: inherit;">我认为这里的版本不是太重要，只要它不是这两个的最新版本即可。</font><font style="vertical-align: inherit;">现在，这里重要的一点是：gem uninstall sass。</font><font style="vertical-align: inherit;">它将询问您要擦除哪个版本，或者是否全部删除。</font><font style="vertical-align: inherit;">删除较新的。</font><font style="vertical-align: inherit;">这里的技巧是指南针会自动安装最新版本的sass。</font><font style="vertical-align: inherit;">因此，如果您安装的是较旧的指南针，则没关系，因为已经有使用指南针的较新的指南针了。</font><font style="vertical-align: inherit;">尝试一下。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使其能够在32位或64位Windows中工作，我按照Min Ren的建议进行了工作，但是</font></font><code>C:\Users\myusername\.gem\specs\rubygems.org%443\quick\Marshal.4.8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在卸载步骤之后，</font><font style="vertical-align: inherit;">我还必须手动清理</font><font style="vertical-align: inherit;">所有sass和指南针gemspec文件</font><font style="vertical-align: inherit;">的gem库（</font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我还在指南针之前安装了sass。</font></font></p>

<pre><code>gem uninstall compass<font></font>
gem uninstall sass<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动清理.gem</font></font></p>

<pre><code>gem install sass --version "3.2.10"<font></font>
gem install compass --version "0.12.2" <font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
