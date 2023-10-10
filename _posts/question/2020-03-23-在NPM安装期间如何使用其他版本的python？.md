---
layout: question
title:  在NPM安装期间如何使用其他版本的python？
date:   2020-03-23T06:17:10.000Z
description: 我可以通过终端访问运行centos 5.9的VPS，并安装了默认的python 2.4.3。我还通过以下命令安装了python 2.7.3 ：（我使用ma...
img: 
author: 蛋蛋猿
category: question
answer: 5
tags: python Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过终端访问运行centos 5.9的VPS，并安装了默认的python 2.4.3。</font><font style="vertical-align: inherit;">我还通过以下命令安装了python 2.7.3 ：（我使用</font></font><code>make altinstall</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>make install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>wget http://www.python.org/ftp/python/2.7.3/Python-2.7.3.tgz<font></font>
tar -xf Python-2.7.3.tgz<font></font>
cd Python-2.7.3<font></font>
./configure<font></font>
make<font></font>
make altinstall<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我通过以下命令从源代码安装了node.js：</font></font></p>

<pre><code>python2.7 ./configure<font></font>
make<font></font>
make install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，当我使用</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并尝试安装需要python&gt; 2.4.3的node.js软件包时，出现此错误：</font></font></p>

<pre><code>gyp ERR! configure error<font></font>
gyp ERR! stack Error: Python executable "python" is v2.4.3, which is not supported by gyp.<font></font>
gyp ERR! stack You can pass the --python switch to point to Python &gt;= v2.5.0 &amp; &lt; 3.0.0.<font></font>
gyp ERR! stack     at failPythonVersion (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:125:14)<font></font>
gyp ERR! stack     at /usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:114:9<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“通过--python开关以指向Python&gt; = v2.5.0”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿梅路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行npm install之前将python设置为python2.7</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Linux：</font></font></p>

<pre><code>export PYTHON=python2.7
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视窗：</font></font></p>

<pre><code>set PYTHON=python2.7
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows用户，类似这样的方法应该起作用：</font></font></p>

<pre><code>PS C:\angular&gt; npm install --python=C:\Python27\python.exe
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，所以您已经找到了解决方案。</font><font style="vertical-align: inherit;">只想分享对我有用很多次的东西；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了</font></font><code>setpy2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">别名，可以帮助我切换python。</font></font></p>

<pre><code>alias setpy2="mkdir -p /tmp/bin; ln -s `which python2.7` /tmp/bin/python; export PATH=/tmp/bin:$PATH"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行</font></font><code>setpy2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该开关将一直有效，直到您退出终端为止，之后</font></font><code>python</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其设置回系统默认值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以将这种技术用于任何其他命令/工具。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了快速使用它，npm install --python =“ c：\ python27”</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样使用</font></font><code>--python</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm选项：</font></font></p>

<pre><code>npm install --python=python2.7
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或将其设置为始终使用：</font></font></p>

<pre><code>npm config set python python2.7
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Npm将在需要时依次将此选项传递给node-gyp。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（注意：我是在Github上发布一个问题将此文档包含在文档中的人，因为对此有很多问题;-)）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
