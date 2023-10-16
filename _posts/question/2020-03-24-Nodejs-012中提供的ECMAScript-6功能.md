---
layout: question
title:  Node.js 0.12中提供的ECMAScript 6功能
date:   2020-03-24T09:03:53.000Z
description: 最近，随着升级的Google v8 JavaScript引擎v3.28.73发行了新的稳定版Node.js（0.12）。不使用该--harmony标志...
img: 
author: L神乐
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，随着升级的Google v8 JavaScript引擎</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v3.28.73</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发行了新的稳定版Node.js（0.12）</font><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不使用该</font></font><code>--harmony</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">，Node.js当前具有哪些ECMAScript 6功能</font><font style="vertical-align: inherit;">？</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经检查了几个声称列出ES 6功能的站点，但是所有这些站点似乎都已过时-最突出的是，</font></font><a href="http://kangax.github.io/compat-table/es6/#node" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在更新为当前Node.js的状态为0.12</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），因为其中一些功能列为：</font></font><code>--harmony</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现其中一些默认情况下处于启用状态（地图，集合，符号等）时，</font><font style="vertical-align: inherit;">需要使用该</font><font style="vertical-align: inherit;">标志。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="http://node.green/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特定于节点的表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已提供</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，尝试仅针对v8引擎搜索此信息会提供太多最新信息-当前的v8版本为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.2。*</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这比Node.js所使用的要早得多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这个问题（及其答案）将成为Node.js开发人员现在可以使用的ES 6功能的全面摘要。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前知道在Node.js 0.12中启用的ES 6功能：</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图，集合/ WeakMap，WeakSet</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象观察</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">承诺</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.isInteger</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.isSafeInteger</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.isNaN</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.EPSILON</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.MIN_SAFE_INTEGER</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.MAX_SAFE_INTEGER</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数学

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.clz32</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.imul</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。标志</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.log10</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.log2</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.log1p</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.expm1</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.cosh</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.sinh</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.tanh</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.acosh</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.asinh</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.atanh</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.trunc</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.fround</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.cbrt</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.hypot</font></font></li>
</ul></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3523篇《Node.js 0.12中提供的ECMAScript 6功能》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6的功能分阶段逐步扩展到Node。</font><font style="vertical-align: inherit;">Node使用Google的V8作为JavaScript引擎。</font><font style="vertical-align: inherit;">Node支持的功能意味着它必须首先在V8中实现，然后Node团队必须将其合并到Node.js中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google团队大约每六周发布一次新版本的V8，然后由Node团队来使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动策划的语言功能列表很不错，但很快就会过时。</font><font style="vertical-align: inherit;">Node 0.12不再流行，但是通常在新版本的Node推出后，手动创建的列表就会过时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是两种检查节点版本支持哪些功能的方法，而无需依赖静态列表。</font><font style="vertical-align: inherit;">有关进一步的阅读和使用它们的更详细的示例，您可以检查</font></font><a href="http://bytearcher.com/articles/how-to-check-if-node-implements-es6-language-feature/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“如何检查Node.js是否支持ES 6语言功能”</font></font></a> </p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃1简易-兼容性表</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态生成的列表依靠小型测试来确认语言功能的存在，从而可以保持最新状态。</font><font style="vertical-align: inherit;">这样的流行列表之一就是kangax.github.io/compat-table/es6/。</font><font style="vertical-align: inherit;">我们仅对Node功能感兴趣，因此您可以使用</font></font></p>

<p><a href="http://node.green" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://node.green</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">利用与kangax网站相同的数据。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃2 Hard-回溯V8版本</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node使用V8引擎，因此确定Node中包括哪个V8版本可以告诉我们支持哪些ES6语言功能。</font><font style="vertical-align: inherit;">您可以通过找出与Node捆绑在一起的V8版本</font></font><code>node -p process.versions.v8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>$ node -p process.versions.v8<font></font>
4.6.85.31<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，使用Google的V8项目资源，您可以找到每个版本中实现了哪些功能。</font><font style="vertical-align: inherit;">V8项目保留了一个</font></font><a href="https://bugs.chromium.org/p/v8/issues/list?can=1&amp;q=label%3Aharmony" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题跟踪器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以在其中找到用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和声</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">标记的ES6 +功能</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
