---
layout: question
title:  在Flask和jinja2中使用sass
date:   2020-03-19T04:40:59.000Z
description: 我想在我的Flask应用程序中包含一个sass编译器。有一种普遍接受的方法吗？...
img: 
author: 伽罗Tony
category: question
answer: 1
tags: python CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在我的Flask应用程序中包含一个sass编译器。</font><font style="vertical-align: inherit;">有一种普遍接受的方法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2374篇《在Flask和jinja2中使用sass》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Tom</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前，存在一个解决此问题的更好方法，即</font></font><a href="http://pythonhosted.org/Flask-Scss/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flask-Scss</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要安装它： </font></font><code>pip install Flask-Scss</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在配置应用程序后（可能在您的</font></font><code>manage.py</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中）</font><font style="vertical-align: inherit;">实例化一个Scss对象</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>from flask import Flask<font></font>
from flask.ext.scss import Scss<font></font>
<font></font>
app = Flask(__name__)<font></font>
Scss(app)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，扩展名将在</font></font><code>{app.root_dir}/assets/scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或中</font><font style="vertical-align: inherit;">查找.scss文件，</font></font><code>{app.root_dir}/assets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将生成的.css文件放入</font></font><code>{default_static_dir}/css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或中</font></font><code>{default_static_dir}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
