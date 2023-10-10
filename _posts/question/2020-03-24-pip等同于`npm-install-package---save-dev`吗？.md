---
layout: question
title:  pip等同于\`npm install package --save-dev\`吗？
date:   2020-03-24T01:51:01.000Z
description: 在nodejs中，我可以npm install package --save-dev将已安装的软件包保存到软件包中。如何在Python包管理器中实现同...
img: 
author: 神乐小哥Near
category: question
answer: 7
tags: python Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在nodejs中，我可以</font></font><code>npm install package --save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将已安装的软件包保存到软件包中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Python包管理器中实现同一目的</font></font><code>pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我想将软件包名称及其版本保存到，例如，</font></font><code>requirements.pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用来安装软件包之后</font></font><code>pip install package --save-dev requirements.pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使shell函数执行此操作怎么样？</font><font style="vertical-align: inherit;">将以下代码添加到您的</font></font><code>~/.profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>~/.bashrc</code> </p>

<pre><code>pips() {<font></font>
    local pkg=$1<font></font>
<font></font>
    if [ -z "$1" ]; then<font></font>
        echo "usage: pips &lt;pkg name&gt;"<font></font>
        return 1<font></font>
    fi<font></font>
<font></font>
    local _ins="pip install $pkg"<font></font>
    eval $_ins<font></font>
    pip freeze | grep $pkg -i &gt;&gt; requirements.txt<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行</font></font><code>source ~/.profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>source ~/.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其导入到当前终端</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，当您要安装和保存程序包时，只需运行即可</font></font><code>pips requests</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">安装软件包后，其版本将保存到</font></font><code>requirements.txt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的当前目录中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">将其</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存在Makefile（或文本文件中，然后导入到Makefile中）：</font></font></p>

<p><br></p>

<pre><code>PYTHON=.venv/bin/python # path to pyphon<font></font>
PIP=.venv/bin/pip # path to pip<font></font>
SOURCE_VENV=. .venv/bin/activate<font></font>
<font></font>
<font></font>
install:<font></font>
    virtualenv .venv<font></font>
    $(SOURCE_VENV) &amp;&amp; $(PIP) install -e PACKAGE<font></font>
    $(SOURCE_VENV) &amp;&amp; $(PIP) install -r requirements.txt # other required packages<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行 </font></font><code>make install</code>
<br></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用此小命令行来安装软件包并将其版本保存在</font></font><code>requirements.txt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">： 
</font></font><code>pkg=package &amp;&amp; pip install $pkg &amp;&amp; echo $(pip freeze | grep -i $pkg) &gt;&gt; requirements.txt</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，</font></font><a href="https://chriswarrick.com/blog/2018/07/17/pipenv-promises-a-lot-delivers-very-little/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pipenv没有得到Python维护者的正式认可</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且</font></font><a href="https://packaging.python.org/tutorials/managing-dependencies/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前链接的页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是由另一个组织拥有的。</font><font style="vertical-align: inherit;">该工具各有利弊，但以下解决方案仍然可以达到OP所寻求的结果。</font></font></p>

<p><a href="https://pipenv.kennethreitz.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pipenv</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个依赖项管理工具，它包装</font></font><code>pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并提供您所要求的内容：</font></font></p>

<p><a href="https://pipenv.kennethreitz.org/en/latest/#example-pipenv-workflow" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://pipenv.kennethreitz.org/en/latest/#example-pipenv-workflow</font></font></a></p>

<blockquote>
  <p><code>$ pipenv install &lt;package&gt;</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不存在，这将创建一个Pipfile。</font><font style="vertical-align: inherit;">如果确实存在，它将使用您提供的新软件包自动进行编辑。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A </font></font><code>Pipfile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接等于</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而</font></font><code>Pipfile.lock</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对应于</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这条简单的线是一个起点。</font><font style="vertical-align: inherit;">您可以轻松构建一个bash命令来重用该行中的PACKAGE。</font></font></p>

<pre><code>pip install PACKAGE &amp;&amp; pip freeze | grep PACKAGE &gt;&gt; requirements.txt
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢@devsnd提供了简单的bash函数示例：</font></font></p>

<pre><code>function pip-install-save { <font></font>
    pip install $1 &amp;&amp; pip freeze | grep $1 &gt;&gt; requirements.txt<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用它，只需运行：</font></font></p>

<pre><code>pip-install-save some-package
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建Python包，各地的实际包装</font></font><code>pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">称为</font></font><a href="https://github.com/jnoortheen/pipm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PIPM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所有</font></font><code>pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令将按原样运行，并且它们将反映在需求文件中。</font><font style="vertical-align: inherit;">与</font></font><code>pip-save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我发现但无法使用的类似工具）不同，它可以处理许多文件和环境（测试，开发，生产等）。</font><font style="vertical-align: inherit;">它还具有用于升级所有/任何依赖项的命令。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></h2>

<p><code>pipm install pkg-name</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装作为开发依赖</font></font></h2>

<p><code>pipm install pkg-name --dev</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装为测试依赖项</font></font></h2>

<p><code>pipm install pkg-name --test</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清除</font></font></h2>

<p><code>pipm uninstall pkg-name</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新所有依赖</font></font></h2>

<p><code>pipm update</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从需求文件安装所有依赖项</font></font></h2>

<p><code>pipm install</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括开发依赖</font></font></h2>

<p><code>pipm install --dev</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我快速</font></font><code>pip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于安装/卸载命令的选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请查看我的博客以获取有关此黑客的更多信息：</font><a href="http://blog.abhiomkar.in/2015/11/12/pip-save-npm-like-behaviour-to-pip/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : 
 </font></font><a href="http://blog.abhiomkar.in/2015/11/12/pip-save-npm-like-behaviour-to-pip/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.abhiomkar.in/2015/11/12/pip-save-npm-like-behaviour-to-pip/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装（GitHub）：</font><a href="https://github.com/abhiomkar/pip-save" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/abhiomkar/pip-save" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/abhiomkar/pip-save</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
