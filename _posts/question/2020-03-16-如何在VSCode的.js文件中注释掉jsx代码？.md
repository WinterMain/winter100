---
layout: question
title:  如何在VSCode的.js文件中注释掉jsx代码？
date:   2020-03-16T01:56:48.000Z
description: 与webstorm不同，我无法在Visual Studio Code的.js文件中注释掉jsx代码。...
img: 
author: 蛋蛋卡卡西
category: question
answer: 13
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与webstorm不同，我无法在Visual Studio Code的.js文件中注释掉jsx代码。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1646篇《如何在VSCode的.js文件中注释掉jsx代码？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows：</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注释选定的行</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑&gt;切换行注释，</font></font><code>Ctrl + /</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>//</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在行前</font><font style="vertical-align: inherit;">添加</font></font><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出： </font></font><code>//Some Lines of Code here</code><br></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评论已选择块：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑&gt;切换块注释或Shift + Alt + A </font></font><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font><code>/*Some Code here*/</code><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
对“取消注释”执行相同的操作</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Linux，对于单行，请使用Ctrl + /。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于多行，请在VS代码中选择代码片段只需按Ctrl + Shift +A。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用。</font><font style="vertical-align: inherit;">快乐编码</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Green</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要注释JSX语法块，可以这样</font></font></p>

<pre><code>{<font></font>
  /* &lt;section&gt;<font></font>
     &lt;header&gt;&lt;h3&gt;Contact Form&lt;/h3&gt;&lt;/header&gt;<font></font>
     &lt;figure&gt;<font></font>
       &lt;Form /&gt;<font></font>
     &lt;/figure&gt;<font></font>
   &lt;/section&gt; */<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Stafan</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前在Visual Studio代码中，可以通过按组合键Shift + Alt + A并注释其生成的“ jsx”代码-{/ ** /}注释来完成。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在将文件语言转换为Typescript React（typescriptreact）之前，我遇到了同样的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要将其配置为所有.js文件的语言，请将其添加到settings.json（全局或在/.vscode/settings.json中的项目级别）。</font></font></p>

<pre><code>"files.associations": {<font></font>
    "*.js": "typescriptreact"<font></font>
  }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>cmd + /</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font><font style="vertical-align: inherit;">按</font><font style="vertical-align: inherit;">vs代码，则会执行单行注释，而这些注释不适用于JSX。</font><font style="vertical-align: inherit;">只需安装下面的vs代码扩展，就可以了。</font></font></p>

<p><a href="https://github.com/michaelgmcd/vscode-language-babel" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vscode-语言-babel</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React中，“ {}”允许我们使用JavaScript表达式，因此我们可以注释一下在JavaScript中的处理方式。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font></p>

<pre><code>{/* multi <font></font>
line <font></font>
comment <font></font>
*/}<font></font>
<font></font>
{// single line comment<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键盘命令...  </font></font></p>

<p><code>Ctrl + /</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-Windows和Linux </font></font><br>
<code>Cmd  + /</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-MacOS  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...现在，通过</font></font><code>{/* */}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在选定的行周围</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">可以按预期运行单行代码和块代码</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">在</font><a href="https://code.visualstudio.com/insiders" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Visual Studio Code的</font></a><font style="vertical-align: inherit;">最新</font><a href="https://code.visualstudio.com/insiders" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Insiders版本中</font></a></font><a href="https://github.com/Microsoft/vscode/issues/6461" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已得到修复</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">并将使其成为下一个完整版本。</font></font><a href="https://code.visualstudio.com/insiders" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙武藏</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您是在Mac或Mac上运行，则</font><font style="vertical-align: inherit;">在</font></font><code>Visual Studio code</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hit中</font></font><code>Cmd + /</code><font style="vertical-align: inherit;"></font></p>

<pre><code>{/* Your Code */}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">朔风</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试禁用所有插件，因为它们可以更改编辑器的行为。</font><font style="vertical-align: inherit;">例如，如果使用</font></font><a href="https://github.com/dzannotti/vscode-babel" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel ES6 / ES7</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件，则编辑</font><a href="https://github.com/dzannotti/vscode-babel" rel="noreferrer"><font style="vertical-align: inherit;">器用</font></a><font style="vertical-align: inherit;">而不是</font><font style="vertical-align: inherit;">注释</font></font><code>.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您会在</font><a href="https://github.com/dzannotti/vscode-babel/issues/19" rel="noreferrer"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">看到问题</font><font style="vertical-align: inherit;">。</font></font><code>//</code><font style="vertical-align: inherit;"></font><code>{/*</code><font style="vertical-align: inherit;"></font><a href="https://github.com/dzannotti/vscode-babel/issues/19" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi西里</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过{/ ** /}注释掉JSX</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范例：</font></font></p>

<pre><code>render() {<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;Component1 /&gt;<font></font>
      {/* &lt;Component2 /&gt; */}<font></font>
    &lt;/div&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将Component2注释掉</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天神乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>Babel JavaScript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在VS代码中</font><font style="vertical-align: inherit;">搜索</font><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel</font></font></a></p>

<p><a href="https://i.stack.imgur.com/Dfxl5.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Dfxl5.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装并用</font></font><code>command + /</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注释jsx</font></font><code>{ /* */ }</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子L</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{/ *这有效，但只有一行* /}</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
