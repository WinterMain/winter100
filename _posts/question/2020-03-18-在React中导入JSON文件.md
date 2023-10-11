---
layout: question
title:  在React中导入JSON文件
date:   2020-03-18T07:48:35.000Z
description: 我是React的新手，正在尝试DATA从外部文件导入JSON 变量。我收到以下错误：  找不到模块“ ./customData.json”有人...
img: 
author: 西门Near
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React的新手，正在尝试</font></font><code>DATA</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从外部文件</font><font style="vertical-align: inherit;">导入JSON </font><font style="vertical-align: inherit;">变量。</font><font style="vertical-align: inherit;">我收到以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到模块“ ./customData.json”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以帮我吗？</font><font style="vertical-align: inherit;">如果我的</font></font><code>DATA</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量位于</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部JSON文件中</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">但没有该</font><font style="vertical-align: inherit;">变量，</font><font style="vertical-align: inherit;">则它可以工作</font><font style="vertical-align: inherit;">。</font></font></p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

index.js

</font></font><pre><code>import React, {Component} from 'react';<font></font>
import ReactDOM from 'react-dom';<font></font>
import customData from './customData.json';<font></font>
import Profile from './components/profile';<font></font>
import Hobbies from './components/hobbies';<font></font>
<font></font>
class App extends Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Profile name={this.props.profileData.name}imgUrl={this.props.profileData.imgURL} /&gt;<font></font>
        &lt;Hobbies hobbyList={this.props.profileData.hobbyList}/&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
ReactDOM.render(&lt;App profileData={DATA}/&gt;, document.querySelector('.container'));<font></font>
</code></pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

hobbies.js

</font></font><pre><code>import React, {Component} from 'react';<font></font>
<font></font>
var Hobbies = React.createClass({<font></font>
  render: function(){<font></font>
    var hobbies = this.props.hobbyList.map(function(hobby, index){<font></font>
        return (&lt;li key={index}&gt;{hobby}&lt;/li&gt;);<font></font>
    });<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            &lt;h5&gt;My hobbies:&lt;/h5&gt;<font></font>
            &lt;ul&gt;<font></font>
                {hobbies}<font></font>
            &lt;/ul&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
  } <font></font>
});<font></font>
<font></font>
export default Hobbies;<font></font>
</code></pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

profile.js

</font></font><pre><code>import React from 'react';<font></font>
<font></font>
var Profile = React.createClass({<font></font>
render: function(){<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            &lt;h3&gt;{this.props.name}&lt;/h3&gt;<font></font>
            &lt;img src={this.props.imgUrl} /&gt;<font></font>
        &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
});<font></font>
<font></font>
export default Profile<font></font>
</code></pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

customData.json

</font></font><pre><code>var DATA = {    <font></font>
    name: 'John Smith',<font></font>
    imgURL: 'http://lorempixel.com/100/100/',<font></font>
    hobbyList: ['coding', 'writing', 'skiing']<font></font>
}<font></font>
<font></font>
export default DATA<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2037篇《在React中导入JSON文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿古一梅</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>export default DATA</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或  </font></font><code>module.exports = DATA</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTony泡芙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请存储扩展名为.js的JSON文件，并确保JSON应位于同一目录中。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
