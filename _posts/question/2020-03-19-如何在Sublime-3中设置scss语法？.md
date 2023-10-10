---
layout: question
title:  如何在Sublime 3中设置scss语法？
date:   2020-03-19T04:41:51.000Z
description: 我正在使用Sublime 3编辑器。当我打开SCSS文件时，它显示许多红色字符，因为它错误地识别了语法。当我按CTRL+ Shift+ P并键入sass或...
img: 
author: 乐米亚
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Sublime 3编辑器。</font><font style="vertical-align: inherit;">当我打开SCSS文件时，它显示许多红色字符，因为它错误地识别了语法。</font><font style="vertical-align: inherit;">当我按</font></font><kbd>CTRL</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>P</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并键入</font></font><code>sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有选择。</font><font style="vertical-align: inherit;">我不得不将语法设置为CSS。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sublime 3中是否可以将语法设置为SCSS？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2377篇《如何在Sublime 3中设置scss语法？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人小次郎</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您安装了Sass扩展名（同时支持SASS和SCSS），并且希望所有</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件都以新的SCSS语法突出显示而不是旧的SASS打开，则请执行以下操作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视图-&gt;语法-&gt;以当前扩展名全部打开...</font></font></em></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass-&gt; SCSS</font></font></em></strong></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图片来源：</font><a href="http://joncaveman.com/2015/08/11/sublime-text-3-default-syntax-highlighting-for-file-types/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://joncaveman.com/2015/08/11/sublime-text-3-default-syntax-highlighting-for-file-types/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//joncaveman.com/2015/08/11/sublime-text-3-default-syntax-highlighting-for-file-types/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一斯丁</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Submile文本中</font><font style="vertical-align: inherit;">按</font></font><kbd>CTRL</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>P</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，将弹出以下窗口</font></font></p>

<p><a href="https://i.stack.imgur.com/wmMW0.png" rel="noreferrer"><img src="https://i.stack.imgur.com/wmMW0.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Package Control：Install Package。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将</font><font style="vertical-align: inherit;">在搜索框中</font><font style="vertical-align: inherit;">打开下面的popup.type </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。第一个建议是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（下图中未突出显示），然后单击它。</font></font></p>

<p><a href="https://i.stack.imgur.com/VIMjx.png" rel="noreferrer"><img src="https://i.stack.imgur.com/VIMjx.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次按</font></font><kbd>CTRL</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>P</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索SCSS，然后单击“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置语法：SCSS”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它它的scss文件将相应地着色</font></font></p>

<p><a href="https://i.stack.imgur.com/yFiB0.png" rel="noreferrer"><img src="https://i.stack.imgur.com/yFiB0.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
