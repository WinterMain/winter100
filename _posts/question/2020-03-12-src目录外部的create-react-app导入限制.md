---
layout: question
title:  src目录外部的create-react-app导入限制
date:   2020-03-12T02:56:20.000Z
description: 我正在使用create-react-app。我正在尝试从文件夹中的文件中调用公用文件夹中的图片src/components。我收到此错误消息。  ....
img: 
author: 飞云Jim梅
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用create-react-app。</font><font style="vertical-align: inherit;">我正在尝试从文件夹中的文件中调用公用文件夹中的图片</font></font><code>src/components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我收到此错误消息。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">./src/components/website_index.js找不到模块：您试图导入属于项目src /目录之外的../../public/images/logo/WC-BlackonWhite.jpg。</font><font style="vertical-align: inherit;">不支持src /以外的相对导入。</font><font style="vertical-align: inherit;">您可以将其移动到src /中，也可以从项目的node_modules /中向其添加符号链接。</font></font></p>
</blockquote>

<p><code>import logo from '../../public/images/logo_2016.png';
&lt;img className="Header-logo" src={logo} alt="Logo" /&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我读过很多东西，说您可以导入路径，但这仍然对我不起作用。</font><font style="vertical-align: inherit;">任何帮助将不胜感激。</font><font style="vertical-align: inherit;">我知道有很多这样的问题，但是它们都告诉我要导入徽标或图像，因此很明显我在全局图中缺少某些内容。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第908篇《src目录外部的create-react-app导入限制》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加上Bartek Maciejiczek的答案，这就是Craco的外观：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");<font></font>
const path = require("path");<font></font>
<font></font>
module.exports = {<font></font>
  webpack: {<font></font>
    configure: webpackConfig =&gt; {<font></font>
      webpackConfig.resolve.plugins.forEach(plugin =&gt; {<font></font>
        if (plugin instanceof ModuleScopePlugin) {<font></font>
          plugin.allowedFiles.add(path.resolve("./config.json"));<font></font>
        }<font></font>
      });<font></font>
      return webpackConfig;<font></font>
    }<font></font>
  }<font></font>
};</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><a href="https://stackoverflow.com/a/55298684/10459242"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lukas Bach解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/timarney/react-app-rewired" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-app-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> rewired来修改webpack配置是一个好方法，但是，我不会排除整个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ModuleScopePlugin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而是将可以导入到src外部的特定文件列入白名单：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config-overrides.js</font></font></strong></p>

<pre><code>const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");<font></font>
const path = require("path");<font></font>
<font></font>
module.exports = function override(config) {<font></font>
  config.resolve.plugins.forEach(plugin =&gt; {<font></font>
    if (plugin instanceof ModuleScopePlugin) {<font></font>
      plugin.allowedFiles.add(path.resolve("./config.json"));<font></font>
    }<font></font>
  });<font></font>
<font></font>
  return config;<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的解决方案是fork </font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，实际上在官方文档中提到过，请参阅：</font></font><a href="https://facebook.github.io/create-react-app/docs/alternatives-to-ejecting" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹出的替代方法</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要弹出，可以</font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="https://github.com/harrysolovay/rescripts" rel="nofollow noreferrer"><font style="vertical-align: inherit;">rescripts库</font></a><font style="vertical-align: inherit;">修改</font><font style="vertical-align: inherit;">配置</font></font><a href="https://github.com/harrysolovay/rescripts" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以这样：</font></font></p>

<pre><code>module.exports = config =&gt; {<font></font>
  const scopePluginIndex = config.resolve.plugins.findIndex(<font></font>
    ({ constructor }) =&gt; constructor &amp;&amp; constructor.name === "ModuleScopePlugin"<font></font>
  );<font></font>
<font></font>
  config.resolve.plugins.splice(scopePluginIndex, 1);<font></font>
<font></font>
  return config;<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要</font></font><code>WC-BlackonWhite.jpg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录。</font><font style="vertical-align: inherit;">该</font></font><code>public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录用于将直接在HTML中链接的静态文件（例如favicon），而不是要直接导入捆绑包中的内容。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
