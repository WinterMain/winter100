---
layout: question
title:  什么是平面捆绑？为什么Rollup在这方面比Webpack更好？
date:   2020-03-18T11:11:17.000Z
description: 最近，我一直在研究汇总，并发现它与Webpack和其他捆绑软件有何不同。我遇到的一件事是，由于“扁平捆绑”，对图书馆来说更好。这是基于一条推文和最近的Re...
img: 
author: 阿飞飞云
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我一直在研究</font></font><a href="https://github.com/rollup/rollup" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">汇总，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并发现它与Webpack和其他捆绑软件有何不同。</font><font style="vertical-align: inherit;">我遇到的一件事是，由于“扁平捆绑”，对图书馆来说更好。</font><font style="vertical-align: inherit;">这是基于一条</font></font><a href="https://twitter.com/trueadm/status/849367888683307008" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">推文</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/facebook/react/pull/9327" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近的React的PR来使用Rollup的PR</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以我的经验，由于对平面捆绑（例如吊装）进行了更好的优化，因此Rollup在构建库方面更好。</font><font style="vertical-align: inherit;">1/2</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将应用程序与代码拆分等捆绑在一起，Webpack 2可能对您更好。</font><font style="vertical-align: inherit;">2/2</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不完全确定我理解那意味着什么。</font><font style="vertical-align: inherit;">平面捆绑指的是什么？</font><font style="vertical-align: inherit;">我知道Rollup的文档中提到了</font></font><a href="https://github.com/rollup/rollup#tree-shaking" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">树状摇晃</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以帮助减小捆绑包的大小，但是</font></font><a href="https://webpack.js.org/guides/tree-shaking/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack也有这样做的方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也许我只是不完全理解这个概念。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这不是关于汇总与Webpack的比较问题。</font><font style="vertical-align: inherit;">对于对此感兴趣的人</font></font><a href="https://webpack.github.io/docs/comparison.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，Webpack提供</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了一个</font><a href="https://webpack.github.io/docs/comparison.html" rel="noreferrer"><font style="vertical-align: inherit;">比较表</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这主要是在问什么是平面捆绑？</font><font style="vertical-align: inherit;">汇总可能会在内部做些什么来实现这一目标？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2170篇《什么是平面捆绑？为什么Rollup在这方面比Webpack更好？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
