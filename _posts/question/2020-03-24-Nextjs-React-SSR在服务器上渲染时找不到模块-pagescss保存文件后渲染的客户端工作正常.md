---
layout: question
title:  Next.js-React SSR在服务器上渲染时找不到模块“ ./page.scss”（保存文件后，渲染的客户端工作正常）
date:   2020-03-24T03:18:12.000Z
description: 使用create-react-app软件包时，您可以在.scss键入文件时将.css-files 编译为-files。然后import './Header...
img: 
author: 番长
category: question
answer: 0
tags: css React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包时，您可以在</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键入文件时将</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-files </font><font style="vertical-align: inherit;">编译为</font><font style="vertical-align: inherit;">-files。</font><font style="vertical-align: inherit;">然后</font></font><code>import './Header.css';</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在React组件文件中进行操作，并应用样式。</font><font style="vertical-align: inherit;">使用您的开发工具并查看样式的来源很容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next.js试图让所有人使用Styled-JSX将样式表内联到JSX文件中，这与Web组件（或Polymer）的工作方式类似。</font><font style="vertical-align: inherit;">我个人非常不喜欢这种方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他问题：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的IDE（Webstorm）不支持Styled-JSX（即使解决方法看起来也很糟糕）；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的开发工具（Chrome）不支持Styled-JSX-没有引用定义样式的行；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使我的源代码看起来像乱七八糟。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Styled-JSX中包含第三方CSS解决方案？</font><font style="vertical-align: inherit;">现在我是否应该添加一个</font></font><code>&lt;link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到我的</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">对于外部的一切？</font><font style="vertical-align: inherit;">带宽的最佳使用情况如何？</font><font style="vertical-align: inherit;">引用内部的文件也</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感到尴尬和糟糕。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，只需将规则添加到</font></font><code>next.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对吗？</font></font></p>

<pre><code>module.exports = {<font></font>
    webpack: (config, { dev }) =&gt; {<font></font>
        config.module.rules.push(<font></font>
            {<font></font>
                test: /\.(css|scss)/,<font></font>
                loader: "style-loader!css-loader"<font></font>
            }<font></font>
        );<font></font>
        return config<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后就是</font></font><code>import './Page.scss';</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不用担心，它是有效的CSS，甚至还没有SASS，我知道我现在还没有包括sass-loader。我尝试首先使其简单。）</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新页面（服务器端渲染）：不起作用；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存文件（保存文件后动态加载）：确实有效（直到重新加载页面）；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一直抱怨</font></font><a href="https://www.google.co.uk/search?q=cannot+find+module+scss+webpack" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，很多Google也在那里</font><a href="https://www.google.co.uk/search?q=cannot+find+module+scss+webpack" rel="nofollow noreferrer"><font style="vertical-align: inherit;">找到</font></a><font style="vertical-align: inherit;">了。</font><font style="vertical-align: inherit;">今天没有有效的解决方案。</font></font></li>
</ol>

<p>So, why doesn't it work with SSR?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3299篇《Next.js-React SSR在服务器上渲染时找不到模块“ ./page.scss”（保存文件后，渲染的客户端工作正常）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
