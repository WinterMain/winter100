---
layout: question
title:  如何在Node.js中进行远程REST调用？任何CURL？
date:   2020-03-24T01:49:18.000Z
description: 在Node.js中，除了使用子进程进行CURL调用之外，还有没有办法对远程服务器REST API 进行CURL调用并获取返回数据？我还需要将请求标头设...
img: 
author: 卡卡西路易前端
category: question
answer: 1
tags: 休息 Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，除了使用子进程进行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CURL</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用之外，还有没有办法对远程服务器</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">REST</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> API </font><font style="vertical-align: inherit;">进行CURL调用</font><font style="vertical-align: inherit;">并获取返回数据？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还需要将请求标头设置为远程</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">REST</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用，还需要在GET（或POST）中查询字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了这个：</font><a href="http://blog.nodejitsu.com/jsdom-jquery-in-5-lines-on-nodejs" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://blog.nodejitsu.com/jsdom-jquery-in-5-lines-on-nodejs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.nodejitsu.com/jsdom-jquery-in-5-lines-on-nodejs</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但它没有显示任何方法来发布查询字符串。    </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3175篇《如何在Node.js中进行远程REST调用？任何CURL？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用</font></font><a href="https://npmjs.org/package/restler"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">restler</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行网络服务调用，它的工作原理很</font><a href="https://npmjs.org/package/restler"><font style="vertical-align: inherit;">吸引人</font></a><font style="vertical-align: inherit;">，而且非常简洁。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
