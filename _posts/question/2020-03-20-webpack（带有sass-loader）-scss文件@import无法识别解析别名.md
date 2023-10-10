---
layout: question
title:  webpack（带有sass-loader）-scss文件\`import无法识别解析别名
date:   2020-03-20T06:01:17.000Z
description: 我的项目结构：webpack.config.jsapp--   --> src   ---->> components   ------>>...
img: 
author: 古一
category: question
answer: 0
tags: sass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的项目结构：</font></font></p>

<pre><code>webpack.config.js<font></font>
app--<font></font>
<font></font>
   --&gt; src<font></font>
   ----&gt;&gt; components<font></font>
   ------&gt;&gt;&gt; myComponent.js<font></font>
   ------&gt;&gt;&gt; myComponent.scss<font></font>
<font></font>
   --&gt; styles<font></font>
   ----&gt;&gt; variables.scss<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在webpack.config module.exports中：</font></font></p>

<pre><code>...<font></font>
resolve: {<font></font>
    alias: {<font></font>
       styles: path.join(__dirname, 'app/styles') <font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的文件-myComponent.scss中：</font></font></p>

<pre><code>@import "styles/variables";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建bundle.js时出现此错误：</font></font></p>

<pre><code>Module build failed:<font></font>
@import "styles/variables";<font></font>
^<font></font>
      File to import not found or unreadable: styles/variables<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何@import sass文件中的别名？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
