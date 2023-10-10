---
layout: question
title:  使VueJS和jQuery发挥出色
date:   2020-03-19T02:13:26.000Z
description: 这个问题与尚未使用的intl-tel-input和vuejs2一起使用 /相似。而VueJS使用prop作为具有解决方案的数据属性值，但有点解释“环境...
img: 
author: Stafan阳光
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font><a href="https://stackoverflow.com/q/42792983/2012740"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与尚未使用的intl-tel-input和vuejs2一起使用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> /相似</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><a href="https://stackoverflow.com/q/43236848/2012740"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VueJS使用prop作为</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有解决方案的</font><a href="https://stackoverflow.com/q/43236848/2012740"><font style="vertical-align: inherit;">数据属性值</font></a><font style="vertical-align: inherit;">，但有点解释“环境”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，长话短说，我正在动态设置一个新的引导程序选项卡（标题和URL），然后尝试使用来（重新）绑定某些功能</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的Vue方法中</font><font style="vertical-align: inherit;">添加以下行</font></font><a href="https://github.com/thecodeassassin/bootstrap-remote-data/blob/master/js/bootstrap-remote-tabs.js#L258" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/thecodeassassin/bootstrap-remote-data/blob/master/js/bootstrap-remote-tabs.js#L258</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将应用该功能，但前提是我触发了换两次。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与第一个（未回答）问题相同的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以解释一下</font></font><code>vueJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的工作原理</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">以及如何解决问题，希望无需重写jQuery包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的变量似乎落后了一步。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LE： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经为提到的相关问题准备了一支笔：</font><a href="https://codepen.io/AngelinCalu/pen/LWvwNq" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://codepen.io/AngelinCalu/pen/LWvwNq" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codepen.io/AngelinCalu/pen/LWvwNq</font></font></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGO西里</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使Vue与其他DOM操纵工具包完美配合的方法是将它们完全隔离：如果要使用jQuery操纵DOM小部件，则不要同时在其上使用Vue（反之亦然）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甲</font></font><a href="https://vuejs.org/v2/examples/select2.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装部件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">充当桥，其中的Vue可以与组件进行交互和组分可以操纵使用jQuery（或其他）其内部的DOM元素。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="https://vuejs.org/v2/api/#Options-Lifecycle-Hooks" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期挂钩</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之外的jQuery选择器</font><font style="vertical-align: inherit;">是一种不好的代码味道。</font><font style="vertical-align: inherit;">您</font></font><code>validatePhoneNumber</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用选择器和DOM操作调用，但是您使用Vue处理</font></font><code>keydown</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font><font style="vertical-align: inherit;">您需要使用jQuery处理此小部件上的所有内容。</font><font style="vertical-align: inherit;">不要使用Vue设置其类或phone_number或处理其事件。</font><font style="vertical-align: inherit;">这些都是DOM操作。</font><font style="vertical-align: inherit;">如前所述，如果将其包装在组件中，则可以将props传递给该组件，并且可以使用jQuery从这些props中设置class和phone_number。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
