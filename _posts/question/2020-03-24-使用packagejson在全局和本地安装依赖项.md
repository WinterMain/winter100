---
layout: question
title:  使用package.json在全局和本地安装依赖项
date:   2020-03-24T01:44:11.000Z
description: 使用npm，我们可以使用-goption 在全局安装模块。我们如何在package.json文件中执行此操作？假设这些是我在package.json文...
img: 
author: 十三
category: question
answer: 4
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用npm，我们可以使用</font></font><code>-g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">option </font><font style="vertical-align: inherit;">在全局安装模块</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我们如何在package.json文件中执行此操作？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设这些是我在package.json文件中的依赖项</font></font></p>

<pre><code>"dependencies": {<font></font>
    "mongoose": "1.4.0",<font></font>
    "node.io" : "0.3.3",<font></font>
    "jquery"  : "1.5.1",<font></font>
    "jsdom"   : "0.2.0",<font></font>
    "cron"    : "0.1.2"<font></font>
  }</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行时</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我只想</font></font><code>node.io</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局安装，其余的应该本地安装。</font><font style="vertical-align: inherit;">有这个选项吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3170篇《使用package.json在全局和本地安装依赖项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三斯丁Jim</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json中的所有模块都安装到./node_modules/</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找不到明确说明的内容，但这是</font></font><a href="https://github.com/isaacs/npm/blob/master/doc/files/package.json.md" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的package.json参考</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于以下缺点，我建议您</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循公认的答案：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下情况下使用</font></font><code>npm install --save-dev [package_name]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后执行脚本：</font></font></p>

<pre><code>$ npm run lint<font></font>
$ npm run build<font></font>
$ npm test<font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的原始但</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不建议的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案如下。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将包添加到</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中，然后从项目内部的任何位置运行二进制文件，</font><font style="vertical-align: inherit;">而不是使用全局安装</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"$(npm bin)/&lt;executable_name&gt;" &lt;arguments&gt;...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下：</font></font></p>

<pre><code>"$(npm bin)"/node.io --help
</code></pre>

<p><a href="https://stackoverflow.com/questions/9679932/how-to-use-package-installed-locally-in-node-modules#15157360"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该工程师</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了</font></font><code>npm-exec</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">别名作为快捷方式。  </font></font><a href="https://stackoverflow.com/questions/14657170/installing-global-npm-dependencies-via-package-json#14657892"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该工程师</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用称为的shellscript </font></font><code>env.sh</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是我更喜欢</font></font><code>$(npm bin)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，以避免任何额外的文件或设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管它使每个调用都大一点，但它应该</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以正常工作</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以防止：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与全局包的潜在依赖冲突（@nalply）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要 </font></font><code>sudo</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要设置一个npm前缀（尽管我还是建议使用一个）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></p>

<ul>
<li><code>$(npm bin)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在Windows上将无法使用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发树中较深的工具不会出现在该</font></font><code>npm bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中。</font><font style="vertical-align: inherit;">（安装</font></font><a href="https://github.com/timoxley/npm-run" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-run</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/timoxley/npm-which" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以找到它们。）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的解决方案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是将常见任务（例如构建和缩小）放在您的</font></font><a href="https://github.com/npm/npm/issues/3738#issuecomment-22505089" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“脚本”部分</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如Jason上面演示的那样。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用单独的文件，例如</font></font><code>npm_globals.txt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该文件将在每个新行中包含每个模块，如下所示：</font></font></p>

<pre><code>mongoose@1.4.0<font></font>
node.io@0.3.3<font></font>
jquery@1.5.1<font></font>
jsdom@0.2.0<font></font>
cron@0.1.2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在命令行中运行 </font></font></p>

<pre><code>&lt; npm_globals.txt xargs npm install -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查它们是否正确安装，</font></font></p>

<pre><code>npm list -g --depth=0
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于是否</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行此操作，我认为这完全取决于用例。</font><font style="vertical-align: inherit;">对于大多数项目，这不是必需的。</font><font style="vertical-align: inherit;">并且最好将您的项目</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些工具和依赖项封装在一起。</font></font></p>

<p><del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是如今，我发现，</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我跳到新机器上时</font><font style="vertical-align: inherit;">，我总是</font><font style="vertical-align: inherit;">在全球范围内</font><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">CLI和其他CLI。</font><font style="vertical-align: inherit;">当版本控制无关紧要时，有一种简单的方法可以很好地安装全局工具及其依赖项。</font></font></del></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而如今，我使用</font></font><a href="https://github.com/npm/npx" rel="nofollow noreferrer"><code>npx</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一包NPM亚军</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是全球安装软件包。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新说明：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能不需要或不需要这样做。</font><font style="vertical-align: inherit;">您可能想要做的就是将那些用于构建/测试等命令依赖性的类型放在</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">部分中。  </font><strong><font style="vertical-align: inherit;">每当您在package.json中</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用某些内容时</font></font><code>scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您的devDependencies命令（在node_modules / .bin中）就好像它们在您的路径中一样。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>npm i --save-dev mocha # Install test runner locally<font></font>
npm i --save-dev babel # Install current babel locally<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在package.json中：</font></font></p>

<pre><code>// devDependencies has mocha and babel now<font></font>
<font></font>
"scripts": {<font></font>
  "test": "mocha",<font></font>
  "build": "babel -d lib src",<font></font>
  "prepublish": "babel -d lib src"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在命令提示符下运行：</font></font></p>

<pre><code>npm run build # finds babel<font></font>
npm test # finds mocha<font></font>
<font></font>
npm publish # will run babel first<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要全局安装，则可以在package.json的脚本部分中添加预安装：</font></font></p>

<pre><code>"scripts": {<font></font>
  "preinstall": "npm i -g themodule"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以实际上我的npm install再次执行npm install ..这很奇怪，但似乎可以工作。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用最常见的安装</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序来安装全局Node软件包，</font><font style="vertical-align: inherit;">则可能会有问题</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一种选择是更改</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置，因此这不是必需的：</font></font></p>

<p><code>npm config set prefix ~/npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，通过将$ HOME / npm / bin附加</font></font><code>export PATH=$HOME/npm/bin:$PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font><font style="vertical-align: inherit;">$ PATH来将其添加</font><font style="vertical-align: inherit;">到</font><font style="vertical-align: inherit;">$ PATH中</font></font><code>~/.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
