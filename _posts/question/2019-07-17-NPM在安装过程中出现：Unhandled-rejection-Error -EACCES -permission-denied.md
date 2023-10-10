---
layout: question
title:  NPM在安装过程中出现：Unhandled rejection Error  EACCES  permission denied
date:   2019-07-17T03:07:58.000Z
description: Unhandled rejection Error  EACCES  permission denied, open...
img: 
author: Winter
category: question
answer: 1
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>Unhandled rejection Error: EACCES: permission denied, open '/Users/yld/.npm/_cacache/index-v5/a7/80/54166f62863511a69247af817869d4d5b8b460b7deb990eafca09bd3dbb6'</p><p>npm ERR! cb() never called!</p><p>npm ERR! This is an error with npm itself. Please report this error at:<br>npm ERR! &nbsp; &nbsp; &lt;https://npm.community&gt;</p><p>npm ERR! A complete log of this run can be found in:<br>npm ERR! &nbsp; &nbsp; /Users/yld/.npm/_logs/2019-07-16T07_02_11_947Z-debug.log</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/1/images/1563332868893.png"></figure></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2019.08.14</span>
          </div>
          <div class="discuss-comment"><p>重置npm相关文件夹的权限，并分配给当前用户</p><p>sudo chown -R $USER:$GROUP ~/.npm<br>sudo chown -R $USER:$GROUP ~/.config</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
