---
layout: question
title:  Bootstrap-Vue和Bootstrap 4之间的比较
date:   2020-03-12T06:45:39.000Z
description: 我已经使用Vuejs开发前端，现在必须对其进行样式设置。我遇到了   Bootstrap-vue。最好使用Bootstrap 4或Bootstrap-vu...
img: 
author: YLD
category: question
answer: 1
tags: twitter-bootstrap Bootstrap
topic: Bootstrap
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用Vuejs开发前端，现在必须对其进行样式设置。</font><font style="vertical-align: inherit;">我遇到了   </font></font><a href="https://bootstrap-vue.js.org/docs/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap-vue</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">最好使用Bootstrap 4或Bootstrap-vue。</font><font style="vertical-align: inherit;">它们是相同的还是使用Bootstap-vue有优势。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些Bootstrap 4功能需要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Popper.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这些功能将与Vue冲突。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这些函数直接修改DOM。Vue不会跟踪这些修改。使用jQuery进行的任何更改都可能被Vue覆盖。）</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些功能包括：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">词缀</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警报</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纽扣</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轮播</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坍方</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">落下</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模态</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹窗</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">滚动式</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工具提示</font></font></li>
</ul>

<p><code>Bootstrap-vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将大多数这些功能转换为Vue，以使其按预期工作。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想使用Bootstrap CSS而不是它的JS相关功能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么</font></font><code>Bootstrap 4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">将更加直接，并且需要更少的时间来学习如何</font></font><code>Bootstrap-vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用</font></font><code>Bootstrap-vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>If you are not sure, <code>Bootstrap-vue</code> seems like a less risky choice.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
