---
layout: question
title:  如何配置package.json以运行eslint脚本
date:   2020-03-24T03:12:12.000Z
description: 所以我将eslint用作我的react项目的一个linter，我希望它检查我的所有.js文件。我可以通过脚本来做到这一点："lint"  "esl...
img: 
author: LEY小胖
category: question
answer: 4
tags: reactjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我将eslint用作我的react项目的一个linter，我希望它检查我的所有</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过脚本来做到这一点：</font></font></p>

<pre><code>"lint": "eslint back/*.js &amp;&amp; eslint backTest/*.js &amp;&amp; eslint front/actions/*.js"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获取它以</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">递归</font><font style="vertical-align: inherit;">方式检查每个</font><font style="vertical-align: inherit;">文件，例如：</font></font></p>

<pre><code>"lint": "eslint -r *.js"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将省去我不得不单独键入每个文件的麻烦</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先谢谢您的帮助</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3286篇《如何配置package.json以运行eslint脚本》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>eslint . --ext .js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 扩展名为.js的文件。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前目录和所有子目录中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">目标文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要包括其他文件扩展名，
 </font></font><code>eslint . --ext .js,.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>eslint . --ext .js --ext .jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://eslint.org/docs/user-guide/command-line-interface#ext" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">eslint文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">覆盖此选项。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定接受的答案是否过时，但是通过查看</font></font><a href="https://eslint.org/docs/1.0.0/user-guide/command-line-interface" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，它使用.js作为唯一的文件扩展名。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，根据成员</font><font style="vertical-align: inherit;">对项目Github </font><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/eslint/eslint/issues/1663#issuecomment-70371024" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有子目录中都</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">equals。</font><font style="vertical-align: inherit;">在我看来，运行</font></font><code>eslint .</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就足够了（尽管它并不涵盖新的ES模块</font></font><code>.mjs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱樱Pro</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了添加到TranBrian10的解决方案中，我在本地安装了eslint，因此</font></font><code>eslint</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">调用会</font><font style="vertical-align: inherit;">导致</font></font><code>command not found</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过使用以下方法解决此问题</font></font><code>npx eslint</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>`eslint . --ext .js` -&gt; `npx eslint . --ext .js`
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且正如GollyJer所指出的那样，由于</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">原因，这在Windows下不起作用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>eslint "**/*.js"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 递归地在所有文件夹中的所有js文件上运行（在当前文件夹中）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以这样做： </font></font><code>AnyFolder/**/*.js</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并忽略文件夹： </font></font><code>eslint "**/*.js" --ignore-pattern node_modules/</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="http://eslint.org/docs/user-guide/command-line-interface" rel="noreferrer"><font style="vertical-align: inherit;">eslint / command-line-interface上</font></a><font style="vertical-align: inherit;">了解更多</font></font><a href="http://eslint.org/docs/user-guide/command-line-interface" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
