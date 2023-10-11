---
layout: question
title:  使用动态键对对象进行PropTypes检查
date:   2020-03-18T07:48:12.000Z
description: React有很多使用PropTypes来检查道具价值的方法。我通常使用的是React.PropTypes.shape({...})。但是，最近我遇到一种情...
img: 
author: JinJin乐逆天
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React有很多使用PropTypes来检查道具价值的方法。</font><font style="vertical-align: inherit;">我通常使用的是</font></font><code>React.PropTypes.shape({...})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，最近我遇到一种情况，即我有一个对象，该对象内部将具有动态键/值。</font><font style="vertical-align: inherit;">我知道每个键都应该是一个字符串（采用已知格式），每个值都应该是一个int。</font><font style="vertical-align: inherit;">即使使用自定义道具验证功能，它仍然假设您知道道具的钥匙。</font><font style="vertical-align: inherit;">如何使用PropTypes检查对象/形状的键和值是否正确？</font></font></p>

<pre><code>...<font></font>
someArray: React.PropTypes.arrayOf(React.PropTypes.shape({<font></font>
  // How to specify a dynamic string key? Keys are a date/datetime string<font></font>
  &lt;dynamicStringKey&gt;: React.PropTypes.number<font></font>
}))<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再说一遍：我至少要检查每个键的值是一个数字。</font><font style="vertical-align: inherit;">理想情况下，我还希望能够检查密钥本身是否为格式正确的字符串。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2036篇《使用动态键对对象进行PropTypes检查》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinStafanL</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要仅验证值，可以使用</font></font><code>React.PropTypes.objectOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>...<font></font>
someArray: React.PropTypes.arrayOf(<font></font>
  React.PropTypes.objectOf(React.PropTypes.number)<font></font>
)<font></font>
...<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GO</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是...</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象具有动态键</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我不想检查）</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值具有固定的数据结构</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我想检查）</font></font></strong></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基础数据结构的形状是已知的，可以检查</font></font></p>

<pre><code>// An object with property values of a certain shape<font></font>
optionalObject: PropTypes.objectOf(<font></font>
  PropTypes.shape({<font></font>
    color: PropTypes.string.isRequired,<font></font>
    fontSize: PropTypes.number<font></font>
  })<font></font>
);<font></font>
</code></pre></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对于我的问题，缺少的部分是</font></font><code>PropTypes.objectOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从那里您可以使用动态键创建任何类型的结构。</font><font style="vertical-align: inherit;">结合起来</font></font><code>PropTypes.oneOfType</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也变得非常灵活。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用</font></font><a href="https://facebook.github.io/immutable-js/docs/#/Map" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Immutable.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/HurricaneJames/react-immutable-proptypes/issues/22" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-immutable-proptypes</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库的用户，可以使用</font></font><code>.mapOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">method。</font></font></p>

<pre><code>someArray: ImmutablePropTypes.listOf(ImmutablePropTypes.mapOf({<font></font>
  React.PropTypes.number, // validates values<font></font>
  React.PropTypes.string, // validates keys<font></font>
}))<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
