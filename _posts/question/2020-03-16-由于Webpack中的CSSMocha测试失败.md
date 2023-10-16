---
layout: question
title:  由于Webpack中的CSS，Mocha测试失败
date:   2020-03-16T07:20:31.000Z
description: 我是Mocha的新手，我正在尝试使用它来测试一个简单的React组件。如果react组件没有任何CSS样式，则测试将通过，但是如果React组件内的标签包...
img: 
author: L阳光
category: question
answer: 3
tags: 单元测试 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Mocha的新手，我正在尝试使用它来测试一个简单的React组件。</font><font style="vertical-align: inherit;">如果react组件没有任何CSS样式，则测试将通过，但是如果React组件内的标签包含任何className，则会引发语法错误：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Testing.react.js</font></font></p>

<pre><code>import React from 'react';<font></font>
<font></font>
export default class Testing extends React.Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;section&gt;<font></font>
        &lt;form&gt;<font></font>
          &lt;input type="text" /&gt;<font></font>
        &lt;/form&gt;<font></font>
      &lt;/section&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">testing.jsx</font></font></p>

<pre><code>import {<font></font>
  React,<font></font>
  sinon,<font></font>
  assert,<font></font>
  expect,<font></font>
  TestUtils<font></font>
} from '../../test_helper';<font></font>
<font></font>
import TestingSample from '../../../app/components/Testing.react.js';<font></font>
<font></font>
describe('TestingSample component', function(){<font></font>
    before('render and locate element', function(){<font></font>
        var renderedComponent = TestUtils.renderIntoDocument(<font></font>
            &lt;TestingSample /&gt;<font></font>
        );<font></font>
<font></font>
        var inputComponent = TestUtils.findRenderedDOMComponentWithTag(<font></font>
            renderedComponent, 'input'<font></font>
        );<font></font>
<font></font>
        this.inputElement = inputComponent.getDOMNode();<font></font>
    });<font></font>
<font></font>
    it('&lt;input&gt; should be of type "text"', function () {<font></font>
        assert(this.inputElement.getAttribute('type') === 'text');<font></font>
    });<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试将通过： </font></font></p>

<pre><code>&gt; mocha --opts ./test/javascripts/mocha.opts --compilers js:babel/register --recursive test/javascripts/**/*.jsx<font></font>
<font></font>
<font></font>
  TestSample component<font></font>
    ✓ &lt;input&gt; should be of type "text"<font></font>
<font></font>
<font></font>
  1 passing (44ms)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在输入标签内添加className之后，出现错误： </font></font></p>

<pre><code>import React from 'react';<font></font>
import testingStyle from '../../scss/components/landing/testing.scss';<font></font>
<font></font>
export default class Testing extends React.Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;section&gt;<font></font>
        &lt;form&gt;<font></font>
          &lt;input type="text" className="testingStyle.color" placeholder="Where would you like to dine" /&gt;     <font></font>
        &lt;/form&gt;<font></font>
      &lt;/section&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试结果：</font></font></p>

<pre><code>SyntaxError: /Users/../../../Documents/project/app/scss/components/landing/testing.scss: Unexpected token (1:0)<font></font>
&gt; 1 | .color {<font></font>
    | ^<font></font>
  2 |   color: red;<font></font>
  3 | }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在网上搜索过，但到目前为止还没有运气。</font><font style="vertical-align: inherit;">我想念什么吗？</font><font style="vertical-align: inherit;">请帮助我或指出正确的方向，将不胜感激。</font><font style="vertical-align: inherit;">我当前正在使用：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Node Express Server </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
React </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
React-router </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Webpack </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Babel </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Mocha </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Chai </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Sinon </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Sinon-Chai</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1789篇《由于Webpack中的CSS，Mocha测试失败》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚宝儿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些希望在其中处理的人，</font></font><code>jest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需为样式文件添加处理程序即可：</font></font></p>

<pre><code>// package.json<font></font>
{<font></font>
  "jest": {<font></font>
    "moduleNameMapper": {<font></font>
      "\\.(css|less|scss|sass)$": "&lt;rootDir&gt;/__mocks__/styleMock.js"<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
// __mocks__/styleMock.js<font></font>
module.exports = {};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="https://facebook.github.io/jest/docs/en/webpack.html#handling-static-assets" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西达蒙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种简单的方法是导入“忽略样式”。</font><font style="vertical-align: inherit;">在您的测试课程中..</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimTom</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font></font><code>babel/register</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式挂钩可以忽略样式导入：</font></font></p>

<p><a href="https://www.npmjs.com/package/ignore-styles" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/ignore-styles</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装它：</font></font></p>

<p><code>npm install --save-dev ignore-styles</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行没有样式的测试：</font></font></p>

<p><code>mocha --require ignore-styles</code></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
