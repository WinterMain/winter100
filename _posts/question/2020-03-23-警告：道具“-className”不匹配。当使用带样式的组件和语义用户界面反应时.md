---
layout: question
title:  警告：道具“ className”不匹配。当使用带样式的组件和语义用户界面反应时
date:   2020-03-23T07:52:40.000Z
description: 我使用以下代码从顶部开始对Button进行边距处理：const makeTopMargin = (elem) => {    return styl...
img: 
author: 卡卡西Near
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下代码从顶部开始对Button进行边距处理：</font></font></p>

<pre><code>const makeTopMargin = (elem) =&gt; {<font></font>
    return styled(elem)`<font></font>
        &amp;&amp; {<font></font>
            margin-top: 1em !important;<font></font>
        }<font></font>
    `;<font></font>
}<font></font>
<font></font>
const MarginButton = makeTopMargin(Button);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我使用</font></font><code>MarginButton</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点时，都会出现此错误：</font></font><code>Warning: Prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">className</font></font><code>did not match. Server: "ui icon left labeled button sc-bwzfXH MjXOI" Client: "ui icon left labeled button sc-bdVaJa fKCkqX"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="https://codesandbox.io/s/xvmq9jjzzq" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到生成的内容</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2953篇《警告：道具“ className”不匹配。当使用带样式的组件和语义用户界面反应时》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PropType错误是运行时错误，它将使您知道预期传递给prop的数据不是预期的。</font><font style="vertical-align: inherit;">当组件在服务器上呈现，然后在客户端的DOM中呈现时，在组件上设置的className属性看起来并不相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于看起来您正在使用服务器端渲染，因此需要确保您的类名称是确定性的。</font><font style="vertical-align: inherit;">该错误向您显示了由</font></font><code>styled-components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器上的库</font><font style="vertical-align: inherit;">创建的类</font><font style="vertical-align: inherit;">以及它与DOM有何不同。</font><font style="vertical-align: inherit;">对于通常没有确定性类名的库，您需要查看高级配置。</font></font><a href="https://www.styled-components.com/docs/advanced#issues-with-specificity" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下样式化组件文档中有关SSR的特异性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该为样式组件安装babel插件，并在.babelrc中启用该插件</font></font></p>

<pre><code>npm install --save-dev babel-plugin-styled-components
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    [<font></font>
      "babel-plugin-styled-components"<font></font>
    ]<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
