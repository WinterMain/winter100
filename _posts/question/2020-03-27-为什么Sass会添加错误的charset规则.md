---
layout: question
title:  为什么Sass会添加错误的\`charset规则？
date:   2020-03-27T12:10:58.000Z
description: 我用 sass --watch scss css让Sass /css为每个SCSS文件自动创建CSS文件（并将它们放在目录中）（来自我的/scs...
img: 
author: 米亚
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用 </font></font></p>

<pre><code>sass --watch scss:css
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让Sass </font></font><code>/css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为每个SCSS文件</font><font style="vertical-align: inherit;">自动创建CSS文件（并将它们放在</font><font style="vertical-align: inherit;">目录中）（来自我的</font></font><code>/scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的SCSS文件中，我有以下内容：</font></font></p>

<pre><code>.foo::before {<font></font>
    content: "▶";<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在浏览器中测试网页时，不会显示“播放”字符-而是看到一堆带有纸箱和其他重音的怪异字母。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我检查了生成的CSS文件，并在第一行中注意到了这一点：</font></font></p>

<pre><code>@charset "CP852";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我手动将其更改为：</font></font></p>

<pre><code>@charset "UTF-8";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致我的“播放”按钮被正确渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，Sass为什么将字符集设置为</font></font><code>"CP852"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我正在PhpStorm中编写SCSS文件，该文件报告SCSS文件确实是UTF-8编码的（我在PhpStorm的状态栏中看到了该文件）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3803篇《为什么Sass会添加错误的\`charset规则？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像</font></font><a href="//stackoverflow.com/a/20470106/1696030" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> @ Alireza-Fatahi所述</font><font style="vertical-align: inherit;">，您可以在CSS输出中保存一行，而在外部文件中添加默认字符集，方法是</font></font><strong><code>config.rb</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目文件夹中</font><font style="vertical-align: inherit;">添加以下行</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>Encoding.default_external = "UTF-8"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试添加</font></font><code>@charset "UTF-8";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到原始SCSS文件中，SASS不应覆盖它/然后添加它自己的文件。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
