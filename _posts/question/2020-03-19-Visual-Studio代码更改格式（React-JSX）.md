---
layout: question
title:  Visual Studio代码更改格式（React-JSX）
date:   2020-03-19T06:35:37.000Z
description: 我的index.js中有以下代码段class App extends Component {    render() {        retur...
img: 
author: 神奇Harry
category: question
answer: 8
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的index.js中有以下代码段</font></font></p>

<pre><code>class App extends Component {<font></font>
    render() {<font></font>
        return ( &lt;div style = { styles.app } &gt;<font></font>
            Welcome to React!<font></font>
            &lt;/div&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
该代码有效，但是每次我保存（ctrl + s）visual studio格式的jsx时，就像这样：</font></font></p>

<pre><code>class App extends Component {<font></font>
    render() {<font></font>
        return ( &lt; div style = { styles.app } &gt;<font></font>
            Welcome to React!<font></font>
            &lt;<font></font>
            /div&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何解决？</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan斯丁</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题，然后我发现这是由“美化”扩展名引起的。</font><font style="vertical-align: inherit;">卸载扩展程序后，一切正常。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西小卤蛋GO</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以安装诸如react-beautify之类的扩展程序，以帮助您格式化jsx代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="https://marketplace.visualstudio.com/items?itemName=taichi.react-beautify" rel="nofollow noreferrer"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">找到</font></font><a href="https://marketplace.visualstudio.com/items?itemName=taichi.react-beautify" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该扩展程序包装prettydiff / esformatter来格式化javascript，JSX， TypeScript，TSX文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猴子</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为此苦苦挣扎，但最终找到了解决方案。</font><font style="vertical-align: inherit;">这是我的settings.json</font></font></p>

<pre><code>{<font></font>
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",<font></font>
    "workbench.startupEditor": "welcomePage",<font></font>
    "window.zoomLevel": 1,<font></font>
    "emmet.includeLanguages": {<font></font>
        "javascript": "javascriptreact",<font></font>
        "vue-html": "html"<font></font>
    },<font></font>
    "editor.formatOnSave": true,<font></font>
    "javascript.updateImportsOnFileMove.enabled": "always",<font></font>
    "editor.wordWrap": "on",<font></font>
    "editor.tabSize": 2,<font></font>
    "editor.minimap.enabled": false,<font></font>
    "workbench.iconTheme": "vscode-icons",<font></font>
    "eslint.autoFixOnSave": true,<font></font>
    "eslint.alwaysShowStatus": true,<font></font>
    "beautify.ignore": [<font></font>
        "**/*.js",<font></font>
        "**/*.jsx"<font></font>
    ],<font></font>
    "prettier.jsxSingleQuote": true,<font></font>
    "prettier.singleQuote": true<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我加了 </font></font></p>

<pre><code>"beautify.ignore": ["**/*.js","**/*.jsx"]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">王者一打九达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过在</font><strong><font style="vertical-align: inherit;">settings.json中</font></strong><font style="vertical-align: inherit;">添加关联来防止VSC错误地格式化JSX。</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><code>Code</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt; </font></font><code>Preferences</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt;</font></font><code>Settings</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在设置窗口中搜索</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关联</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在settings.json中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击</font><strong><font style="vertical-align: inherit;">编辑</font></strong><font style="vertical-align: inherit;">，然后添加：</font></font></p>

<pre><code>"files.associations": {<font></font>
    "*.js": "javascriptreact"<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天村村</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您在当前工作空间中未启用多个JavaScript格式化程序。</font><font style="vertical-align: inherit;">（您必须为当前工作空间禁用其余部分）。</font></font></strong> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-beautify</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要起到魔术作用，但是如果您已经安装了其他JS格式化程序/美化器，则会失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我安装了react-beautify和JS-CSS-HTML Formatter扩展。</font><font style="vertical-align: inherit;">我必须为当前工作空间禁用JS-CSS-HTML Formatter。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装Prettier（如果未默认安装），然后尝试将其添加到用户或工作场所设置中：</font></font></p>

<p><code>"prettier.jsxBracketSameLine": true</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要在return和返回的JSX表达式之间放置换行符。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发自动格式化</font></font><code>(Alt+Shift+F)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并检查是否有效。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimTomL</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面更改vscode首选项设置&gt;用户设置：</font></font></p>

<pre><code>"files.associations": {<font></font>
        "*.js":"javascriptreact"<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiEva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，保存</font><font style="vertical-align: inherit;">扩展名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.jsx</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件可在</font><strong><font style="vertical-align: inherit;">vscode中</font></strong><font style="vertical-align: inherit;">解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也面临同样的挑战，我希望找到一种更好的方法来处理vscode中的此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到每次打开扩展名为</font><strong><font style="vertical-align: inherit;">.js</font></strong><font style="vertical-align: inherit;">的react文件时，都必须完成建议的解决方法</font></font><strong><font style="vertical-align: inherit;"></font></strong></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
