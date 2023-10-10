---
layout: question
title:  不会调用getDerivedStateFromProps
date:   2020-03-20T06:10:48.000Z
description: 我用的阵营16.3.1和next.js。然后将getDerivedStateFromProps放在扩展PureComponent的类中。这是代码：...
img: 
author: 小胖
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵营16.3.1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
然后将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getDerivedStateFromProps</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在扩展</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PureComponent</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的类中</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是代码：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Header.js</font></font></p>
</blockquote>

<pre><code>import { PureComponent } from 'react'<font></font>
...<font></font>
<font></font>
export default class Header extends PureComponent {<font></font>
  constructor (props) {<font></font>
    super(props)<font></font>
<font></font>
    this.colorAnimationProps = {<font></font>
      animationDuration: '0.4s',<font></font>
      animationFillMode: 'forwards'<font></font>
    }<font></font>
<font></font>
    this.colorAnimationStyle = {<font></font>
      toColor: {<font></font>
        animationName: 'toColor',<font></font>
        ...this.colorAnimationProps<font></font>
      },<font></font>
      toTransparent: {<font></font>
        animationName: 'toTransparent',<font></font>
        ...this.colorAnimationProps<font></font>
      }<font></font>
    }<font></font>
<font></font>
    this.state = {<font></font>
      colorAnimation: {},<font></font>
      headerModal: null<font></font>
    }<font></font>
  }<font></font>
<font></font>
  componentDidMount () {<font></font>
    if (this.props.isColor) {<font></font>
      this.setState({colorAnimation: this.colorAnimationStyle.toColor})<font></font>
    }<font></font>
  }<font></font>
<font></font>
  static getDerivedStateFromProps (nextProps, prevState) {<font></font>
    console.log('should go here')<font></font>
    if (nextProps.isColor) {<font></font>
      return {colorAnimation: this.colorAnimationStyle.toColor}<font></font>
    }<font></font>
    return {colorAnimation: this.colorAnimationStyle.toTransparent}<font></font>
  }<font></font>
<font></font>
  render () {<font></font>
    ...<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是修改道具的父母：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js</font></font></p>
</blockquote>

<pre><code>import { PureComponent } from 'react'<font></font>
<font></font>
...<font></font>
import Header from '../components/Header'<font></font>
import Layout from '../components/Layout'<font></font>
import { withReduxSaga } from '../redux/store'<font></font>
<font></font>
class Index extends PureComponent {<font></font>
  constructor (props) {<font></font>
    super(props)<font></font>
<font></font>
    this.state = {<font></font>
      isHeaderColor: false<font></font>
    }<font></font>
  }<font></font>
<font></font>
  componentDidMount () {<font></font>
    if (window.pageYOffset &gt; 50) {<font></font>
      this.setState({isHeaderColor: true})<font></font>
    }<font></font>
<font></font>
    window.addEventListener('scroll', (e) =&gt; {<font></font>
      if (window.pageYOffset &gt; 50) {<font></font>
        this.setState({isHeaderColor: true})<font></font>
      } else {<font></font>
        this.setState({isHeaderColor: false})<font></font>
      }<font></font>
    })<font></font>
  }<font></font>
<font></font>
  render () {<font></font>
    return (<font></font>
      &lt;Layout url={this.props.url}&gt;<font></font>
        &lt;Header isColor={this.state.isHeaderColor} /&gt;<font></font>
        ...<font></font>
      &lt;/Layout&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
<font></font>
export default withReduxSaga(Index)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：道具更改时未调用getDerivedStateFromProps。</font><font style="vertical-align: inherit;">至少，它应该执行console.log，但事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有人可以帮我吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2525篇《不会调用getDerivedStateFromProps》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请确保您有两个的正确版本</font></font><code>react</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font></strong> <code>react-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"react": "^16.3.1",<font></font>
"react-dom": "^16.3.1"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱LEY神无</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到</font></font><a href="https://github.com/zeit/next.js/releases/tag/6.0.0-canary.2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在next.JS的6.0.0-canary.2版本中修补</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了对该钩子的支持</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，我猜测您使用的是旧版本。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
