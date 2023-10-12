---
layout: question
title:  Npm编译报错Exit status 137 verbose stack at EventEmitter.<anonymous> 
date:   2018-03-06T10:41:26.000Z
description: npm-debug.log日志内容info it worked if it ends with ok1 verbose cli \[ '/usr/local/bi...
img: 
author: Winter
category: question
answer: 2
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>npm-debug.log日志内容</p>

<p>info it worked if it ends with ok</p>

<p>1 verbose cli [ &#39;/usr/local/bin/node&#39;, &#39;/usr/local/bin/npm&#39;, &#39;start&#39; ]</p>

<p>2 info using npm@3.10.10</p>

<p>3 info using node@v6.10.3</p>

<p>4 verbose run-script [ &#39;prestart&#39;, &#39;start&#39;, &#39;poststart&#39; ]</p>

<p>5 info lifecycle samyoc-blog@0.1.0~prestart: samyoc-blog@0.1.0</p>

<p>6 silly lifecycle samyoc-blog@0.1.0~prestart: no script for prestart, continuing</p>

<p>7 info lifecycle samyoc-blog@0.1.0~start: samyoc-blog@0.1.0</p>

<p>8 verbose lifecycle samyoc-blog@0.1.0~start: unsafe-perm in lifecycle true</p>

<p>9 verbose lifecycle samyoc-blog@0.1.0~start: PATH: /usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/myapps/samyoc/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin</p>

<p>10 verbose lifecycle samyoc-blog@0.1.0~start: CWD: /usr/myapps/samyoc</p>

<p>11 silly lifecycle samyoc-blog@0.1.0~start: Args: [ &#39;-c&#39;, &#39;npm run rm-dist &amp; npm run webpack&#39; ]</p>

<p>12 silly lifecycle samyoc-blog@0.1.0~start: Returned: code: 137 signal: null</p>

<p>13 info lifecycle samyoc-blog@0.1.0~start: Failed to exec start script</p>

<p>14 verbose stack Error: samyoc-blog@0.1.0 start: `npm run rm-dist &amp; npm run webpack`</p>

<p>14 verbose stack Exit status 137</p>

<p>14 verbose stack at EventEmitter.&lt;anonymous&gt; (/usr/local/lib/node_modules/npm/lib/utils/lifecycle.js:255:16)</p>

<p>14 verbose stack at emitTwo (events.js:106:13)</p>

<p>14 verbose stack at EventEmitter.emit (events.js:191:7)</p>

<p>14 verbose stack at ChildProcess.&lt;anonymous&gt; (/usr/local/lib/node_modules/npm/lib/utils/spawn.js:40:14)</p>

<p>14 verbose stack at emitTwo (events.js:106:13)</p>

<p>14 verbose stack at ChildProcess.emit (events.js:191:7)</p>

<p>14 verbose stack at maybeClose (internal/child_process.js:886:16)</p>

<p>14 verbose stack at Process.ChildProcess._handle.onexit (internal/child_process.js:226:5)</p>

<p>15 verbose pkgid samyoc-blog@0.1.0</p>

<p>16 verbose cwd /usr/myapps/samyoc</p>

<p>17 error Linux 3.10.0-514.10.2.el7.x86_64</p>

<p>18 error argv &quot;/usr/local/bin/node&quot; &quot;/usr/local/bin/npm&quot; &quot;start&quot;</p>

<p>19 error node v6.10.3</p>

<p>20 error npm v3.10.10</p>

<p>21 error code ELIFECYCLE</p>

<p>22 error samyoc-blog@0.1.0 start: `npm run rm-dist &amp; npm run webpack`</p>

<p>22 error Exit status 137</p>

<p>23 error Failed at the samyoc-blog@0.1.0 start script &#39;npm run rm-dist &amp; npm run webpack&#39;.</p>

<p>23 error Make sure you have the latest version of node.js and npm installed.</p>

<p>23 error If you do, this is most likely a problem with the samyoc-blog package,</p>

<p>23 error not with npm itself.</p>

<p>23 error Tell the author that this fails on your system:</p>

<p>23 error npm run rm-dist &amp; npm run webpack</p>

<p>23 error You can get information on how to open an issue for this project with:</p>

<p>23 error npm bugs samyoc-blog</p>

<p>23 error Or if that isn&#39;t available, you can get their info via:</p>

<p>23 error npm owner ls samyoc-blog</p>

<p>23 error There is likely additional logging output above.</p>

<p>24 verbose exit [ 1, true ]</p>

<p>控制台报错</p>

<p>npm ERR! Linux 3.10.0-514.10.2.el7.x86_64</p>

<p>npm ERR! argv &quot;/usr/local/bin/node&quot; &quot;/usr/local/bin/npm&quot; &quot;start&quot;</p>

<p>npm ERR! node v6.10.3</p>

<p>npm ERR! npm&nbsp; v3.10.10</p>

<p>npm ERR! code ELIFECYCLE</p>

<p>npm ERR! samyoc-blog@0.1.0 start: `npm run rm-dist &amp; npm run webpack`</p>

<p>npm ERR! Exit status 137</p>

<p>npm ERR!&nbsp;</p>

<p>npm ERR! Failed at the samyoc-blog@0.1.0 start script &#39;npm run rm-dist &amp; npm run webpack&#39;.</p>

<p>npm ERR! Make sure you have the latest version of node.js and npm installed.</p>

<p>npm ERR! If you do, this is most likely a problem with the samyoc-blog package,</p>

<p>npm ERR! not with npm itself.</p>

<p>npm ERR! Tell the author that this fails on your system:</p>

<p>npm ERR! &nbsp; &nbsp; npm run rm-dist &amp; npm run webpack</p>

<p>npm ERR! You can get information on how to open an issue for this project with:</p>

<p>npm ERR! &nbsp; &nbsp; npm bugs samyoc-blog</p>

<p>npm ERR! Or if that isn&#39;t available, you can get their info via:</p>

<p>npm ERR! &nbsp; &nbsp; npm owner ls samyoc-blog</p>

<p>npm ERR! There is likely additional logging output above.</p>

<p>&nbsp;</p>

<p>npm ERR! Please include the following file with any support request:</p>

<p>npm ERR! &nbsp; &nbsp; /usr/myapps/samyoc/npm-debug.log</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第52篇《Npm编译报错Exit status 137 verbose stack at EventEmitter.<anonymous> 》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.03.12</span>
          </div>
          <div class="discuss-comment">其实也是因为内存不够了</div>
        </div><div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment"><p><a href='/home/26969'>@刹那花开</a>可以的，你可以试试</p></div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2020.09.28</span>
            </div>
          </div><div class="discuss-child">
            <div class="discuss-comment"><p>那一楼的方法能解决问题吗</p></div>
            <div class="discuss-meta">
              <span class="discuss-user">刹那花开</span>
              <span class="discuss-time">2020.09.28</span>
            </div>
          </div></div>
        </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.03.10</span>
          </div>
          <div class="discuss-comment">遇到这个问题是因为NPM的版本低了，我当前的版本v6.10.3，然后升级到最新的稳定版本就没问题了。

升级NPM也有个非常简便的方式
1.  npm install -g n   安装n模块
2.  n stable   安装稳定版本
然后搞定！</div>
        </div></div>
    {% endraw %}
  </div>
<div>
