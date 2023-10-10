---
layout: question
title:  为什么Prettier不格式化VSCODE中的代码？
date:   2020-03-20T05:09:19.000Z
description: 在安装并启用了ESlint和Prettier的Nuxt应用程序中，我切换到了Visual Studio Code编辑器。当我打开.vue文件并按CMD...
img: 
author: Mandy古一
category: question
answer: 8
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在安装并启用了ESlint和Prettier的Nuxt应用程序中，我切换到了Visual Studio Code编辑器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我打开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.vue</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并按</font></font><kbd>CMD</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>P</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  并选择“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式化文档”时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我的文件根本没有被</font></font><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式化</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.prettierrc </font></font></strong> <a href="https://prettier.io/docs/en/configuration.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "tabWidth": 2,<font></font>
  "semi": false,<font></font>
  "singleQuote": true<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有很多源代码行，我无法手动设置它们的格式。</font><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2459篇《为什么Prettier不格式化VSCODE中的代码？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Gil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将更漂亮的版本回滚到1.7.3并将其修复</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端宝儿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时使用自动插件更新，Prettier使用的必需文件可能会丢失。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果此处存在文件或文件夹为空，请检查此路径 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C：\ Users \您的用户名\ .vscode \ extensions \ esbenp.prettier-vscode-2.2.2 \ out</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果缺少，请重新安装并重新安装。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是</font></font><code>prettier-vscode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prettier </font><font style="vertical-align: inherit;">本身的问题，而是</font><font style="vertical-align: inherit;">VSCode扩展。</font><font style="vertical-align: inherit;">根据</font></font><a href="https://github.com/prettier/prettier-vscode#prettierdisablelanguages-default-vue" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，Vue格式默认为禁用：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prettier.disableLanguages（默认值：[“ vue”]）</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用此扩展名的语言ID列表。</font><font style="vertical-align: inherit;">需要重启。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：禁用在父文件夹中启用的语言将阻止格式化，而不是让其他格式化程序运行</font></font></em></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，要启用您应该设置</font></font><code>"prettier.disableLanguages": []</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于这是扩展配置，因此您应该在VSCode设置文件中而不是在</font></font><code>.prettierrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">漂亮的还可以在保存时格式化文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，安装和启用不会导致工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须在VSCode中检查“保存时的格式”：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置&gt;&gt;用户&gt;&gt;文本编辑器&gt;&gt;格式</font></font></em></p>

<p><a href="https://i.stack.imgur.com/unii7.png" rel="noreferrer"><img src="https://i.stack.imgur.com/unii7.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1。使用另一个更漂亮的扩展名对我不起作用，我只是使用另一个名为</font></font><code>PrettierNow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这对我有帮助的</font><font style="vertical-align: inherit;">VSCODE扩展名</font><font style="vertical-align: inherit;">。</font></font><a href="https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处签出扩展名</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2。</font></font><code>.prettierrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要坚持使用漂亮的文件，则</font><font style="vertical-align: inherit;">需要从漂亮的最新更新</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到项目的根目录中。</font><font style="vertical-align: inherit;">的一个例子</font></font><code>.prettierrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是这-</font></font></p>

<pre><code>{<font></font>
  "tabWidth": 4,<font></font>
  "singleQuote": true,<font></font>
  "semi": false<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试将此部分添加到用户设置文件吗？</font></font></p>

<pre><code> "[javascript]": {<font></font>
        "editor.defaultFormatter": "esbenp.prettier-vscode",<font></font>
        //   "editor.formatOnSave": true,<font></font>
    },<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Near</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在对Prettier停止在VSCode中工作感到非常沮丧之后，我如何对其进行排序。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择</font></font><code>VS Code</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>View</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>Command Palette</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后键入：</font></font><em><code>Format Document With</code></em></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>Configure Default Formatter...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再选择</font></font><code>Prettier - Code formatter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我神奇地解决了问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的情况，这可能会帮助您...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神奇神无</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，当代码中存在语法错误时，漂亮的脚本会停止工作。</font><font style="vertical-align: inherit;">您可以通过单击</font><strong><font style="vertical-align: inherit;">Prettier</font></strong><font style="vertical-align: inherit;">旁边右下角</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">x</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮</font><font style="vertical-align: inherit;">来查看错误。</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><a href="https://i.stack.imgur.com/Zd03Y.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Zd03Y.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
