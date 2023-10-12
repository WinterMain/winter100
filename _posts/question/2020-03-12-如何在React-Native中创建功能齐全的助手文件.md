---
layout: question
title:  如何在React Native中创建功能齐全的助手文件？
date:   2020-03-12T02:19:59.000Z
description: 尽管存在类似的问题，但我无法创建具有多个功能的文件。由于RN的发展非常迅速，因此不确定该方法是否已经过时。如何在React Native中创建全局助手功能...
img: 
author: Tom小小蛋蛋
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管存在类似的问题，但我无法创建具有多个功能的文件。</font><font style="vertical-align: inherit;">由于RN的发展非常迅速，因此不确定该方法是否已经过时。</font></font><a href="https://stackoverflow.com/questions/33539774/how-to-create-global-helper-function-in-react-native"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在React Native中创建全局助手功能？</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React Native的新手。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做的是创建一个包含许多可重用功能的js文件，然后将其导入组件中并从那里调用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我一直在做的事情看起来很愚蠢，但是我知道您会要求这样做的，所以在这里。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试创建一个类名Chandu并像这样导出它</font></font></p>



<pre class="lang-js prettyprint-override"><code>'use strict';<font></font>
import React, { Component } from 'react';<font></font>
import {<font></font>
  AppRegistry,<font></font>
  Text,<font></font>
  TextInput,<font></font>
  View<font></font>
} from 'react-native';<font></font>
<font></font>
<font></font>
export default class Chandu extends Component {<font></font>
<font></font>
  constructor(props){<font></font>
    super(props);<font></font>
    this.papoy = {<font></font>
      a : 'aaa'<font></font>
    },<font></font>
    this.helloBandu = function(){<font></font>
      console.log('Hello Bandu');<font></font>
    },<font></font>
  }<font></font>
<font></font>
  helloChandu(){<font></font>
    console.log('Hello Chandu');<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，将其导入任何必需的组件中。</font></font></p>

<pre class="lang-js prettyprint-override"><code>import Chandu from './chandu';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后这样称呼它 </font></font></p>

<pre class="lang-js prettyprint-override"><code>console.log(Chandu);<font></font>
console.log(Chandu.helloChandu);<font></font>
console.log(Chandu.helloBandu);<font></font>
console.log(Chandu.papoy);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一起作用的是第一个console.log，这意味着我正在导入正确的路径，但没有其他任何路径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请问正确的方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第871篇《如何在React Native中创建功能齐全的助手文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
