---
layout: question
title:  Visual Studio Code中的JSX或HTML自动补全
date:   2020-03-18T07:46:35.000Z
description: 有什么方法可以在Visual Studio Code中使用组件或HTML补全吗？因为当我们有类似Bootstrap等的类时，手动键入每个字母不是一个好主意...
img: 
author: 达蒙斯丁
category: question
answer: 14
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以在Visual Studio Code中使用组件或HTML补全吗？</font><font style="vertical-align: inherit;">因为当我们有类似Bootstrap等的类时，手动键入每个字母不是一个好主意。例如Emmet中的完成：</font></font><code>ul&gt;li*2&gt;a</code></p>

<pre><code>var React = require('react');<font></font>
<font></font>
var Header = React.createClass({<font></font>
    render: function () {<font></font>
        return (<font></font>
<font></font>
            &lt;nav className="navbar navbar-defaullt"&gt;<font></font>
                &lt;div className="container-fluid"&gt;<font></font>
                    &lt;a href="/" className="navbar-brand"&gt;<font></font>
                        &lt;img width="50" height="50" src="images/logo.png" alt="logo" /&gt;<font></font>
                    &lt;/a&gt;<font></font>
                    &lt;ul className="nav navbar-nav"&gt;<font></font>
                        &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="/#about"&gt;About&lt;/a&gt;&lt;/li&gt;<font></font>
                    &lt;/ul&gt;<font></font>
                &lt;/div&gt;<font></font>
            &lt;/nav&gt;<font></font>
<font></font>
                );<font></font>
                }<font></font>
                });<font></font>
module.exports  = Header;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2032篇《Visual Studio Code中的JSX或HTML自动补全》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端MandyJinJin</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到昨天，React Babel的自动完成功能都可以正常工作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些答案均无济于事，所以我只是重新启动了计算机。</font><font style="vertical-align: inherit;">像魅力一样工作;）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2020年的简单答案</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，选择</font><font style="vertical-align: inherit;">窗口右下角</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件关联</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
</font></font><a href="https://i.stack.imgur.com/0VfTe.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/0VfTe.png" alt="在此处输入图片说明"></a></p>

<p>Second, select <em>Configure File Association for .js</em> from the menu that drops down at the top-center of the window. Change it to JavaScript React.
<a href="https://i.stack.imgur.com/GJPIX.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/GJPIX.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在从事各种项目，并且有一个很大的设置文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我检查了设置，发现此设置破坏了所有设置。</font></font></p>

<pre><code>"emmet.showExpandedAbbreviation": "inMarkupAndStylesheetFilesOnly"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我发表了评论。</font><font style="vertical-align: inherit;">而且一切都可以在React Apps中完美运行。</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小宇宙小哥</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于JSX文件。</font><font style="vertical-align: inherit;">让它不适用于JS。</font></font></p>

<pre><code>"files.associations": {<font></font>
"*.js": "javascript",<font></font>
"*.jsx": "javascriptreact",<font></font>
},<font></font>
"emmet.triggerExpansionOnTab": true,<font></font>
"emmet.includeLanguages": {<font></font>
    "javascriptreact": "javascriptreact"<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我扔了所有答案，这个配置对我有用。</font><font style="vertical-align: inherit;">必须包括语言以及添加语法配置文件。</font><font style="vertical-align: inherit;">没有触发器扩展就没有任何效果，但是现在我只按Tab键即可得到结果。</font></font></p>

<pre><code>"emmet.includeLanguages": {<font></font>
    "javascript": "javascriptreact"<font></font>
},<font></font>
"emmet.syntaxProfiles": {<font></font>
    "javascript": "jsx"<font></font>
},<font></font>
"emmet.triggerExpansionOnTab": true<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Vicky</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请仅执行以下两个步骤：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在检测到语言的VSCode底部，单击该</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/QlgUF.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一步</font></font></a></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击“配置基于Java语言的设置...”或执行任何操作</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/u2fel.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二步</font></font></a></p>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此代码粘贴在上面，并先用逗号“，”分开并保存。</font></font></li>
</ol>

<p><code>"emmet.includeLanguages": {
        "javascript": "javascriptreact"
 },
 "emmet.triggerExpansionOnTab": true</code></p>

<p><a href="https://i.stack.imgur.com/u2fel.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三步</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Harry泡芙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了两个步骤在JSX中获取自动关闭标签。 </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请按照上述Kehkashan Fazal的说明进行设置 </font></font><code>"emmet.includeLanguages"</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从VSCode下载自动关闭标签扩展名（</font></font><code>formulahendry.auto-close-tag</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您有了不错的自动关闭JSX标签！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只需按照以下步骤解决问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在VSCode的左下方，单击Javascript</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在顶部，您将看到一个列表，单击“配置基于Java语言的设置”</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些行添加到文件中：</font></font></p>

<pre><code>"emmet.triggerExpansionOnTab": true,<font></font>
 "emmet.includeLanguages": {<font></font>
   "javascript": "javascriptreact"<font></font>
}<font></font>
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想了解更多详细信息，可以检查</font></font><a href="https://code.visualstudio.com/docs/editor/emmet#_emmet-abbreviations-in-other-file-types" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony番长L</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用Visual Studio Code中的“自动关闭扩展名”。</font><font style="vertical-align: inherit;">ps。</font><font style="vertical-align: inherit;">安装扩展程序时，只有重新加载VS Code或重新打开VS Code或转到自动关闭标签扩展名并单击“重新加载”，自动完成功能才起作用。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动关闭标签</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展的</font><font style="vertical-align: inherit;">链接</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在用着 </font></font><code>VSCode</code> <code>(ver 1.27.2)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于我的经验，即使我正在与一起工作</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我</font></font><code>VSCode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">身上</font><font style="vertical-align: inherit;">检测到的语言</font><font style="vertical-align: inherit;">仍然是香草</font></font><code>JavaScript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">和emmet没用。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使它再次运行的方法之一是将</font></font><code>VSCode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检测到的语言</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为</font></font><code>JavaScript React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这仅适用于单个</font></font><code>JS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></li>
</ul>

<p><a href="https://i.stack.imgur.com/rSIrI.png" rel="noreferrer"><img src="https://i.stack.imgur.com/rSIrI.png" alt="vscode选项"></a></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要完全更改一次，您需要将其关联。  </font></font></li>
</ul>

<p><a href="https://i.stack.imgur.com/EZIu1.png" rel="noreferrer"><img src="https://i.stack.imgur.com/EZIu1.png" alt="二"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请点击 </font></font><code>Configure File Association for .js...</code></p>

<p><a href="https://i.stack.imgur.com/5SuNy.png" rel="noreferrer"><img src="https://i.stack.imgur.com/5SuNy.png" alt="三"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后选择</font></font><code>JSX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对于我来说，我已经做到了。</font></font></p>

<p><a href="https://i.stack.imgur.com/QRLKW.png" rel="noreferrer"><img src="https://i.stack.imgur.com/QRLKW.png" alt="四"></a></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于“工作场所设置”，如果没有一个适合您，则最后一次使用。</font><font style="vertical-align: inherit;">转到“仅偏好设置”将</font></font><code>ctrl + , (comma)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其打开。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入并搜索</font></font><code>emmet</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>Emmet</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后复制您要覆盖的设置。</font><font style="vertical-align: inherit;">就我而言：</font></font></p>

<pre><code>{<font></font>
    "emmet.triggerExpansionOnTab": true,<font></font>
    "emmet.includeLanguages": {<font></font>
        "javascript": "javascriptreact"<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：我并没有尝试</font></font><code>jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font><font style="vertical-align: inherit;">使用</font></font><code>javascriptreact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://i.stack.imgur.com/n8Im2.png" rel="noreferrer"><img src="https://i.stack.imgur.com/n8Im2.png" alt="设定"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我执行了第二步和第三步。</font><font style="vertical-align: inherit;">我现在可以做</font></font><code>Emmet</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEY</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些解决方案均无效...但是自动关闭标签扩展名有效！
</font></font><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2019年：React的直接答案</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的React项目中获得JSX / HTML自动完成功能的最简单的方法是将其添加到用户设置或工作空间设置（</font></font><code>&lt;project-path&gt;/.vscode/settings.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>      "emmet.includeLanguages": {<font></font>
        "javascript": "javascriptreact"<font></font>
      },<font></font>
      "emmet.triggerExpansionOnTab": true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能必须重新启动VS Code才能使更改生效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：如果您不为React.js项目进行此映射，那么KehkashanFazal的答案可能对您有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小小</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需</font><font style="vertical-align: inherit;">在屏幕右下角</font><font style="vertical-align: inherit;">选择适当的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语言模式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：将其设置为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript React。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人仍在努力解决此问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现简单地设置 </font></font></p>

<pre><code>"emmet.syntaxProfiles": {<font></font>
     "javascript": "jsx" <font></font>
 },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法启用HTML补全功能。</font><font style="vertical-align: inherit;">但是，使用：</font></font></p>

<pre><code>"emmet.includeLanguages": {<font></font>
    "javascript": "html"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://code.visualstudio.com/docs/getstarted/settings" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">emmet docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><code>"emmet.includeLanguages": {}</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用默认情况下不支持的语言的emmet缩写。</font><font style="vertical-align: inherit;">在此语言和emmet支持的语言之间添加映射。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  例如：</font></font><code>{"vue-html": "html", "javascript": "javascriptreact"}</code>  </p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
