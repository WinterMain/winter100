---
layout: question
title:  React PropTypes：允许一个道具使用不同类型的PropType
date:   2020-03-10T06:04:18.000Z
description: 我有一个组件可以接收其大小的道具。该prop可以是字符串或数字ex："LARGE"或17。我可以让React.PropTypes知道在propType...
img: 
author: 小胖泡芙
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个组件可以接收其大小的道具。</font><font style="vertical-align: inherit;">该prop可以是字符串或数字ex：</font></font><code>"LARGE"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>17</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以让React.PropTypes知道在propTypes验证中这可以是另一个吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未指定类型，则会收到警告： </font></font><code>prop type `size` is invalid; it must be a function, usually from React.PropTypes.</code></p>

<pre><code>MyComponent.propTypes = {<font></font>
    size: React.PropTypes<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第486篇《React PropTypes：允许一个道具使用不同类型的PropType》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能对您有用：</font></font></p>

<pre><code>height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子古一蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>size: PropTypes.oneOfType([<font></font>
  PropTypes.string,<font></font>
  PropTypes.number<font></font>
]),<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多：</font></font><a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用PropTypes进行类型检查</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
