---
layout: question
title:  MEAN.js和MEAN.io之间的区别
date:   2020-03-18T08:48:02.000Z
description: 我想使用MEAN JavaScript Stack，但是我注意到有两个不同的堆栈，它们都有自己的网站和安装方法：mean.js和mean.io。因此，我问...
img: 
author: LEvaGreen
category: question
answer: 3
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用MEAN JavaScript Stack，但是我注意到有两个不同的堆栈，它们都有自己的网站和安装方法：mean.js和mean.io。</font><font style="vertical-align: inherit;">因此，我问自己一个问题：“我使用哪个？”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了回答这个问题，我问社区是否可以解释这两者之间的区别？</font><font style="vertical-align: inherit;">以及是否有利弊？</font><font style="vertical-align: inherit;">因为它们看起来和我非常相似。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2068篇《MEAN.js和MEAN.io之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞云</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令我惊讶的是，没有人提到Yeoman生成器</font></font><a href="https://github.com/DaftMonk/generator-angular-fullstack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular-fullstack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它是Yeoman社区排名第一的发电机，目前</font></font><a href="http://yeoman.io/generators/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发电机页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上有1490颗星，而</font><font style="vertical-align: inherit;">Mean.js的是81颗星（考虑到新的MEANJS是多么，这是不公平的比较）。</font><font style="vertical-align: inherit;">在我撰写本文时，它似乎已得到积极维护，并且版本为2.05。</font><font style="vertical-align: inherit;">与MEANJS不同，它不使用Swig做模板。</font><font style="vertical-align: inherit;">可以安装内置护照。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋梅</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MEAN</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">M</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ongoDB，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">E</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> xpress，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ngular和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">N</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ode.js </font><font style="vertical-align: inherit;">的首字母缩写。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“堆栈”中标识这些技术的组合使用。</font><font style="vertical-align: inherit;">有没有这样的事“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> MEAN框架”。</font></font></p>

<p><a href="http://www.linkedin.com/in/liorkesos" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">利奥尔Kesos</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://www.linnovate.net" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Linnovate</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了这种混乱的优势。</font><font style="vertical-align: inherit;">他购买了域名MEAN.io，并将一些代码放在</font></font><a href="https://github.com/linnovate/mean" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/linnovate/mean</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">幸运的是，他们得到了很多宣传，并且有越来越多关于MEAN的文章和视频。</font><font style="vertical-align: inherit;">当您使用Google“平均值框架”时，mean.io是列表中的第一位。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，</font></font><a href="https://github.com/linnovate/mean" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/linnovate/mean上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的代码</font><font style="vertical-align: inherit;">似乎设计</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不好</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2月，我本人陷入陷阱。</font><font style="vertical-align: inherit;">网站mean.io的设计引人注目，Github仓库拥有1000颗以上的星星。</font><font style="vertical-align: inherit;">对质量提出质疑的想法甚至都没有浮现在我的脑海。</font><font style="vertical-align: inherit;">我开始尝试它，但是花了很短的时间才偶然发现不起作用的事情，并使代码感到困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提交历史也令人担忧。</font><font style="vertical-align: inherit;">他们多次重新设计了代码和目录结构，并且合并新的更改非常耗时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于mean.io和mean.js代码的好处在于，它们具有Bootstrap集成。</font><font style="vertical-align: inherit;">它们还通过</font></font><a href="http://passportjs.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PassportJs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行了Facebook，Github，Linkedin等身份验证，</font><font style="vertical-align: inherit;">并在MongoDB的后端上与AngularJS同步了前端模型的模型示例（文章）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Linnovate的网站： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Linnovate是以色列领先的开源公司，拥有该国经验最丰富的团队，致力于创建高端开源解决方案。</font><font style="vertical-align: inherit;">Linnovate是以色列唯一一家为企业建立和维护其下一个Web项目的企业提供AZ服务的公司。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从网站看来，他们的核心技能是Drupal（一种PHP内容管理系统），直到最近他们才开始使用Node.js和AngularJS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我正在阅读</font></font><a href="http://blog.meanjs.org/post/76726660228/forking-out-of-an-open-source-conflict" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mean.js博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，事情变得更加清晰。</font><font style="vertical-align: inherit;">我的理解是，主要的Javascript开发人员（Amos Haviv）离开Linnovate从事Mean.js的工作，离开MEAN.io项目的是那些刚开始接触Node.js开发人员的人，他们正在缓慢地理解事物的工作方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将来情况可能会发生变化，但现在我会避免使用mean.io。</font><font style="vertical-align: inherit;">如果您正在寻找快速入门的样板，那么Mean.js似乎比mean.io更好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是几种应用程序启动器/生成器和其他技术（包括MEAN.js，MEAN.io和cleverstack）的并排比较。</font><font style="vertical-align: inherit;">我会在寻找时间时不断添加替代方法，并且随着时间的流逝，潜在提供的好处列表也在不断增长。</font><font style="vertical-align: inherit;">如今，它已达到1600年左右。如果有人想帮助提高其准确性或完整性，请单击下一个链接，并就您所知道的内容进行问卷调查。</font></font></p>

<p><a href="http://www.dancancro.com/technology-questionnaires/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较应用程序技术项目</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统从该数据库中生成如下报告：</font></font></p>

<p><a href="http://dancancro.com/meanio_vs_meanjs.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MeanJS与MeanIO权衡报告</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
