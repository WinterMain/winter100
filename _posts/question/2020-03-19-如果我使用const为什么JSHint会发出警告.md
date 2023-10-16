---
layout: question
title:  如果我使用const，为什么JSHint会发出警告？
date:   2020-03-19T01:31:17.000Z
description: 这是我在使用const时遇到的错误：<error line="2" column="1" severity="warning" message="&a...
img: 
author: 神乐LEY
category: question
answer: 9
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在使用const时遇到的错误：</font></font></p>

<pre><code>&lt;error line="2" column="1" severity="warning" message="&amp;apos;const&amp;apos; is available in ES6 (use esnext option) or Mozilla JS extensions (use moz)." source="jshint.W104" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码如下所示：</font></font></p>

<pre><code>const Suites = {<font></font>
    Spade: 1,<font></font>
    Heart: 2,<font></font>
    Diamond: 3,<font></font>
    Club: 4<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有JSHint每次都警告我，代码才能正常工作。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2209篇《如果我使用const，为什么JSHint会发出警告？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子路易Davaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个名为jshint_opts的文件，其内容如下：{“ esversion”：6}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用以下命令行调用jshint：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jshint --config jshint_opts lib / *。js</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Sublime Text 3： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首选项</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Preferences.sublime-settings下-用户</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ esversion”：6</font></font></strong></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AMandy前端</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是Grunt配置，则需要执行以下步骤</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jshint中的警告消息：</font></font></p>

<p><a href="https://i.stack.imgur.com/dpOI4.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/dpOI4.png" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置jshint选项并映射.jshintrc.js文件</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/JWyfo.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/JWyfo.png" alt="在此处输入图片说明"></a></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该文件中创建.jshintrc.js文件，添加以下代码</font></font></li>
</ol>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{  </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  “ esversion”：6  </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
} </font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置完成后，再次运行它将跳过警告，</font></font></p>

<p><a href="https://i.stack.imgur.com/Gifh9.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Gifh9.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Green逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的package.json中，您可以告诉Jshint这样使用es6</font></font></p>

<pre><code>"jshintConfig":{<font></font>
    "esversion": 6 <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil米亚</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Webstorm，并且没有自己的配置文件，则只需</font></font><code>EcmaScript.next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置| </font><font style="vertical-align: inherit;">语言和框架| </font><font style="vertical-align: inherit;">JavaScript | </font><font style="vertical-align: inherit;">代码质量工具| </font><font style="vertical-align: inherit;">JSHint</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到这个问题</font><a href="https://intellij-support.jetbrains.com/hc/en-us/community/posts/360000112510-How-do-I-resolve-these-JSHint-ES6-errors-?flash_digest=7f9a0f5de48b847a37ee71c787c0d42fa63f2234" rel="nofollow noreferrer"><font style="vertical-align: inherit;">我</font></a><font style="vertical-align: inherit;">该</font></font><a href="https://intellij-support.jetbrains.com/hc/en-us/community/posts/360000112510-How-do-I-resolve-these-JSHint-ES6-errors-?flash_digest=7f9a0f5de48b847a37ee71c787c0d42fa63f2234" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决这些JSHint-ES6错误</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Tom</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您开始使用ECMAScript 6时，IDE会引发此错误。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两个选项：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只有一个文件并且要使用es6，则只需在文件顶部添加以下行。</font></font></p>

<pre><code>/*jshint esversion: 6 */
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您有许多js文件，或者您正在使用任何框架（例如nodejs express），则可以</font></font><code>.jshintrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根目录中</font><font style="vertical-align: inherit;">创建一个新文件</font><font style="vertical-align: inherit;">，并在文件中添加以下代码：</font></font></p>

<pre><code>{<font></font>
    "esversion": 6<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要对每个项目使用es6版本以上，则可以配置IDE。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用export语句时，我得到了同样的警告。</font><font style="vertical-align: inherit;">我正在使用VS Code，并使用了类似的方法来解决Wenwen Jiang的问题。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户设置</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSHint配置</font></font></li>
<li><code>"jshint.options": {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （编辑）</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定时</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双引号</font></font></strong><font style="vertical-align: inherit;"></font><code>"esversion"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或将此代码段复制到“用户设置”中：</font></font></p>

<pre><code>"jshint.options": {<font></font>
  "esversion": 6,<font></font>
}<font></font>
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"></font><code>.jshintrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要为编辑器配置全局jshint设置，则无需</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">文件</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端A宝儿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在jshint选项对象内</font><font style="vertical-align: inherit;">指定</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">esversion：6</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请看图片。</font><font style="vertical-align: inherit;">我正在使用grunt-contrib-jshint插件。</font></font></p>

<p><a href="https://i.stack.imgur.com/Uvday.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/Uvday.jpg" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Harry泡芙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在应用程序的</font><strong><font style="vertical-align: inherit;">根目录中</font></strong><font style="vertical-align: inherit;">添加一个名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.jshintrc</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">其中包含以下内容，以将该设置应用于</font><strong><font style="vertical-align: inherit;">整个解决方案</font></strong><font style="vertical-align: inherit;">：</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre><code>{<font></font>
    "esversion": 6<font></font>
}<font></font>
</code></pre>

<p><a href="https://stackoverflow.com/a/27442276/1476885"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">James的回答</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议您可以</font></font><code>/*jshint esversion: 6 */</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加一个注释</font><font style="vertical-align: inherit;">，但是如果需要控制多个文件，这比必要的工作更多。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
