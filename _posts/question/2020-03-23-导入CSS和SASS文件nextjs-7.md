---
layout: question
title:  导入CSS和SASS文件nextjs 7
date:   2020-03-23T06:42:54.000Z
description: 我希望能够在项目的任何文件中导入两种类型的文件。    import 'styles/index.scss';    import 'styles/...
img: 
author: 神无
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够在项目的任何文件中导入两种类型的文件。</font></font></p>

<pre><code>    import 'styles/index.scss';<font></font>
    import 'styles/build/_style.css'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的是要注意我使用Nextjs 7和webpack 4（nextjs7附带）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Nextjs 6中，我们曾经在next.config.js中使用</font></font></p>

<pre><code>const withCSS = require('@zeit/next-css')<font></font>
const withSass = require('@zeit/next-sass')<font></font>
<font></font>
const commonsChunkConfig = (config, test = /\.css$/) =&gt; {<font></font>
  config.plugins = config.plugins.map(plugin =&gt; {<font></font>
      if (<font></font>
          plugin.constructor.name === 'CommonsChunkPlugin' &amp;&amp;<font></font>
          plugin.minChunks != null<font></font>
  ) {<font></font>
      const defaultMinChunks = plugin.minChunks;<font></font>
      plugin.minChunks = (module, count) =&gt; {<font></font>
          if (module.resource &amp;&amp; module.resource.match(test)) {<font></font>
              return true;<font></font>
          }<font></font>
          return defaultMinChunks(module, count);<font></font>
      };<font></font>
  }<font></font>
  return plugin;<font></font>
  });<font></font>
  return config;<font></font>
};<font></font>
<font></font>
module.exports = withCSS(withSass({<font></font>
  webpack: (config, { isServer }) =&gt; {<font></font>
      config = commonsChunkConfig(config, /\.(sass|scss|css)$/)<font></font>
      return config<font></font>
  }<font></font>
}))<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2863篇《导入CSS和SASS文件nextjs 7》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
