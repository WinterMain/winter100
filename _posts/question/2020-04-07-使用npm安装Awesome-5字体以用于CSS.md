---
layout: question
title:  使用npm安装Awesome 5字体以用于CSS
date:   2020-04-07T03:41:13.000Z
description: 就像标题说的那样，我不能出于scss的目的使用npm安装真棒字体5。尝试安装版本5根据https //fontawesome.com/how-to...
img: 
author: 阿飞
category: question
answer: 1
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像标题说的那样，我不能出于scss的目的使用npm安装真棒字体5。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试安装版本5</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://fontawesome.com/how-to-use/use-with-node-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fontawesome.com/how-to-use/use-with-node-js的使用</font></font></a></p>

<p><code>npm i --save @fortawesome/fontawesome</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看node_modules中的安装，我看不到要挂接到的scss文件。</font><font style="vertical-align: inherit;">我尝试在我的app.scss文件中包含styles.css文件，但这没有用。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对版本4的设置：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json
</font></font><code>"font-awesome": "^4.7.0",</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.scss
</font></font><code>@import "node_modules/font-awesome/scss/font-awesome.scss";</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法
</font></font><code>&lt;i className="fa fa-save icon controlItem"&gt;&lt;/i&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易如反掌。</font><font style="vertical-align: inherit;">如何使用版本5实现此目标？</font><font style="vertical-align: inherit;">我使用了错误的包裹吗？
</font></font></p><hr><p></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，仅使用@ fortawesome / fontawesome并不足够。</font><font style="vertical-align: inherit;">软件包已拆分，因此您还必须选择
 </font></font><code>npm install --save @fortawesome/fontawesome-free-regular
</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
“导入我仍然没有成功”</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4094篇《使用npm安装Awesome 5字体以用于CSS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐JinJin</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对FontAwesome 5的理解是，他们使用javascript将内联SVG添加到DOM。</font></font></p>

<p>Take a look at this article: <a href="https://fontawesome.com/how-to-use/svg-with-js" rel="nofollow noreferrer">SVG with JS</a></p>

<p>Rather than compiling an scss file, you just need to include this javascipt one: <code>fontawesome-all.js</code>, any icons you add to your HTML should then be converted to SVGs automatically.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
