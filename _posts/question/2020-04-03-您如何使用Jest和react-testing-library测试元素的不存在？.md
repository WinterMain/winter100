---
layout: question
title:  您如何使用Jest和react-testing-library测试元素的不存在？
date:   2020-04-03T03:37:45.000Z
description: 我有一个要使用Jest和react-testing-library编写单元测试的组件库。基于某些道具或事件，我想验证是否未渲染某些元素。getByTe...
img: 
author: 乐米亚
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个要使用Jest和react-testing-library编写单元测试的组件库。</font><font style="vertical-align: inherit;">基于某些道具或事件，我想验证是否未渲染某些元素。</font></font></p>

<p><code>getByText</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，，</font></font><code>getByTestId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等引发错误，</font></font><code>react-testing-library</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果找不到该元素，则会导致该</font></font><code>expect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数触发</font><font style="vertical-align: inherit;">之前测试失败</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您如何使用react-testing-library测试是否在笑话中不存在？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3969篇《您如何使用Jest和react-testing-library测试元素的不存在？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>queryBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>queryAllBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如你所说，</font></font><code>getBy*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>getAllBy*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有找到引发错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，等效的方法</font></font><code>queryBy*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>queryAllBy*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是返回</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询</font></font></strong></p>
  
  <p><code>queryBy*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询返回查询的第一个匹配节点，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有元素匹配则</font><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这对于声明不存在的元素很有用。</font><font style="vertical-align: inherit;">如果找到多个匹配项，则抛出该异常（改为使用queryAllBy）。</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">queryAllBy</font></font></strong>
  <code>queryAllBy*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询返回查询的所有匹配节点的数组，</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有元素匹配</font><font style="vertical-align: inherit;">，则返回一个空数组（</font><font style="vertical-align: inherit;">）。</font></font></p>
</blockquote>

<p><a href="https://testing-library.com/docs/dom-testing-library/api-queries#queryby" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://testing-library.com/docs/dom-testing-library/api-queries#queryby</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对于您提到的特定两个，您将改为使用</font></font><code>queryByText</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>queryByTestId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但它们适用于所有查询，而不仅仅是这两个。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
