---
layout: question
title:  sass-rails资产管道：错误生成图像路径；url（/images/blah.png）而不是url（/assets/blah.png）
date:   2020-03-24T07:28:25.000Z
description: 在2.2.2节“ CSS和Sass”中，告诉image-url('delete.png')我放入我的Sass。所以我有。但是，它正在生成CSSba...
img: 
author: 小卤蛋
category: question
answer: 4
tags: ruby-on-rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://guides.rubyonrails.org/asset_pipeline.html#coding-links-to-assets" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.2.2节“ CSS和Sass”中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，告诉</font></font><code>image-url('delete.png')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">放入</font><font style="vertical-align: inherit;">我的</font><a href="http://guides.rubyonrails.org/asset_pipeline.html#coding-links-to-assets" rel="noreferrer"><font style="vertical-align: inherit;">Sass</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以我有。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，它正在生成CSS</font></font></p>

<pre><code>background-image: url(/images/delete.png)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是在任何地方都告诉我它应该产生的东西，正确而明显的东西，</font></font></p>

<pre><code>background-image: url(/assets/delete.png)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么。</font><font style="vertical-align: inherit;">该死的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了几天的时间试图弄清楚这是从哪里来的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font><font style="vertical-align: inherit;">是导致此行为</font></font><a href="https://gist.github.com/2932450" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的相关设置的要点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这</font></font><a href="https://gist.github.com/2932478" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是我们较早版本的代码库中相同文件的要点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在我们实施资产管道之后，实际上它工作了大约一周，然后才出现这种令人沮丧的行为）。</font><font style="vertical-align: inherit;">您能发现差异吗？</font><font style="vertical-align: inherit;">您能想到的其他文件可能是造成这种情况的原因吗？</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们故意使用较旧的版本，</font></font><code>sass-rails</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为较新的版本</font></font><code>Stack level too deep!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在预编译时会</font><font style="vertical-align: inherit;">导致</font><font style="vertical-align: inherit;">错误。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们正在使用指南针。</font></font></li>
</ul>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种变通方法</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为实际上对资产管道进行故障排除有点烂。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1：将图像放在/ images中</font></font></h3>

<p>I attempted to just move all of the images to <code>public/images</code> and add that as a load path. This worked in dev (images are accessible at either <code>/assets</code> or <code>/images</code>), but precompiling for production puts the fingerprinted images in <code>/assets</code> only (obvs), so when sass-rails puts in <code>url(/imagse/delete-120398471029384102364.png)</code>, it can't be found.</p>

<h3>2: Make /public/images a symlink to /public/assets</h3>

<p>This would probably work in production, but in development the /assets folder doesn't exist, so the <code>url(/images/delete.png)</code> directives result in unfound images.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3443篇《sass-rails资产管道：错误生成图像路径；url（/images/blah.png）而不是url（/assets/blah.png）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了我，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改变</font></font><code>image_path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>image-path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">后来，我</font></font><code>image_path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">切换到</font><font style="vertical-align: inherit;">它，现在工作正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除缓存并没有帮助我。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑.scss文件（添加空格）并重新加载页面后，我得到了正确的结果。</font><font style="vertical-align: inherit;">在我删除空间后，它可以正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实看起来像这样：</font></font><a href="https://github.com/rails/sass-rails/issues/57" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/rails/sass-rails/issues/57" rel="nofollow"><font style="vertical-align: inherit;">//github.com/rails/sass-rails/issues/57</font></a><font style="vertical-align: inherit;"> 
如果是这样，您应该尝试找到Compass和Sass-rails之间版本的良好组合。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许将所有内容（包括Rails）都升级到最新版本，这仍然是最好的方法（使用</font></font><code>bundle outdated</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">捆绑程序1.2中的命令来了解要升级的宝石）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidPro</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎是由于您使用的sass-rails版本（3.1.0）所致。</font><font style="vertical-align: inherit;">我可以重现您的问题（感谢发布Gemfile），当碰到sass-rails 3.1.4时，它就消失了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试升级到3.1.4并清除</font></font><code>tmp/cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">还要确保您没有访问任何浏览器缓存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道您说3.1.4导致了其他问题...您尝试过更高版本吗？</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
