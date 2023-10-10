---
layout: question
title:  npm install的--save选项是什么？
date:   2020-03-13T08:05:44.000Z
description: 我看到了一些命令所在的教程：npm install --save什么是--save选项是什么意思？在Google上找不到答案。...
img: 
author: 西里阿飞
category: question
answer: 11
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到了一些命令所在的教程：</font></font></p>

<pre><code>npm install --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项是什么意思？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Google上找不到答案。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>npm install --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>npm install --save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么在我们的项目中安装软件包时我们在这两个之间选择1个选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的答案可以清楚地看出，</font></font><code>npm install --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将</font></font><code>dependency</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>pacakage.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">字段中</font><font style="vertical-align: inherit;">添加条目，</font><font style="vertical-align: inherit;">在</font></font><code>dev-dependency</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此出现了一个问题，为什么我们需要在pacakge.json文件中输入安装模块，因为每当我们检入代码</font></font><code>git</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或将代码提供给某个人时，我们总是给出或不检查它，</font></font><code>node-modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它的尺寸很大并且可以在以下位置找到为了避免这种情况，我们可以这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，其他人将如何获得该项目专用或所需的所有模块，因此答案是</font></font><code>from the package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，其中包含用于运行或开发该项目的所有必需软件包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在获得code </font></font><code>we simply need to run the npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令后，它将读取package.json文件并安装必要的必需软件包。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>npm install package_x --save</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定的包（package_x）将保存在依赖关系内的package.json中。</font><font style="vertical-align: inherit;">如果添加</font></font></p>

<p><code>npm install &lt;&lt;package_x&gt;&gt; --save-dev</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将其保存在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryItachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm i（软件包名称）-保存</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单来说，使用上面的命令，我们将不需要在package.json文件中写入软件包名称，它会自动添加其名称和相关性以及您下次进行生产或设置时所需的版本。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm帮助安装</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的命令ll有助于找出更多选项并更正定义。如图所示
</font></font><a href="https://i.stack.imgur.com/TIcX8.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/TIcX8.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将依赖项添加到package.json的更简单（更棒）方法是从命令行执行此操作，并根据您的需要使用--save或--save-dev标记npm install命令。使用该依赖性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从npm 5开始，npm现在将默认保存。</font><font style="vertical-align: inherit;">万一，如果您希望npm以与以前版本类似的旧方式工作（不自动保存），则可以更新config选项以启用自动保存，如下所示。</font></font></p>

<pre><code>npm config set save false
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获取当前设置，可以执行以下命令：</font></font></p>

<pre><code>npm config get save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font><a href="https://blog.pusher.com/what-you-need-know-npm-5/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://blog.pusher.com/what-you-need-know-npm-5/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.pusher.com/what-you-need-know-npm-5/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无达蒙JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从npm 5开始，使用</font></font><code>--save-prod</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>-P</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）比做</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的事情</font><font style="vertical-align: inherit;">更有利</font><font style="vertical-align: inherit;">，如</font></font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install中所述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">到目前为止，</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果提供</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">仍然可以使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinNear</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用</font></font><code>-S</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>-D</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>-P</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等同于将包保存到应用程序依赖，开发人员依赖或产品依赖中。</font><font style="vertical-align: inherit;">请在下面查看更多NPM快捷方式：</font></font></p>

<pre><code>-v: --version<font></font>
-h, -?, --help, -H: --usage<font></font>
-s, --silent: --loglevel silent<font></font>
-q, --quiet: --loglevel warn<font></font>
-d: --loglevel info<font></font>
-dd, --verbose: --loglevel verbose<font></font>
-ddd: --loglevel silly<font></font>
-g: --global<font></font>
-C: --prefix<font></font>
-l: --long<font></font>
-m: --message<font></font>
-p, --porcelain: --parseable<font></font>
-reg: --registry<font></font>
-f: --force<font></font>
-desc: --description<font></font>
-S: --save<font></font>
-P: --save-prod<font></font>
-D: --save-dev<font></font>
-O: --save-optional<font></font>
-B: --save-bundle<font></font>
-E: --save-exact<font></font>
-y: --yes<font></font>
-n: --yes false<font></font>
ll and la commands: ls --long<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过运行以下命令获取此快捷方式列表：</font></font></p>

<pre><code>$ npm help 7 config
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新npm 5：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://blog.npmjs.org/post/161081169345/v500" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm 5.0.0开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，默认情况下已安装的模块作为依赖项添加，因此</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再需要</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">选项。</font><font style="vertical-align: inherit;">其他保存选项依然存在并在中列出</font></font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始答案：</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在版本5之前，NPM </font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况</font><font style="vertical-align: inherit;">下只是安装了一个软件包</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当您尝试为应用程序/模块安装依赖项时，您需要先安装它们，然后将它们（以及适当的版本号）添加到</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项指示NPM </font><font style="vertical-align: inherit;">自动</font><font style="vertical-align: inherit;">将软件包包括在</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">部分中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，从而</font><font style="vertical-align: inherit;">为您</font><font style="vertical-align: inherit;">节省了额外的步骤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，还有一些补充选项</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--save-optional</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们</font><font style="vertical-align: inherit;">分别</font><font style="vertical-align: inherit;">将包保存在</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">下</font></font><code>optionalDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当安装仅开发包（例如</font></font><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或您的测试库）</font><font style="vertical-align: inherit;">时，这很有用</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM Doc</font></font></a></p>

<p><a href="https://i.stack.imgur.com/DX82E.png" rel="noreferrer"><img src="https://i.stack.imgur.com/DX82E.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，似乎通过运行</font></font><code>npm install package_name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，应该将程序包依赖项自动添加到package.json中，对吗？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYStafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">，它将不会执行任何</font><font style="vertical-align: inherit;">操作。</font><font style="vertical-align: inherit;">首先运行</font></font><code>npm init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以创建一个。</font><font style="vertical-align: inherit;">然后调用</font></font><code>npm install --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>npm install --save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>npm install --save-optional</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将更新</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列出您的依赖项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加依赖包：</font></font></strong></p>

<pre><code>npm install my_dep --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm install my_dep -S
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm i my_dep -S
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在devDependencies中添加软件包</font></font></strong></p>

<pre><code>npm install my_test_framework --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm install my_test_framework -D
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm i my_test_framework -D
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json
</font></font><a href="https://i.stack.imgur.com/6prDT.png" rel="noreferrer"><img src="https://i.stack.imgur.com/6prDT.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
