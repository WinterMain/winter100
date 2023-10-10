---
layout: question
title:  用于React NextJS的映射对象JSX中的onClick不起作用
date:   2020-04-07T03:50:32.000Z
description: 我有一个组件：import React, { Component } from 'react';import ImageItem from '../...
img: 
author: 神乐小哥Near
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个组件：</font></font></p>

<pre><code>import React, { Component } from 'react';<font></font>
import ImageItem from '../components/ImageItem';<font></font>
<font></font>
class ImageList extends Component {<font></font>
<font></font>
    handleClick() {<font></font>
        console.log('Testing testing...'); // ---&gt; This is not working.<font></font>
    }<font></font>
    render() {<font></font>
        const images = this.props.images.map(image =&gt; {<font></font>
            return (<font></font>
                &lt;ImageItem<font></font>
                    onClick={this.handleClick}<font></font>
                    key={image.id}<font></font>
                    image={image.src}<font></font>
                    title={image.title}<font></font>
                /&gt;<font></font>
            );<font></font>
        });<font></font>
<font></font>
        return (<font></font>
            &lt;div className="image-list" ref={el =&gt; (this.el = el)}&gt;<font></font>
                {images}<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
export default ImageList;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当onClick不在映射功能内部时，它不会控制台注销任何内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的ImageItem组件： </font></font></p>

<pre><code>import React, { Component } from 'react';<font></font>
<font></font>
class ImageItem extends Component {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;a href="#"&gt;<font></font>
                &lt;img<font></font>
                    className="portfolio-image"<font></font>
                    src={this.props.image}<font></font>
                    alt={this.props.title}<font></font>
                /&gt;<font></font>
            &lt;/a&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
export default ImageItem;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里做错了什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有将点击处理程序分配给您的组件，它应该看起来像这样：</font></font></p>

<pre><code>class ImageItem extends Component {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;a href="#" onClick={this.props.onClick}&gt;<font></font>
                &lt;img<font></font>
                    className="portfolio-image"<font></font>
                    src={this.props.image}<font></font>
                    alt={this.props.title}<font></font>
                /&gt;<font></font>
            &lt;/a&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
export default ImageItem;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
