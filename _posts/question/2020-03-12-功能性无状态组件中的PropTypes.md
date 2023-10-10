---
layout: question
title:  功能性无状态组件中的PropTypes
date:   2020-03-12T12:18:11.000Z
description: 不使用类，如何在反应的功能性无状态组件中使用PropTypes？export const Header = (props) => (   <div>...
img: 
author: Harry小卤蛋
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不使用类，如何在反应的功能性无状态组件中使用PropTypes？</font></font></p>

<pre><code>export const Header = (props) =&gt; (<font></font>
   &lt;div&gt;hi&lt;/div&gt;<font></font>
)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1306篇《功能性无状态组件中的PropTypes》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方的文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示如何使用ES6组件类做到这一点，但同样适用于无状态的功能组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>yarn add</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://www.npmjs.com/package/prop-types" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的道具类型包装</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果你还没有准备好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在定义无状态功能组件之后，在导出之前，添加您的propTypes（如果需要，还可以使用defaultProps）。</font></font></p>

<pre><code>import React from "react";<font></font>
import PropTypes from "prop-types";<font></font>
<font></font>
const Header = ({ name }) =&gt; &lt;div&gt;hi {name}&lt;/div&gt;;<font></font>
<font></font>
Header.propTypes = {<font></font>
  name: PropTypes.string<font></font>
};<font></font>
<font></font>
// Same approach for defaultProps too<font></font>
Header.defaultProps = {<font></font>
  name: "Alan"<font></font>
};<font></font>
<font></font>
export default Header;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
