---
layout: question
title:  angular-cli是否可以删除未使用的CSS？
date:   2020-03-24T10:26:15.000Z
description: 到目前为止，我可以用角度cli创建的最小束是通过运行   ng build --aot true -prod我想知道构建过程是否还会从引导程序...
img: 
author: 卡卡西Near
category: question
answer: 2
tags: css Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我可以用角度cli创建的最小束是通过运行 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng build --aot true -prod</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道构建过程是否还会从引导程序中删除未使用的CSS类？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有，如何向其中添加类似purifycss的库？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2018年4月</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于他的问题，我仍然没有找到任何令人满意的解决方案，尤其是与带有角度的延迟加载模块兼容的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3650篇《angular-cli是否可以删除未使用的CSS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您可以看看</font></font><a href="https://github.com/Angular-RU/angular-cli-webpack" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Angular-RU/angular-cli-webpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这使您可以更改Webpack配置而无需弹出。</font><font style="vertical-align: inherit;">并猜测第一个示例是什么：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从CSS中删除未使用的选择器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我自己没有尝试过，但是可以选择。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道这是否可以作为答案，因为它与angular-cli并没有真正的关系，但是我以崇高的文字打开了项目，然后启动</font></font><a href="https://packagecontrol.io/packages/UnusedCssFinder" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UnusedCssFinder</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，突出显示了css文件中所有未使用的属性。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
