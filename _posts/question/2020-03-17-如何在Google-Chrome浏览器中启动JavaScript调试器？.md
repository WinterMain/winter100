---
layout: question
title:  如何在Google Chrome浏览器中启动JavaScript调试器？
date:   2020-03-17T03:45:02.000Z
description: 使用Google Chrome浏览器时，我想调试一些JavaScript代码。我怎样才能做到这一点？...
img: 
author: 乐A
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Google Chrome浏览器时，我想调试一些JavaScript代码。</font><font style="vertical-align: inherit;">我怎样才能做到这一点？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1855篇《如何在Google Chrome浏览器中启动JavaScript调试器？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome的控制台中，您可以执行</font></font><code>console.log(data_to_be_displayed)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil西门</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是您看到的工具</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按下 </font></font><code>F12</code> </p>

<p><a href="https://i.stack.imgur.com/g4ZKf.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/g4ZKf.png" alt="开发者工具"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪卡卡西西里</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">F12</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
打开开发人员面板</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CTRL + SHIFT + C</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
将打开“悬停检查”工具，当您悬停时它将突出显示元素，您可以单击以在“元素”选项卡中显示它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CTRL + SHIFT + I</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
打开带有控制台选项卡的开发人员面板</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击&gt;检查</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
右键单击任何元素，然后单击“检查”以在“开发人员”面板的“元素”选项卡中将其选中。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ESC</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
如果右键单击并检查元素或类似元素，然后在“元素”选项卡中查看DOM，则可以按</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ESC</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下切换控制台，这是同时使用两者的一种好方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小胖乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，谷歌浏览器引入了新功能。</font><font style="vertical-align: inherit;">通过使用此功能，您可以在chrome浏览器中编辑代码。</font><font style="vertical-align: inherit;">（永久更改代码位置）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，请按F12-&gt;“源”选项卡-（右侧）-&gt;“文件系统”，请选择您的代码位置。</font><font style="vertical-align: inherit;">然后chrome浏览器会征求您的许可，然后该代码将以绿色下沉。</font><font style="vertical-align: inherit;">并且您可以修改您的代码，它也会反映在您的代码位置上（这意味着它将永久更改）  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Harry神无</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Control</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>I</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开开发人员工具窗口。</font><font style="vertical-align: inherit;">从左下角的第二个图像（如下所示）将为您打开/隐藏控制台：</font></font></p>

<p><a href="https://i.stack.imgur.com/ZQ4AG.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/ZQ4AG.png" alt="显示控制台"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin卡卡西小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要打开专用的“控制台”面板，请执行以下任一操作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用键盘快捷键

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows和Linux上：</font></font><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>J</kbd></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac上：</font></font><kbd>Cmd</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+</font></font><kbd>J</kbd></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择Chrome菜单图标，菜单-&gt; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多工具</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript控制台</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">或者，如果Chrome开发者工具已经打开，</font></font><code>press</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请点击“控制台”标签。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考</font></font><a href="https://developer.chrome.com/devtools" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门GO村村</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现进入javascript调试器的最有效方法是运行以下命令：</font></font></p>

<p><code>chrome://inspect</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy十三逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Mac用户，请转到Google Chrome-&gt;菜单</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">View-</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript控制台</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><img src="https://i.stack.imgur.com/6pidj.png" alt="屏幕截图"></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，您可以找到访问开发人员工具的快捷方式。</font></font></p>

<p><a href="https://developer.chrome.com/devtools/docs/shortcuts" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.chrome.com/devtools/docs/shortcuts</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Pro梅</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><kbd>F12</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome浏览器中</font><font style="vertical-align: inherit;">按</font><font style="vertical-align: inherit;">功能键以启动JavaScript调试器，然后单击“脚本”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择顶部的JavaScript文件，并将断点放置到调试器以获取JavaScript代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将其添加到您的源中：</font></font></p>

<pre><code>debugger;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于大多数（如果不是全部）浏览器。</font><font style="vertical-align: inherit;">只需将其放置在代码中的某个位置，它将像断点一样工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Gil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows系统：</font></font><kbd>CTRL</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><kbd>SHIFT</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><kbd>J</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或F12</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果：</font></font><kbd>⌥</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><kbd>⌘</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font><kbd>J</kbd></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以通过扳手菜单（工具&gt; JavaScript控制台）使用：</font></font></p>

<p><img src="https://i.stack.imgur.com/Ktv4E.png" alt="JavaScript控制台菜单"></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac上的Chrome 8.0.552中，您可以在菜单“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript控制台</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...” </font><font style="vertical-align: inherit;">下找到它，</font><font style="vertical-align: inherit;">也可以使用</font></font><kbd>Alt</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>CMD</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>J</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows和Linux：</font></font></p>

<p><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>I</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键打开开发人员工具</font></font></p>

<p><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>J</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开开发人员工具并将焦点移到控制台。</font></font></p>

<p><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>C</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切换检查元素模式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果电脑：</font></font></p>

<p><kbd>⌥</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>⌘</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>I</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键打开开发人员工具</font></font></p>

<p><kbd>⌥</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>⌘</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>J</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开开发人员工具并将焦点移到控制台。</font></font></p>

<p><kbd>⌥</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>⌘</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>C</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切换检查元素模式。</font></font></p>

<p><a href="https://developer.chrome.com/devtools" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p>

<p><a href="https://developer.chrome.com/devtools/docs/shortcuts" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他捷径</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Gil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>J</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开开发人员工具。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
