---
layout: question
title:  ExecJS并且找不到JavaScript运行时
date:   2020-04-03T03:18:10.000Z
description: 我正在尝试使用Mongoid / Devise Rails 3.1模板（Mongoid和Devise），并且不断收到错误消息，指出ExecJS无法找到Ja...
img: 
author: 小哥十三
category: question
answer: 8
tags: ruby-on-rails-3.1 JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用</font></font><a href="https://github.com/RailsApps/rails3-mongoid-devise"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mongoid / Devise Rails 3.1模板</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><em><a href="http://mongoid.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mongoid</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><a href="https://github.com/plataformatec/devise"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Devise</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），并且不断收到错误消息，指出</font></font><a href="http://rubygems.org/gems/execjs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ExecJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法找到JavaScript运行时。</font><font style="vertical-align: inherit;">当我没有安装任何东西时，这</font></font><a href="http://en.wikipedia.org/wiki/Nodejs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还算</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公平，但是我尝试安装</font><a href="http://en.wikipedia.org/wiki/Nodejs"><font style="vertical-align: inherit;">Node.js</font></a><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/nu7hatch/mustang"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mustang</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/cowboyd/therubyracer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ruby Racer</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是没有任何效果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找不到JavaScript运行时。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">可用运行时的列表，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://github.com/sstephenson/execjs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sstephenson / ExecJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（GitHub </font></font><code>ExecJS::RuntimeUnavailable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要做什么才能使它正常工作？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3957篇《ExecJS并且找不到JavaScript运行时》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，这为我解决了问题...这是一个问题：</font><a href="http://forums.freebsd.org/showthread.php?t=35539" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font><a href="http://forums.freebsd.org/showthread.php?t=35539" rel="nofollow"><font style="vertical-align: inherit;">//forums.freebsd.org/showthread.php?</font></a><font style="vertical-align: inherit;"> t=
 </font></font><a href="http://forums.freebsd.org/showthread.php?t=35539" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">35539</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我开始在Ruby 1.9.3中使用rbenv时遇到了这个问题，因为我的系统ruby是1.8.7。</font><font style="vertical-align: inherit;">这两个地方都安装了gem，但是出于某种原因，rails脚本没有将其安装。</font><font style="vertical-align: inherit;">但是，在Gemfile中添加“ execjs”和“ therubyracer”可以达到目的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Tony</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的错误，但仅在我的登台服务器上而不在生产环境上。</font><font style="vertical-align: inherit;">在两个环境中都已经安装了nodejs。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过输入：</font></font></p>

<pre><code>which node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现该节点命令位于生产中的/ usr / bin / node，但位于登台阶段的/ usr / local / bin / node。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在临时创建符号链接后，即：</font></font></p>

<pre><code>sudo ln -s /usr/local/bin/node /usr/bin/node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，该应用程序在分阶段工作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有大惊小怪。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Amazon Linux（AMI）：</font></font></p>

<pre><code>sudo yum install nodejs npm --enablerepo=epel
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要使用RubyRacer，因为它对内存不利。</font><font style="vertical-align: inherit;">按照某些人的建议安装Node.js是一个更好的主意。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ExecJs Library可以使用的可用运行时列表也记录了Node.js的使用</font></font></p>

<p><a href="https://github.com/sstephenson/execjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/sstephenson/execjs</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，与使用RubyRacer相比，Node.js并不是一个过大的解决方案，并且是更好的解决方案。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾经将</font></font><a href="https://github.com/cowboyd/therubyracer" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ruby Racer</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到Gem文件中进行修复。</font><font style="vertical-align: inherit;">但是，</font></font><a href="http://en.wikipedia.org/wiki/Nodejs" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以工作！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是不包含您没有的东西的gem组捆绑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样：</font></font></p>

<pre><code>bundle install --without assets
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您完全不需要修改Gemfile，前提是您当然不需要做资产链工作-通常适用于非开发环境。</font><font style="vertical-align: inherit;">Bundle会记住.bundle / config文件中的“ --without”设置。   </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ubuntu用户</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Ubuntu 11.04上遇到类似问题。</font></font><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装Node.js可以</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Ubuntu 13.04 x64开始，您只需要运行：</font></font></p>

<pre><code>sudo apt-get install nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以解决问题。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CentOS / RedHat用户</font></font></h2>

<pre><code>sudo yum install nodejs
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
