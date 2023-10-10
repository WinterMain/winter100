---
layout: question
title:  怎么把Npm和NodeJS更新到最新版本？
date:   2018-10-29T02:45:30.000Z
description: 我刚刚安装了Node.js和npm（用于其他模块）。 如何将Node.js和我正在使用的模块更新到最新版本？ 可以用npm直接这样做，还是我必须删除并重新安装N...
img: 
author: 谷若汐
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>我刚刚安装了Node.js和npm（用于其他模块）。</p>

<p>如何将Node.js和我正在使用的模块更新到最新版本？</p>

<p>可以用npm直接这样做，还是我必须删除并重新安装Node.js和npm才能获得下一个版本？</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第91篇《怎么把Npm和NodeJS更新到最新版本？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.10.29</span>
          </div>
          <div class="discuss-comment"><p>See the docs for the&nbsp;<strong><a href="https://github.com/isaacs/npm/blob/master/doc/cli/npm-update.md" rel="noreferrer"><code>update</code></a></strong>&nbsp;command:</p>

<pre>
<code>npm update [ [ ...]]</code></pre>

<blockquote>
<p>This command will update all the packages listed to the latest version (specified by the tag config). It will also install missing packages.</p>
</blockquote>

<p>Additionally, see the&nbsp;<strong><a href="https://docs.npmjs.com/misc/faq#how-do-i-update-npm" rel="noreferrer">FAQ</a></strong>:</p>

<blockquote>
<h2>How do I update npm?</h2>

<pre><code>npm install -g npm</code></pre>

<p>Please note that this command will remove your current version of npm. Make sure to use&nbsp;<code>sudo npm install -g npm</code>&nbsp;if on a Mac.</p>

<p>You can also update all outdated local packages by doing&nbsp;<code>npm update</code>&nbsp;without any arguments, or global packages by doing&nbsp;<code>npm update -g</code>.</p>

<p>Occasionally, the version of npm will progress such that the current version cannot be properly installed with the version that you have installed already. (Consider, if there is ever a bug in the update command.) In those cases, you can do this:</p>

<pre><code>curl https://www.npmjs.com/install.sh | sh</code></pre>
</blockquote>

<p>To update Node.js itself, I recommend you use&nbsp;<a href="https://github.com/creationix/nvm" rel="noreferrer">nvm, the Node Version Manager</a>.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
