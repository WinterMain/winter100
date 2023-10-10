---
layout: question
title:  使用webpack，ES6，ReactJS导入JavaScript文件和调用函数
date:   2020-03-16T07:24:23.000Z
description: 尝试做一些我想会很简单的事情。我想导入一个现有的JavaScript库，然后调用它的函数。因此，例如，我想导入blah.js，然后调用blah（）。i...
img: 
author: 乐米亚
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试做一些我想会很简单的事情。</font><font style="vertical-align: inherit;">我想导入一个现有的JavaScript库，然后调用它的函数。</font><font style="vertical-align: inherit;">因此，例如，我想导入blah.js，然后调用blah（）。</font></font></p>

<pre><code>import React from 'react';<font></font>
import {blah} from 'blah/js/blah.js';<font></font>
<font></font>
class MyClass extends React.Component {<font></font>
    constructor() {<font></font>
        super();<font></font>
    }<font></font>
<font></font>
    componentDidMount() {<font></font>
        window.addEventListener('resize', this.handleResize);<font></font>
    }<font></font>
<font></font>
    componentWillUnmount() {<font></font>
        window.removeEventListener('resize', this.handleResize);<font></font>
    }<font></font>
<font></font>
    handleResize() {<font></font>
        blah.blah();<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
          ....<font></font>
    }<font></font>
}<font></font>
<font></font>
export default MyClass;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是想知道要完成这项工作我需要做什么神奇的组合。</font><font style="vertical-align: inherit;">也许我只是错过了重点。</font><font style="vertical-align: inherit;">该示例给出错误“ TypeError：_blah.blah未定义”。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1799篇《使用webpack，ES6，ReactJS导入JavaScript文件和调用函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
