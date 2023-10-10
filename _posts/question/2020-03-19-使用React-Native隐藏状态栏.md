---
layout: question
title:  使用React Native隐藏状态栏
date:   2020-03-19T03:41:24.000Z
description: 使用React Native开发时如何隐藏iOS或Android的状态栏？我已经导入了StatusBar，但是我相信还有StatusBarIOS和一个St...
img: 
author: Gil猿
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React Native开发时如何隐藏iOS或Android的状态栏？</font><font style="vertical-align: inherit;">我已经导入了StatusBar，但是我相信还有StatusBarIOS和一个StatusBar for Android。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2314篇《使用React Native隐藏状态栏》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从版本0开始。</font><font style="vertical-align: inherit;">至今（0.55 / 2018年6月）</font></font></em></p>

<pre><code>&lt;StatusBar hidden /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">归功于</font><a href="https://stackoverflow.com/a/36186625/3377049"><font style="vertical-align: inherit;">此答案中</font></a><font style="vertical-align: inherit;">的第一个评论</font></font><a href="https://stackoverflow.com/a/36186625/3377049"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住首先</font><font style="vertical-align: inherit;">按照此处的其他答案</font><font style="vertical-align: inherit;">导入</font></font><a href="https://facebook.github.io/react-native/docs/statusbar.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">StatusBar组件</font></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanHarry</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢导入</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">StatusBar</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件并将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">给</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏</font></font></strong><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">属性</font></strong><font style="vertical-align: inherit;">的简单方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以很简单：</font></font></p>

<pre class="lang-js prettyprint-override"><code>import React from "react";<font></font>
import { StatusBar, View, Text } from "react-native";<font></font>
<font></font>
class App extends React.Component {<font></font>
<font></font>
    render() {<font></font>
       return (<font></font>
        &lt;View&gt;<font></font>
          &lt;StatusBar hidden={true} /&gt;<font></font>
          &lt;Text&gt;Hello React Native!&lt;/Text&gt;<font></font>
        &lt;/View&gt;<font></font>
       )<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenJinJin猿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弄清楚如何隐藏状态栏。</font><font style="vertical-align: inherit;">首先，</font></font><a href="https://facebook.github.io/react-native/docs/statusbarios.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不建议使用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> StatusBarIOS，</font><font style="vertical-align: inherit;">因此您需要导入</font></font><code>StatusBar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后只需在渲染顶部包括以下代码片段即可：</font></font></p>

<pre><code>&lt;StatusBar hidden /&gt;
</code></pre>

<p><a href="https://facebook.github.io/react-native/docs/statusbar.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应本机文档 </font></font><code>StatusBar</code></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
