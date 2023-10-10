---
layout: question
title:  Node应用启动时报错cwd = process.cwd();
date:   2017-11-25T09:10:47.000Z
description: 在Node项目中重新编译后经常会在控制台上看到以下错误：yanglidongdeMacBook-Pro dist yanglidong$ nodemon --i...
img: 
author: Winter
category: question
answer: 1
tags: 前端的一些坑
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>在Node项目中重新编译后经常会在控制台上看到以下错误：</p>

<p>&nbsp;</p>

<pre>
yanglidongdeMacBook-Pro:dist yanglidong$ nodemon --inspect server.js
path.js:1149
          cwd = process.cwd();
                        ^

Error: ENOENT: no such file or directory, uv_cwd
    at Error (native)
    at Object.resolve (path.js:1149:25)
    at Function.Module._resolveLookupPaths (module.js:390:17)
    at Function.Module._resolveFilename (module.js:460:31)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object. (/usr/local/lib/node_modules/nodemon/bin/nodemon.js:3:11)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
</pre>

<p>&nbsp;</p>

<p>仔细检查后发现代码没有问题，就是莫名其妙会有这个问题。</p>
</div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2017.11.25</span>
          </div>
          <div class="discuss-comment">其实这个问题，并不是代码的问题，而是执行启动的的命令所在的目录已经被删掉了，而在编译完成之后又重新生成，如上面我的终端目录dist，编译前会删掉，完成编译后会再次生成，最后造成了终端的识别错误。</div>
        </div>
        
        <div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment"><a id='118'>@江山如画</a>在编译完成后，终端重新进入该目录，然后执行命令就可以了</div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2018.10.29</span>
            </div>
          </div><div class="discuss-child">
            <div class="discuss-comment">那你知道怎么处理吗？我也遇到了这个问题</div>
            <div class="discuss-meta">
              <span class="discuss-user">江山如画</span>
              <span class="discuss-time">2018.10.18</span>
            </div>
          </div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
