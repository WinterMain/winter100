---
layout: question
title:  Next.js（React）和ScrollMagic
date:   2020-03-20T06:13:29.000Z
description: 我想实现一个动画来淡化本示例中的部分，使其进入我的应用程序。因此，我看了一下fullPage.js。但是，由于我需要将其集成到具有服务器端渲染功能的N...
img: 
author: 西门
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想实现一个动画来淡化</font></font><a href="https://alvarotrigo.com/fullPage/extensions/fading-effect.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本示例中的部分</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使其进入我的应用程序。</font><font style="vertical-align: inherit;">因此，我看了一下fullPage.js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于我需要将其集成到</font><font style="vertical-align: inherit;">具有服务器端渲染功能</font><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/zeit/next.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> React应用中，因此我无法使用它，因为它在不支持SSR的jQuery上进行中继。</font><font style="vertical-align: inherit;">因此，我尝试了</font></font><a href="http://scrollmagic.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ScrollMagic的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运气</font><font style="vertical-align: inherit;">，它不依靠jQuery。</font><font style="vertical-align: inherit;">但是，这也并不支持SSR（需求</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），因此我在初始化它</font></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的方法，甚至装好了那里（就像它的建议</font></font><a href="https://github.com/zeit/next.js/issues/219#issuecomment-258966784" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它目前最初可以正常工作，但是一旦您更改页面并完成AJAX请求并且Next.js替换页面，就会引发错误（请参见下文）：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到节点</font></font></p>
</blockquote>

<p><a href="https://www.samyoc.com//uploads/users/24088/images/thumbnails/1584684682674.png" data-src="https://www.samyoc.com//uploads/users/24088/images/1584684682674.png" rel="noreferrer"><img src="https://i.stack.imgur.com/4akZa.png" alt="将ScrollMagic与Next.js一起使用时未找到Node React错误"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾尝试在中的AJAX请求之前销毁ScrollMagic </font></font><code>componentWillUnmount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是没有运气。</font><font style="vertical-align: inherit;">我不知道出了什么问题，不幸的是，我找不到关于带有React或Next.js的ScrollMagic的文档。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的整个组件：</font></font></p>

<pre><code>import React from 'react';<font></font>
import PropTypes from 'prop-types';<font></font>
<font></font>
class VerticalSlider extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.ScrollMagic = null;<font></font>
    this.controller = null;<font></font>
    this.scenes = [];<font></font>
    this.container = React.createRef();<font></font>
  }<font></font>
<font></font>
  componentDidMount() {<font></font>
    if (this.container.current) {<font></font>
      // Why "require" here?<font></font>
      // https://github.com/zeit/next.js/issues/219#issuecomment-393939863<font></font>
      // We can't render the component server-side, but we will still render<font></font>
      // the HTML<font></font>
      // eslint-disable-next-line global-require<font></font>
      this.ScrollMagic = require('scrollmagic');<font></font>
      this.initScroller();<font></font>
    }<font></font>
  }<font></font>
<font></font>
  componentWillUnmount() {<font></font>
    this.scenes.forEach(scene =&gt; {<font></font>
      scene.destroy();<font></font>
    });<font></font>
    this.controller.destroy();<font></font>
    this.scenes = [];<font></font>
    this.controller = null;<font></font>
  }<font></font>
<font></font>
  initScroller() {<font></font>
    try {<font></font>
      this.controller = new this.ScrollMagic.Controller();<font></font>
      if (this.container.current !== null &amp;&amp; this.container.current.children) {<font></font>
        [...this.container.current.children].forEach(children =&gt; {<font></font>
          const scene = new this.ScrollMagic.Scene({<font></font>
            triggerElement: children,<font></font>
            duration: window.innerHeight * 1.5,<font></font>
            triggerHook: 0,<font></font>
            reverse: true<font></font>
          });<font></font>
          scene.setPin(children);<font></font>
          this.scenes.push(scene);<font></font>
        });<font></font>
        this.controller.addScene(this.scenes);<font></font>
      }<font></font>
    } catch (e) {<font></font>
      console.log(e);<font></font>
    }<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div ref={this.container}&gt;<font></font>
        {this.props.sections}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
VerticalSlider.propTypes = {<font></font>
  sections: PropTypes.arrayOf(PropTypes.node).isRequired<font></font>
};<font></font>
<font></font>
export default VerticalSlider;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2529篇《Next.js（React）和ScrollMagic》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
