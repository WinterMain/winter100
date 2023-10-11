---
layout: question
title:  使用JSX react / react-in-jsx-scope时，“反应”必须在范围内？
date:   2020-03-12T06:35:27.000Z
description: 我是Angular开发人员，是React的新手，这是简单的react Component，但无法正常工作 import react , { Compo...
img: 
author: 宝儿小小
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Angular开发人员，是React的新手，这是简单的react Component，但无法正常工作 </font></font></p>

<pre><code>import react , { Component}  from 'react';<font></font>
import         { render   }  from 'react-dom';<font></font>
<font></font>
class TechView extends Component {<font></font>
<font></font>
    constructor(props){<font></font>
       super(props);<font></font>
       this.state = {<font></font>
           name:'Gopinath'<font></font>
       }<font></font>
    }<font></font>
    render(){<font></font>
        return(<font></font>
            &lt;span&gt;hello Tech View&lt;/span&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
export default TechView;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
 使用JSX react / react-in-jsx-scope时，“ React”必须在范围内</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第994篇《使用JSX react / react-in-jsx-scope时，“反应”必须在范围内？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
