---
layout: question
title:  npm package.json文件中的依赖关系，devDependencies和peerDependencies之间有什么区别？
date:   2020-03-13T08:04:30.000Z
description: 该文档很难回答我的问题。我不明白那些解释。有人可以用简单的话说吗？如果很难选择简单的单词，也许还有例子？EDIT还添加了peerDependencie...
img: 
author: 猴子蛋蛋
category: question
answer: 11
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><a href="https://docs.npmjs.com/files/package.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很难回答我的问题。</font><font style="vertical-align: inherit;">我不明白那些解释。</font><font style="vertical-align: inherit;">有人可以用简单的话说吗？</font><font style="vertical-align: inherit;">如果很难选择简单的单词，也许还有例子？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EDIT</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还添加了</font></font><code>peerDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是密切相关的，可能会引起混乱。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1429篇《npm package.json文件中的依赖关系，devDependencies和peerDependencies之间有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了一个简单的解释。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短答案：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖关系</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
“ ...是您的项目真正需要能够在生产环境中工作的</font><strong><font style="vertical-align: inherit;">依赖关系</font></strong><font style="vertical-align: inherit;">。”</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
“ ...是您在开发过程中所需要的。”</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">peerDependencies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
“如果要创建和发布自己的库，以便可以将其用作依赖项”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章中的更多详细信息：</font><a href="https://code-trotter.com/web/dependencies-vs-devdependencies-vs-peerdependencies" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://code-trotter.com/web/dependencies-vs-devdependencies-vs-peerdependencies" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code-trotter.com/web/dependencies-vs-devdependencies-vs-peerdependencies</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖与开发依赖</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发依赖项是仅在开发期间需要的模块，而运行时则需要依赖项。</font><font style="vertical-align: inherit;">如果要部署应用程序，则必须安装依赖项，否则您的应用程序将无法正常工作。</font><font style="vertical-align: inherit;">您从使程序能够运行的代码中调用的库可被视为依赖项。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如反应</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发依赖项模块不需要安装在生产服务器中，因为您不需要在该机器上进行开发。将代码隐藏为javascript的编译器，测试框架和文档生成器可以视为开发依赖项，因为它们仅在开发期间才需要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，ESLint，Babel，Webpack</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@FYI，</font></font></p>

<pre><code>mod-a<font></font>
  dev-dependents:<font></font>
    - mod-b<font></font>
  dependents:<font></font>
    - mod-c<font></font>
<font></font>
mod-d<font></font>
﻿  dev-dependents:<font></font>
    - mod-e<font></font>
  dependents:<font></font>
    - mod-a<font></font>
<font></font>
----<font></font>
<font></font>
npm install mod-d<font></font>
<font></font>
installed modules:<font></font>
  - mod-d<font></font>
  - mod-a<font></font>
  - mod-c<font></font>
<font></font>
----<font></font>
<font></font>
checkout the mod-d code repository<font></font>
<font></font>
npm install<font></font>
<font></font>
installed modules:<font></font>
  - mod-a<font></font>
  - mod-c<font></font>
  - mod-e<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要发布到npm，则对正确的模块使用正确的标志很重要。</font><font style="vertical-align: inherit;">如果您的npm模块需要该功能，则使用“ --save”标志将模块另存为依赖项。</font><font style="vertical-align: inherit;">如果这是您的模块不需要运行但需要测试的东西，请使用“ --save-dev”标志。</font></font></p>

<pre><code># For dependent modules<font></font>
﻿npm install dependent-module --save<font></font>
<font></font>
﻿# For dev-dependent modules<font></font>
np﻿m install development-module --save-dev<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试分发npm软件包时，应避免使用</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">相反，您需要考虑将其添加到中</font></font><code>peerDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或从中删除</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想对这些依赖关系的解释加我的看法</font></font></p>

<ul>
<li><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 用于代码库中的直接使用，通常在生产代码或代码块中结束的事情</font></font></li>
<li><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 用于构建过程，可帮助您管理最终代码的最终生成方式的工具，第三方测试模块（例如webpack的东西）</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之</font></font></p>

<ol>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖关系</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -   </font></font><code>npm install &lt;package&gt; --save-prod</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生产环境中安装应用程序所需的软件包。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DevDependencies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -   </font></font><code>npm install &lt;package&gt; --save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需要为本地开发和测试安装包</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需键入即可</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装package.json中提到的所有软件包。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您在本地计算机上工作，只需键入</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并继续:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个使我更清楚的简单解释是：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部署应用程序时，需要安装依赖项中的模块，否则您的应用程序将无法运行。</font><font style="vertical-align: inherit;">不需要在生产服务器上安装devDependencies中的模块，因为您不在该计算机上进行开发。
</font></font><a href="https://www.reddit.com/r/node/comments/1nticr/whats_the_difference_between_dependencies_and/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽宝儿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，mocha通常是devDependency，因为在生产中测试不是必需的，而express是依赖项。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将包保存</font><font style="vertical-align: inherit;">为dev依赖项</font><font style="vertical-align: inherit;">到</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm install "$package" --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将同时安装</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为了避免安装</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行：</font></font></p>

<pre><code>npm install --production
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些模块和软件包仅对于开发是必需的，而在生产中则不需要。</font><font style="vertical-align: inherit;">就像它在</font></font><a href="https://npmjs.org/doc/json.html#devDependencies"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说的那样</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人计划在其程序中下载和使用您的模块，那么他们可能不希望或不需要下载并构建您使用的外部测试或文档框架。</font><font style="vertical-align: inherit;">在这种情况下，最好在devDependencies哈希中列出这些其他项。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖项</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
项目需要运行的依赖项，例如提供从代码中调用的函数的库。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它们是可传递安装的（如果A依赖于B依赖于C，则在A上进行npm install将安装B和C）。</font></font><br>
<em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：lodash：您的项目调用了一些lodash函数。</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
仅在开发或发布期间需要的依赖项，例如将代码带入javascript，测试框架或文档生成器的编译器。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它们不是可临时安装的（如果A依赖于B，而dev依赖于C，则A上的npm install将仅安装B）。</font></font><br>
<em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：grunt：您的项目使用grunt进行构建。</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">peerDependencies</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
项目挂钩或修改到父项目中的依赖关系，通常是某些其他库或工具的插件。</font><font style="vertical-align: inherit;">只是为了进行检查，请确保父项目（将取决于您的项目）对您挂接到的项目具有依赖性。</font><font style="vertical-align: inherit;">因此，如果您制作了一个向库B添加功能的插件C，那么制作项目A的某人如果对C有依赖性，就必须对B有依赖性。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
除非安装了它们（除非npm &lt;3），否则它们只是检查。</font></font><br>
<em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：grunt：您的项目为grunt添加了功能，并且只能在使用grunt的项目上使用。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文档非常好地解释了对等方的依赖性：</font><a href="https://nodejs.org/en/blog/npm/peer-dependencies/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://nodejs.org/en/blog/npm/peer-dependencies/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//nodejs.org/en/blog/npm/peer-dependencies/</font></font></a>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，随着时间的推移，npm文档也得到了改进，现在对不同类型的依赖项有了更好的解释：</font><a href="https://github.com/npm/cli/blob/latest/doc/files/package.json.md#devdependencies" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/npm/cli/blob/latest/doc/files/package.json.md#devdependencies" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/npm/cli/blob/latest/doc/files/package.json.md#devdependencies</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimHarry</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想安装devDependencies，则可以使用 </font></font><code>npm install --production</code> </p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
