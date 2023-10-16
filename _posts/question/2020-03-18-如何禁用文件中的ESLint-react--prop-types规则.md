---
layout: question
title:  如何禁用文件中的ESLint react / prop-types规则？
date:   2020-03-18T07:47:45.000Z
description: 我使用React和ESLint用eslint-plugin-react。我想disable在prop-types一个文件中的规则。var Reac...
img: 
author: 村村老丝
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>ESLint</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>eslint-plugin-react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font></font><code>disable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>prop-types</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个文件中的规则。</font></font></p>

<pre class="lang-js prettyprint-override"><code>var React = require('react'); <font></font>
var Model = require('./ComponentModel');<font></font>
<font></font>
var Component = React.createClass({<font></font>
/* eslint-disable react/prop-types */<font></font>
    propTypes: Model.propTypes,<font></font>
/* eslint-enable react/prop-types */<font></font>
    render: function () {<font></font>
        return (<font></font>
            &lt;div className="component"&gt;<font></font>
                {this.props.title}<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2035篇《如何禁用文件中的ESLint react / prop-types规则？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时我在与主要文件相同的文件中包含小的组件。</font><font style="vertical-align: inherit;">那里的propTypes似乎过于矫kill过正。</font><font style="vertical-align: inherit;">然后我做这样的事情</font></font></p>

<pre><code>// eslint-disable-next-line react/prop-types<font></font>
const RightArrow = ({ onPress, to }) =&gt; (&lt;TouchableOpacity onPress={() =&gt; onPress(to)} style={styles.rightArrow}&gt;&lt;Chevrons.chevronRight size={25} color="grey" /&gt;&lt;/TouchableOpacity&gt;);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanDavaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只有一个文件要禁用道具类型验证，则可以使用： </font></font></p>

<pre><code>/* eslint react/prop-types: 0 */
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有多个文件，则可以</font></font><code>.eslintrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根目录中添加一条规则来禁用道具类型验证：</font></font></p>

<pre><code>{<font></font>
 "plugins": [<font></font>
     "react"<font></font>
  ],<font></font>
  "rules": {<font></font>
    "react/prop-types": 0<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要了解更多规则，您可以查看</font></font><a href="https://c9.io/burnnat/eslint-plugin-react" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来解决我的问题；不便之处，您还可以阅读</font></font><a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">eslint-plugin-react</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的github文档，以了解如何使用各种选项禁用或启用它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙GO</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将其放在文件顶部即可：</font></font></p>

<pre><code>/* eslint react/prop-types: 0 */
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Tom</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须做：</font></font></p>

<pre><code>/* eslint react/forbid-prop-types: 0 */
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这并</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作：</font></font></p>

<pre><code>/* eslint react/prop-types: 0 */
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在.eslintrc文件中全局禁用：</font></font></p>

<pre><code>{<font></font>
    "rules": {<font></font>
        "react/forbid-prop-types": 0<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
