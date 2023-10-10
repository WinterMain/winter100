---
layout: question
title:  GIT命令行每次pull都需要输入密码，Sourcetree 提示 Permission denied (publickey)？
date:   2018-02-26T09:44:10.000Z
description: 从 Git 远程仓库 clone 代码的方式有两种，一种是 Https ，另一种是 SSH 。如果使用 Https 方式，不需要任何配置，但是当你 clone ...
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
    <div class="article-content"><p>从 Git 远程仓库 clone 代码的方式有两种，一种是 Https ，另一种是 SSH 。如果使用 Https 方式，不需要任何配置，但是当你 clone 下来后会发现，每次 commit 提交代码，都需要你输入 Git 远程仓库的密码（使用终端操作会这样，有些 Git 管理客户端可能不会），这样就极大的影响了我们的工作效率。这时候就需要使用 SSH 方式了，使用这种方式就不再需要每次都输入密码这么麻烦了，但是需要配置 SSH Key，但是配置了SSH Key，却会遇上GIT命令行每次pull都需要输入密码，Sourcetree 提示 Permission denied (publickey)的问题。</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第46篇《GIT命令行每次pull都需要输入密码，Sourcetree 提示 Permission denied (publickey)？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.02.26</span>
          </div>
          <div class="discuss-comment">找了很久解决这个，也是一句话搞定

在终端输入：ssh-add ~/.ssh/id_rsa</div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
